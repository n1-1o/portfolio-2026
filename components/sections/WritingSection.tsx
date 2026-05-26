'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { articles } from '@/content/articles'
import { staggerChildrenVariants, staggerChildItemVariants } from '../ui/motion'

export function WritingSection() {
  return (
    <section id="writing" className="py-section-md">
      <Container>
        <motion.h2
          className="mb-[32px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Writing
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
          variants={staggerChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {articles.map((article, index) => {
            const placeholderIndex = (index % 5) + 1
            const placeholderSrc = `/article-placeholder-${placeholderIndex}.svg`
            
            return (
              <motion.div key={article.slug} variants={staggerChildItemVariants}>
                <Card className="flex flex-col gap-[12px]">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-background-secondary mb-[8px]">
                    <img
                      src={placeholderSrc}
                      alt={`${article.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge>{article.category}</Badge>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-normal text-primary mb-[8px]">
                      {article.title}
                    </h3>
                    <p className="text-base text-primary-light">
                      {article.excerpt}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
