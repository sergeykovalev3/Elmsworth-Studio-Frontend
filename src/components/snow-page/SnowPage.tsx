import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './SnowPage.css'

const questions = [
  {
    title: 'A crew that shows up',
    body: 'The same people who know the drive and the walks come out when the snow does. The route is already written.',
  },
  {
    title: 'The whole approach',
    body: 'Drive, walks, steps, and the door are on one list, so one clear path does not stop at the first turn.',
  },
  {
    title: 'Salt used with a limit',
    body: 'Ice treatment goes where people walk. The beds and the lawn are not buried in it.',
  },
  {
    title: 'Before the storm',
    body: 'Walks and drives can be treated ahead of the freeze, so the first ice does not take the morning.',
  },
  {
    title: 'Open when you need it',
    body: 'The visit is timed so a house or a business can be reached. Safety of the approach comes first.',
  },
]

const offers = [
  {
    title: 'Homes',
    text: 'The drive, the walks, and the steps cleared so you can leave and come back.',
    image: '/maintenance/snow/1.png',
    icon: '/seasonal/icon-snow.svg',
  },
  {
    title: 'Businesses',
    text: 'Entries, lots, and the path to the door kept open through the storm.',
    image: '/maintenance/snow/2.png',
    icon: '/commercial/icon-snow.svg',
  },
  {
    title: 'Before the ice',
    text: 'A treatment ahead of the freeze, so the first slick does not wait for the plow.',
    image: '/maintenance/snow/3.png',
    icon: '/design-build/icon-shield.svg',
  },
]

export function SnowPage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/snow/cover.jpg"
        wash="maintenance"
        title="Snow and ice management"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/snow/side.jpg"
        imageAlt="A cleared path after snow"
        title="Snow and ice management"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps the way in open through winter. Drives,
          walks, and the door are cleared and treated so a house or a
          business can still be reached.
        </p>
        <p>
          The route is set before the season. When the snow starts, the crew
          already knows which edges matter.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why winter stays with the studio"
        image="/maintenance/snow/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the winter visits cover" items={offers} iconFirst />

      <img className="sn-bottom" src="/maintenance/snow/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="A winter you can get through">
        Drives and walks cleared, and ice treated before it takes the morning.
      </CloseBand>
    </main>
  )
}
