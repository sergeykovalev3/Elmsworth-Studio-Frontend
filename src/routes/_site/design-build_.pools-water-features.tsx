import { createFileRoute } from '@tanstack/react-router'
import { PoolsPage } from '../../components/pools-page/PoolsPage'

export const Route = createFileRoute('/_site/design-build_/pools-water-features')({
  component: PoolsPage,
})
