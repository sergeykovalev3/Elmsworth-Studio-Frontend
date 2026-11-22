import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './KitchensPage.css'

const questions = [
  {
    title: 'Drawn for this yard',
    body: 'The kitchen follows the terrace, the house, and how you cook outside. The layout is not taken from a catalog.',
  },
  {
    title: 'Materials that hold',
    body: 'Counters, stone, and fittings are chosen for weather and for years of cooking, not only for the first summer.',
  },
  {
    title: 'A layout you can work in',
    body: 'The grill, the prep, and the place people sit are set so you can cook without turning the terrace into a corridor.',
  },
  {
    title: 'A crew that stays',
    body: 'The people who draw the kitchen are the ones who build it. Changes stay in one conversation.',
  },
  {
    title: 'One studio through the job',
    body: 'From the first walk to the last fitting, the drawing and the install stay with the same studio.',
  },
]

const offers = [
  {
    title: 'Outdoor kitchens',
    text: 'A full kitchen outside: grill, sink, cold storage, and a counter where people can sit while you cook.',
    image: '/kitchens/offer-1.jpg',
    icon: '/kitchens/icon-kitchens.svg',
  },
  {
    title: 'Barbecues',
    text: 'A barbecue built into the terrace, sized for how you actually cook and set where the smoke can leave.',
    image: '/kitchens/offer-2.jpg',
    icon: '/kitchens/icon-bbq.svg',
  },
  {
    title: 'Grilling stations',
    text: 'A compact station for the grill, with room to set a plate down and still face the garden.',
    image: '/kitchens/offer-3.jpg',
    icon: '/kitchens/icon-grill.svg',
  },
]

export function KitchensPage() {
  return (
    <main>
      <CoverBlock
        image="/kitchens/cover.jpg"
        wash="design-build"
        title="Kitchens, barbecues, and grilling stations"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/kitchens/side.jpg"
        imageAlt="Outdoor kitchen on a stone terrace"
        title="Kitchens, barbecues, and grilling stations"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A Tuesday supper or a full table of people. An outdoor kitchen or
                    a grilling station turns the yard into another room of the house,
                    the one where the cooking happens.
                  </p>
                  <p>
                    Elmsworth Studio draws the counter, the grill, and the place to
                    sit so they belong to the terrace already there.
                  </p>
                  <p>
                    The drawing and the build stay with one studio, from the first
                    line to the day you cook on it.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the kitchen"
        image="/kitchens/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Custom outdoor dining" items={offers} />

      <img className="kit-bottom" src="/kitchens/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Cook outside">
        A full kitchen or a grilling nook, drawn for this terrace and built so the meal can stay in the garden.
      </CloseBand>
    </main>
  )
}
