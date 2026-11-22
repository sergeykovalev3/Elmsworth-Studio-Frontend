import { createFileRoute } from '@tanstack/react-router'
import { BlogPost, type PostRow } from '../../components/blog-post/BlogPost'

export const Route = createFileRoute('/_site/blog_/$postId')({
  loader: async ({ params }) => {
    const res = await fetch('/api/posts')
    const rows: PostRow[] = res.ok ? await res.json() : []
    const post = rows.find((item) => item.id === params.postId)
    return { title: post?.title ?? 'Note' }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title ?? 'Note' }],
  }),
  component: PostRoute,
})

function PostRoute() {
  const { postId } = Route.useParams()
  return <BlogPost postId={postId} />
}
