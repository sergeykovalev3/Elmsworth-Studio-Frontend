import { createFileRoute } from '@tanstack/react-router'
import { PavilionsPage } from '../../components/pavilions-page/PavilionsPage'

export const Route = createFileRoute(
  '/_site/design-build_/pavilions-decks-porches-pergolas',
)({
  component: PavilionsPage,
})
