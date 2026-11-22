import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './LightCarePage.css'

const questions = [
  {
    title: 'The whole system',
    body: 'Lamps, timers, and wiring are looked after together, so one dark fitting does not leave the path unread.',
  },
  {
    title: 'Light drawn for the site',
    body: 'Repairs follow the path, the trees, and the places you sit. The beam is not reset from a catalog.',
  },
  {
    title: 'People who know the fittings',
    body: 'The crew that keeps the grounds also knows which lamp belongs on which tree and which timer runs the evening.',
  },
  {
    title: 'Fittings that hold',
    body: 'Lamps are swapped and upgraded so the light stays bright and weather-tight, not only for the first night.',
  },
  {
    title: 'Light that stays quiet',
    body: 'The system uses less power and stays off the sky. You can see the garden without lighting the whole neighborhood.',
  },
]

const offers = [
  {
    title: 'Lighting for this garden',
    text: 'A plan for the path, the trees, and the places you use after dark, set into the grounds you already have.',
    image: '/maintenance/lights/1.jpg',
    icon: '/lighting/icon-new.svg',
  },
  {
    title: 'Repairs',
    text: 'A lamp that has gone out, a wire that has failed, or a fixture that no longer aims where it should.',
    image: '/maintenance/lights/2.jpg',
    icon: '/lighting/icon-care.svg',
  },
  {
    title: 'Lamps and upgrades',
    text: 'Bulbs replaced and fittings brought up to date, so the evening stays as bright as it was drawn.',
    image: '/maintenance/lights/3.jpg',
    icon: '/design-build/icon-star.svg',
  },
  {
    title: 'Timers',
    text: 'Clocks reset with the season, so the lights come on when the path needs them and go off when it does not.',
    image: '/maintenance/lights/4.jpg',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'A note from the visit',
    text: 'What was out, and what was changed, written down so the next evening starts from this system.',
    icon: '/design-build/icon-soil.svg',
  },
]

export function LightCarePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/lights/cover.jpg"
        wash="maintenance"
        title="Outdoor lighting maintenance"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/lights/side.jpg"
        imageAlt="Garden lit along a path after dark"
        title="Outdoor lighting maintenance"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps the light that is already in the ground.
          Paths, trees, and the places you sit stay readable after dark,
          without washing the whole site in light.
        </p>
        <p>
          That is lamps, timers, and repairs. The fittings stay with the
          garden they were drawn for.
        </p>
      </IntroSplit>

      <FaqBlock
        title="Why the light stays with the studio"
        image="/maintenance/lights/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What the lighting visits cover" items={offers} iconFirst />

      <img className="lc-bottom" src="/maintenance/lights/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Evenings you can still read">
        Lamps, timers, and repairs kept up, so the garden stays clear after dark.
      </CloseBand>
    </main>
  )
}
