import { createFileRoute } from '@tanstack/react-router'
import { LightCarePage } from '../../components/light-care-page/LightCarePage'

export const Route = createFileRoute(
  '/_site/maintenance_/outdoor-lighting-maintenance',
)({
  component: LightCarePage,
})
