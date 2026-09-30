"use client"

import { motion, useReducedMotion } from "motion/react"

/**
 * Fades and lifts content into view once, when it first scrolls on screen.
 *
 * Replaces the previous GSAP ScrollTrigger setup. The reason this is more
 * reliable: Motion renders the element at its `initial` state and drives it with
 * a pooled IntersectionObserver, so there is no separate trigger to consume or
 * strand. If JavaScript never runs, or a chunk fails, `useReducedMotion` and the
 * plain-element branch below both render visible content.
 *
 * Values are deliberately small. A long travel reads as sluggish rather than
 * considered, and the site already animates the hero — sections should not
 * compete with it.
 */
export function Reveal({
  children,
  className,
  y = 14,
  duration = 0.5,
}: {
  children: React.ReactNode
  className?: string
  /** Travel distance in px. */
  y?: number
  /** Seconds. */
  duration?: number
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
