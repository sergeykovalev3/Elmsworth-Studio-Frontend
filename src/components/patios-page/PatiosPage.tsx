import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './PatiosPage.css'

const questions = [
  {
    title: 'A crew that builds it',
    body: 'The people who set the stone know the drawing. The patio, the wall, and the path stay with one crew.',
  },
  {
    title: 'Drawn for this yard',
    body: 'The size and the line follow the grade and how you use the grounds. The shape is not taken from a catalog.',
  },
  {
    title: 'Materials that hold',
    body: 'Stone and joints are chosen to stay sound under feet and weather, not only for the first season.',
  },
  {
    title: 'The details stay in the plan',
    body: 'Edges, steps, and how the path meets the door are settled before the first course is set.',
  },
  {
    title: 'One studio through the job',
    body: 'From the first walk to the last joint, you talk to the same studio. The work does not change hands halfway through.',
  },
]

const offers = [
  {
    title: 'Patios',
    text: 'A level place to sit, eat, or have people over, set where the garden and the house already meet.',
    image: '/patios/offer-1.jpg',
    icon: '/patios/icon-patios.svg',
  },
  {
    title: 'Retaining walls',
    text: 'A wall that holds the slope and gives you a level terrace, built into the grade that is already there.',
    image: '/patios/offer-2.jpg',
    icon: '/patios/icon-walls.svg',
  },
  {
    title: 'Walkways',
    text: 'A path that joins the door, the patio, and the garden, wide enough to walk without thinking about it.',
    image: '/patios/offer-3.jpg',
    icon: '/patios/icon-walks.svg',
  },
]

export function PatiosPage() {
  return (
    <main>
      <CoverBlock
        image="/patios/cover.png"
        wash="design-build"
        title="Patios, retaining walls, and walkways"
        longTitle
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/patios/side.jpg"
        imageAlt="Stone patio beside a house"
        title="Patios, retaining walls, and walkways"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    A place to sit, a wall that holds the slope, and a path that gets
                    you there. Elmsworth Studio draws the stone so the grounds are
                    usable and still belong to the site.
                  </p>
                  <p>
                    The drawing and the build stay with one studio, from the first
                    line to the last course.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the stone"
        image="/patios/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Outdoor features" items={offers} />

      <img className="pt-bottom" src="/patios/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Stone you can live on">
        A patio, a wall, or a walk, drawn for this yard and built to stay underfoot.
      </CloseBand>
    </main>
  )
}
