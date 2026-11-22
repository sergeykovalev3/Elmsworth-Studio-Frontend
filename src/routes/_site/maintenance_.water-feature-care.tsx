import { createFileRoute } from '@tanstack/react-router'
import { WaterCarePage } from '../../components/water-care-page/WaterCarePage'

export const Route = createFileRoute('/_site/maintenance_/water-feature-care')({
  component: WaterCarePage,
})
