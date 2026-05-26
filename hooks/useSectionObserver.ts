'use client'

import { useEffect, useState } from 'react'

export interface Section {
  id: string
  title: string
  level?: number
}

interface UseSectionObserverOptions {
  sectionIds: string[]
  rootMargin?: string
  threshold?: number
}

/**
 * Hook that tracks which section is currently in view using IntersectionObserver
 * Returns the ID of the active section for highlighting in table of contents
 */
export function useSectionObserver({
  sectionIds,
  rootMargin = '-20% 0px -80% 0px',
  threshold = 0,
}: UseSectionObserverOptions): string {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin,
        threshold,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds, rootMargin, threshold])

  return activeSection
}
