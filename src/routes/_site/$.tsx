import { createFileRoute } from '@tanstack/react-router'
import { findStaticPage } from '../../content/pages'
import { StaticPage } from '../../components/static-page/StaticPage'

export const Route = createFileRoute('/_site/$')({
  component: CatchAllPage,
})

function CatchAllPage() {
  const { _splat } = Route.useParams()
  const page = findStaticPage(_splat ?? '')

  if (page) {
    return <StaticPage page={page} />
  }

  const title = (_splat ?? '')
    .split('/')
    .filter(Boolean)
    .map((part) => part.replace(/-/g, ' '))
    .join(' / ')

  return (
    <main className="page-stub">
      <h1>{title || 'Page'}</h1>
      <p>This page is still taking shape.</p>
    </main>
  )
}
