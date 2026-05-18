import { ReactNode, ElementType } from 'react'

interface NameplateProps {
  children: ReactNode
  /** Render element (button, a, Link via render-prop pattern by passing 'as') */
  as?: ElementType
  /** Visual variant — primary plate, secondary plate, or tiny tag-plate */
  variant?: 'primary' | 'secondary' | 'tag'
  /** Subtle 3D perspective tilt — degrees on Y axis */
  tilt?: number
  /** Click handler / link href passed through */
  href?: string
  className?: string
  [key: string]: any
}

/**
 * Nameplate — a riveted 3D steel plate pinned to the wall.
 *
 * Anatomy:
 *   ┌──●────────────────●──┐   ← corner rivets
 *   │   [ CHILDREN CONTENT ]│
 *   │                       │
 *   └──●────────────────●──┘
 *
 * Used for buttons, headlines, the "AS FEATURED IN" label etc. Replaces
 * the previous flat iron-btn utility classes with something that physically
 * reads as bolted hardware.
 */
export default function Nameplate({
  children,
  as: Component = 'div',
  variant = 'primary',
  tilt = 0,
  className = '',
  ...rest
}: NameplateProps) {
  // Base plate styles per variant
  const base = {
    primary:
      'bg-gradient-to-b from-[#374151] via-[#1f2937] to-[#0a0604] ' +
      'border-2 border-[#5b1a08] ' +
      'text-steel-polished ' +
      'shadow-[inset_0_1px_0_rgba(249,250,251,0.18),inset_0_-2px_0_rgba(0,0,0,0.9),0_6px_0_-1px_#000,0_10px_20px_rgba(0,0,0,0.85),0_0_30px_rgba(180,83,9,0.15)]',
    secondary:
      'bg-gradient-to-b from-[#16110e] to-[#050302] ' +
      'border-2 border-[#374151] ' +
      'text-steel-brushed ' +
      'shadow-[inset_0_1px_0_rgba(249,250,251,0.1),0_4px_0_-1px_#000,0_8px_18px_rgba(0,0,0,0.8)]',
    tag:
      'bg-gradient-to-b from-[#1f2937] to-[#0a0604] ' +
      'border border-[#5b1a08]/80 ' +
      'text-rust-melt ' +
      'shadow-[inset_0_1px_0_rgba(249,250,251,0.12),0_3px_0_-1px_#000,0_6px_12px_rgba(0,0,0,0.75)]',
  }[variant]

  const padding = {
    primary: 'px-6 py-3 sm:px-8 sm:py-4',
    secondary: 'px-6 py-3 sm:px-8 sm:py-4',
    tag: 'px-3 py-1.5',
  }[variant]

  // Rivet size + inset per variant
  const rivetSize = variant === 'tag' ? 'h-1 w-1' : 'h-1.5 w-1.5'
  const rivetInset = variant === 'tag' ? 'top-1 left-1.5' : 'top-1.5 left-2'

  const tiltStyle = tilt
    ? { transform: `perspective(800px) rotateY(${tilt}deg)`, transformStyle: 'preserve-3d' as const }
    : undefined

  return (
    <Component
      {...rest}
      className={`
        relative inline-flex items-center justify-center gap-2 rounded-sm
        font-iron uppercase tracking-wider select-none
        transition-all duration-150
        ${padding}
        ${base}
        active:translate-y-[2px] active:shadow-[inset_0_1px_0_rgba(249,250,251,0.18),0_2px_0_-1px_#000,0_4px_8px_rgba(0,0,0,0.85)]
        hover:border-[#b45309] hover:text-steel-polished
        ${className}
      `}
      style={tiltStyle}
    >
      {/* Corner rivets */}
      <Rivet className={`absolute ${rivetInset}`} size={rivetSize} />
      <Rivet className={`absolute top-1.5 right-2 ${variant === 'tag' ? 'top-1 right-1.5' : ''}`} size={rivetSize} />
      <Rivet className={`absolute bottom-1.5 left-2 ${variant === 'tag' ? 'bottom-1 left-1.5' : ''}`} size={rivetSize} />
      <Rivet className={`absolute bottom-1.5 right-2 ${variant === 'tag' ? 'bottom-1 right-1.5' : ''}`} size={rivetSize} />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  )
}

function Rivet({ className = '', size = 'h-1.5 w-1.5' }: { className?: string; size?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`${size} ${className} rounded-full bg-gradient-to-br from-[#d1d5db] via-[#6b7280] to-[#1f2937] shadow-[inset_0_-1px_0_rgba(0,0,0,0.7),0_1px_1px_rgba(0,0,0,0.85)]`}
    />
  )
}
