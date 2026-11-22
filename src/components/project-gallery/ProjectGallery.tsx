import { useQuery } from '@tanstack/react-query'
import { CoverBlock } from '../cover-block/CoverBlock'
import { HomeConsult } from '../home-consult/HomeConsult'
import { CloseBand } from '../close-band/CloseBand'
import { SiteLink } from '../site-header/SiteLink'
import './ProjectGallery.css'

export type ProjectRow = {
  id: string
  title: string
  cover: string
  photos: string[]
  categories: string[]
  body: string
  video: string
  published: boolean
}

export const portfolioCategories: Record<string, string> = {
  commercial: 'Commercial',
  lighting: 'Lighting',
  'pools-water-features': 'Pools & Water Features',
  hardscapes: 'Hardscapes',
  landscapes: 'Landscapes',
}

export function ProjectGallery({ category }: { category?: string }) {
  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectRow[]> => {
      const res = await fetch('/api/projects')
      if (!res.ok) throw new Error('Failed to load projects')
      return res.json()
    },
  })

  const label = category ? portfolioCategories[category] : undefined
  const rows =
    projects.data?.filter((project) =>
      label ? project.categories.some((item) => item.toLowerCase() === label.toLowerCase()) : true,
    ) ?? []

  return (
    <main>
      <CoverBlock
        image="/design-build/project-2.jpg"
        wash="projects"
        title={label ?? 'Project Gallery'}
      />
      <section className="project-gallery">
        {projects.isLoading ? <p>Loading…</p> : null}
        {projects.isError ? <p>Projects could not be loaded.</p> : null}
        {projects.isSuccess && rows.length === 0 ? <p>No projects in this gallery yet.</p> : null}
        <div className="project-gallery-grid">
          {rows.map((project) => (
            <SiteLink key={project.id} to={`/projects/${project.id}`} className="project-tile">
              <img src={project.cover} alt="" />
              <span className="project-tile-plus" aria-hidden>
                +
              </span>
              <span className="project-tile-title">{project.title}</span>
            </SiteLink>
          ))}
        </div>
      </section>
      <HomeConsult />
      <CloseBand title="Learn more">
        Walk a finished garden with the studio, then talk through what the same care could do on your grounds.
      </CloseBand>
    </main>
  )
}
