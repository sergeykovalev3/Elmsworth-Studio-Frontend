import type { ReactNode } from 'react'
import { SiteLink } from '../site-header/SiteLink'
import './CoverBlock.css'

export function CoverBlock({
  image,
  wash,
  title,
  subtitle,
  action,
  align = 'start',
  longTitle = false,
}: {
  image: string
  wash?: string
  title: ReactNode
  subtitle?: string
  action?: { label: string; to: string }
  align?: 'start' | 'center'
  longTitle?: boolean
}) {
  const headingClass = [
    'cover-block-heading',
    wash ? 'has-wash' : '',
    longTitle ? 'is-long' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={align === 'center' ? 'cover-block is-center' : 'cover-block'}>
      <img src={image} alt="" />
      <div className="cover-block-copy">
        <div className={headingClass}>
          {wash ? <span>{wash}</span> : null}
          <h1>{title}</h1>
        </div>
        {subtitle ? <p>{subtitle}</p> : null}
        {action ? (
          <SiteLink to={action.to} className="cover-block-action">
            <span>{action.label}</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        ) : null}
      </div>
    </section>
  )
}
