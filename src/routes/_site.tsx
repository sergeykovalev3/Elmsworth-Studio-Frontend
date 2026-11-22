import { Outlet, createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/site-footer/SiteFooter'
import { SiteHeader } from '../components/site-header/SiteHeader'
import { documentTitle } from '../page-title'

export const Route = createFileRoute('/_site')({
  head: ({ matches }) => {
    const pathname = matches.at(-1)?.pathname ?? '/'
    const title = documentTitle(pathname)
    return title ? { meta: [{ title }] } : {}
  },
  component: SiteLayout,
})

function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  )
}
