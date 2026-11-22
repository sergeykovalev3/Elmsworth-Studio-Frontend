import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './ArchitecturePage.css'

const questions = [
  {
    title: 'A committed team',
    body: 'The same people stay with the drawing from the first walk through the build. They know the site, not just the sheet.',
  },
  {
    title: 'Careful service',
    body: 'You get one studio to talk to. Questions, changes, and the schedule stay in one place.',
  },
  {
    title: 'A plain sequence',
    body: 'Listen, draw, specify, build, then tend. Each step is finished before the next one starts.',
  },
  {
    title: 'Planting that belongs',
    body: 'The plan looks after the soil, the water, and what already lives here, and still reads as a finished garden.',
  },
]

const steps = [
  {
    title: 'Listen',
    text: 'We walk the site and write down how you want to live outside before anything is drawn.',
    image: '/architecture/step-1.jpg',
    icon: '/architecture/icon-1.svg',
  },
  {
    title: 'Picture',
    text: 'Ideas, materials, and a first budget, so you can see the grounds before they are built.',
    image: '/architecture/step-2.jpg',
    icon: '/architecture/icon-2.svg',
  },
  {
    title: 'Specify',
    text: 'Drawings get tighter, and you get a proposal that matches the place and the cost.',
    image: '/architecture/step-3.jpg',
    icon: '/architecture/icon-3.svg',
  },
  {
    title: 'Build',
    text: 'The crew follows the drawings. This is where the outdoor rooms take shape.',
    image: '/architecture/step-4.jpg',
    icon: '/architecture/icon-4.svg',
  },
  {
    title: 'Tend',
    text: 'After the last stone, the studio stays on so the garden holds through the seasons.',
    icon: '/architecture/icon-5.svg',
  },
]

export function ArchitecturePage() {
  return (
    <main>
      <CoverBlock
        image="/architecture/cover.jpg"
        wash="design-build"
        title="Landscape architecture"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/architecture/side.jpg"
        imageAlt="Drawn garden beside a house"
        title="Landscape architecture"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    This is more than beds and a mown edge. Elmsworth Studio draws
                    outdoor rooms you can feel: where to sit, where to walk, and what
                    holds the view.
                  </p>
                  <p>
                    The drawing, the build, and the care stay with one studio, so the
                    grounds still match the plan after they are planted.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for the drawing"
        image="/architecture/faq.jpg"
        items={questions}
      />

      <PhotoCards title="Craft your outdoor experience" items={steps} iconFirst />

      <img className="arch-bottom" src="/architecture/bottom.jpg" alt="" />

      <HomeConsult />

      <CloseBand title="Drawn, then built">
        The grounds should meet the brief and still belong to the site: considered, planted, and ready to live in.
      </CloseBand>
    </main>
  )
}
