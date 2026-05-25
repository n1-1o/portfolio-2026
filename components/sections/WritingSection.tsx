import React from 'react'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { articles } from '@/content/articles'

export function WritingSection() {
  return (
    <section id="writing" className="py-section-md">
      <Container>
        <h2 className="mb-[32px]">Writing</h2>
        
        <div className="flex flex-col gap-[24px]">
          {articles.map((article) => (
            <Card key={article.slug} className="flex flex-col gap-[12px]">
              <Badge>{article.category}</Badge>
              
              <div>
                <h3 className="text-xl font-normal text-primary mb-[8px]">
                  {article.title}
                </h3>
                <p className="text-base text-primary-light">
                  {article.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
