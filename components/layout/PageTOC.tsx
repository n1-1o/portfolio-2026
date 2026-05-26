'use client'

import React from 'react'
import { useSectionObserver, type Section } from '@/hooks/useSectionObserver'

interface PageTOCProps {
  sections: Section[]
}

export function PageTOC({ sections }: PageTOCProps) {
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

  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <aside className="hidden xl:block fixed right-0 top-0 w-[200px] h-screen z-40">
      <div className="sticky top-[32px] p-[32px]">
        <h2 className="text-[14px] font-semibold text-primary mb-[16px]">On this page</h2>
        <nav>
          <ul className="flex flex-col gap-[12px]">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`block text-[14px] transition-colors ${
                    activeSection === section.id
                      ? 'text-interactive font-medium'
                      : 'text-primary hover:text-interactive'
                  }`}
                  style={{
                    paddingLeft: section.level && section.level > 1 ? '12px' : '0',
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
