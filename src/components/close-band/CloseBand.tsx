import type { ReactNode } from 'react'
import { SiteLink } from '../site-header/SiteLink'
import './CloseBand.css'

export function CloseBand({
  title,
  children,
  to = '/contact',
  label = 'Get Started',
}: {
  title: string
  children: ReactNode
  to?: string
  label?: string
}) {
  return (
    <section className="close-band">
      <h2>{title}</h2>
      <p>{children}</p>
      <SiteLink to={to} className="close-band-link">
        <span>{label}</span>
        <img src="/icons/chevron-right.svg" alt="" />
      </SiteLink>
    </section>
  )
}
