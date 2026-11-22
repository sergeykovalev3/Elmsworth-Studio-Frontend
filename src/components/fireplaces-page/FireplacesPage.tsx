import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './FireplacesPage.css'

const questions = [
  {
    title: 'Drawn into the garden',
    body: 'The fireplace or the pit is placed for how you sit and for the rest of the terrace. It is part of the grounds, not a unit dropped on the lawn.',
  },
  {
    title: 'Materials that hold',
    body: 'Stone, metal, and the fire itself are chosen to stay sound and safe through weather and years of evenings.',
  },
  {
    title: 'Built for this yard',
    body: 'Wood or gas, freestanding or built in. The choice follows the house, the terrace, and how you want to gather.',
  },
  {
    title: 'One studio through the job',
    body: 'From the first drawing to the last stone, the people who plan the fire are the ones who build it.',
  },
  {
    title: 'Set for the seasons',
    body: 'The fire is placed so the garden stays usable when the evenings cool, without turning the terrace into a single-season room.',
  },
]

const offers = [
  {
    title: 'Fireplaces',
    text: 'A fireplace as the point the terrace turns toward, wood or gas, freestanding or built into the wall.',
    icon: '/fireplaces/icon-fireplaces.svg',
  },
  {
    image: '/fireplaces/offer-1.jpg',
  },
  {
    title: 'Fire pits',
    text: 'A pit people can sit around, for light and warmth, set where the smoke and the view both work.',
    icon: '/fireplaces/icon-pits.svg',
  },
]

export function FireplacesPage() {
  return (
    <main>
      <CoverBlock
        image="/fireplaces/cover.jpg"
        wash="design-build"
        title="Fireplaces & fire pits"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/fireplaces/side.jpg"
        imageAlt="Outdoor fireplace on a terrace"
        title="Fireplaces & fire pits"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A fire changes the evening. Elmsworth Studio draws a fireplace or
                    a fire pit into the terrace so the garden stays a place to sit
                    after the light goes.
                  </p>
                  <p>
                    The drawing and the build stay with one studio, from the first
                    line to the first fire.
                  </p>
                  <p>
                    Wood or gas, a wall or a pit in the middle of the seating. The
                    choice follows the yard and how you gather.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the fire"
        image="/fireplaces/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Get the most from the backyard" items={offers} iconFirst />

      <img className="fp-bottom" src="/fireplaces/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Warmth in the garden">
        A fireplace or a fire pit, drawn for this terrace and built so the evening can stay outside.
      </CloseBand>
    </main>
  )
}
