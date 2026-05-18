'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

/**
 * useGsapContext — runs a GSAP animation setup inside a scoped gsap.context
 * so all tweens/ScrollTriggers created inside auto-clean on unmount.
 *
 * Pattern: the setup function gets the scoped selector helper and should
 * register every tween via the returned helper or gsap (they'll be tracked).
 *
 * Example:
 *   const ref = useGsapContext((q) => {
 *     gsap.from(q('.hero-title'), { y: 80, opacity: 0, duration: 1.2 })
 *   })
 *   return <section ref={ref}>...</section>
 */
export function useGsapContext<T extends HTMLElement = HTMLElement>(
  setup: (q: gsap.utils.SelectorFunc, scope: T) => void,
  deps: ReadonlyArray<unknown> = []
) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    const scope = ref.current
    const q = gsap.utils.selector(scope)
    const ctx = gsap.context(() => setup(q, scope), scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
