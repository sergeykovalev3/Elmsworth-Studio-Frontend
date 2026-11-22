import { CloseBand } from '../close-band/CloseBand'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { HomeConsult } from '../home-consult/HomeConsult'
import './BuildMaintenancePage.css'

const questions = [
  {
    title: 'Protect the work',
    body: 'Repairs and regular care, so the grounds keep working years after they were built.',
  },
  {
    title: 'Expert care',
    body: 'Garden programs, lighting, irrigation, and winter work, done by people who know the plants.',
  },
  {
    title: 'Fitted to the site',
    body: 'The visit plan follows this property, not a package written for someone else.',
  },
  {
    title: 'The same studio',
    body: 'Care stays with the people who already know how the grounds were drawn.',
  },
]

export function BuildMaintenancePage() {
  return (
    <main>
      <CoverBlock
        image="/design-build/maint-cover.png"
        wash="design-build"
        title="Maintenance"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/design-build/maint-side.webp"
        imageAlt="House and tended planting"
        title="Maintenance"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
                    The grounds are part of the property, not a strip along the edge.
                    Elmsworth Studio keeps them planted, edged, and usable through
                    every season.
                  </p>
      </IntroSplit>

      <FaqBlock
        title="Why stay with the studio for care"
        image="/design-build/maint-faq.webp"
        items={questions}
      />

      <HomeConsult />

      <CloseBand title="The grounds, kept">
        We do not only cut and leave. The visits are there so the place stays calm, planted, and ready to use.
      </CloseBand>
    </main>
  )
}
