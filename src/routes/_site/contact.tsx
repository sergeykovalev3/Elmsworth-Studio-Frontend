import { createFileRoute } from '@tanstack/react-router'
import {
  brandAddress,
  brandEmail,
  brandFull,
  brandPhone,
  brandPhoneHref,
} from '../../brand'
import { CoverBlock } from '../../components/cover-block/CoverBlock'
import { HomeConsult } from '../../components/home-consult/HomeConsult'
import './contact.css'

export const Route = createFileRoute('/_site/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main>
      <CoverBlock
        image="/contact/cover.webp"
        wash="contact"
        title="Get in touch"
      />

      <section className="contact-intro">
        <div>
          <h2>Ready to start on the grounds</h2>
          <p>
            {brandFull} will help you shape an outdoor room you will actually
            use: a terrace, a garden, or the care that keeps them.
          </p>
          <p>Write or call, and we will set a time to walk the site.</p>
          <a href={`mailto:${brandEmail}`}>{brandEmail}</a>
          <a href={brandPhoneHref}>{brandPhone}</a>
          <p>
            {brandAddress[0]}
            <br />
            {brandAddress[1]}
          </p>
        </div>
        <div className="contact-intro-photo">
          <img src="/contact/side.png" alt="Elmsworth Studio truck at a garden" />
        </div>
      </section>

      <section className="contact-form">
        <h2>Tell us about the property</h2>
        <HomeConsult formOnly />
      </section>
    </main>
  )
}
