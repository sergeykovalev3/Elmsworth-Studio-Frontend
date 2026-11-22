import { createFileRoute } from '@tanstack/react-router'
import { FireplacesPage } from '../../components/fireplaces-page/FireplacesPage'

export const Route = createFileRoute('/_site/design-build_/fireplaces-fire-pits')({
  component: FireplacesPage,
})
