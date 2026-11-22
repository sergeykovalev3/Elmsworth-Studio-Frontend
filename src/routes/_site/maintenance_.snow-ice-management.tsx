import { createFileRoute } from '@tanstack/react-router'
import { SnowPage } from '../../components/snow-page/SnowPage'

export const Route = createFileRoute('/_site/maintenance_/snow-ice-management')({
  component: SnowPage,
})
