import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './OutdoorLivingPage.css'

const questions = [
  {
    title: 'Drawn and built by one crew',
    body: 'The kitchen, the fire, and the light are planned together. The people who draw them are the ones who build them.',
  },
  {
    title: 'Made for this yard',
    body: 'The room follows how you cook, sit, and stay out after dark. The layout is not taken from a catalog.',
  },
  {
    title: 'Materials that hold',
    body: 'Stone, metal, and fittings are chosen for weather and for years of use, not only for the first season.',
  },
  {
    title: 'A plain sequence',
    body: 'Walk, drawing, then the build. You know what is happening before the ground is opened.',
  },
  {
    title: 'Set into the garden',
    body: 'The outdoor room sits with the planting and the grade already on the site, and still reads as a place to live.',
  },
]

const offers = [
  {
    title: 'Kitchens, barbecues, and grilling stations',
    text: 'A place to cook outside, set where people already gather, with room to stand and to sit.',
    image: '/outdoor-living/offer-1.jpg',
    icon: '/outdoor-living/icon-kitchens.svg',
  },
  {
    title: 'Fireplaces and fire pits',
    text: 'A fire you can sit around, placed so the evening stays in the garden after the light goes.',
    image: '/outdoor-living/offer-2.jpg',
    icon: '/outdoor-living/icon-fire.svg',
  },
  {
    title: 'Outdoor lighting',
    text: 'Light on the path, the table, and the trees, enough to use the grounds after dark.',
    image: '/outdoor-living/offer-3.jpg',
    icon: '/outdoor-living/icon-light.svg',
  },
]

export function OutdoorLivingPage() {
  return (
    <main>
      <CoverBlock
        image="/outdoor-living/cover.jpg"
        wash="design-build"
        title="Outdoor living spaces"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/outdoor-living/side.jpg"
        imageAlt="Outdoor room with seating and a fire"
        title="Outdoor living spaces"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    An evening by a fire, a meal cooked outside, or a path you can
                    still see after dark. Elmsworth Studio draws the outdoor room so
                    it works the way the house does.
                  </p>
                  <p>
                    The kitchen, the fire, and the light are scoped together, then
                    built by the same studio.
                  </p>
                  <p>
                    You come home to a place that is already set: somewhere to cook,
                    somewhere to sit, and light enough to stay out after the day ends.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the outdoor room"
        image="/outdoor-living/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Outdoor entertaining" items={offers} />

      <img className="ol-bottom" src="/outdoor-living/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="A room in the garden">
        Cooking, fire, and light, drawn into the grounds and built as one place to stay outside.
      </CloseBand>
    </main>
  )
}
