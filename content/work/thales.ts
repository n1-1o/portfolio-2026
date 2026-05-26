import type { SubProject } from '../projects'

export const thalesOverview = {
  company: 'Thales',
  role: 'Product Designer',
  duration: '2019 - 2021',
  team: [
    'Thales In-House Design Team',
    'Quantum Development Team',
  ],
}

export const thalesSubProjects: SubProject[] = [
  {
    slug: 'quantum',
    title: 'Quantum Design System',
    overview: 'Thales\' first enterprise Design System platform',
    role: 'Product Designer',
    achievements: [
      'Built comprehensive design system from ground up',
      'Established design tokens and component library',
      'Created documentation and usage guidelines',
      'Enabled consistent UX across enterprise products',
    ],
  },
]
