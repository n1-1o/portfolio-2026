'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

const navItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Play', href: '/play' },
  { label: 'With', href: '#testimonials' },
  { label: 'Me', href: '#contact' },
]

const socialLinks = [
  { href: 'mailto:hello@nguyentran-ngo.design', label: 'Email' },
  { href: 'https://linkedin.com/in/nguyentran-ngo', label: 'LinkedIn', external: true },
  { href: 'https://medium.com/@nguyentran-ngo', label: 'Medium', external: true },
]

interface SidebarNavProps {
  showSocialLinks?: boolean
}

export function SidebarNav({ showSocialLinks = true }: SidebarNavProps) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const shouldShowSocial = showSocialLinks && !isHomepage

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return false
    }
    return pathname === href || pathname?.startsWith(href + '/')
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-[250px] h-screen bg-background border-r border-background-secondary z-40">
        <div className="flex flex-col h-full p-[32px]">
          {/* Profile Section */}
          <div className="mb-[40px]">
            <div className="w-[60px] h-[60px] rounded-full bg-background-secondary mx-auto mb-[16px] overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Nguyen Tran-Ngo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <span className="font-serif text-[24px] text-primary">NT</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-[16px]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block text-[18px] font-medium transition-colors py-[8px] ${
                      isActive(item.href)
                        ? 'text-interactive'
                        : 'text-primary hover:text-interactive'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links - Hidden on homepage or when explicitly disabled */}
          {shouldShowSocial && (
            <div className="mt-auto pt-[32px] border-t border-background-secondary">
              <ul className="flex flex-col gap-[12px]">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-[14px] text-primary hover:text-interactive transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-background-secondary">
        <div className="max-w-[1440px] mx-auto px-[24px]">
          <div className="flex items-center justify-between py-[16px]">
            <button
              className="text-primary hover:text-interactive transition-colors p-[8px]"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="font-serif text-[18px] text-primary">NT</span>

            <div className="w-[40px]" />
          </div>
        </div>
      </nav>
    </>
  )
}
