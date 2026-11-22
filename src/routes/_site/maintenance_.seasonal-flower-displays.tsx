import { createFileRoute } from '@tanstack/react-router'
import { FlowerDisplaysPage } from '../../components/flower-displays-page/FlowerDisplaysPage'

export const Route = createFileRoute(
  '/_site/maintenance_/seasonal-flower-displays',
)({
  component: FlowerDisplaysPage,
})
