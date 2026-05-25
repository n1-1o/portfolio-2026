export interface Project {
  slug: string
  title: string
  company: string
  type: string[]  // e.g., ['B2B2C', 'Cloud', 'AI', 'PaaS', 'IaaS']
  description: string
  impact: string
  status?: 'live' | 'coming soon'
  image?: string
}

export const workProjects: Project[] = [
  {
    slug: 'scaleway',
    title: 'Scaleway',
    company: 'Scaleway',
    type: ['B2B2C', 'Cloud', 'AI', 'PaaS', 'IaaS'],
    description: 'Building European AI & Cloud technologies',
    impact: 'Lead high-impact initiatives across AI, Web Cloud, Console, and DesignOps, driving innovation, accelerating clarity, alignment, and delivery in a complex cloud ecosystem.',
    status: 'live',
  },
  {
    slug: 'fonoa',
    title: 'Fonoa',
    company: 'Fonoa',
    type: ['B2B', 'SaaS', 'Fintech'],
    description: 'Built Taxtech products for global businesses',
    impact: 'Led E2E design. Built a million-dollar revenue-generator. Developed the Design team. Established the Design System. Shaped Fonoa\'s visual identity.',
  },
  {
    slug: 'thales',
    title: 'Thales - Quantum',
    company: 'Thales',
    type: ['B2B', 'Web Design', 'Design System'],
    description: 'Working with Thales' in-house design team to create Thales' first Design System Platform',
    impact: 'A Single Source of Truth for Thales' design language, paving the way for the company's digital transformation.',
  },
  {
    slug: 'google',
    title: 'Doodle4Google Vietnam',
    company: 'Google',
    type: ['B2C', 'Web Design', 'Edutech'],
    description: 'Built & launched Doodle4Google in Vietnam',
    impact: 'Built Doodle4Google\'s first educative hub in Vietnam. Inspired 3500 kids to draw and submit their dreams to Google homepage's doodle.',
  },
]

export const playProjects: Project[] = [
  {
    slug: 'scaleway-quest',
    title: 'Scaleway Quest',
    company: 'Personal',
    type: ['Game', 'Educational'],
    description: 'A browser-based 16-bit pixel RPG that gamifies employee onboarding',
    status: 'coming soon',
  },
  {
    slug: 'historactive',
    title: 'Historactive',
    company: 'Personal',
    type: ['Website', 'Educational'],
    description: 'Interactive 3D editorial experiences for historical landmarks',
  },
  {
    slug: 'fundamentals-vol1',
    title: '☁️ Fundamentals Vol. 1',
    company: 'Personal',
    type: ['Music', 'Edutainment'],
    description: 'Cloud technologies explained with AI music',
  },
  {
    slug: 'ai-design-crit',
    title: 'AI Design Crit',
    company: 'Personal',
    type: ['Web App', 'AI'],
    description: 'AI critique app that gives instant, structured UI feedback',
  },
  {
    slug: 'colourful-potholes',
    title: 'The Colourful Potholes',
    company: 'Personal',
    type: ['Public Safety', 'Environment Design'],
    description: 'A simple and cost-effective solution that may save lives, or just your outfit.',
  },
  {
    slug: 'bug-agency',
    title: 'Bug Agency',
    company: 'Personal',
    type: ['Website'],
    description: 'Ultra-light website that cut 50% CO₂ emissions per page. Earned the Green Tech Verte medal and Gold Label from Green Code Label.',
  },
]
