import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './MaintenancePage.css'

const reasons = [
  {
    title: 'Protect the work',
    text: 'Repairs and regular care, so the grounds keep working years after they were built.',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'Expert care',
    text: 'Garden programs, lighting, irrigation, and winter work, done by people who know the plants.',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'Fitted to the site',
    text: 'The visit plan follows this property, not a package written for someone else.',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'The same studio',
    text: 'Care stays with the people who already know how the grounds were drawn.',
    icon: '/design-build/icon-star.svg',
  },
]

const services = [
  {
    title: 'Garden maintenance',
    text: 'Seasonal planting and perennial care, so the beds hold through the year.',
    image: '/maintenance/svc-1.jpg',
    to: '/maintenance/garden-maintenance',
  },
  {
    title: 'Irrigation and water',
    text: 'Water where the planting needs it, and less where it does not.',
    image: '/maintenance/svc-2.jpg',
    to: '/maintenance/irrigation-water-management',
  },
  {
    title: 'Water feature care',
    text: 'Fountains and basins kept clear, running, and part of the garden.',
    image: '/maintenance/svc-3.jpg',
    to: '/maintenance/water-feature-care',
  },
  {
    title: 'Outdoor lighting',
    text: 'Lights checked so evenings stay safe and the paths stay readable.',
    image: '/maintenance/svc-4.jpg',
    to: '/maintenance/outdoor-lighting-maintenance',
  },
  {
    image: '/maintenance/mid.png',
  },
]

export function MaintenancePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/cover.png"
        title={
          <>
            Landscape maintenance
            <br />
            services
          </>
        }
        subtitle="Visits through the year, so the grounds stay planted and ready to use."
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/side.png"
        imageAlt="Maintained planting along a house"
        title="Landscape maintenance services"
        action={{ label: 'Learn More', to: '/maintenance/landscape-maintenance-services' }}
      >
        <p>
          Elmsworth Studio keeps grounds that were built to be used. Visits
          follow the year, so the planting, the water, and the edges still
          match the plan.
        </p>
        <p>
          Beds, irrigation, lighting, and the water features stay on one
          schedule, with the same crew that already knows the property.
        </p>
      </IntroSplit>

      <section className="care-reasons">
        <h2>Care that keeps the grounds in shape</h2>
        <div>
          {reasons.map((item) => (
            <article key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PhotoCards title="Tend the outdoor rooms" items={services} />

      <img className="care-bottom" src="/maintenance/bottom.webp" alt="" />

      <HomeConsult />

      <CloseBand title="The grounds, kept">
        We do not only cut and leave. The visits are there so the place stays calm, planted, and ready to use.
      </CloseBand>
    </main>
  )
}
