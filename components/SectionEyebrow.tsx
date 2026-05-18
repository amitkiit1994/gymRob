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
      <span className="h-px w-8 sm:w-12 bg-accent-600" aria-hidden="true" />
      <span className="font-serif italic text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase text-accent-500">
        {number ? `${number} / ` : ''}{label}
      </span>
      <span className="h-px w-8 sm:w-12 bg-accent-600" aria-hidden="true" />
    </div>
  )
}
