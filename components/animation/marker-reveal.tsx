"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Draws the `<Marker>` rule in from the left as the marker scrolls into view.
 *
 * The marker is the spine of the numbered-section system, so animating its rule
 * ties the page rhythm together with one small tween. The `<Marker>` component
 * itself stays a server component — this wraps it.
 *
 * See the implementation note in `reveal.tsx` for why this uses
 * `ScrollTrigger.create({ onEnter })` rather than `gsap.from()`.
 */
export function MarkerReveal({
  children,
  className,
  start = "top 75%",
}: {
  children: React.ReactNode
  className?: string
  start?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = ref.current
        if (!root) return

        // The rule is the <hr> inside the Marker.
        const rule = root.querySelector("hr")
        const label = root.querySelector("span")
        if (!rule && !label) return

        ScrollTrigger.create({
          trigger: root,
          start,
          once: true,
          onEnter: () => {
            if (label) {
              gsap.fromTo(
                label,
                { opacity: 0 },
                { opacity: 1, duration: 0.45, ease: "power2.out" }
              )
            }

            if (rule) {
              gsap.fromTo(
                rule,
                { scaleX: 0, opacity: 0 },
                {
                  scaleX: 1,
                  opacity: 1,
                  transformOrigin: "left center",
                  duration: 0.65,
                  delay: 0.08,
                  ease: "power2.out",
                }
              )
            }
          },
        })
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

export default MarkerReveal
