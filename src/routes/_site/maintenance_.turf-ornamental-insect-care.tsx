import { createFileRoute } from '@tanstack/react-router'
import { TurfCarePage } from '../../components/turf-care-page/TurfCarePage'

export const Route = createFileRoute(
  '/_site/maintenance_/turf-ornamental-insect-care',
)({
  component: TurfCarePage,
})
