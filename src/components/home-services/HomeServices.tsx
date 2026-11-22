import { brandPhoneHref } from '../../brand'
import { SiteLink } from '../site-header/SiteLink'
import { services } from './services'
import './HomeServices.css'

export function HomeServices() {
  return (
    <section className="home-services">
      <div className="home-services-heading">
        <span className="home-services-wash">Services</span>
        <h2 className="home-services-title">Design-Build</h2>
      </div>
      <p className="home-services-intro">
        Planting, stone, water, and care under one plan — so the grounds feel
        complete, not assembled from leftover ideas.
      </p>
      <div className="home-services-grid">
        {services.map((item) => (
          <SiteLink key={item.to} to={item.to} className="home-service">
            <img src={item.image} alt="" />
            <span>{item.label}</span>
          </SiteLink>
        ))}
      </div>
      <p className="home-services-note">
        We will help you shape a place that still feels like yours in January.
      </p>
      <a href={brandPhoneHref} className="home-services-call">
        Call us and we will sketch a plan around how you live outside.
      </a>
    </section>
  )
}
