interface SectionEyebrowProps {
  /** Chapter number, e.g. "01", "02". Auto-prefixed with "CH_". */
  number?: string
  /** Title label rendered right-aligned in mono small caps */
  label: string
  align?: 'left' | 'center'
  className?: string
}

/**
 * Section eyebrow — per Gemini design.md §5.
 * Renders as a stamped identification plate:
 *
 *   [CH_01]  ──────────────────────  THE WEIGHT
 *
 * The chip uses a JetBrains Mono badge with steel-scale border;
 * the rule fades to transparent; the right title is mono small caps.
 */
export default function SectionEyebrow({
  number,
  label,
  align = 'center',
  className = '',
}: SectionEyebrowProps) {
  const justify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 ${justify} ${className}`}>
      {number && (
        <span
          className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase
                     text-rust-spark bg-furnace-plate border border-steel-scale
                     px-2.5 py-1 rounded-sm
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          CH_{number}
        </span>
      )}
      <span
        className="h-px flex-1 max-w-[12rem] bg-gradient-to-r from-steel-scale via-steel-scale/60 to-transparent"
        aria-hidden="true"
      />
      <span className="font-mono text-[0.65rem] sm:text-xs text-steel-cast uppercase tracking-[0.25em]">
        {label}
      </span>
    </div>
  )
}
