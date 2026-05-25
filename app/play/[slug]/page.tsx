import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { playProjects } from '@/content/projects'

interface PlayProjectPageProps {
  params: { slug: string }
}

export default function PlayProjectPage({ params }: PlayProjectPageProps) {
  const project = playProjects.find(p => p.slug === params.slug)

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
    </>
  )
}
