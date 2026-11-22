import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './FlowerDisplaysPage.css'

const questions = [
  {
    title: 'Drawn for this entrance',
    body: 'The display is planned for the pots, the beds, and the way you arrive. It is not a tray of plants dropped in at the last minute.',
  },
  {
    title: 'Plants that hold',
    body: 'The flowers are chosen to last the season in this light and this soil, not only to look full on the day they go in.',
  },
  {
    title: 'A change with the year',
    body: 'Spring, summer, and fall each get their own planting, so the color does not stop when the first flush fades.',
  },
  {
    title: 'Set in by the crew',
    body: 'The same people who keep the grounds put the display in, so the pots and the beds still match the rest of the garden.',
  },
  {
    title: 'Care after planting',
    body: 'Water, deadheading, and a swap when a plant fails stay on the visit list. The display is not left the day it is installed.',
  },
]

const offers = [
  {
    title: 'Container gardens',
    text: 'Pots at the door, the terrace, and the steps, planted for the season you are in.',
    image: '/maintenance/flowers/1.jpg',
    icon: '/seasonal/icon-flowers.svg',
  },
  {
    title: 'Seasonal flower beds',
    text: 'Beds filled for spring, summer, or fall, set into the planting that stays all year.',
    image: '/maintenance/flowers/2.jpg',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'Spring bulbs',
    text: 'Bulbs in the ground before winter, so the first color is already there when the beds wake up.',
    image: '/maintenance/flowers/3.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Plantings the deer leave',
    text: 'Color chosen from plants the deer tend to pass, so the display is still there a week later.',
    image: '/maintenance/flowers/4.jpg',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'Care through the season',
    text: 'Water, deadheading, and a swap when a plant fails, so the display holds until the next planting.',
    icon: '/design-build/icon-star.svg',
  },
]

export function FlowerDisplaysPage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/flowers/cover.jpg"
        wash="maintenance"
        title="Seasonal flower displays"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/flowers/side.jpg"
        imageAlt="Formal beds in flower"
        title="Seasonal flower displays"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio changes the color with the year. Pots, beds, and
          bulbs are planted for this entrance and this light, then kept until
          the next season takes their place.
        </p>
        <p>
          The display sits in the garden you already have. It does not fight
          the shrubs, the lawn, or the way you walk in.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the flowers stay with the studio"
        image="/maintenance/flowers/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the flower visits cover" items={offers} iconFirst />

      <img className="fl-bottom" src="/maintenance/flowers/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Color that keeps coming">
        A new planting each season, set in and looked after, so the grounds stay in flower from spring through fall.
      </CloseBand>
    </main>
  )
}
