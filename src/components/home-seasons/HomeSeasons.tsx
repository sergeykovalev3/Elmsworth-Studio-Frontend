import { brandFull } from '../../brand'
import { SiteLink } from '../site-header/SiteLink'
import './HomeSeasons.css'

export function HomeSeasons() {
  return (
    <section className="home-seasons">
      <img
        className="home-seasons-image"
        src="/home/seasons.webp"
        alt="Planted terrace and garden path"
      />
      <div className="home-seasons-copy">
        <h2 className="home-seasons-title">
          Held through the year.{' '}
          <span>Not only in July.</span>
        </h2>
        <p>
          Picture coffee under a tree you chose for that corner of light. A
          table that still feels like a table when the evenings get short. A
          fire that belongs to the room, not a leftover kit.
        </p>
        <p>
          {brandFull} treats the grounds as part of the house: how you arrive,
          where you sit, what you see from the kitchen window.
        </p>
        <p>We build the place. Then we keep it looking like itself.</p>
        <SiteLink to="/contact" className="home-seasons-button">
          <span>Contact Us</span>
          <img src="/icons/chevron-right.svg" alt="" />
        </SiteLink>
      </div>
    </section>
  )
}
