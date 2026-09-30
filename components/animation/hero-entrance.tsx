"use client"

import { motion, useReducedMotion } from "motion/react"

/**
 * One-time entrance for a hero.
 *
 * Runs on mount rather than on scroll — a hero is already on screen, so a scroll
 * trigger would never fire for the visitor who needs it most.
 *
 * Deliberately not staggered per child. Staggering needs every child wrapped in
 * its own motion component, which is a lot of markup for a gain that is easy to
 * overdo; animating the block as one reads as considered rather than showy.
 */
export function HeroEntrance({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default HeroEntrance
