import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './SeasonalPage.css'

const questions = [
  {
    title: 'A crew that knows the seasons',
    body: 'The same studio handles the beds in spring, the pests in summer, and the walks in winter. The grounds do not change hands with the weather.',
  },
  {
    title: 'Set for this property',
    body: 'Flower color, ice on the drive, and what bites in the garden follow this site. The plan is not a standard package.',
  },
  {
    title: 'Materials that hold',
    body: 'Plants, treatments, and the work on the walks are chosen to do the job and leave the garden usable afterward.',
  },
  {
    title: 'Care that stays light',
    body: 'Treatments and plantings are kept to what the site needs. The garden should look after itself as much as it can.',
  },
  {
    title: 'On time, in season',
    body: 'Flowers go in when they should, and the walks are cleared when the weather asks for it. The work follows the calendar of the yard.',
  },
]

const offers = [
  {
    title: 'Seasonal flower displays',
    text: 'Beds changed with the season, so the garden still reads as finished from spring through fall.',
    image: '/seasonal/offer-1.jpg',
    icon: '/seasonal/icon-flowers.svg',
  },
  {
    title: 'Snow and ice',
    text: 'Walks and the drive cleared when the weather turns, so the house stays reachable.',
    image: '/seasonal/offer-2.jpg',
    icon: '/seasonal/icon-snow.svg',
  },
  {
    title: 'Mosquito, flea, and tick control',
    text: 'Treatment timed to the season, so the terrace and the garden stay places you can sit.',
    image: '/seasonal/offer-3.jpg',
    icon: '/seasonal/icon-pests.svg',
  },
]

export function SeasonalPage() {
  return (
    <main>
      <CoverBlock
        image="/seasonal/cover.jpg"
        wash="design-build"
        title="Seasonal services"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/seasonal/side.jpg"
        imageAlt="Garden in a changing season"
        title="Seasonal services"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    Spring flowers, a winter walk, or a summer evening you can sit
                    through. Elmsworth Studio keeps the grounds in step with the
                    year, not only with the first planting.
                  </p>
                  <p>
                    The beds, the ice, and the pests are handled by the same studio
                    that drew the garden.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio through the year"
        image="/seasonal/bottom.jpg"
        items={questions}
      />

      <PhotoCards title="Our seasonal offerings" items={offers} />

      <img className="ss-bottom" src="/seasonal/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Through the year">
        Flowers, winter walks, and a garden you can sit in. The work follows the season the yard is actually in.
      </CloseBand>
    </main>
  )
}
