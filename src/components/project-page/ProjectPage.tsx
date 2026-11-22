import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { CoverBlock } from '../cover-block/CoverBlock'
import { HomeConsult } from '../home-consult/HomeConsult'
import { usePopup } from '../popup/Popup'
import type { ProjectRow } from '../project-gallery/ProjectGallery'
import './ProjectPage.css'

type Block =
  | { type: 'text'; html: string }
  | { type: 'photos'; images: string[] }

function youtubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
  return match?.[1] ?? ''
}

function readBlocks(body: string): Block[] {
  try {
    const parsed = JSON.parse(body) as Block[]
    if (Array.isArray(parsed)) return parsed
  } catch {
    /* plain text from an older project */
  }
  return body ? [{ type: 'text', html: `<p>${body}</p>` }] : []
}

export function ProjectPage({ projectId }: { projectId: string }) {
  const [playing, setPlaying] = useState(false)
  const popup = usePopup()
  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectRow[]> => {
      const res = await fetch('/api/projects')
      if (!res.ok) throw new Error('Failed to load projects')
      return res.json()
    },
  })

  const project = projects.data?.find((item) => item.id === projectId)
  const film = youtubeId(project?.video ?? '')
  const blocks = readBlocks(project?.body ?? '')

  if (projects.isLoading) {
    return (
      <main className="page-stub">
        <p>Loading…</p>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="page-stub">
        <h1>Project</h1>
        <p>This project is not on the site.</p>
      </main>
    )
  }

  return (
    <main>
      <CoverBlock image={project.cover} wash="project" title={project.title} />
      {film ? (
        <section className="project-film">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${film}?autoplay=1&rel=0`}
              title={project.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button type="button" className="project-film-poster" onClick={() => setPlaying(true)}>
              <img src={`https://i.ytimg.com/vi/${film}/hqdefault.jpg`} alt="" />
              <span>Play</span>
            </button>
          )}
        </section>
      ) : null}
      <div className="project-flow">
        {blocks.map((block, index) =>
          block.type === 'text' ? (
            <div key={index} className="project-story" dangerouslySetInnerHTML={{ __html: block.html }} />
          ) : (
            <section key={index} className="project-photos">
              {block.images.map((src) => (
                <button
                  key={src}
                  type="button"
                  className="project-photo"
                  onClick={() =>
                    popup.open({
                      label: project.title,
                      plain: true,
                      content: <img className="project-popup-photo" src={src} alt="" />,
                    })
                  }
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </section>
          ),
        )}
      </div>
      <HomeConsult />
    </main>
  )
}
