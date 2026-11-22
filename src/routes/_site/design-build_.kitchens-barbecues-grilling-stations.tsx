import { createFileRoute } from '@tanstack/react-router'
import { KitchensPage } from '../../components/kitchens-page/KitchensPage'

export const Route = createFileRoute(
  '/_site/design-build_/kitchens-barbecues-grilling-stations',
)({
  component: KitchensPage,
})
