'use client'

import Chapter from './Chapter'
import BigNumber from './BigNumber'
import Verse from './Verse'

/**
 * CHAPTER I — THE WEIGHT
 * The crisis. Three decades of advertising, hedonism, late nights.
 * Robin at 120kg, feeling the best version of himself was already behind him.
 */
export default function TheWeight() {
  return (
    <Chapter
      id="story"
      numeral="I"
      era="The Crisis"
      title="The Weight"
      tone="dark"
    >
      <div className="space-y-12 sm:space-y-16">
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-200 leading-[1.5] max-w-3xl">
          Three decades in advertising. Boardrooms, deadlines, hustle culture.
          The kind of success that looks fine from the outside —{' '}
          <span className="text-accent-400">and quietly breaks you</span>.
        </p>

        <BigNumber
          eyebrow="At My Heaviest"
          value="120"
          unit="Kilos"
        >
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Late nights, alcohol, cigarettes, food for sport. The slow-motion
            wreckage that an industry built on stress and creativity quietly
            accepts as normal.
          </p>
        </BigNumber>

        <Verse>
          What hurt more than the weight was the feeling that the best
          version of me was already behind me.
        </Verse>
      </div>
    </Chapter>
  )
}
