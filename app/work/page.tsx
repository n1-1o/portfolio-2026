import React from 'react'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { workProjects } from '@/content/projects'

export default function WorkPage() {
  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <h1>Work</h1>
            <p className="text-lg text-primary-light mt-[16px]">
              Professional experience and impact
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md">
          <div className="grid grid-cols-1 gap-[32px]">
            {workProjects.map((project) => (
              <Link 
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block"
              >
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
                    <p className="text-sm text-primary-muted">
                      {project.impact}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
