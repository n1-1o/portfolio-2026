'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { testimonials } from '@/content/testimonials'
import { staggerChildrenVariants, staggerChildItemVariants } from '../ui/motion'

interface TestimonialsSectionProps {
  id?: string
}

export function TestimonialsSection({ id }: TestimonialsSectionProps) {
  return (
    <section id={id} className="py-section-md bg-background-secondary">
      <Container>
        <motion.h2
          className="mb-[32px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          What my teammates say
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px]"
          variants={staggerChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerChildItemVariants}>
              <Card className="flex flex-col gap-[16px]">
                <motion.blockquote
                  className="text-base text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  "{testimonial.quote}"
                </motion.blockquote>
                
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-muted">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
