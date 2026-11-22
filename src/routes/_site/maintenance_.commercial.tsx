import { createFileRoute } from '@tanstack/react-router'
import { CommercialCarePage } from '../../components/commercial-care-page/CommercialCarePage'

export const Route = createFileRoute('/_site/maintenance_/commercial')({
  component: CommercialCarePage,
})
