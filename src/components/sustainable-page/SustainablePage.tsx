import { useQuery } from '@tanstack/react-query'
import { CoverBlock } from '../cover-block/CoverBlock'
import { CloseBand } from '../close-band/CloseBand'
import { SiteLink } from '../site-header/SiteLink'
import { HomeConsult } from '../home-consult/HomeConsult'
import { usePopup } from '../popup/Popup'
import type { PostRow } from '../blog-post/BlogPost'
import { pledges, promises } from './pledges'
import '../blog-list/BlogList.css'
import './SustainablePage.css'

export function SustainablePage() {
  const popup = usePopup()
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<PostRow[]> => {
      const res = await fetch('/api/posts')
      if (!res.ok) throw new Error('Failed to load posts')
      return res.json()
    },
  })
  const latest = [...(posts.data ?? [])]
    .sort((a, b) => Date.parse(b.postedOn) - Date.parse(a.postedOn))
    .slice(0, 3)

  return (
    <main>
      <CoverBlock
        image="/about/sustain-cover.webp"
        wash="sustainability"
        title="sustainable landscaping"
        align="center"
      />

      <section className="sustain-split">
        <img src="/about/sustain-side.png" alt="Planted slope in leaf" />
        <div>
          <h2>The grounds stay healthier when we work with them.</h2>
          <p>
            Elmsworth Studio treats water, soil, and planting as one system.
            A garden that has to be rescued every month is not the point. We
            plan so the site can keep its shape with ordinary care, and so
            the water, air, and wildlife around it stay in good order.
          </p>
        </div>
      </section>

      <section className="sustain-pledge">
        <div className="sustain-pledge-heading">
          <span>our pledge</span>
          <h2>we pledge to...</h2>
        </div>
        <div className="sustain-grid">
          {pledges.map((item) => (
            <div key={item.text} className="sustain-pair">
              <article className="sustain-card">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
                <button
                  type="button"
                  onClick={() =>
                    popup.open({
                      label: 'Our pledge',
                      content: (
                        <article className="sustain-more">
                          <img src={item.icon} alt="" />
                          <p className="sustain-more-kicker">We pledge to</p>
                          <h3>{item.title}</h3>
                          <p className="sustain-more-lead">{item.lead}</p>
                          {item.paragraphs.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                          <ul>
                            {item.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </article>
                      ),
                    })
                  }
                >
                  View More
                </button>
              </article>
              {item.photo ? <img src={item.photo} alt="" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="sustain-will">
        <div>
          <h2>
            We <strong>Will...</strong>
          </h2>
          <ul>
            {promises.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            These choices work together. A site that needs less water, less
            spray, and less feeding is easier to keep, and kinder to what
            lives around it.
          </p>
        </div>
        <img src="/about/will.jpeg" alt="Garden path after rain" />
      </section>

      <img
        className="sustain-bleed"
        src="/about/sustain-bleed.webp"
        alt=""
      />

      <section className="sustain-quote">
        <p>
          The land looks after the people on it. We are obliged to look after
          the land in return.
        </p>
        <div>Owen Hale</div>
      </section>

      <section className="sustain-notes">
        <h2>Blogs</h2>
        <div className="blog-grid">
          {latest.map((post) => (
            <SiteLink key={post.id} to={`/blog/${post.id}`} className="blog-card">
              <img src={post.cover} alt="" />
              <span className="blog-card-title">{post.title}</span>
              <span className="blog-card-excerpt">{post.excerpt}</span>
            </SiteLink>
          ))}
        </div>
      </section>

      <HomeConsult />

      <CloseBand title="Learn more">
        We build grounds that look after the people who live there, the crew who tend them, and the street they sit on.
      </CloseBand>
    </main>
  )
}
