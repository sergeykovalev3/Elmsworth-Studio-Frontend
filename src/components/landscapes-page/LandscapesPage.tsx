import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './LandscapesPage.css'

const questions = [
  {
    title: 'A crew that stays',
    body: 'The people who draw the grounds are the ones who plant them. You are not handed to a new team halfway through.',
  },
  {
    title: 'No two sites the same',
    body: 'We start from the light, the soil, and how you use the yard. The plan is written for this property, not pulled from a catalog.',
  },
  {
    title: 'A plain sequence',
    body: 'Walk, drawing, budget, then the build. You know what is happening and when, without chasing contractors.',
  },
  {
    title: 'Planting that belongs here',
    body: 'Rain, shade, and the plants that already live in this climate come first. The garden should look considered and still need ordinary care.',
  },
]

const crafts = [
  {
    title: 'Privacy and specimens',
    text: 'A screen from the road, or one tree that holds the view. Both are drawn into the plan, not added later.',
    image: '/landscapes/craft-1.jpg',
    icon: '/landscapes/icon-privacy.svg',
  },
  {
    title: 'Landscape architecture',
    text: 'For grounds that should work as a private retreat or as a place to gather.',
    image: '/landscapes/craft-2.png',
    icon: '/landscapes/icon-arch.svg',
  },
  {
    title: 'Theme gardens',
    text: 'A tea garden, a cottage bed, or a planting for butterflies, set to the way you want to use it.',
    image: '/landscapes/craft-3.jpg',
    icon: '/landscapes/icon-theme.svg',
  },
]

export function LandscapesPage() {
  return (
    <main>
      <CoverBlock
        image="/landscapes/cover.jpg"
        wash="design-build"
        title="Landscapes"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/landscapes/side.jpg"
        imageAlt="Planted garden beside a house"
        title="Landscapes"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    Elmsworth Studio draws outdoor rooms that look finished and still
                    belong to the site. The work runs from the first plan through
                    planting and the care that follows.
                  </p>
                  <p>
                    Architecture of the grounds, privacy, and the beds you actually
                    live with are scoped together, then built by the same studio.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the grounds"
        image="/landscapes/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Craft your outdoor experience" items={crafts} />

      <img className="land-bottom" src="/landscapes/bottom.jpg" alt="" />

      <HomeConsult />
    </main>
  )
}
