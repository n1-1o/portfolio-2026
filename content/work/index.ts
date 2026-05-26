// Work content index
// Import detailed content for each company

import { fonoaOverview, fonoaSubProjects } from './fonoa'
import { scalewayOverview, scalewaySubProjects } from './scaleway'
import { thalesOverview, thalesSubProjects } from './thales'
import { googleOverview, googleSubProjects } from './google'
import { playProjects, workProjects } from '../projects'

export {
  fonoaOverview,
  fonoaSubProjects,
  scalewayOverview,
  scalewaySubProjects,
  thalesOverview,
  thalesSubProjects,
  googleOverview,
  googleSubProjects,
  playProjects,
  workProjects,
}

// Re-export types for convenience
export type { SubProject, ContentSection, Feature } from '../projects'
