import { createFileRoute } from '@tanstack/react-router'
import { PestControlPage } from '../../components/pest-control-page/PestControlPage'

export const Route = createFileRoute(
  '/_site/maintenance_/mosquito-flea-tick-control',
)({
  component: PestControlPage,
})
