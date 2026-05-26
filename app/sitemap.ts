import type { MetadataRoute } from 'next'
import { workProjects, playProjects } from '@/content/projects'
import { articles } from '@/content/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nguyentran-ngo.design'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/play`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Work project pages (parent routes)
  const workProjectPages: MetadataRoute.Sitemap = workProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Work sub-project pages (nested routes)
  const workSubProjectPages: MetadataRoute.Sitemap = workProjects.flatMap((project) =>
    project.subProjects?.map((subProject) => ({
      url: `${baseUrl}/work/${project.slug}/${subProject.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })) || []
  )

  // Play project pages
  const playProjectPages: MetadataRoute.Sitemap = playProjects.map((project) => ({
    url: `${baseUrl}/play/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Writing/article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: article.date ? new Date(article.date).toISOString() : currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...workProjectPages,
    ...workSubProjectPages,
    ...playProjectPages,
    ...articlePages,
  ]
}
