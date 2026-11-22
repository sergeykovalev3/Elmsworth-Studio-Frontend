import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './CommercialPage.css'

const questions = [
  {
    title: 'A crew used to working sites',
    body: 'The people who tend a commercial property know the hours, the entries, and what has to stay open while the work is going on.',
  },
  {
    title: 'A plan for the property',
    body: 'The grounds follow the building, the budget, and how people arrive. The work is written for this site.',
  },
  {
    title: 'Work that holds up',
    body: 'Stone, planting, and the weekly care are chosen to stay presentable under daily use, not only for an opening day.',
  },
  {
    title: 'Care that stays light',
    body: 'Water, planting, and treatments are kept to what the site needs. The grounds should look finished without waste.',
  },
  {
    title: 'On the schedule you set',
    body: 'The work lands when the property needs it. You are not waiting on a crew that treats the site as a spare afternoon.',
  },
]

const offers = [
  {
    title: 'Commercial construction',
    text: 'Walks, patios, walls, and water, built so the arrival to the building reads as finished.',
    image: '/commercial/offer-1.png',
    icon: '/commercial/icon-build.svg',
  },
  {
    title: 'Grounds maintenance',
    text: 'Trees, turf, beds, and seasonal flowers kept in order through the year.',
    image: '/commercial/offer-2.jpg',
    icon: '/commercial/icon-grounds.svg',
  },
  {
    title: 'Irrigation and water',
    text: 'Water where the planting needs it, on a schedule that does not waste it.',
    image: '/commercial/offer-3.jpg',
    icon: '/commercial/icon-water.svg',
  },
  {
    title: 'Outdoor lighting',
    text: 'Light on the entries, the paths, and the parking, so the property stays usable after dark.',
    image: '/commercial/offer-4.png',
    icon: '/commercial/icon-light.svg',
  },
  {
    title: 'Snow and ice',
    text: 'Walks and the drive cleared so the building stays open when the weather turns.',
    icon: '/commercial/icon-snow.svg',
  },
]

export function CommercialPage() {
  return (
    <main>
      <CoverBlock
        image="/commercial/cover.jpg"
        wash="design-build"
        title="Commercial"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/commercial/side.jpg"
        imageAlt="Planted commercial grounds"
        title="Commercial"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    The grounds in front of a business are the first thing people see.
                    Elmsworth Studio builds and keeps them so the property looks
                    considered on an ordinary Tuesday.
                  </p>
                  <p>
                    Construction, weekly care, water, light, and winter access stay
                    with one studio, on a schedule the site can live with.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the property"
        image="/commercial/faq.jpg"
        items={questions}
      />

      <PhotoCards
        title="Construction and grounds care"
        items={offers}
        iconFirst
      />

      <img className="cm-bottom" src="/commercial/bottom.png" alt="" />

      <HomeConsult />

      <CloseBand title="Grounds for the business">
        A property that looks finished and stays open: built, planted, and kept through the year.
      </CloseBand>
    </main>
  )
}
