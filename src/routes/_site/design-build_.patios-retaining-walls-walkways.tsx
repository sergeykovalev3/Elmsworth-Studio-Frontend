import { createFileRoute } from '@tanstack/react-router'
import { PatiosPage } from '../../components/patios-page/PatiosPage'

export const Route = createFileRoute(
  '/_site/design-build_/patios-retaining-walls-walkways',
)({
  component: PatiosPage,
})
