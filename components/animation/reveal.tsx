"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { MOBILE_BREAKPOINT } from "@/lib/constants/constants"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Travel distance in px. Larger on desktop. */
  y?: number
  /** Seconds the tween runs for. */
  duration?: number
  /** ScrollTrigger start position. */
  start?: string
  /** Animate the wrapper itself instead of its direct children. */
  self?: boolean
}

/**
 * Fades and lifts content into view on scroll.
 *
 * The workhorse — roughly 80% of sections use it.
 *
 * Implementation note: this deliberately does NOT use `gsap.from()`. With
 * `from()`, GSAP applies the hidden start state immediately and waits for the
 * ScrollTrigger to un-pause the tween. If that tween is ever killed before it
 * plays — which happens on React 19 Strict Mode double-mount, and on any
 * context revert — the element is stranded permanently invisible, with its
 * trigger already consumed.
 *
 * Instead the content renders in its natural, visible state and the tween is
 * only created inside `onEnter`, at the moment the trigger fires. There is no
 * window in which content is hidden but untriggered, so a killed tween, a
 * failed chunk, JavaScript disabled, or reduced-motion all degrade to
 * "content simply visible".
 */
export function Reveal({
  children,
  className,
  y = 26,
  duration = 0.75,
  start = "top 70%",
  self = false,
}: RevealProps) {
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

          const targets: gsap.TweenTarget = self
            ? root
            : Array.from(root.children)
          const list = Array.isArray(targets) ? targets : [targets]
          if (list.length === 0) return

          ScrollTrigger.create({
            trigger: root,
            start,
            once: true,
            onEnter: () => {
              gsap.fromTo(
                targets,
                { y: desktop ? y : y * 0.6, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration,
                  ease: "power3.out",
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

export default Reveal
