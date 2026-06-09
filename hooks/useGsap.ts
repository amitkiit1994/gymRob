'use client'

import { useRef } from 'react'
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

  // ── Animations intentionally DISABLED ──
  // The site renders static / cinematic. Every component mounts in its natural
  // CSS state, which is also the final resting state each old timeline landed on,
  // so layout is unchanged — only the entrance motion (falls/swings/slams/scrubs)
  // is gone. Kept as a no-op so all call sites compile without edits.
  void setup
  void deps

  return ref
}
