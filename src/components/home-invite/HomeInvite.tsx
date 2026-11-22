import { brandFull } from '../../brand'
import { SiteLink } from '../site-header/SiteLink'
import './HomeInvite.css'

export function HomeInvite() {
  return (
    <section className="home-invite">
      <div className="home-invite-inner">
        <div className="home-invite-copy">
          <h2 className="home-invite-title">
            Finished with <span>borrowed yards?</span>
          </h2>
          <p className="home-invite-lead">No catalog plots. No leftover planting.</p>
          <p>
            {brandFull} plans the grounds around how you actually use them —
            shade where you sit, stone where you walk, planting that earns its
            keep without a weekly scramble.
          </p>
          <p>
            Design, build, and care stay in one studio, so the place still
            looks like itself a year later. Book a conversation and we will
            walk the property with you.
          </p>
          <SiteLink to="/contact" className="home-invite-button">
            <span>Contact Us</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
        <img
          className="home-invite-image"
          src="/home/invite.webp"
          alt="Backyard lawn, terrace, and evening light"
        />
      </div>
    </section>
  )
}
