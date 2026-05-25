import React from 'react'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { articles } from '@/content/articles'

export default function WritingPage() {
  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <h1>Writing</h1>
            <p className="text-lg text-primary-light mt-[16px]">
              Thoughts, case studies, and explorations on design and technology
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md">
          <div className="flex flex-col gap-[24px] max-w-[880px]">
            {articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="block"
              >
                <Card className="flex flex-col gap-[12px]">
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
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
