import { brandFull } from '../../brand'
import { SiteLink } from '../site-header/SiteLink'
import './HomeMission.css'

export function HomeMission() {
  return (
    <section className="home-mission">
      <img
        className="home-mission-image"
        src="/home/mission.webp"
        alt="Pool terrace and planted slope"
      />
      <div className="home-mission-copy">
        <h2 className="home-mission-title">
          Our <span>promise</span>
        </h2>
        <p>
          {brandFull} is not a crew that mows and leaves. We shape the whole
          outdoor room — soil, stone, water, and the quiet in between — so the
          place feels finished the day you walk out the door.
        </p>
        <blockquote>
          Frost on the lawn. First green. Long evenings. The last gold in the
          trees.
        </blockquote>
        <p>
          Grounds should change with the year and still look like themselves.
          We stay with a place from first sketch through planting and care, so
          the garden keeps its character instead of fading after one season.
        </p>
        <SiteLink to="/contact" className="home-mission-button">
          <span>Contact Us</span>
          <img src="/icons/chevron-right.svg" alt="" />
        </SiteLink>
      </div>
    </section>
  )
}
