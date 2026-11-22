import { createFileRoute } from '@tanstack/react-router'
import { MaintenancePage } from '../../components/maintenance-page/MaintenancePage'

export const Route = createFileRoute('/_site/maintenance')({
  component: MaintenancePage,
})
