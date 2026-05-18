import HeroSwitch from '@/components/HeroSwitch'
import TheWeight from '@/components/story/TheWeight'
import TheForge from '@/components/story/TheForge'
import TheWarrior from '@/components/story/TheWarrior'
import Services from '@/components/Services'
import EGym from '@/components/EGym'
import Location from '@/components/Location'
import Testimonials from '@/components/Testimonials'
import PressFeature from '@/components/PressFeature'
import Blog from '@/components/Blog'
import Instagram from '@/components/Instagram'
import Contact from '@/components/Contact'

/**
 * GymRob homepage — Robin Carruthers as a scrollable documentary.
 *
 * The arc:
 *   Hero          → introduction, "Robin Carruthers"
 *   Chapter I     → The Weight     (the crisis, 120kg)
 *   Chapter II    → The Forge      (transformation, 120→78)
 *   Chapter III   → The Warrior    (discipline, certifications)
 *   Chapter IV+   → present-day chapters (Services, eGym, Testimonials,
 *                                         Press, Journal, Instagram, Contact)
 */
export default function Home() {
  return (
    <>
      <HeroSwitch />

      {/* ── PAST ─────────────────────────────────────── */}
      <TheWeight />
      <TheForge />
      <TheWarrior />

      {/* ── PRESENT ──────────────────────────────────── */}
      <Services />
      <EGym />
      <Location />
      <Testimonials />
      <PressFeature />
      <Blog />
      <Instagram />
      <Contact />
    </>
  )
}
