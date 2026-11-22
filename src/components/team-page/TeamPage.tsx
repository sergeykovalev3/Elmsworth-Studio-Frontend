import { useEffect, useState } from 'react'
import { CoverBlock } from '../cover-block/CoverBlock'
import { usePopup } from '../popup/Popup'
import { SiteLink } from '../site-header/SiteLink'
import { HomeConsult } from '../home-consult/HomeConsult'
import { HomeTestimonials } from '../home-testimonials/HomeTestimonials'
import { groups, slides, type Person } from './team'
import './TeamPage.css'

const partners = [
  'Millvale Green Fair',
  'Elm Street Youth League',
  'Harbor Day School garden',
  'North Yard Arts Fund',
  'Creek Week cleanup',
  'Studio crew scholarship',
]

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d={
          dir === 'prev'
            ? 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
            : 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      />
    </svg>
  )
}

export function TeamPage() {
  const [perView, setPerView] = useState(2)
  const [index, setIndex] = useState(0)
  const popup = usePopup()
  const max = Math.max(0, slides.length - perView)

  useEffect(() => {
    const sync = () => setPerView(window.innerWidth <= 767 ? 1 : 2)
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return (
    <main>
      <CoverBlock
        image="/about/team-cover.jpeg"
        wash="team"
        title="team and community"
        align="center"
      />

      <section className="team-hire">
        <div className="team-hire-inner">
          <h2>Join the crew</h2>
          <p>
            We are hiring a design lead who can walk a site, draw the plan,
            and stay with the client through the build.
          </p>
          <p>Send a note and tell us the kind of work you do.</p>
          <SiteLink to="/contact" className="team-hire-button">
            Send a note
          </SiteLink>
        </div>
      </section>

      <section className="team-community">
        <img src="/about/community.jpg" alt="Crew and neighbors outdoors" />
        <div>
          <h2>Our Community</h2>
          <p>We support the town around the studio.</p>
          <p>
            The people nearby are the base of the work. Elmsworth backs these
            local groups:
          </p>
          <ul>
            {partners.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="team-slider">
        <div className="team-slider-bar">
          <button
            type="button"
            aria-label="Previous photo"
            disabled={index === 0}
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            disabled={index >= max}
            onClick={() => setIndex((current) => Math.min(max, current + 1))}
          >
            <Chevron dir="next" />
          </button>
        </div>
        <div className="team-slider-view">
          <div
            className="team-slider-track"
            style={{
              transform: `translateX(calc(${index} * (var(--slide) + var(--gap)) * -1))`,
            }}
          >
            {slides.map((src, slideIndex) => (
              <div
                key={src}
                className={
                  slideIndex >= index && slideIndex < index + perView
                    ? 'team-slide is-active'
                    : 'team-slide'
                }
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-roster">
        <div className="team-roster-heading">
          <span>professionals</span>
          <h2>our team</h2>
        </div>
        <p className="team-roster-lead">
          Meet the people who draw the plans and build the outdoor rooms.
        </p>
        {groups.map((group) => (
          <div
            key={group.title}
            className={group.title === 'Sales Team' ? 'team-sales' : undefined}
          >
            <h3 className="team-group-title">{group.title}</h3>
            <div className="team-grid">
              {group.people.map((person) => (
                <button
                  key={person.name}
                  type="button"
                  className="team-card"
                  onClick={() =>
                    popup.open({
                      label: person.name,
                      content: <PersonBio person={person} />,
                    })
                  }
                >
                  <img src={person.photo} alt="" />
                  <span className="team-card-shade">
                    <span>
                      <strong>{person.name}</strong>
                      <em>{person.role}</em>
                    </span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                      />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <HomeTestimonials />
      <HomeConsult />
    </main>
  )
}

function PersonBio({ person }: { person: Person }) {
  return (
    <article className="person-bio">
      <img src={person.photo} alt="" />
      <div>
        <h3>{person.name}</h3>
        <p className="person-bio-role">{person.role}</p>
        {person.bio.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  )
}
