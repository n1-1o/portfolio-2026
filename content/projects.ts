export interface ContentSection {
  title: string
  content: string
  subsections?: { title: string; content: string }[]
}

export interface Feature {
  name: string
  description: string
  impact: string
}

export interface Metric {
  label: string
  value: string
  description?: string
}

export interface SubProject {
  slug: string
  title: string
  overview: string
  role: string
  team?: string[]
  duration?: string
  achievements: string[]
  metrics?: Metric[]
  challenges?: ContentSection[]
  designStrategy?: {
    title: string
    description: string
    features: Feature[]
  }
  sections?: ContentSection[]
  iterations?: string
  takeaways?: string
  previousProject?: string
  nextProject?: string
  heroImage?: string
  images?: Array<{
    section: string
    src: string
    alt: string
    caption?: string
  }>
}

export interface Project {
  slug: string
  title: string
  company: string
  type: string[]  // e.g., ['B2B2C', 'Cloud', 'AI', 'PaaS', 'IaaS']
  description: string
  impact: string
  status?: 'live' | 'coming soon'
  image?: string
  // Reference to nested content structure
  contentRef?: string  // e.g., 'fonoa', 'scaleway', 'thales', 'google'
  // For parent projects with sub-projects
  subProjects?: SubProject[]
  // For sub-projects
  parentSlug?: string
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
    contentRef: 'scaleway',
    subProjects: [
      {
        slug: 'ai-inference-platform',
        title: 'AI Inference Platform',
        overview: 'Unified platform for AI model inference',
        role: 'Senior Product Designer',
        achievements: [],
      },
      {
        slug: 'web-cloud',
        title: 'Web Cloud',
        overview: 'Next-generation cloud infrastructure management platform',
        role: 'Senior Product Designer',
        achievements: [],
      },
      {
        slug: 'console-redesign',
        title: 'Console Redesign',
        overview: 'Comprehensive redesign of Scaleway console',
        role: 'Senior Product Designer',
        achievements: [],
      },
      {
        slug: 'design-ops',
        title: 'DesignOps Initiative',
        overview: 'Establishing design operations practices and tooling',
        role: 'DesignOps Lead',
        achievements: [],
      },
    ],
  },
  {
    slug: 'fonoa',
    title: 'Fonoa',
    company: 'Fonoa',
    type: ['B2B', 'SaaS', 'Fintech'],
    description: 'Built Taxtech products for global businesses',
    impact: 'Led E2E design. Built a million-dollar revenue-generator. Developed the Design team. Established the Design System. Shaped Fonoa\'s visual identity.',
    contentRef: 'fonoa',
    subProjects: [
      {
        slug: 'e-invoicing',
        title: 'E-Invoicing',
        overview: 'Comprehensive e-invoicing compliance solution for global businesses',
        role: 'Lead Product Designer',
        achievements: [
          'Achieved 941.67% ARR increase',
          'Saved customers €42,500 in FTE costs',
          'Reduced compliance errors by 8.5%',
        ],
      },
      {
        slug: 'lookup',
        title: 'TIN Lookup',
        overview: 'Real-time Tax Identification Number validation service',
        role: 'Lead Product Designer',
        achievements: [
          'Grew ARR from €20K to €1M (5000% increase)',
          'Processing 1.5M+ TIN validations monthly',
          'Saved customers €87,000 annually in FTE costs',
        ],
      },
      {
        slug: 'x-platform-features',
        title: 'Cross-Platform Features',
        overview: 'Unified design system components and patterns',
        role: 'Lead Product Designer',
        achievements: [
          'Established unified design language',
          'Reduced design-to-development time by 40%',
          'Achieved 95% component adoption rate',
        ],
      },
      {
        slug: 'growing-design',
        title: 'Growing the Design Team',
        overview: 'Scaled design team from 2 to 8 designers',
        role: 'Lead Product Designer & Design Team Lead',
        achievements: [
          'Grew design team from 2 to 8 designers',
          '100% retention rate during growth',
          'Reduced onboarding time by 50%',
        ],
      },
    ],
  },
  {
    slug: 'thales',
    title: 'Thales - Quantum',
    company: 'Thales',
    type: ['B2B', 'Web Design', 'Design System'],
    description: 'Working with Thales\' in-house design team to create Thales\' first Design System Platform',
    impact: 'A Single Source of Truth for Thales\' design language, paving the way for the company\'s digital transformation.',
    contentRef: 'thales',
    subProjects: [
      {
        slug: 'quantum',
        title: 'Quantum Design System',
        overview: 'Thales\' first enterprise Design System platform',
        role: 'Product Designer',
        achievements: [
          'Built comprehensive design system from ground up',
          'Established design tokens and component library',
          'Created documentation and usage guidelines',
        ],
      },
    ],
  },
  {
    slug: 'google',
    title: 'Doodle4Google Vietnam',
    company: 'Google',
    type: ['B2C', 'Web Design', 'Edutech'],
    description: 'Built & launched Doodle4Google in Vietnam',
    impact: 'Built Doodle4Google\'s first educative hub in Vietnam. Inspired 3500 kids to draw and submit their dreams to Google homepage\'s doodle.',
    contentRef: 'google',
    subProjects: [
      {
        slug: 'doodle4google',
        title: 'Doodle4Google Vietnam',
        overview: 'Educational platform bringing Doodle4Google to Vietnam',
        role: 'Product Designer',
        achievements: [
          'Launched Doodle4Google in Vietnam for the first time',
          'Inspired 3500+ young artists to submit doodles',
          'Featured winning doodle on Google homepage',
        ],
      },
    ],
  },
]

export const playProjects: Project[] = [
  {
    slug: 'scaleway-quest',
    title: 'Scaleway Quest',
    company: 'Personal',
    type: ['Game', 'Educational'],
    description: 'A browser-based 16-bit pixel RPG that gamifies employee onboarding',
    impact: 'Gamified onboarding experience to improve employee engagement',
    status: 'coming soon',
  },
  {
    slug: 'historactive',
    title: 'Historactive',
    company: 'Personal',
    type: ['Website', 'Educational'],
    description: 'Interactive 3D editorial experiences for historical landmarks',
    impact: 'Made history education more engaging through interactive 3D experiences',
  },
  {
    slug: 'fundamentals-vol1',
    title: '☁️ Fundamentals Vol. 1',
    company: 'Personal',
    type: ['Music', 'Edutainment'],
    description: 'Cloud technologies explained with AI music',
    impact: 'Innovative approach to technical education through music',
  },
  {
    slug: 'ai-design-crit',
    title: 'AI Design Crit',
    company: 'Personal',
    type: ['Web App', 'AI'],
    description: 'AI critique app that gives instant, structured UI feedback',
    impact: 'Accelerated design iteration with AI-powered feedback',
  },
  {
    slug: 'colourful-potholes',
    title: 'The Colourful Potholes',
    company: 'Personal',
    type: ['Public Safety', 'Environment Design'],
    description: 'A simple and cost-effective solution that may save lives, or just your outfit.',
    impact: 'Raised awareness about road safety through creative intervention',
  },
  {
    slug: 'bug-agency',
    title: 'Bug Agency',
    company: 'Personal',
    type: ['Website'],
    description: 'Ultra-light website that cut 50% CO₂ emissions per page. Earned the Green Tech Verte medal and Gold Label from Green Code Label.',
    impact: 'Demonstrated sustainable web design practices with measurable environmental impact',
  },
]
