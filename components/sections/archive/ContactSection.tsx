'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Card } from '../../ui/Card'

interface ContactSectionProps {
  id?: string
}

export function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="py-section-md bg-background-secondary">
      <Container>
        <div className="max-w-[880px]">
          <motion.h2
            className="mb-[32px]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Let's work together
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card className="flex flex-col gap-[24px]">
              <p className="text-base text-primary">
                I'm always open to discussing new opportunities, creative ideas, and design challenges.
              </p>
              
              <div className="flex flex-col gap-[16px]">
                {/* Email */}
                <motion.a
                  href="mailto:hello@nguyentran-ngo.design"
                  className="inline-flex items-center gap-[12px] text-interactive hover:opacity-80 transition-opacity"
                  aria-label="Send me an email"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-base">hello@nguyentran-ngo.design</span>
                </motion.a>
                
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/nguyentran-ngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[12px] text-interactive hover:opacity-80 transition-opacity"
                  aria-label="View my LinkedIn profile"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="text-base">linkedin.com/in/nguyentran-ngo</span>
                </motion.a>
                
                {/* Medium */}
                <motion.a
                  href="https://medium.com/@nguyentran-ngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[12px] text-interactive hover:opacity-80 transition-opacity"
                  aria-label="Read my articles on Medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M10 9h4" />
                    <path d="M10 12h4" />
                    <path d="M10 15h4" />
                  </svg>
                  <span className="text-base">medium.com/@nguyentran-ngo</span>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
