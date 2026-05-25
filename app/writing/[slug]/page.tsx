import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { articles } from '@/content/articles'

interface ArticlePageProps {
  params: { slug: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    return (
      <Container>
        <div className="py-section-md">
          <h1>Article not found</h1>
        </div>
      </Container>
    )
  }

  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <Badge className="mb-[16px]">{article.category}</Badge>
            <h1 className="mb-[24px]">{article.title}</h1>
            <p className="text-lg text-primary-light">
              {article.excerpt}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-section-md max-w-[880px]">
          <div className="prose prose-lg">
            <p className="text-primary-muted">
              Content coming soon...
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
