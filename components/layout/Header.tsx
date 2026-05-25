'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from './Container'

const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#play', label: 'Play' },
  { href: '/#writing', label: 'Writing' },
]

export function Header() {
  return (
    <header className="py-[24px] bg-background">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-serif text-[20px] text-primary">
            Nguyen Tran-Ngo
          </Link>
          
          <ul className="flex gap-[32px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-primary hover:text-interactive transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
