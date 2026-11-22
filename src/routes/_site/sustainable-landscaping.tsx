import { createFileRoute } from '@tanstack/react-router'
import { SustainablePage } from '../../components/sustainable-page/SustainablePage'

export const Route = createFileRoute('/_site/sustainable-landscaping')({
  component: SustainablePage,
})
