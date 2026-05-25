import React from 'react'
import Link from 'next/link'
import { Container } from './Container'

const socialLinks = [
  { href: 'mailto:hello@nguyentran-ngo.design', label: 'Email' },
  { href: 'https://linkedin.com/in/nguyentranngo', label: 'LinkedIn', external: true },
  { href: 'https://medium.com/@nguyentranngo', label: 'Medium', external: true },
]

export function Footer() {
  return (
    <footer className="py-[40px] bg-background-secondary">
      <Container>
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex gap-[24px]">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-primary hover:text-interactive transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-primary-muted">
            © {new Date().getFullYear()} Nguyen Tran-Ngo. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
