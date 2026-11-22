import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { brandFull } from '../brand'

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: brandFull }],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  )
}
