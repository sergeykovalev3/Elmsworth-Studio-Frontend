import { createFileRoute } from '@tanstack/react-router'
import { OutdoorLivingPage } from '../../components/outdoor-living-page/OutdoorLivingPage'

export const Route = createFileRoute('/_site/design-build_/outdoor-living-spaces')({
  component: OutdoorLivingPage,
})
