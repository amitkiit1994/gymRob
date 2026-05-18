'use client'

import { useEffect, useState } from 'react'

/**
 * useIsMobile — returns true for screens narrower than `breakpoint` (default 768px).
 * Returns null on the first render (SSR-safe) so callers can opt to render
 * a placeholder until the client checks the window.
 */
export function useIsMobile(breakpoint = 768): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile('matches' in e ? e.matches : (e as MediaQueryList).matches)
    handler(mq)
    mq.addEventListener('change', handler as (e: MediaQueryListEvent) => void)
    return () => mq.removeEventListener('change', handler as (e: MediaQueryListEvent) => void)
  }, [breakpoint])

  return isMobile
}
