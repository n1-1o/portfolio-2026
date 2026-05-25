import React from 'react'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { testimonials } from '@/content/testimonials'

export function TestimonialsSection() {
  return (
    <section className="py-section-md bg-background-secondary">
      <Container>
        <h2 className="mb-[32px]">What my teammates say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col gap-[16px]">
              <blockquote className="text-base text-primary">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-muted">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
