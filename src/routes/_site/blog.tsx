import { createFileRoute } from '@tanstack/react-router'
import { BlogList } from '../../components/blog-list/BlogList'

export const Route = createFileRoute('/_site/blog')({
  component: BlogList,
})
