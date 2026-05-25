export interface Article {
  slug: string
  title: string
  category: 'Case study' | 'Playbook' | 'Reflection' | 'Exploration'
  excerpt: string
  date?: string
}

export const articles: Article[] = [
  {
    slug: 'ai-design-crit-build',
    title: 'Building "AI Design Crit" for $0 with Gemini 3 & Scaleway',
    category: 'Case study',
    excerpt: 'Context, roadblocks, solutions and learnings of building an AI critique app that gives instant, structured UI feedback',
  },
  {
    slug: 'ai-prototyping-playbook',
    title: 'An AI-assisted prototyping playbook',
    category: 'Playbook',
    excerpt: 'AI prototyping isn\'t magic—it\'s a playbook. Frame problems, craft prompts, iterate fast. Structure makes speed stick.',
  },
  {
    slug: 'curators-before-creators',
    title: 'Curators before creators: Why designers need a Problem-first mindset',
    category: 'Reflection',
    excerpt: 'Design isn\\'t just polish — it\\'s purpose. Shift from executor to curator by focusing on the right problems and make real impacts.',
  },
  {
    slug: 'can-design-be-explained-with-art',
    title: 'Can Design be Explained with Art',
    category: 'Exploration',
    excerpt: '10 usability heuristics explained with art.',
  },
  {
    slug: 'powerlifting-lessons',
    title: 'How Lifting 205kg Helps Me Become a Better Designer',
    category: 'Reflection',
    excerpt: 'Powerlifting taught me design lessons: iterate through trial and error, focus on details with clear vision, ditch ego, stay consistent, value teamwork, and build resilience.',
  },
]
