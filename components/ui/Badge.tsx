import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-block
        px-[12px] py-[6px]
        rounded-xl
        bg-background-light
        text-xs
        font-normal
        text-primary-muted
        ${className}
      `}
    >
      {children}
    </span>
  )
}
