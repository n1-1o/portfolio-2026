import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-[24px] max-w-[1440px] ${className}`}>
      {children}
    </div>
  )
}
