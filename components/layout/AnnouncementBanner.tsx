'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface AnnouncementBannerProps {
  className?: string
}

export function AnnouncementBanner({ className = '' }: AnnouncementBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-banner-dismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
      setShouldRender(false)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('announcement-banner-dismissed', 'true')
    setIsDismissed(true)
    setShouldRender(false)
  }

  if (!shouldRender) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.3 } }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`relative bg-background-accent py-[12px] px-[24px] ${className}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-[16px]">
          <motion.div
            className="flex items-center gap-[12px] flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="text-[20px]" aria-hidden="true">
              🔔
            </span>
            <p className="text-[14px] font-medium text-primary">
              My latest build:{' '}
              <span className="font-semibold">AI Design Crit</span>
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-[16px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link
              href="/writing/ai-design-crit-build"
              className="text-[14px] text-interactive hover:underline font-medium"
            >
              Read 0→1 build
            </Link>

            <a
              href="https://ai-design-crit.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-interactive hover:underline font-medium"
            >
              Try AI Design Crit
            </a>

            <motion.button
              onClick={handleDismiss}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary-muted hover:text-primary transition-colors p-[4px]"
              aria-label="Dismiss announcement"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
