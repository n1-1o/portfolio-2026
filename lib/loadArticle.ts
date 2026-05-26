import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface ArticleFrontmatter {
  title: string
  category: 'Case study' | 'Playbook' | 'Reflection' | 'Exploration'
  excerpt: string
  date: string
}

export interface LoadedArticle {
  slug: string
  frontmatter: ArticleFrontmatter
  content: MDXRemoteSerializeResult
}

export async function loadArticle(slug: string): Promise<LoadedArticle | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'writing', `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    // Parse frontmatter manually (simple YAML parsing)
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    
    if (!frontmatterMatch) {
      throw new Error('Invalid MDX format: missing frontmatter')
    }

    const [, frontmatterRaw, markdownContent] = frontmatterMatch
    
    // Parse YAML frontmatter (basic parser for simple cases)
    const frontmatter: ArticleFrontmatter = {
      title: '',
      category: 'Case study',
      excerpt: '',
      date: '',
    }
    
    frontmatterRaw.split('\n').forEach(line => {
      const match = line.match(/^(.*?):\s*(.*)$/)
      if (match) {
        const [, key, value] = match
        const trimmedKey = key.trim() as keyof ArticleFrontmatter
        // Remove quotes from values
        const trimmedValue = value.trim().replace(/^['"]|['"]$/g, '')
        if (trimmedKey in frontmatter) {
          // Type assertion for category field
          if (trimmedKey === 'category') {
            frontmatter[trimmedKey] = trimmedValue as ArticleFrontmatter['category']
          } else {
            frontmatter[trimmedKey] = trimmedValue
          }
        }
      }
    })

    // Serialize MDX content
    const serializedContent = await serialize(markdownContent, {
      parseFrontmatter: false, // We already parsed it manually
    })

    return {
      slug,
      frontmatter,
      content: serializedContent,
    }
  } catch (error) {
    console.error(`Error loading article "${slug}":`, error)
    return null
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const writingDir = path.join(process.cwd(), 'content', 'writing')
  
  if (!fs.existsSync(writingDir)) {
    return []
  }

  const files = fs.readdirSync(writingDir)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''))
}
