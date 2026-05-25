import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary'
}

export function Section({ children, className = '', variant = 'default' }: SectionProps) {
  const bgClass = variant === 'secondary' 
    ? 'bg-background-secondary' 
    : 'bg-background'
  
  return (
    <section className={`py-section-md ${bgClass} ${className}`}>
      {children}
    </section>
  )
}
