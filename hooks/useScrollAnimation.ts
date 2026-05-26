'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useAnimation, type Variants } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  margin?: string
  once?: boolean
  enabled?: boolean
}

/**
 * Hook for scroll-triggered animations using Framer Motion
 * Returns animation props and ref to attach to element
 */
export function useScrollAnimation({
  threshold = 0.2,
  margin = '-50px',
  once = true,
  enabled = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, {
    amount: threshold,
    margin: margin as any,
    once,
  })

  useEffect(() => {
    if (!enabled || !isInView || (hasAnimated && once)) return

    controls.start('visible')
    if (once) {
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated, once, enabled])

  return {
    ref,
    controls,
    initial: 'hidden',
    animate: controls,
    variants: fadeInVariants,
  }
}

/**
 * Fade-in animation variants
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

/**
 * Slide-up animation variants
 */
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * Stagger container variants
 */
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Stagger child item variants
 */
export const staggerChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

/**
 * Hook for reduced motion preference
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook for hover animations
 */
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  return {
    isHovered,
    hoverProps: {
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
    },
  }
}
