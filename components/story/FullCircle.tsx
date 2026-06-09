'use client'

/**
 * INTERLUDE · FULL CIRCLE
 *
 * The bridge between PAST and PRESENT: the keepsake photograph of Robin beside
 * Sylvester Stallone — the man whose Rocky planted the seed of every brick in
 * this gym. Now a photographed wall: the keepsake hangs in an ornate frame, the
 * "OFF THE SCREEN" note pinned beside it. The written moment sits beneath.
 */
export default function FullCircle() {
  return (
    <section
      id="full-circle"
      className="relative bg-mighty-shadow overflow-hidden"
    >
      {/* Welded seam to bridge from preceding chapter */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-weld-seam z-30"
      />

      {/* CINEMATIC ESTABLISHING PLATE — the keepsake framed on the gym wall */}
      <div className="relative w-full">
        <img
          src="/images/scene/fullcircle-final.webp"
          alt="Robin Carruthers standing beside Sylvester Stallone, fists raised — framed as a keepsake on the gym wall, with a pinned note reading 'Off The Screen'"
          className="block w-full h-auto max-h-[82vh] object-cover object-center select-none"
          loading="lazy"
          decoding="async"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-mighty-shadow" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 sm:py-20 lg:py-24 bg-brick bg-brick-spotlight-right brick-cracks">
        {/* Eyebrow — painted directly on the brick wall. */}
        <div className="mb-10 sm:mb-12 max-w-4xl mx-auto">
          <p
            className="font-painted text-rocky-paper text-base sm:text-lg uppercase tracking-[0.3em]"
            style={{ textShadow: 'var(--text-shadow-on-dark)' }}
          >
            <span className="text-mighty-red">·&nbsp;Moment&nbsp;·</span>
            <span className="opacity-80">&nbsp;&nbsp;Full Circle · Off The Screen</span>
          </p>
        </div>

        {/* The written moment — aged paper note */}
        <figure
          className="relative max-w-3xl mx-auto bg-paper text-mighty-shadow p-6 sm:p-8 md:p-10 border-2 border-mighty-shadow shadow-[0_14px_28px_rgba(0,0,0,0.75)] rotate-[0.8deg]"
        >
          <span className="tape-corner" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 left-8" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-8" aria-hidden="true" />
          <span className="absolute -top-3 -left-1 sm:-left-2 font-painted text-6xl sm:text-7xl text-mighty-red/40 leading-none select-none">
            “
          </span>

          <blockquote className="space-y-4 sm:space-y-5">
            <p className="font-painted text-lg sm:text-2xl md:text-3xl leading-[1.25] text-mighty-shadow">
              Some heroes live on screen.
              <br />
              <span className="text-mighty-red">
                Very few inspire the man you become off it.
              </span>
            </p>

            <p className="font-painted text-base sm:text-lg md:text-xl leading-[1.45] text-mighty-shadow/90">
              Meeting Sylvester Stallone was a full-circle moment — from
              watching <em className="not-italic font-extrabold">Rocky</em> as
              a young dreamer to standing beside the man who taught an entire
              generation what grit looks like.
            </p>
          </blockquote>

          <figcaption className="mt-7 pt-5 border-t-2 border-mighty-shadow/30 flex items-end justify-between gap-3">
            <span className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase">
              — Robin Carruthers
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 tracking-[0.25em] uppercase">
              Polaroid 001 / Full Circle
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
