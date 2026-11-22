import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './ThemeGardensPage.css'

const questions = [
  {
    title: 'A design that is its own',
    body: 'The planting is drawn for this yard: the light, the views, and how you want the garden to feel. Nothing is dropped in from a catalog.',
  },
  {
    title: 'A team that stays',
    body: 'The people who choose the plants are the ones who put them in the ground. The plan does not change hands halfway through.',
  },
  {
    title: 'Care that stays close',
    body: 'You work with one studio. Questions about a tree, a screen, or a bed stay in one conversation.',
  },
  {
    title: 'A sequence you can follow',
    body: 'The idea, the plant list, the install, then the first season of care. Each step is finished before the next one starts.',
  },
  {
    title: 'Planting that belongs here',
    body: 'The beds look considered and still work with the soil, the rain, and what already grows on the site.',
  },
]

const offers = [
  {
    title: 'Specimen plantings',
    text: 'One tree or one shrub, placed so it holds the view. The rest of the garden is drawn around it.',
    image: '/theme-gardens/offer-1.jpg',
    icon: '/theme-gardens/icon-specimen.svg',
  },
  {
    title: 'Theme gardens',
    text: 'A garden with one clear idea: the plants, the paths, and the places to sit all belong to the same room.',
    image: '/theme-gardens/offer-2.jpg',
    icon: '/theme-gardens/icon-theme.svg',
  },
  {
    title: 'Privacy plantings',
    text: 'A living screen from the road or the neighbor, set where it actually blocks the view.',
    image: '/theme-gardens/offer-3.png',
    icon: '/theme-gardens/icon-privacy.svg',
  },
]

export function ThemeGardensPage() {
  return (
    <main>
      <CoverBlock
        image="/theme-gardens/cover.jpg"
        wash="design-build"
        title="Theme gardens, privacy plantings, and specimen plantings"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/theme-gardens/side.jpg"
        imageAlt="Planted garden beside a house"
        title="Theme gardens, privacy plantings, and specimen plantings"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A quiet garden, a screen from the next house, or one plant that
                    holds the view. Elmsworth Studio draws the planting so it does all
                    three only if the site asks for it.
                  </p>
                  <p>
                    The idea, the plant list, and the install stay with the same
                    studio, so the garden still matches the drawing after it is in the
                    ground.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the planting"
        image="/theme-gardens/faq.jpg"
        items={questions}
      />

      <PhotoCards title="What we offer" items={offers} />

      <img className="tg-bottom" src="/theme-gardens/bottom.png" alt="" />

      <HomeConsult />

      <CloseBand title="Ready to start">
        Privacy, a specimen, or a garden with one clear idea. Tell us which one the yard needs, and we will draw it.
      </CloseBand>
    </main>
  )
}
