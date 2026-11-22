import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '../../components/project-page/ProjectPage'
import type { ProjectRow } from '../../components/project-gallery/ProjectGallery'

export const Route = createFileRoute('/_site/projects_/$projectId')({
  loader: async ({ params }) => {
    const res = await fetch('/api/projects')
    const rows: ProjectRow[] = res.ok ? await res.json() : []
    const project = rows.find((item) => item.id === params.projectId)
    return { title: project?.title ?? 'Project' }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title ?? 'Project' }],
  }),
  component: ProjectRoute,
})

function ProjectRoute() {
  const { projectId } = Route.useParams()
  return <ProjectPage projectId={projectId} />
}
