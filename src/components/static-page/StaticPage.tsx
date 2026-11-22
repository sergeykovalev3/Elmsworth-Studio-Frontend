import { SiteLink } from '../site-header/SiteLink'
import { CoverBlock } from '../cover-block/CoverBlock'
import type { StaticPageContent } from '../../content/pages'
import './StaticPage.css'

export function StaticPage({ page }: { page: StaticPageContent }) {
  return (
    <main>
      <CoverBlock
        wash={page.wash}
        title={page.title}
        image={page.image}
        subtitle={page.subtitle}
      />
      <section className="static-page">
        {page.imageSide ? (
          <img className="static-page-photo" src={page.imageSide} alt="" />
        ) : null}
        <div className="static-page-copy">
          <h2>{page.heading}</h2>
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <SiteLink to="/contact" className="static-page-button">
            <span>Contact Us</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
      </section>
    </main>
  )
}
