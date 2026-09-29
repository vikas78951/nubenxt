"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { MOBILE_BREAKPOINT } from "@/lib/constants/constants"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Staggered reveal for a grid of cards.
 *
 * A short stagger on a card grid is what makes a static list read as
 * considered rather than assembled. Beyond that it gets gimmicky fast, so the
 * step is kept short and the total is capped — a 20-card grid does not want a
 * two-second cascade.
 *
 * See the implementation note in `reveal.tsx` for why this uses
 * `ScrollTrigger.create({ onEnter })` rather than `gsap.from()`.
 */
export function StaggerCards({
  children,
  className,
  step = 0.07,
  maxStep = 0.35,
  duration = 0.75,
  start = "top 68%",
}: {
  children: React.ReactNode
  className?: string
  step?: number
  maxStep?: number
  duration?: number
  start?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          motionOk: "(prefers-reduced-motion: no-preference)",
          desktop: `(min-width: ${MOBILE_BREAKPOINT}px)`,
        },
        (context) => {
          const { motionOk, desktop } = context.conditions as {
            motionOk: boolean
            desktop: boolean
          }

          if (!motionOk) return

          const root = ref.current
          if (!root) return

          const items = Array.from(root.children)
          if (items.length === 0) return

          // Cap the total stagger so long grids finish promptly.
          const resolvedStep = Math.min(step, maxStep / items.length)

          ScrollTrigger.create({
            trigger: root,
            start,
            once: true,
            onEnter: () => {
              gsap.fromTo(
                items,
                { y: desktop ? 30 : 16, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration,
                  ease: "power3.out",
                  stagger: resolvedStep,
                  overwrite: true,
                }
              )
            },
          })
        }
      )

      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default StaggerCards
