import type { ReactNode } from 'react'
import { SiteLink } from '../site-header/SiteLink'
import './IntroSplit.css'

export function IntroSplit({
  image,
  imageAlt = '',
  title,
  children,
  action,
  note,
  imageSide = 'start',
  className,
}: {
  image: string
  imageAlt?: string
  title?: string
  children: ReactNode
  action?: { label: string; to: string }
  note?: string
  imageSide?: 'start' | 'end'
  className?: string
}) {
  const sectionClass = [
    'intro-split',
    imageSide === 'end' ? 'is-end' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <section className={sectionClass}>
      <div className="intro-split-photo">
        <img src={image} alt={imageAlt} />
      </div>
      <div>
        {title ? <h2>{title}</h2> : null}
        {children}
        {action ? (
          <SiteLink to={action.to} className="intro-split-button">
            <span>{action.label}</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        ) : null}
        {note ? <p className="intro-split-note">{note}</p> : null}
      </div>
    </section>
  )
}
