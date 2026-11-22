import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './PavilionsPage.css'

const questions = [
  {
    title: 'Drawn before it is built',
    body: 'The porch, deck, or pergola is planned against the house and the garden before the first post goes in. You see the room while it is still a drawing.',
  },
  {
    title: 'Built for this house',
    body: 'The size, the roof, and the way you step out follow this property and how you use it. The shape is not taken from a catalog.',
  },
  {
    title: 'A crew that stays',
    body: 'The people who draw the structure are the ones who build it. Changes stay in one conversation.',
  },
  {
    title: 'Shade that belongs outside',
    body: 'The structure sits with the planting and the grade already on the site, and still reads as a finished place to be.',
  },
  {
    title: 'Materials that hold',
    body: 'Timber, stone, and fasteners are chosen to stay sound through weather, not only for the first summer.',
  },
]

const offers = [
  {
    title: 'Porches',
    text: 'A porch on the house: shade, a place to sit, and a step between inside and the garden.',
    image: '/pavilions/offer-1.jpg',
    icon: '/pavilions/icon-porches.svg',
  },
  {
    title: 'Pavilions',
    text: 'A pavilion in the grounds, large enough to gather and set so it holds the view.',
    image: '/pavilions/offer-2.jpg',
    icon: '/pavilions/icon-pavilions.svg',
  },
  {
    title: 'Decks',
    text: 'A deck off the house for a meal, a morning, or people over, level with how you walk out.',
    image: '/pavilions/offer-3.jpg',
    icon: '/pavilions/icon-decks.svg',
  },
  {
    title: 'Pergolas',
    text: 'A pergola over a path or a terrace, for shade and a frame on the garden.',
    image: '/pavilions/offer-4.jpg',
    icon: '/pavilions/icon-pergolas.svg',
  },
  {
    image: '/pavilions/offer-5.jpg',
  },
]

export function PavilionsPage() {
  return (
    <main>
      <CoverBlock
        image="/pavilions/cover.jpg"
        wash="design-build"
        title="Pavilions, decks, porches, and pergolas"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/pavilions/side.jpg"
        imageAlt="Covered outdoor room beside a house"
        title="Pavilions, decks, porches, and pergolas"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    The yard can be another room of the house. Elmsworth Studio draws a
                    porch, a deck, a pavilion, or a pergola so it belongs to the
                    building and to the garden.
                  </p>
                  <p>
                    The drawing and the build stay with one studio, from the first line
                    to the day you sit under it.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the structure"
        image="/pavilions/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Craft your outdoor experience" items={offers} />

      <img className="pv-bottom" src="/pavilions/bottom.png" alt="" />

      <HomeConsult />

      <CloseBand title="A room outside">
        Shade, a floor underfoot, and a place to sit, drawn with the house and built to stay.
      </CloseBand>
    </main>
  )
}
