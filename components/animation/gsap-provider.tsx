"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Client components are still evaluated during SSR in the App Router, so
// registration is guarded. Registering twice is harmless, but touching
// `window` at module scope on the server is not.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Registers ScrollTrigger and keeps trigger positions honest.
 *
 * This site uses `next/font` and `next/image`. Both settle after hydration, so
 * trigger start/end positions computed on first paint are frequently wrong by
 * the time the user scrolls. Refreshing on font readiness and on window load
 * recalculates them against the settled layout.
 *
 * Mounted once from the root layout.
 */
export function GsapProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    // Fonts change element heights, which moves every trigger below them.
    const fonts = document.fonts?.ready
    fonts?.then(refresh).catch(() => {})

    // Images with no intrinsic size reserved also shift layout when they load.
    if (document.readyState === "complete") {
      refresh()
    } else {
      window.addEventListener("load", refresh, { once: true })
    }

    return () => window.removeEventListener("load", refresh)
  }, [])

  return <>{children}</>
}
