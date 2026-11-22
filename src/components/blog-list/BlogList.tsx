import { useQuery } from '@tanstack/react-query'
import { CoverBlock } from '../cover-block/CoverBlock'
import { SiteLink } from '../site-header/SiteLink'
import type { PostRow } from '../blog-post/BlogPost'
import './BlogList.css'

export function BlogList() {
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<PostRow[]> => {
      const res = await fetch('/api/posts')
      if (!res.ok) throw new Error('Failed to load posts')
      return res.json()
    },
  })

  return (
    <main>
      <CoverBlock
        image="/design-build/project-2.jpg"
        wash="blog"
        title="Notes from the grounds"
      />
      <section className="blog-list">
        {posts.isLoading ? <p>Loading…</p> : null}
        {posts.isError ? <p>Posts could not be loaded.</p> : null}
        <div className="blog-grid">
          {posts.data?.map((post) => (
            <SiteLink key={post.id} to={`/blog/${post.id}`} className="blog-card">
              <img src={post.cover} alt="" />
              <span className="blog-card-title">{post.title}</span>
              <span className="blog-card-excerpt">{post.excerpt}</span>
            </SiteLink>
          ))}
        </div>
      </section>
    </main>
  )
}
