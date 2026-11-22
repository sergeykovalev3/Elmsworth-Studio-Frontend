import { createFileRoute } from '@tanstack/react-router'
import { ProjectGallery } from '../../components/project-gallery/ProjectGallery'

export const Route = createFileRoute('/_site/projects')({
  component: ProjectGallery,
})
