import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { ProjectNav } from '@/components/navigation/ProjectNav'
import { TableOfContents } from '@/components/ui/TableOfContents'
import { workProjects, type SubProject } from '@/content/projects'
import { type Section } from '@/hooks/useSectionObserver'

interface SubProjectPageProps {
  params: Promise<{ slug: string; subSlug: string }>
}

function renderSectionImages(images: SubProject['images'], sectionTitle: string) {
  if (!images) return null
  
  const sectionImages = images.filter(img => img.section === sectionTitle)
  
  if (sectionImages.length === 0) return null
  
  return (
    <div className="mt-[24px] space-y-[24px]">
      {sectionImages.map((image, index) => (
        <div key={index}>
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-background-secondary">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {image.caption && (
            <p className="text-sm text-primary-muted mt-[8px]">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default async function SubProjectPage({ params }: SubProjectPageProps) {
  const { slug, subSlug } = await params
  
  const parentProject = workProjects.find(p => p.slug === slug)
  
  if (!parentProject || !parentProject.subProjects) {
    return (
      <Container>
        <div className="py-section-md">
          <Breadcrumbs />
          <h1>Project not found</h1>
        </div>
      </Container>
    )
  }
  
  const subProject = parentProject.subProjects.find(sp => sp.slug === subSlug)
  
  if (!subProject) {
    return (
      <Container>
        <div className="py-section-md">
          <Breadcrumbs />
          <h1>Sub-project not found</h1>
          <p className="mt-[16px] text-primary-muted">
            Looking for: {subSlug} in {parentProject.title}
          </p>
        </div>
      </Container>
    )
  }
  
  // Generate sections for table of contents from subProject properties
  const sections: Section[] = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'achievements', title: 'Key Achievements', level: 1 },
    { id: 'metrics', title: 'Metrics', level: 1 },
  ]
  
  if ('challenges' in subProject && subProject.challenges) {
    sections.push({ id: 'challenges', title: 'Challenges', level: 1 })
  }
  
  if ('designStrategy' in subProject && subProject.designStrategy) {
    sections.push({ id: 'design-strategy', title: 'Design Strategy', level: 1 })
  }
  
  if ('sections' in subProject && subProject.sections) {
    sections.push({ id: 'process', title: 'Process', level: 1 })
  }
  
  if ('iterations' in subProject && subProject.iterations) {
    sections.push({ id: 'iterations', title: 'Iterations', level: 1 })
  }
  
  if ('takeaways' in subProject && subProject.takeaways) {
    sections.push({ id: 'takeaways', title: 'Key Takeaways', level: 1 })
  }
  
  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <Breadcrumbs />
            
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {parentProject.type.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            
            <p className="text-sm text-primary-muted mb-[8px]">
              {parentProject.title}
            </p>
            
            <h1 className="mb-[24px]">{subProject.title}</h1>
            
            <p className="text-lg text-primary-light">
              {'overview' in subProject && subProject.overview ? subProject.overview : subProject.achievements.join(' • ')}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md">
          <div className="grid grid-cols-12 gap-[48px]">
            {/* Main content */}
            <div className="col-span-12 lg:col-span-9">
              <div className="max-w-[880px]">
                {/* Hero Image */}
                {'heroImage' in subProject && subProject.heroImage && (
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-background-secondary mb-[32px]">
                    <img
                      src={subProject.heroImage}
                      alt={`${subProject.title} hero`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Overview */}
                <section id="overview" className="mb-[64px]">
                  <h2 className="text-2xl font-normal text-primary mb-[24px]">Overview</h2>
                  <p className="text-base text-primary-light leading-relaxed">
                    {'role' in subProject && subProject.role ? subProject.role : 'Detailed project information'}
                  </p>
                  {'team' in subProject && subProject.team && (
                    <div className="mt-[24px]">
                      <h3 className="text-lg font-normal text-primary mb-[12px]">Team</h3>
                      <p className="text-base text-primary-light">
                        {subProject.team?.join(' • ')}
                      </p>
                    </div>
                  )}
                </section>
                
                {/* Achievements */}
                <section id="achievements" className="mb-[64px]">
                  <h2 className="text-2xl font-normal text-primary mb-[24px]">Key Achievements</h2>
                  <ul className="space-y-[12px]">
                    {subProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-[12px]">
                        <span className="text-primary">•</span>
                        <span className="text-base text-primary-light">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                {/* Metrics */}
                {subProject.metrics && subProject.metrics.length > 0 && (
                  <section id="metrics" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                      {subProject.metrics.map((metric, index) => (
                        <Card key={index} className="p-[24px]">
                          <div className="text-3xl font-normal text-primary mb-[8px]">
                            {metric.value}
                          </div>
                          <div className="text-sm font-medium text-primary-light mb-[4px]">
                            {metric.label}
                          </div>
                          {metric.description && (
                            <div className="text-sm text-primary-muted">
                              {metric.description}
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
                
                {/* Challenges */}
                {subProject.challenges && subProject.challenges.length > 0 && (
                  <section id="challenges" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Challenges</h2>
                    <div className="space-y-[24px]">
                      {subProject.challenges.map((challenge, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-normal text-primary mb-[8px]">
                            {challenge.title}
                          </h3>
                          <p className="text-base text-primary-light leading-relaxed">
                            {challenge.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {/* Design Strategy */}
                {subProject.designStrategy && (
                  <section id="design-strategy" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Design Strategy</h2>
                    <p className="text-base text-primary-light leading-relaxed mb-[32px]">
                      {subProject.designStrategy.description}
                    </p>
                    {subProject.designStrategy.features && (
                      <div className="space-y-[24px]">
                        {subProject.designStrategy.features.map((feature, index) => (
                          <Card key={index} className="p-[24px]">
                            <h3 className="text-lg font-normal text-primary mb-[8px]">
                              {feature.name}
                            </h3>
                            <p className="text-base text-primary-light mb-[12px]">
                              {feature.description}
                            </p>
                            <p className="text-sm text-primary-muted">
                              <span className="font-medium">Impact: </span>
                              {feature.impact}
                            </p>
                          </Card>
                        ))}
                      </div>
                    )}
                  </section>
                )}
                
                {/* Process */}
                {subProject.sections && subProject.sections.length > 0 && (
                  <section id="process" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Process</h2>
                    <div className="space-y-[32px]">
                      {subProject.sections.map((section, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-normal text-primary mb-[12px]">
                            {section.title}
                          </h3>
                          <p className="text-base text-primary-light leading-relaxed">
                            {section.content}
                          </p>
                          {renderSectionImages(subProject.images, section.title)}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {/* Iterations */}
                {subProject.iterations && (
                  <section id="iterations" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Iterations</h2>
                    <p className="text-base text-primary-light leading-relaxed">
                      {subProject.iterations}
                    </p>
                  </section>
                )}
                
                {/* Takeaways */}
                {subProject.takeaways && (
                  <section id="takeaways" className="mb-[64px]">
                    <h2 className="text-2xl font-normal text-primary mb-[24px]">Key Takeaways</h2>
                    <p className="text-base text-primary-light leading-relaxed">
                      {subProject.takeaways}
                    </p>
                  </section>
                )}
                
                <ProjectNav 
                  currentSlug={subSlug}
                  parentSlug={slug}
                />
              </div>
            </div>
            
            {/* Table of Contents - sticky sidebar */}
            <div className="hidden lg:block col-span-3">
              <TableOfContents sections={sections} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
