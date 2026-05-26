import type { SubProject } from '../projects'

export const scalewayOverview = {
  company: 'Scaleway',
  role: 'Senior Product Designer',
  duration: '2024 - Present',
  team: [
    'AI Inference Platform Team',
    'Web Cloud Team',
    'Console Design Team',
    'DesignOps Team',
  ],
}

export const scalewaySubProjects: SubProject[] = [
  {
    slug: 'ai-inference-platform',
    title: 'AI Inference Platform',
    overview: 'Unified platform for AI model inference',
    role: 'Senior Product Designer',
    achievements: [
      'Designed unified inference dashboard',
      'Created model comparison and selection interface',
      'Established API documentation patterns',
    ],
  },
  {
    slug: 'web-cloud',
    title: 'Web Cloud',
    overview: 'Next-generation cloud infrastructure management platform',
    role: 'Senior Product Designer',
    achievements: [
      'Redesigned instance provisioning flow',
      'Improved resource monitoring dashboards',
      'Streamlined billing and cost management views',
    ],
  },
  {
    slug: 'console-redesign',
    title: 'Console Redesign',
    overview: 'Comprehensive redesign of Scaleway console',
    role: 'Senior Product Designer',
    achievements: [
      'Established new navigation structure',
      'Improved information architecture',
      'Enhanced accessibility compliance',
    ],
  },
  {
    slug: 'design-ops',
    title: 'DesignOps Initiative',
    overview: 'Establishing design operations practices and tooling',
    role: 'DesignOps Lead',
    achievements: [
      'Implemented design system governance',
      'Created design token workflow',
      'Established design-review cadence',
    ],
  },
]
