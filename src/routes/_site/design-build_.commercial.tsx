import { createFileRoute } from '@tanstack/react-router'
import { CommercialPage } from '../../components/commercial-page/CommercialPage'

export const Route = createFileRoute('/_site/design-build_/commercial')({
  component: CommercialPage,
})
