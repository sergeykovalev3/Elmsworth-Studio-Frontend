import { useEffect, useState } from 'react'
import { brandFull, brandName } from '../../brand'
import { SiteLink } from '../site-header/SiteLink'
import { heroSlides } from './slides'
import './HomeHero.css'

const loopSlides = [...heroSlides, heroSlides[0]]

export function HomeHero() {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      return
    }

    const timer = window.setInterval(() => {
      setAnimate(true)
      setIndex((current) => current + 1)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="home-hero" aria-label="Featured landscapes">
      <div className="home-hero-slider">
        <div
          className={
            animate ? 'home-hero-track' : 'home-hero-track is-instant'
          }
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={() => {
            if (index < heroSlides.length) {
              return
            }
            setAnimate(false)
            setIndex(0)
          }}
        >
          {loopSlides.map((slide, slideIndex) => (
            <div className="home-hero-slide" key={`${slide.src}-${slideIndex}`}>
              <img
                className="home-hero-image"
                src={slide.src}
                alt={slide.alt}
                fetchPriority={slideIndex === 0 ? 'high' : 'low'}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="home-hero-copy">
        <div className="home-hero-copy-inner">
          <h1 className="home-hero-title">
            Grounds with presence, grown by{' '}
            <strong className="home-hero-accent">{brandFull}</strong>
          </h1>
          <p className="home-hero-text">
            {brandName} builds outdoor rooms that keep their shape through every
            season — quiet, lasting, and meant to be lived in.
          </p>
          <SiteLink to="/contact" className="home-hero-button">
            <span>Contact Us</span>
            <img
              className="home-hero-chevron"
              src="/icons/chevron-right.svg"
              alt=""
            />
          </SiteLink>
        </div>
      </div>
    </section>
  )
}
