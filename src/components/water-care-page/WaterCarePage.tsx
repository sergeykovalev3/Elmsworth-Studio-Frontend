import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './WaterCarePage.css'

const questions = [
  {
    title: 'A crew that knows the water',
    body: 'The people who look after the feature already know the basin, the pump, and how this garden uses it.',
  },
  {
    title: 'Fitted to this feature',
    body: 'A spa, a fall, and a fountain do not take the same visit. The plan follows the one that is actually here.',
  },
  {
    title: 'Clear water, quiet gear',
    body: 'Filters, pumps, and the waterline are checked so the feature runs and stays part of the garden.',
  },
  {
    title: 'Care that can last',
    body: 'The work keeps the stone, the planting at the edge, and the water in good order through the year.',
  },
  {
    title: 'The same studio',
    body: 'Care stays with the people who already know how the feature was built, not a crew seeing it for the first time.',
  },
]

const offers = [
  {
    title: 'Spa care',
    text: 'Water, filter, and the edge kept so the spa stays ready to use.',
    image: '/maintenance/water/1.jpg',
    icon: '/pools/icon-pools.svg',
  },
  {
    title: 'Waterfall care',
    text: 'The fall kept running and clear, with the stone and the planting at its edge still in place.',
    image: '/maintenance/water/2.jpg',
    icon: '/pools/icon-falls.svg',
  },
  {
    title: 'Fountain care',
    text: 'The basin and the jet kept clear, so the fountain holds the court without taking it over.',
    image: '/maintenance/water/3.jpg',
    icon: '/pools/icon-fountains.svg',
  },
]

export function WaterCarePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/water/cover.jpg"
        wash="maintenance"
        title="Water feature care"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/water/side.jpg"
        imageAlt="Pond with falling water beside a stone wall"
        title="Water feature care"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps the water that already belongs in the garden.
          A spa, a fall, or a fountain stays clear, running, and part of the
          grounds, not a piece of equipment left on its own.
        </p>
        <p>
          The visit follows this feature: the pump, the basin, the stone, and
          the planting at the edge.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the water stays with the studio"
        image="/maintenance/water/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the water visits cover" items={offers} iconFirst />

      <img className="wf-bottom" src="/maintenance/water/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Water that stays in the garden">
        Spas, falls, and fountains kept clear and running, so they still belong to the grounds.
      </CloseBand>
    </main>
  )
}
