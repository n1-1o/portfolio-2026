import { workProjects } from '@/content/projects'

export function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }))
}

export { default } from './page'
