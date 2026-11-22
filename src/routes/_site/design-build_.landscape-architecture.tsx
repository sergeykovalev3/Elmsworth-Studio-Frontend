import { createFileRoute } from '@tanstack/react-router'
import { ArchitecturePage } from '../../components/architecture-page/ArchitecturePage'

export const Route = createFileRoute('/_site/design-build_/landscape-architecture')({
  component: ArchitecturePage,
})
