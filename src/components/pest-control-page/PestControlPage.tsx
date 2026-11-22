import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './PestControlPage.css'

const questions = [
  {
    title: 'A crew that knows the yard',
    body: 'The same people who keep the grounds do the pest work. They already know the shade, the lawn edge, and where people sit.',
  },
  {
    title: 'Fitted to this property',
    body: 'The visits follow where mosquitoes, fleas, and ticks actually show up here, not a route written for another yard.',
  },
  {
    title: 'The garden stays usable',
    body: 'The point is an evening outside. The work is timed so the lawn and the beds are a place you can be.',
  },
  {
    title: 'A result you can see',
    body: 'Treatments run on a set rhythm through the warm months, so one visit does not have to carry the whole season.',
  },
  {
    title: 'Care that stays careful',
    body: 'The spray is aimed at the pests, not poured across the whole garden. Plants, pets, and the places you sit stay in the plan.',
  },
]

const offers = [
  {
    title: 'Mosquitoes',
    text: 'Breeding spots and resting shade treated so evenings on the terrace stay quiet.',
    image: '/maintenance/pests/1.png',
    icon: '/seasonal/icon-pests.svg',
  },
  {
    title: 'Fleas',
    text: 'Lawn edges, beds, and the places pets pass, kept on a schedule through the warm months.',
    image: '/maintenance/pests/2.jpg',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'Ticks',
    text: 'The tall edge and the shade line watched and treated, where ticks wait for a path.',
    image: '/maintenance/pests/3.jpg',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'And the rest',
    text: 'Other biting insects that show up with the season, folded into the same visit.',
    image: '/maintenance/pests/4.jpg',
    icon: '/design-build/icon-star.svg',
  },
  {
    title: 'A note from the visit',
    text: 'What showed up, and where, written down so the next pass starts from this yard.',
    icon: '/design-build/icon-soil.svg',
  },
]

export function PestControlPage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/pests/cover.jpg"
        wash="maintenance"
        title="Mosquito, flea, and tick control"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/pests/side.jpg"
        imageAlt="Hedge being treated along a lawn"
        title="Mosquito, flea, and tick control"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps mosquitoes, fleas, and ticks down so the
          grounds stay a place to sit. The work follows the lawn edge, the
          shade, and the season, not a blanket pass over the whole yard.
        </p>
        <p>
          It sits with the rest of the care. The same crew already knows
          where people walk and where the planting should be left alone.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the pest work stays with the studio"
        image="/maintenance/pests/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the pest visits cover" items={offers} iconFirst />

      <img className="pest-bottom" src="/maintenance/pests/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Evenings you can use">
        Mosquitoes, fleas, and ticks kept in check through the warm months, so the garden stays open.
      </CloseBand>
    </main>
  )
}
