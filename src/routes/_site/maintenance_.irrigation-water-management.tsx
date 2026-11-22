import { createFileRoute } from '@tanstack/react-router'
import { IrrigationPage } from '../../components/irrigation-page/IrrigationPage'

export const Route = createFileRoute(
  '/_site/maintenance_/irrigation-water-management',
)({
  component: IrrigationPage,
})
