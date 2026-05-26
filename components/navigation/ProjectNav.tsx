import React from 'react'
import Link from 'next/link'
import { workProjects } from '@/content/projects'

interface ProjectNavProps {
  currentSlug: string
  parentSlug?: string
}

export function ProjectNav({ currentSlug, parentSlug }: ProjectNavProps) {
  // Get the list of projects to navigate through
  const projectList = parentSlug
    ? workProjects.find((p) => p.slug === parentSlug)?.subProjects || []
    : workProjects

  // Find current project index
  const currentIndex = projectList.findIndex((p) => p.slug === currentSlug)

  if (currentIndex === -1) return null

  const previous = currentIndex > 0 ? projectList[currentIndex - 1] : null
  const next = currentIndex < projectList.length - 1 ? projectList[currentIndex + 1] : null

  // Build hrefs
  const getHref = (project: typeof previous | typeof next) => {
    if (!project) return undefined
    if (parentSlug) {
      return `/work/${parentSlug}/${project.slug}`
    }
    return `/work/${project.slug}`
  }

  return (
    <nav
      aria-label="Project navigation"
      className="mt-[64px] pt-[32px] border-t border-divider"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        {/* Previous */}
        <div>
          {previous ? (
            <Link
              href={getHref(previous)!}
              className="group block p-[24px] rounded-[12px] bg-background-secondary hover:bg-background-accent transition-all duration-200"
            >
              <div className="flex items-center gap-[8px] mb-[8px]">
                <svg
                  className="w-[16px] h-[16px] text-primary-muted group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-xs text-primary-muted uppercase tracking-wide">
                  Previous
                </span>
              </div>
              <h4 className="text-lg font-normal text-primary-light group-hover:text-primary transition-colors">
                {previous.title}
              </h4>
            </Link>
          ) : (
            <div className="p-[24px] rounded-[12px] bg-background-secondary opacity-50">
              <div className="flex items-center gap-[8px] mb-[8px]">
                <svg
                  className="w-[16px] h-[16px] text-primary-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-xs text-primary-muted uppercase tracking-wide">
                  First project
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Next */}
        <div>
          {next ? (
            <Link
              href={getHref(next)!}
              className="group block p-[24px] rounded-[12px] bg-background-secondary hover:bg-background-accent transition-all duration-200"
            >
              <div className="flex items-center gap-[8px] mb-[8px] justify-end">
                <span className="text-xs text-primary-muted uppercase tracking-wide">
                  Next
                </span>
                <svg
                  className="w-[16px] h-[16px] text-primary-muted group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-normal text-primary-light group-hover:text-primary transition-colors">
                {next.title}
              </h4>
            </Link>
          ) : (
            <div className="p-[24px] rounded-[12px] bg-background-secondary opacity-50">
              <div className="flex items-center gap-[8px] mb-[8px] justify-end">
                <span className="text-xs text-primary-muted uppercase tracking-wide">
                  Last project
                </span>
                <svg
                  className="w-[16px] h-[16px] text-primary-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
