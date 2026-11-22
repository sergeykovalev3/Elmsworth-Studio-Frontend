import { createFileRoute } from '@tanstack/react-router'
import { LandscapeServicesPage } from '../../components/landscape-services-page/LandscapeServicesPage'

export const Route = createFileRoute(
  '/_site/maintenance_/landscape-maintenance-services',
)({
  component: LandscapeServicesPage,
})
