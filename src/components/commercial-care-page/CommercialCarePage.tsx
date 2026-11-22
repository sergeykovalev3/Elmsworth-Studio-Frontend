import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './CommercialCarePage.css'

const questions = [
  {
    title: 'A crew that knows the site',
    body: 'The same people come back. They already know the entries, the beds, and what has to be clear before the doors open.',
  },
  {
    title: 'Fitted to this property',
    body: 'The visit list follows how the business uses the grounds, not a package written for a house.',
  },
  {
    title: 'Work that holds up',
    body: 'Paving, planting, water, and light are kept so the property still looks considered on an ordinary weekday.',
  },
  {
    title: 'Plain dealing',
    body: 'You hear what was done and what is next. The schedule is something the site can live with.',
  },
  {
    title: 'On time',
    body: 'The visits land when the grounds need them, including snow, so the entrance stays open.',
  },
]

const offers = [
  {
    title: 'Commercial construction',
    text: 'Paving, planting, and the outdoor rooms a business needs, built so they can be kept.',
    image: '/maintenance/commercial/1.png',
    icon: '/commercial/icon-build.svg',
  },
  {
    title: 'Grounds maintenance',
    text: 'Lawns, beds, and the edges kept in order through the week, not only before a visit.',
    image: '/maintenance/commercial/2.jpg',
    icon: '/commercial/icon-grounds.svg',
  },
  {
    title: 'Irrigation and water',
    text: 'Water where the planting needs it, checked so a dry bed does not wait for the next season.',
    image: '/maintenance/commercial/3.jpg',
    icon: '/commercial/icon-water.svg',
  },
  {
    title: 'Outdoor lighting',
    text: 'Paths and entries kept readable after dark, with lamps and timers looked after.',
    image: '/maintenance/commercial/4.png',
    icon: '/commercial/icon-light.svg',
  },
  {
    title: 'Snow and ice',
    text: 'Walks, drives, and the door kept clear when the weather closes them.',
    icon: '/commercial/icon-snow.svg',
  },
]

export function CommercialCarePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/commercial/cover.jpg"
        wash="maintenance"
        title="Commercial"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/commercial/side.jpg"
        imageAlt="Planted commercial grounds"
        title="Commercial"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio builds and keeps the grounds in front of a
          business. The entrance, the beds, and the paths should look
          considered on an ordinary Tuesday, not only on the day of a tour.
        </p>
        <p>
          Construction, weekly care, water, light, and winter access stay
          with one studio, on a schedule the site can live with.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the property stays with the studio"
        image="/maintenance/commercial/faq.jpg"
        items={questions}
      />

      <PhotoCards
        title="Construction and grounds care"
        items={offers}
        iconFirst
      />

      <img className="cc-bottom" src="/maintenance/commercial/bottom.png" alt="" />

      <HomeConsult />

      <CloseBand title="Grounds for the business">
        A property that looks finished and stays open: built, planted, and kept through the year.
      </CloseBand>
    </main>
  )
}
