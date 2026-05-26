import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { ProjectNav } from '@/components/navigation/ProjectNav'
import { workProjects, playProjects, type Project, type SubProject } from '@/content/projects'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

function getSubProjectDescription(subProject: SubProject): string {
  return 'overview' in subProject && subProject.overview
    ? subProject.overview
    : ''
}

function getSubProjectAchievements(subProject: SubProject): string[] | undefined {
  return 'achievements' in subProject ? subProject.achievements : undefined
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project =
    workProjects.find((p) => p.slug === slug) ||
    playProjects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <Container>
        <div className="py-section-md">
          <Breadcrumbs />
          <h1 className="py-section-md">Project not found</h1>
          <p className="mt-[16px] text-primary-muted">
            Looking for: {slug}
          </p>
        </div>
      </Container>
    )
  }

  // Check if this is a parent project with sub-projects
  const hasSubProjects = project.subProjects && project.subProjects.length > 0

  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <Breadcrumbs />
            
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {project.type.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            
            <h1 className="mb-[24px]">{project.title}</h1>
            
            <p className="text-lg text-primary-light mb-[12px]">
              {project.description}
            </p>
            
            {project.status === 'coming soon' && (
              <Badge className="bg-background-accent">Coming soon</Badge>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md">
          <div className="max-w-[880px]">
            {/* Impact */}
            <section id="impact" className="mb-[64px]">
              <h2 className="text-2xl font-normal text-primary mb-[24px]">Impact</h2>
              <p className="text-base text-primary-muted leading-relaxed">
                {project.impact}
              </p>
            </section>
            
            {/* Parent project overview with sub-projects */}
            {hasSubProjects && (
              <section id="projects" className="mb-[64px]">
                <h2 className="text-2xl font-normal text-primary mb-[32px]">Projects</h2>
                <div className="grid grid-cols-1 gap-[24px]">
                  {project.subProjects!.map((subProject) => (
                    <Link
                      key={subProject.slug}
                      href={`/work/${slug}/${subProject.slug}`}
                      className="block"
                    >
                      <Card className="flex flex-col gap-[12px] hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-normal text-primary">
                          {subProject.title}
                        </h3>
                        <p className="text-base text-primary-light">
                          {getSubProjectDescription(subProject)}
                        </p>
                        {getSubProjectDescription(subProject) && (
                          <ul className="mt-[12px] space-y-[8px]">
                            {getSubProjectAchievements(subProject)?.slice(0, 2).map((achievement: string, index: number) => (
                              <li key={index} className="flex gap-[8px] text-sm text-primary-muted">
                                <span>•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
            
            <ProjectNav currentSlug={slug} />
          </div>
        </div>
      </Container>
    </>
  )
}
