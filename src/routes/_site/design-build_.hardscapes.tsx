import { createFileRoute } from '@tanstack/react-router'
import { HardscapesPage } from '../../components/hardscapes-page/HardscapesPage'

export const Route = createFileRoute('/_site/design-build_/hardscapes')({
  component: HardscapesPage,
})
