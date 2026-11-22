import { createFileRoute } from '@tanstack/react-router'
import { LandscapesPage } from '../../components/landscapes-page/LandscapesPage'

export const Route = createFileRoute('/_site/design-build_/landscapes')({
  component: LandscapesPage,
})
