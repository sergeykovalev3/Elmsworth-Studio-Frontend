import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../../components/about-page/AboutPage'

export const Route = createFileRoute('/_site/about')({
  component: AboutPage,
})
