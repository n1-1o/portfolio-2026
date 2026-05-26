'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { workProjects, playProjects, type Project } from '@/content/projects'
import { staggerChildrenVariants, staggerChildItemVariants } from '../ui/motion'

export function WorkSection() {
  return (
    <Container>
      {/* Work Section */}
      <section id="work" className="py-section-md">
        <motion.h2
          className="mb-[32px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Work
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px]"
          variants={staggerChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workProjects.map((project, index) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="block">
              <motion.div variants={staggerChildItemVariants}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Play Section */}
      <section id="play" className="py-section-md bg-background-secondary">
        <Container>
          <motion.h2
            className="mb-[32px] text-primary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Play
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
          {playProjects.map((project, index) => (
            <Link key={project.slug} href={`/play/${project.slug}`} className="block">
              <motion.div variants={staggerChildItemVariants}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            </Link>
          ))}
          </motion.div>
        </Container>
      </section>
    </Container>
  )
}

function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const placeholderIndex = (index % 6) + 1
  const placeholderSrc = `/project-placeholder-${placeholderIndex}.svg`
  
  return (
    <Card className="flex flex-col gap-[16px]">
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-background-secondary">
        <img
          src={placeholderSrc}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
        />
      </div>
      
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
