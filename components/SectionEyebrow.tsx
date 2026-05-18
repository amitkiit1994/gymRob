interface SectionEyebrowProps {
  number?: string
  label: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionEyebrow({
  number,
  label,
  align = 'center',
  className = '',
}: SectionEyebrowProps) {
  const justify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 ${justify} ${className}`}>
      <span
        className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-accent-600 to-accent-500 shadow-[0_0_8px_rgba(234,88,12,0.5)]"
        aria-hidden="true"
      />
      <span className="font-mono font-bold text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase text-accent-400 [text-shadow:0_1px_0_rgba(0,0,0,0.8)]">
        {number ? `${number} · ` : ''}{label}
      </span>
      <span
        className="h-[2px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-accent-600 to-accent-500 shadow-[0_0_8px_rgba(234,88,12,0.5)]"
        aria-hidden="true"
      />
    </div>
  )
}
