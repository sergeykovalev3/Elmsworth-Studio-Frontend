import { SiteLink } from '../site-header/SiteLink'
import './PhotoCards.css'

export type PhotoCard = {
  title?: string
  text?: string
  image?: string
  icon?: string
  to?: string
}

export function PhotoCards({
  title,
  items,
  iconFirst = false,
}: {
  title: string
  items: PhotoCard[]
  iconFirst?: boolean
}) {
  return (
    <section className="photo-cards">
      <h2>{title}</h2>
      <div className="photo-cards-grid">
        {items.map((item) => {
          const card = item.icon ? (
            <article>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.to ? <SiteLink to={item.to}>View More</SiteLink> : null}
            </article>
          ) : null
          return (
            <div key={item.title ?? item.image} className="photo-cards-pair">
              {iconFirst ? card : null}
              {item.image ? <img src={item.image} alt="" /> : null}
              {iconFirst ? null : card}
            </div>
          )
        })}
      </div>
    </section>
  )
}
