import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import type { ProjectRow } from '../project-gallery/ProjectGallery'
import { SiteLink } from '../site-header/SiteLink'
import './HomeProjects.css'

const shown = 9

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {dir === 'prev' ? (
        <path
          fill="currentColor"
          d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        />
      )}
    </svg>
  )
}

export function HomeProjects() {
  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)
  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectRow[]> => {
      const res = await fetch('/api/projects')
      if (!res.ok) throw new Error('Failed to load projects')
      return res.json()
    },
  })
  const slides = (projects.data ?? []).filter((project) => project.published).slice(0, shown)
  const maxIndex = Math.max(0, slides.length - perView)

  useEffect(() => {
    const sync = () => {
      const width = window.innerWidth
      const next = width <= 767 ? 1 : width <= 991 ? 2 : 3
      setPerView(next)
      setIndex((current) => Math.min(current, Math.max(0, slides.length - next)))
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [slides.length])

  return (
    <section className="home-projects">
      <div className="home-projects-top">
        <div className="home-projects-heading">
          <span className="home-projects-wash">Projects</span>
          <h2 className="home-projects-title">Projects</h2>
        </div>
        <div className="home-projects-arrows">
          <button
            type="button"
            className="home-projects-arrow"
            aria-label="Previous projects"
            disabled={index === 0}
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            className="home-projects-arrow"
            aria-label="Next projects"
            disabled={index >= maxIndex}
            onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
          >
            <Chevron dir="next" />
          </button>
        </div>
      </div>
      <div className="home-projects-viewport">
        <div
          className="home-projects-track"
          style={{
            transform: `translateX(calc(-${index} * (100% / ${perView})))`,
          }}
        >
          {slides.map((project) => (
            <SiteLink key={project.id} to={`/projects/${project.id}`} className="home-projects-slide">
              <span className="home-projects-frame">
                <img src={project.cover} alt="" />
              </span>
            </SiteLink>
          ))}
        </div>
      </div>
    </section>
  )
}
