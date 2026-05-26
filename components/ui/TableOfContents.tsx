'use client'

import React from 'react'
import { useSectionObserver, type Section } from '@/hooks/useSectionObserver'

interface TableOfContentsProps {
  sections: Section[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const sectionIds = sections.map((s) => s.id)
  const activeSection = useSectionObserver({ sectionIds })

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-[24px] w-full max-w-[240px]"
    >
      <h3 className="text-sm font-medium text-primary-muted uppercase tracking-wide mb-[16px]">
        On this page
      </h3>
      <ul className="space-y-[8px]">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`
                block text-sm transition-all duration-200 border-l-2 pl-[12px]
                ${
                  activeSection === section.id
                    ? 'text-primary font-medium border-primary'
                    : 'text-primary-light border-transparent hover:text-primary hover:border-primary-muted'
                }
              `}
              style={{
                marginLeft: section.level && section.level > 1 ? '8px' : '0',
              }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
