import { ReactNode } from 'react'

interface CanvasBannerProps {
  children: ReactNode
  /** Subtle tilt for the "hanging" feel — degrees */
  tilt?: number
  /** Show the red-boxing-gloves silhouette in the top-corner (Mighty Mick's mural reference) */
  showGloves?: boolean
  className?: string
}

/**
 * CanvasBanner — the Mighty Mick's hand-painted sign.
 *
 * Documented spec from design-rocky.md §5:
 *   - 5:9 aspect canvas (67"×127" original ratio)
 *   - Red ground (mighty.red #a4271f)
 *   - Painted off-white lettering (rocky.paper)
 *   - Hung tilted ~1° with bolt at each top corner
 *   - Subtle canvas grain + edge wear
 *
 * Replaces the previous "steel plate" Nameplate for hero signage.
 */
export default function CanvasBanner({
  children,
  tilt = -1.2,
  showGloves = true,
  className = '',
}: CanvasBannerProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* The canvas banner */}
      <div
        className="
          bg-canvas canvas-weather shadow-hung
          relative
          px-10 py-6 sm:px-16 sm:py-10 md:px-24 md:py-12
          border-4 border-mighty-shadow
        "
      >
        {/* Heavy inner border (canvas seam stitching) */}
        <div className="absolute inset-2 border border-rocky-paper/15 pointer-events-none" />

        {/* Optional boxing-gloves silhouette top-corner */}
        {showGloves && (
          <svg
            aria-hidden="true"
            className="absolute top-3 right-3 w-10 h-10 sm:w-14 sm:h-14 text-rocky-paper/85"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            {/* Two crossed gloves silhouette */}
            <path d="M14 28 Q12 14 22 10 Q30 8 36 14 L40 22 Q44 28 38 36 L34 42 Q28 48 20 44 Q14 40 14 28 Z" />
            <path d="M32 30 Q34 16 44 12 Q52 10 58 16 Q62 22 60 32 L56 40 Q52 50 42 50 Q34 50 32 42 Z" opacity="0.75" />
          </svg>
        )}

        {/* Content (the painted text) */}
        <div className="relative z-10 text-center">
          {children}
        </div>

        {/* Subtle vignette overlay (canvas weathering) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* Hanging hardware — rope/canvas straps + bolts */}
      <span className="canvas-rope absolute -top-7 left-6 sm:left-10" aria-hidden="true" />
      <span className="canvas-rope absolute -top-7 right-6 sm:right-10" aria-hidden="true" />
      <span className="pin-bolt absolute -top-3 left-6 sm:left-10" aria-hidden="true" />
      <span className="pin-bolt absolute -top-3 right-6 sm:right-10" aria-hidden="true" />
    </div>
  )
}
