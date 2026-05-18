/**
 * IronIcons — clean industrial SVG silhouettes for use as decorative
 * motifs throughout the site. Each accepts standard SVGProps so they can
 * be sized + colored via Tailwind (`text-...`, `w-...`, `h-...`).
 *
 * All paths drawn with `currentColor` so they inherit text color.
 * Default size: 64×64. Override with `className="w-12 h-12"` etc.
 */
import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Olympic barbell with weight plates on both sides */
export function Barbell({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Bar */}
      <line x1="14" y1="32" x2="50" y2="32" strokeWidth="2.5" />
      {/* Sleeves */}
      <line x1="6" y1="32" x2="14" y2="32" strokeWidth="4" />
      <line x1="50" y1="32" x2="58" y2="32" strokeWidth="4" />
      {/* Inner plates */}
      <rect x="11" y="22" width="4" height="20" rx="0.5" fill="currentColor" />
      <rect x="49" y="22" width="4" height="20" rx="0.5" fill="currentColor" />
      {/* Outer plates (bigger) */}
      <rect x="4" y="18" width="6" height="28" rx="0.5" fill="currentColor" />
      <rect x="54" y="18" width="6" height="28" rx="0.5" fill="currentColor" />
      {/* End caps */}
      <line x1="3" y1="14" x2="3" y2="50" strokeWidth="2" />
      <line x1="61" y1="14" x2="61" y2="50" strokeWidth="2" />
    </svg>
  )
}

/** 45 lb / 20 kg weight plate — circular with center hub and grip holes */
export function WeightPlate({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Outer rim */}
      <circle cx="32" cy="32" r="28" strokeWidth="2" />
      {/* Inner ring */}
      <circle cx="32" cy="32" r="22" />
      {/* Center hub */}
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="#000" />
      {/* Grip holes */}
      <circle cx="32" cy="14" r="2" fill="currentColor" />
      <circle cx="32" cy="50" r="2" fill="currentColor" />
      <circle cx="14" cy="32" r="2" fill="currentColor" />
      <circle cx="50" cy="32" r="2" fill="currentColor" />
    </svg>
  )
}

/** Commercial dumbbell — knurled handle, hex-end weights */
export function Dumbbell({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Handle */}
      <rect x="22" y="29" width="20" height="6" rx="1" fill="currentColor" />
      {/* Inner collars */}
      <rect x="18" y="26" width="4" height="12" fill="currentColor" />
      <rect x="42" y="26" width="4" height="12" fill="currentColor" />
      {/* Hex weights — left */}
      <polygon points="4,32 8,22 16,20 18,32 16,44 8,42" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
      {/* Hex weights — right */}
      <polygon points="60,32 56,22 48,20 46,32 48,44 56,42" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  )
}

/** Kettlebell — cannonball with strap handle */
export function Kettlebell({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Handle (open D shape) */}
      <path d="M22 18 Q22 8 32 8 Q42 8 42 18" strokeWidth="3" />
      {/* Neck */}
      <path d="M22 18 Q22 24 28 24 L36 24 Q42 24 42 18" fill="currentColor" stroke="currentColor" />
      {/* Body */}
      <circle cx="32" cy="42" r="18" fill="currentColor" />
      {/* Highlight glint */}
      <ellipse cx="25" cy="36" rx="3" ry="5" fill="rgba(0,0,0,0.4)" stroke="none" />
    </svg>
  )
}

/** Boxing glove — laced glove silhouette */
export function BoxingGlove({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Cuff */}
      <rect x="14" y="46" width="32" height="12" rx="2" fill="currentColor" />
      {/* Main body */}
      <path
        d="M14 46 Q12 20 24 14 Q34 10 44 14 Q54 18 52 36 L52 46 Z"
        fill="currentColor"
      />
      {/* Thumb */}
      <ellipse cx="48" cy="40" rx="6" ry="9" fill="currentColor" transform="rotate(20 48 40)" />
      {/* Knuckle crease */}
      <path d="M22 30 L42 30" strokeWidth="1" stroke="rgba(0,0,0,0.5)" />
      <path d="M22 36 L42 36" strokeWidth="1" stroke="rgba(0,0,0,0.5)" />
      {/* Laces */}
      <path d="M18 50 L42 50" strokeWidth="1" stroke="rgba(0,0,0,0.6)" />
    </svg>
  )
}

/** Single chain link — two interlocked ovals */
export function ChainLink({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className={className}
      {...rest}
    >
      {/* Top link */}
      <ellipse cx="32" cy="20" rx="11" ry="14" />
      {/* Bottom link */}
      <ellipse cx="32" cy="44" rx="11" ry="14" />
    </svg>
  )
}

/** Hex bolt — 6-sided industrial fastener */
export function HexBolt({ className = 'w-12 h-12', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      <polygon
        points="24,4 42,14 42,34 24,44 6,34 6,14"
        fill="currentColor"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="6" fill="#000" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  )
}

/** Knuckle / fist — clenched */
export function Fist({ className = 'w-16 h-16', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...rest}
    >
      {/* Main fist body */}
      <path
        d="M12 28 Q12 18 22 16 L42 16 Q52 16 52 26 L52 44 Q52 52 44 52 L20 52 Q12 52 12 44 Z"
        fill="currentColor"
      />
      {/* Thumb */}
      <ellipse cx="14" cy="38" rx="5" ry="8" fill="currentColor" transform="rotate(-20 14 38)" />
      {/* Knuckle creases */}
      <line x1="22" y1="26" x2="22" y2="34" strokeWidth="1.5" stroke="rgba(0,0,0,0.55)" />
      <line x1="30" y1="24" x2="30" y2="32" strokeWidth="1.5" stroke="rgba(0,0,0,0.55)" />
      <line x1="38" y1="24" x2="38" y2="32" strokeWidth="1.5" stroke="rgba(0,0,0,0.55)" />
      <line x1="46" y1="26" x2="46" y2="34" strokeWidth="1.5" stroke="rgba(0,0,0,0.55)" />
    </svg>
  )
}
