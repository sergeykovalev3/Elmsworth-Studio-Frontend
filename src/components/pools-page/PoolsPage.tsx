import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './PoolsPage.css'

const questions = [
  {
    title: 'A process you can follow',
    body: 'The water, the edge, and the planting are drawn together, then built in one sequence. You see the plan before the ground is opened.',
  },
  {
    title: 'Built for this yard',
    body: 'The pool or the pond is sized to the site and to how you use it, not taken from a catalog of shapes.',
  },
  {
    title: 'A crew that knows water',
    body: 'The people who draw the feature stay with the build. The edge, the stone, and the planting stay in one conversation.',
  },
  {
    title: 'Water that belongs outside',
    body: 'The feature sits in the garden, with plants and grade that already live here, and still reads as a finished place to be.',
  },
  {
    title: 'Materials that hold',
    body: 'Stone, edge, and equipment are chosen to stay sound through the seasons, not only for the first summer.',
  },
]

const offers = [
  {
    title: 'Swimming pools and spas',
    text: 'A pool or spa drawn into the garden, for a quiet swim or for people gathered around it.',
    image: '/pools/offer-1.jpg',
    icon: '/pools/icon-pools.svg',
  },
  {
    title: 'Natural ponds',
    text: 'A still pond set among the planting, so the water reads as part of the garden.',
    image: '/pools/offer-2.jpg',
    icon: '/pools/icon-ponds.svg',
  },
  {
    title: 'Waterfalls',
    text: 'Falling water as the point the garden turns toward, with the sound that comes with it.',
    image: '/pools/offer-3.jpg',
    icon: '/pools/icon-falls.svg',
  },
  {
    title: 'Fountains',
    text: 'A fountain in the court or the garden, scaled so it holds the space without taking it over.',
    image: '/pools/offer-4.jpg',
    icon: '/pools/icon-fountains.svg',
  },
  {
    image: '/pools/offer-5.jpg',
  },
]

export function PoolsPage() {
  return (
    <main>
      <CoverBlock
        image="/pools/cover.jpg"
        wash="design-build"
        title="Pools & water features"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/pools/side.jpg"
        imageAlt="Pool set in a planted garden"
        title="Pools & water features"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A fall of water, a pool, or a spa you come home to. Elmsworth
                    Studio draws it into the garden so the water belongs to the yard,
                    not beside it.
                  </p>
                  <p>
                    The drawing, the build, and the care of the water stay with one
                    studio, from the first line to the first season it is in use.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the water"
        image="/pools/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Water features" items={offers} />

      <img className="pw-bottom" src="/pools/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="A place to come home to">
        Water you can see and hear, drawn into the grounds and built to stay.
      </CloseBand>
    </main>
  )
}
