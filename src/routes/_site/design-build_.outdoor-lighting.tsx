import { createFileRoute } from '@tanstack/react-router'
import { LightingPage } from '../../components/lighting-page/LightingPage'

export const Route = createFileRoute('/_site/design-build_/outdoor-lighting')({
  component: LightingPage,
})
