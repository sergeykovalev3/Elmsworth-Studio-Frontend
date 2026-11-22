import { createFileRoute } from '@tanstack/react-router'
import { ThemeGardensPage } from '../../components/theme-gardens-page/ThemeGardensPage'

export const Route = createFileRoute(
  '/_site/design-build_/theme-gardens-privacy-plantings-specimen-plantings',
)({
  component: ThemeGardensPage,
})
