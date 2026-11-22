import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './LightingPage.css'

const questions = [
  {
    title: 'A plan for the night',
    body: 'The light is drawn for the path, the trees, and the places you sit. It is planned with the grounds, not added as a row of fixtures.',
  },
  {
    title: 'Fixtures that hold',
    body: 'LED fittings are chosen to stay bright and weather-tight through the seasons, not only for the first evening.',
  },
  {
    title: 'Set for this property',
    body: 'The brands and the beam follow the house and the garden. The layout is written for this site.',
  },
  {
    title: 'Care after the install',
    body: 'Timers, lamps, and wiring can be looked after once the system is in. The studio does not leave on the day the lights come on.',
  },
  {
    title: 'Light that stays quiet',
    body: 'The system uses less power and stays off the sky. You can see the garden without lighting the whole neighborhood.',
  },
]

const offers = [
  {
    title: 'New installation',
    text: 'A lighting plan for the grounds you already have: paths, trees, and the places you use after dark.',
    icon: '/lighting/icon-new.svg',
  },
  {
    image: '/lighting/offer-1.jpg',
  },
  {
    title: 'Ongoing care and repair',
    text: 'Timers, lamps, and wiring kept in working order after the system is in the ground.',
    icon: '/lighting/icon-care.svg',
  },
]

export function LightingPage() {
  return (
    <main>
      <CoverBlock
        image="/lighting/cover.png"
        wash="design-build"
        title="Outdoor lighting"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/lighting/side.jpg"
        imageAlt="Garden lit after dark"
        title="Outdoor lighting"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    The grounds should still be usable after dark. Elmsworth Studio
                    draws the light for the path, the trees, and the places you sit.
                  </p>
                  <p>
                    That can be a new system, or care and repair for lights that are
                    already in the ground.
                  </p>
                  <p>
                    The fittings are LED, set so you can see the garden without
                    washing the whole site in light.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the light"
        image="/lighting/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What we offer" items={offers} iconFirst />

      <img className="lt-bottom" src="/lighting/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Light on the grounds">
        A new system or care for the one you have, drawn so the garden stays readable after dark.
      </CloseBand>
    </main>
  )
}
