import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const variantClasses = variant === 'primary'
    ? 'bg-interactive text-white hover:opacity-90'
    : 'bg-background-secondary text-primary hover:bg-gray-200'
  
  return (
    <button
      className={`
        px-[24px] py-[12px] 
        rounded-md 
        font-normal
        transition-all
        ${variantClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
