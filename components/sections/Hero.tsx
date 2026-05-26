'use client'

import React from 'react'
import { Container } from '../layout/Container'
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/motion'
import Link from 'next/link'

const socialLinks = [
  { href: 'mailto:hello@nguyentran-ngo.design', label: 'Email' },
  { href: 'https://linkedin.com/in/nguyentran-ngo', label: 'LinkedIn', external: true },
  { href: 'https://medium.com/@nguyentran-ngo', label: 'Medium', external: true },
]

export function Hero() {
  return (
    <section className="py-section-lg bg-background">
      <Container>
        <StaggerContainer delayChildren={0.1} staggerInterval={0.15}>
          <div className="max-w-[880px]">
            {/* Social Links - Top */}
            <StaggerItem>
              <div className="flex gap-[24px] mb-[32px]">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-primary hover:text-interactive transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </StaggerItem>

            {/* Intro Text */}
            <StaggerItem>
              <p className="text-sm text-primary-light mb-[16px]">
                Hi, I'm Nguyen 🔊
              </p>
            </StaggerItem>
            
            {/* Headline */}
            <StaggerItem>
              <h1 className="mb-[24px]">
                Designer, builder, mentor. I simplify complexity and drive innovation to create user-centric solutions with impacts.
              </h1>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </Container>
    </section>
  )
}
