'use client'

import React from 'react'
import { PageTOC } from './PageTOC'

interface Section {
  id: string
  title: string
}

interface PageLayoutProps {
  children: React.ReactNode
  sections?: Section[]
}

export function PageLayout({ children, sections = [] }: PageLayoutProps) {
  return (
    <div className="flex">
      {/* Main content area */}
      <div className="flex-1">
        {children}
      </div>
      
      {/* Right Sidebar - Table of Contents (conditional) */}
      {sections && sections.length > 0 && (
        <PageTOC sections={sections} />
      )}
    </div>
  )
}
