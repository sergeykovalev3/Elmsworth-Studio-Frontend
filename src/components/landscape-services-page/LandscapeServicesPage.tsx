import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './LandscapeServicesPage.css'

const questions = [
  {
    title: 'Protect the work',
    body: 'Repairs and regular care, so the grounds keep working years after they were built.',
  },
  {
    title: 'Expert care',
    body: 'Garden programs, lighting, irrigation, and winter work, done by people who know the plants.',
  },
  {
    title: 'Fitted to the site',
    body: 'The visit plan follows this property, not a package written for someone else.',
  },
  {
    title: 'The same studio',
    body: 'Care stays with the people who already know how the grounds were drawn.',
  },
]

const offers = [
  {
    title: 'Garden maintenance',
    text: 'Seasonal planting and perennial care, so the beds hold through the year.',
    image: '/maintenance/svc-1.jpg',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'Irrigation and water',
    text: 'Water where the planting needs it, and less where it does not.',
    image: '/maintenance/svc-2.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Water feature care',
    text: 'Fountains and basins kept clear, running, and part of the garden.',
    image: '/maintenance/svc-3.jpg',
    icon: '/pools/icon-fountains.svg',
  },
  {
    title: 'Outdoor lighting',
    text: 'Lights checked so evenings stay safe and the paths stay readable.',
    image: '/maintenance/svc-4.jpg',
    icon: '/lighting/icon-care.svg',
  },
  {
    title: 'Turf and ornamentals',
    text: 'Lawn care set with the ornamental beds, so the whole ground plane stays even.',
    icon: '/design-build/icon-shield.svg',
  },
]

export function LandscapeServicesPage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/cover.png"
        wash="maintenance"
        title="Landscape maintenance services"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/side.png"
        imageAlt="Maintained planting along a house"
        title="Landscape maintenance services"
        action={{ label: 'Contact Us', to: '/contact' }}
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

      <FaqBlock
        title="Care written for this property"
        image="/maintenance/side.png"
        items={questions}
      />

      <PhotoCards title="What the visits cover" items={offers} iconFirst />

      <img className="lms-bottom" src="/maintenance/bottom.webp" alt="" />

      <HomeConsult />

      <CloseBand title="The grounds, kept">
        We do not only cut and leave. The visits are there so the place stays calm, planted, and ready to use.
      </CloseBand>
    </main>
  )
}
