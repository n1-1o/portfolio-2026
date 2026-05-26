'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // Build breadcrumb items
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ]

  // Add work segment if present
  if (segments[0] === 'work') {
    items.push({ label: 'Work', href: '/work' })
  }

  // Add parent project (slug) if present
  if (segments[1]) {
    const parentSlug = segments[1]
    items.push({
      label: capitalize(parentSlug),
      href: segments[2] ? `/work/${parentSlug}` : undefined,
    })
  }

  // Add sub-project (subSlug) if present
  if (segments[2]) {
    const subSlug = segments[2]
    items.push({ label: capitalize(subSlug) })
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-[24px]">
      <ol className="flex items-center flex-wrap gap-[8px] text-sm">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-[8px]">
            {index > 0 && (
              <span
                className="text-primary-muted select-none"
                aria-hidden="true"
              >
                ›
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-primary-light hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-primary font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function capitalize(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
