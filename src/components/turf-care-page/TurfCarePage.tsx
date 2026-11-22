import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './TurfCarePage.css'

const questions = [
  {
    title: 'Care for a finished lawn',
    body: 'The turf, the ornamental beds, and the insects are treated as one garden, not three separate jobs.',
  },
  {
    title: 'Fitted to this lawn',
    body: 'The visits follow this soil, this shade, and how the lawn is used. The program is not a package written for another yard.',
  },
  {
    title: 'The full round',
    body: 'Turf treatments, ornamental care, and insect work stay on one schedule, so one pass does not undo the last.',
  },
  {
    title: 'Care that can last',
    body: 'Feeding, weeds, and pests are handled so the lawn can hold its shape without being rebuilt each spring.',
  },
  {
    title: 'A sequence you can see',
    body: 'Early spring through fall has a set order. You know which visit is coming and what it is for.',
  },
]

const offers = [
  {
    title: 'Complete turf care',
    text: 'Six treatments from early spring through fall, so the lawn stays thick and the weeds stay back.',
    image: '/maintenance/turf/1.jpg',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'Ornamental plant care',
    text: 'Spring, summer, and fall visits for the shrubs and beds, aimed at pests and fungi while they are still small.',
    image: '/maintenance/turf/2.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Insect program',
    text: 'Mosquitoes, fleas, and ticks kept down so the garden stays a place you can sit.',
    image: '/maintenance/turf/3.jpg',
    icon: '/seasonal/icon-pests.svg',
  },
  {
    title: 'Pest management',
    text: 'Pests watched across the whole site: what is there, where it lives, and what the next visit should change.',
    image: '/maintenance/turf/4.jpg',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'A record of the lawn',
    text: 'Each visit notes what changed, so the next one starts from this lawn, not from a blank sheet.',
    icon: '/design-build/icon-star.svg',
  },
]

export function TurfCarePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/turf/cover.jpg"
        wash="maintenance"
        title="Turf, ornamental, and insect care"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/turf/side.png"
        imageAlt="Lawn and planted beds kept together"
        title="Turf, ornamental, and insect care"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps the lawn and the planting around it on one
          plan. Turf, ornamentals, and insects are visited together, so the
          ground plane stays even and the beds stay healthy.
        </p>
        <p>
          The work runs from early spring through fall. What gets fed, what
          gets watched, and what is left alone follows this property.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the lawn stays with the studio"
        image="/maintenance/turf/faq.png"
        items={questions}
      />

      <PhotoCards title="What the turf visits cover" items={offers} iconFirst />

      <img className="turf-bottom" src="/maintenance/turf/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="A lawn that holds">
        Turf, beds, and insect care on one schedule, so the grounds stay even and ready to use.
      </CloseBand>
    </main>
  )
}
