import { useQuery } from '@tanstack/react-query'
import { HomeConsult } from '../home-consult/HomeConsult'
import { usePopup } from '../popup/Popup'
import { SiteLink } from '../site-header/SiteLink'
import '../blog-list/BlogList.css'
import '../project-page/ProjectPage.css'
import './BlogPost.css'

export type PostRow = {
  id: string
  title: string
  excerpt: string
  cover: string
  body: string
  postedOn: string
  author: string
  published: boolean
}

type Block = { type: 'text'; html: string } | { type: 'photos'; images: string[] }

function readBlocks(body: string): Block[] {
  try {
    const parsed = JSON.parse(body) as Block[]
    if (Array.isArray(parsed)) return parsed
  } catch {
    /* plain text */
  }
  return body ? [{ type: 'text', html: `<p>${body}</p>` }] : []
}

function photoRows(images: string[]) {
  const rows: string[][] = []
  for (let i = 0; i < images.length; i += 3) rows.push(images.slice(i, i + 3))
  return rows
}

export function BlogPost({ postId }: { postId: string }) {
  const popup = usePopup()
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<PostRow[]> => {
      const res = await fetch('/api/posts')
      if (!res.ok) throw new Error('Failed to load posts')
      return res.json()
    },
  })

  const post = posts.data?.find((item) => item.id === postId)

  const others = (posts.data ?? [])
    .filter((item) => item.id !== postId)
    .sort((a, b) => Date.parse(b.postedOn) - Date.parse(a.postedOn))
    .slice(0, 3)
  const blocks = readBlocks(post?.body ?? '')

  if (posts.isLoading) {
    return (
      <main className="page-stub">
        <p>Loading…</p>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="page-stub">
        <h1>Blog</h1>
        <p>This post is not on the site.</p>
      </main>
    )
  }

  return (
    <main>
      <article className="blog-article">
        <img className="blog-article-cover" src={post.cover} alt="" />
        <div className="blog-article-meta">
          {post.author ? <p className="blog-article-by">By {post.author}</p> : null}
          {post.postedOn ? <p className="blog-article-date">{post.postedOn}</p> : null}
        </div>
        <h1>{post.title}</h1>
        {blocks.map((block, index) =>
          block.type === 'text' ? (
            <div key={index} className="blog-article-story" dangerouslySetInnerHTML={{ __html: block.html }} />
          ) : (
            <div key={index} className="blog-article-photos">
              {photoRows(block.images).map((row) => (
                <div key={row[0]} className={`blog-photo-row is-${row.length}`}>
                  {row.map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() =>
                        popup.open({
                          label: post.title,
                          plain: true,
                          content: <img className="project-popup-photo" src={src} alt="" />,
                        })
                      }
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ),
        )}
      </article>
      <section className="blog-others">
        <h2>View other posts</h2>
        <div className="blog-others-grid">
          {others.map((item) => (
            <SiteLink key={item.id} to={`/blog/${item.id}`} className="blog-card">
              <img src={item.cover} alt="" />
              <span className="blog-card-title">{item.title}</span>
              <span className="blog-card-excerpt">{item.excerpt}</span>
            </SiteLink>
          ))}
        </div>
      </section>
      <HomeConsult />
    </main>
  )
}
