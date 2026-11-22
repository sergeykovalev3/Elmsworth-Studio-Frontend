import { createFileRoute } from '@tanstack/react-router'
import { BuildMaintenancePage } from '../../components/build-maintenance-page/BuildMaintenancePage'

export const Route = createFileRoute('/_site/design-build_/maintenance')({
  component: BuildMaintenancePage,
})
