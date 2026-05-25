'use client'

import React, { useState } from 'react'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { workProjects, playProjects, type Project } from '@/content/projects'

const audienceFilters = [
  { id: 'all', label: 'For anyone' },
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'designers', label: 'Designers' },
  { id: 'pm', label: 'Product Managers' },
  { id: 'engineers', label: 'Engineers' },
]

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  // For now, show all projects. Later we can filter by audience
  const filteredWork = workProjects
  const filteredPlay = playProjects

  return (
    <Container>
      {/* Work Section */}
      <section id="work" className="py-section-md">
        <h2 className="mb-[32px]">Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {filteredWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Play Section */}
      <section id="play" className="py-section-md">
        <h2 className="mb-[32px]">Play</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {filteredPlay.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col gap-[16px]">
      <div className="flex flex-wrap gap-[8px]">
        {project.type.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      
      <div>
        <h3 className="text-xl font-normal text-primary mb-[8px]">
          {project.title}
        </h3>
        <p className="text-base text-primary-light mb-[12px]">
          {project.description}
        </p>
        <p className="text-base text-primary-muted">
          {project.impact}
        </p>
      </div>
      
      {project.status === 'coming soon' && (
        <Badge className="bg-background-accent">Coming soon</Badge>
      )}
    </Card>
  )
}
