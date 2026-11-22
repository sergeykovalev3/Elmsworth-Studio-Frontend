import { createFileRoute } from '@tanstack/react-router'
import { TeamPage } from '../../components/team-page/TeamPage'

export const Route = createFileRoute('/_site/team-and-community')({
  component: TeamPage,
})
