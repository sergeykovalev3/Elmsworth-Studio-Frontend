import { createFileRoute } from '@tanstack/react-router'
import { SeasonalPage } from '../../components/seasonal-page/SeasonalPage'

export const Route = createFileRoute('/_site/design-build_/seasonal-services')({
  component: SeasonalPage,
})
