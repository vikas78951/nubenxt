"use client"

import * as React from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

/**
 * One-time staggered entrance for a hero.
 *
 * Runs on load rather than on scroll — a hero that animates in only when
 * scrolled to is already on screen, so a scroll trigger would feel broken.
 * Kept under a second in total; this is a first impression, not a set piece.
 *
 * Unlike the scroll-triggered primitives this does not need a trigger, and
 * there is no risk of a paused-and-killed tween stranding the hero text, but
 * it still uses `fromTo` so the content is in its natural state until the
 * effect actually runs.
 */
export function HeroEntrance({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = Array.from(ref.current?.children ?? [])
        if (targets.length === 0) return

        gsap.fromTo(
          targets,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          }
        )
      })

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

export default HeroEntrance
