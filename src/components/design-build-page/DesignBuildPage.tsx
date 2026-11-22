import { useQuery } from '@tanstack/react-query'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { SiteLink } from '../site-header/SiteLink'
import { HomeTestimonials } from '../home-testimonials/HomeTestimonials'
import type { ProjectRow } from '../project-gallery/ProjectGallery'
import './DesignBuildPage.css'

const reasons = [
  {
    icon: '/design-build/icon-star.svg',
    title: 'Rated by the people who live with the work',
  },
  {
    icon: '/design-build/icon-soil.svg',
    title: 'Years of drawing and building the same grounds',
  },
  {
    icon: '/design-build/icon-shield.svg',
    title: 'Licensed, insured, and on the job ourselves',
  },
  {
    icon: '/design-build/icon-outdoor.svg',
    title: 'A small studio, stayed with from the first walk',
  },
]

const specialties = [
  'Pools shaped to the house',
  'Outdoor kitchens and covered rooms',
  'Stone terraces and walks',
  'Lighting drawn with the planting',
  'Gardens that belong in this climate',
  'Whole properties, not a single patio',
]

const steps = [
  ['Private consultation', 'We walk the site and listen for how you actually live outside.'],
  ['The design', 'One plan for rooms, materials, light, and planting.'],
  ['A clear budget', 'Scope and cost written down before anything is built.'],
  ['The build', 'The same studio runs the crews and the schedule.'],
  ['Care after', 'We stay on through the seasons so the grounds keep their shape.'],
]

const visions = [
  'Evenings by the water with the lights already planned',
  'A kitchen you can cook in, not just look at',
  'A fire that holds a small group',
  'A garden that feels private',
  'A property that reads as one place',
]

export function DesignBuildPage() {
  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectRow[]> => {
      const res = await fetch('/api/projects')
      if (!res.ok) throw new Error('Failed to load projects')
      return res.json()
    },
  })
  const recent = (projects.data ?? []).filter((project) => project.published).slice(0, 3)

  return (
    <main>
      <CoverBlock
        image="/design-build/cover.jpg"
        title={
          <>
            Landscape design and build,
            <br />
            from one studio
          </>
        }
        subtitle="Pools, outdoor kitchens, and gardens made to be lived in."
        action={{ label: 'Get Started', to: '/contact' }}
      />

      <IntroSplit
        image="/design-build/side.png"
        imageAlt="Finished terrace and planting"
        action={{ label: 'Schedule a design visit', to: '/contact' }}
        note="We take a limited number of design-build projects each season, so the work can stay careful."
      >
        <p>
                    A house deserves more than a few beds along the foundation. It
                    deserves grounds that were drawn on purpose, built carefully, and
                    looked after by the same people.
                  </p>
                  <p>
                    Elmsworth Studio has spent years making outdoor rooms for people
                    who want the work done once, and done properly.
                  </p>
      </IntroSplit>

      <section className="db-why">
        <div className="db-why-inner">
          <h2>Why clients stay with the studio</h2>
          <p>Millvale and the towns we can reach in a day.</p>
          <div>
            {reasons.map((item) => (
              <article key={item.title}>
                <img src={item.icon} alt="" />
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="db-split db-split-reverse">
        <img src="/design-build/project-1.jpg" alt="Stone and water on a finished site" />
        <div>
          <h2>Most crews pour a patio. We draw the whole place.</h2>
          <p>Elmsworth Studio designs and builds:</p>
          <ul>
            {specialties.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            From the first sketch through construction, one team holds the
            details. You are not left managing contractors.
          </p>
          <SiteLink to="/contact" className="db-button">
            <span>Let&apos;s get started</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
      </section>

      <section className="db-process">
        <img src="/design-build/project-3.jpg" alt="Crew on a finished terrace" />
        <div>
          <h2>How a design-build project runs</h2>
          <p>Your time stays yours. The sequence is plain.</p>
          <ol>
            {steps.map(([title, body], index) => (
              <li key={title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="db-vision">
        <div>
          <h2>Rooms for company, quiet, and the years ahead</h2>
          <p>People come to us wanting things like these:</p>
          <ul>
            {visions.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            The result should feel like part of the house: useful, calm, and
            still right in ten years.
          </p>
          <SiteLink to="/contact" className="db-button">
            <span>Bring the idea in</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
        <img src="/design-build/project-2.jpg" alt="Pool garden at dusk" />
      </section>

      <section className="db-projects">
        <h2>Work you can walk</h2>
        <p>Recent design-build projects from the studio.</p>
        <div>
          {recent.map((project) => (
            <SiteLink key={project.id} to={`/projects/${project.id}`} className="db-project">
              <img src={project.cover} alt="" />
              <h3>{project.title}</h3>
            </SiteLink>
          ))}
        </div>
      </section>

      <HomeTestimonials />

      <img className="db-bleed" src="/design-build/bottom.png" alt="" />
      <section className="db-begin">
        <h2>Begin your outdoor transformation</h2>
        <p>
          A pool, an outdoor kitchen, or a whole property starts with a
          private visit. We take a limited number of large design-build
          projects each season, so the work stays careful from the first
          drawing to the last plant.
        </p>
        <SiteLink to="/contact" className="db-button">
          <span>Schedule a design visit</span>
          <img src="/icons/chevron-right.svg" alt="" />
        </SiteLink>
      </section>
    </main>
  )
}
