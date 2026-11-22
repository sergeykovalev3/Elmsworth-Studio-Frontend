import { createFileRoute } from '@tanstack/react-router'
import { DesignBuildPage } from '../../components/design-build-page/DesignBuildPage'

export const Route = createFileRoute('/_site/design-build')({
  component: DesignBuildPage,
})
