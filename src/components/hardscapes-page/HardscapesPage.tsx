import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './HardscapesPage.css'

const questions = [
  {
    title: 'A plan you can walk',
    body: 'Stone, steps, and the places you sit are drawn before the first course is set. You see the layout while it is still a drawing.',
  },
  {
    title: 'Built for this yard',
    body: 'The patio, the wall, and the path follow the grade and how you use the grounds. The shape is not taken from a catalog.',
  },
  {
    title: 'A crew that stays',
    body: 'The people who draw the hardscape are the ones who build it. Changes stay in one conversation.',
  },
  {
    title: 'Stone that belongs outside',
    body: 'The work sits with the planting and the slope already on the site, and still reads as a finished place to be.',
  },
  {
    title: 'Materials that hold',
    body: 'Stone and joints are chosen to stay sound through weather and years of walking, not only for the first season.',
  },
]

const offers = [
  {
    title: 'Pavilions, decks, porches, and pergolas',
    text: 'A covered place to gather, or a deck that opens the house to the garden.',
    icon: '/hardscapes/icon-pavilions.svg',
  },
  {
    image: '/hardscapes/offer-1.jpg',
  },
  {
    title: 'Patios, retaining walls, and walkways',
    text: 'A patio to live on, a wall that holds the slope, and a path that gets you there.',
    icon: '/hardscapes/icon-patios.svg',
  },
]

export function HardscapesPage() {
  return (
    <main>
      <CoverBlock
        image="/hardscapes/cover.jpg"
        wash="design-build"
        title="Hardscapes"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/hardscapes/side.jpg"
        imageAlt="Stone terrace beside a barn"
        title="Hardscapes"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A yard you can use: a place to sit, a path underfoot, a wall that
                    holds the grade. Elmsworth Studio draws the stone so it works and
                    still belongs to the garden.
                  </p>
                  <p>
                    You do not have to manage the build. The drawing and the crew stay
                    with the studio from the first line to the last course.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the stone"
        image="/hardscapes/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Hardscape services" items={offers} iconFirst />

      <img className="hs-bottom" src="/hardscapes/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Craft your outdoor escape">
        Stone, shade, and a path through the grounds, drawn and built as one place to be outside.
      </CloseBand>
    </main>
  )
}
