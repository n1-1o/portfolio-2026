import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { workProjects, playProjects, type Project } from '@/content/projects'

interface ProjectPageProps {
  params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = workProjects.find(p => p.slug === params.slug) || 
                  playProjects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <Container>
        <div className="py-section-md">
          <h1>Project not found</h1>
        </div>
      </Container>
    )
  }

  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
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
        <div className="py-section-md max-w-[880px]">
          <div className="prose prose-lg">
            <h2 className="mb-[16px]">Impact</h2>
            <p className="text-base text-primary-muted leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
