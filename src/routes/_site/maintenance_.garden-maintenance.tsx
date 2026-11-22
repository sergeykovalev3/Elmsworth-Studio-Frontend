import { createFileRoute } from '@tanstack/react-router'
import { GardenMaintenancePage } from '../../components/garden-maintenance-page/GardenMaintenancePage'

export const Route = createFileRoute('/_site/maintenance_/garden-maintenance')({
  component: GardenMaintenancePage,
})
