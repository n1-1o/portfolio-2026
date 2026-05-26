'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

// Check for reduced motion preference
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

// Fade-in variants for simple opacity transitions
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

// Stagger children variants for sequential animations
export const staggerChildrenVariants: Variants = {
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

export const staggerChildItemVariants: Variants = {
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

// Slide-up variants for upward motion
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

// Slide-in from top variants
export const slideInFromTopVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
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

// Motion components with default variants
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionArticle = motion.article
export const MotionHeader = motion.header
export const MotionMain = motion.main
export const MotionNav = motion.nav
export const MotionFooter = motion.footer

// Pre-configured motion components with common animations
// Note: Framer Motion automatically respects prefers-reduced-motion
interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  duration?: number
}

export function FadeIn({ children, delay = 0, duration = 0.4, ...props }: FadeInProps) {
  const { style, ...restProps } = props
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      style={style}
      {...restProps as any}
    >
      {children}
    </motion.div>
  )
}

interface SlideUpProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function SlideUp({ children, delay = 0, ...props }: SlideUpProps) {
  const { style, ...restProps } = props
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      style={style}
      {...restProps as any}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  delayChildren?: number
  staggerInterval?: number
}

export function StaggerContainer({
  children,
  delayChildren = 0.2,
  staggerInterval = 0.1,
  ...props
}: StaggerContainerProps) {
  const { style, ...restProps } = props
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        staggerChildren: staggerInterval,
        delayChildren,
      }}
      style={style}
      {...restProps as any}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { style, ...restProps } = props
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
      style={style}
      {...restProps as any}
    >
      {children}
    </motion.div>
  )
}
