import React from 'react'
import { Container } from '../layout/Container'

export function Hero() {
  return (
    <section className="py-section-lg bg-background">
      <Container>
        <div className="max-w-[880px]">
          <p className="text-lg text-primary-light mb-[16px]">
            Hi, I'm Nguyen 🔊
          </p>
          
          <h1 className="mb-[24px]">
            Designer, builder, mentor. I simplify complexity and drive innovation to create user-centric solutions with impacts.
          </h1>
        </div>
      </Container>
    </section>
  )
}
