'use client'

import React from 'react'
import { motion } from 'framer-motion'

const audiencePills = [
  { label: 'For anyone' },
  { label: 'Recruiters' },
  { label: 'Designers' },
  { label: 'Product Managers' },
  { label: 'Engineers' },
]

export function AudienceSelector() {
  return (
    <div className="flex flex-wrap gap-[8px] py-[16px]">
      {audiencePills.map((pill, index) => (
        <motion.button
          key={pill.label}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-[16px] py-[8px] rounded-md text-sm bg-background text-primary hover:bg-background-accent transition-colors"
        >
          {pill.label}
        </motion.button>
      ))}
    </div>
  )
}
