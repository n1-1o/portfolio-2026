import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { MDXRemote } from 'next-mdx-remote'
import { loadArticle } from '@/lib/loadArticle'
import type { ArticleFrontmatter } from '@/lib/loadArticle'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

// Custom components for MDX rendering
const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-semibold mt-12 mb-6" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-primary-muted leading-relaxed mb-6" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-accent pl-6 py-2 my-6 italic text-primary-muted bg-background-secondary rounded-r-lg"
      {...props}
    />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-primary-muted" {...props} />
  ),
  ol: ({ children, className }: { children?: React.ReactNode; className?: string }) => (
    <ol className={`list-decimal list-inside space-y-2 mb-6 text-primary-muted ${className || ''}`}>
      {children}
    </ol>
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="bg-background-secondary px-2 py-1 rounded text-sm font-mono text-accent"
      {...props}
    />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="bg-background-secondary p-6 rounded-lg overflow-x-auto my-6 border border-border"
      {...props}
    />
  ),
  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr className="border-border my-12" {...props} />
  ),
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  
  const article = await loadArticle(slug)

  if (!article) {
    return (
      <Container>
        <div className="py-section-md">
          <h1>Article not found</h1>
        </div>
      </Container>
    )
  }

  const { frontmatter, content } = article

  return (
    <>
      <div className="bg-background-secondary py-section-md">
        <Container>
          <div className="max-w-[880px]">
            <Badge className="mb-[16px]">{frontmatter.category}</Badge>
            <h1 className="mb-[24px]">{frontmatter.title}</h1>
            <div className="flex items-center gap-4 text-sm text-primary-muted mb-[24px]">
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <p className="text-lg text-primary-light">
              {frontmatter.excerpt}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <article className="py-section-md max-w-[880px]">
          <div className="prose prose-lg prose-invert max-w-none">
            <MDXRemote {...content} components={mdxComponents} />
          </div>
        </article>
      </Container>
    </>
  )
}
