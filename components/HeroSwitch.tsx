'use client'

import { useIsMobile } from '@/hooks/useIsMobile'
import Hero from './Hero'
import HeroMobile from './HeroMobile'

/**
 * HeroSwitch — picks the desktop or mobile-bespoke hero.
 * Returns null on first SSR render to avoid layout flash; that means a tiny
 * blank flash on slow connections, but a layout shift would be worse.
 */
export default function HeroSwitch() {
  const isMobile = useIsMobile(768)
  if (isMobile === null) {
    // First render: give the desktop hero so above-the-fold isn't blank
    // (it will swap silently to the mobile composition if needed)
    return <Hero />
  }
  return isMobile ? <HeroMobile /> : <Hero />
}
