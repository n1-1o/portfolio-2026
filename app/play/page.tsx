import React from 'react'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { playProjects } from '@/content/projects'

export default function PlayPage() {
  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <h1>Play</h1>
            <p className="text-lg text-primary-light mt-[16px]">
              Side projects, experiments, and creative explorations
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {playProjects.map((project) => (
              <Link 
                key={project.slug}
                href={`/play/${project.slug}`}
                className="block"
              >
                <Card className="flex flex-col gap-[16px] h-full">
                  <div className="flex flex-wrap gap-[8px]">
                    {project.type.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-normal text-primary mb-[8px]">
                      {project.title}
                    </h3>
                    <p className="text-base text-primary-light">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.status === 'coming soon' && (
                    <Badge className="bg-background-accent self-start">
                      Coming soon
                    </Badge>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
