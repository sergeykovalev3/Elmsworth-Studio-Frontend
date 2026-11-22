import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './IrrigationPage.css'

const questions = [
  {
    title: 'The same crew',
    body: 'The people who set the water come back to check it. They already know the zones, the heads, and where the lawn drinks too much.',
  },
  {
    title: 'Fitted to this site',
    body: 'The schedule follows this soil, this shade, and the planting. It is not a timer written for another yard.',
  },
  {
    title: 'A sequence you can see',
    body: 'Start-up, midseason checks, and winterizing happen in an order the system can live with.',
  },
]

const offers = [
  {
    title: 'Irrigation installation',
    text: 'A new system drawn for the lawn and the beds, so water lands where the planting needs it.',
    image: '/maintenance/irrigation/1.jpg',
    icon: '/commercial/icon-water.svg',
  },
  {
    title: 'Maintenance and service',
    text: 'Heads, lines, and the controller checked so a dry patch or a puddle gets fixed before it spreads.',
    image: '/maintenance/irrigation/2.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Seasonal adjustments',
    text: 'The schedule changes with the year: more in the heat, less as the days shorten, off before a freeze.',
    image: '/maintenance/irrigation/3.jpg',
    icon: '/seasonal/icon-flowers.svg',
  },
]

export function IrrigationPage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/irrigation/cover.jpg"
        wash="maintenance"
        title="Irrigation and water management"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/irrigation/side.jpg"
        imageAlt="Sprinkler running across a lawn"
        title="Irrigation and water management"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio sets the water for the grounds, not just the clock.
          The lawn, the beds, and the shade each get what they need, and less
          where they do not.
        </p>
        <p>
          That can be a new system, or care for the one already in the ground:
          start-up, repairs, and the seasonal change.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the water stays with the studio"
        image="/maintenance/irrigation/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the water visits cover" items={offers} iconFirst />

      <img className="irr-bottom" src="/maintenance/irrigation/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Water in the right place">
        The system installed, checked, and adjusted through the year, so the planting stays watered and the lawn stays even.
      </CloseBand>
    </main>
  )
}
