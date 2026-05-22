'use client'

const address =
  'Prerna apartment, 4th Cross Rd, Swami Samarth Nagar, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053'
const phone = '091371 36354'
const hours = 'Mon-Fri 6am-12am · Sat 6am-10:30pm · Sun 8am-8pm · Open 365 days'

const encodedBusinessName = encodeURIComponent('E- Gym Lokhandwala')
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedBusinessName}+${encodeURIComponent(
  address,
)}&output=embed`

/**
 * Location — pinned address card + map on the brick wall.
 * Sits under THE TEMPLE as a sub-block (no chapter banner of its own).
 */
export default function Location() {
  return (
    <section id="location" className="relative bg-brick brick-cracks bg-brick-spotlight-right text-rocky-paper py-16 sm:py-20 overflow-hidden">
      {/* Top welded iron seam */}
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-weld-seam z-30" />
      {/* Light dark scrim */}
      <div className="absolute inset-0 bg-mighty-shadow/25 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT — Address card on a leather plate */}
          <div
            className="lg:col-span-5"
          >
            <div className="relative leather-grain wearouts text-mighty-shadow p-6 sm:p-7 rounded-sm border-4 border-mighty-shadow shadow-[0_18px_36px_-6px_rgba(0,0,0,0.85),0_4px_0_-2px_rgba(0,0,0,0.85),inset_0_2px_0_rgba(255,255,255,0.15)] -rotate-1">
              <span className="brass-tack absolute -top-2 left-6" aria-hidden="true" />
              <span className="brass-tack absolute -top-2 right-6" aria-hidden="true" />
              <span className="brass-tack absolute -bottom-2 left-6" aria-hidden="true" />
              <span className="brass-tack absolute -bottom-2 right-6" aria-hidden="true" />

              {/* Brass plate label */}
              <div className="inline-block bg-brass px-3 py-1 mb-3 border border-brass-edge-dark/60 rounded-sm">
                <p className="font-mono text-[10px] sm:text-xs font-bold text-engrave-brass tracking-[0.3em] uppercase">
                  · Plate 05A ·
                </p>
              </div>
              <h3 className="font-painted text-2xl sm:text-3xl text-mighty-shadow uppercase mb-5 leading-tight">
                eGym Lokhandwala
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-mighty-shadow font-mono">
                <li>
                  <p className="font-bold text-mighty-red text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1">
                    Located
                  </p>
                  <p className="leading-relaxed">{address}</p>
                </li>
                <li>
                  <p className="font-bold text-mighty-red text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1">
                    Phone
                  </p>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-mighty-red">
                    {phone}
                  </a>
                </li>
                <li>
                  <p className="font-bold text-mighty-red text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1">
                    Hours
                  </p>
                  <p className="leading-relaxed text-xs sm:text-sm">{hours}</p>
                </li>
                <li>
                  <p className="font-bold text-mighty-red text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1">
                    Service
                  </p>
                  <p className="leading-relaxed text-xs sm:text-sm">Online classes available</p>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t-2 border-mighty-shadow/30 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.app.goo.gl/7kymNroXqtpctVHv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 painted-metal-red wearouts border-2 border-mighty-shadow px-5 py-2.5 font-painted text-rocky-paper text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:brightness-110 active:translate-y-[2px] transition-[transform,filter]"
                >
                  <span className="pin-bolt absolute -top-1.5 -left-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  <span className="pin-bolt absolute -top-1.5 -right-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  Open Maps
                </a>
                {/* Secondary — chalked on the gym's coach slate, no plaque */}
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="relative inline-flex items-center justify-center gap-2 bg-chalkboard px-5 py-2.5 font-painted text-chalk text-xs sm:text-sm uppercase tracking-[0.1em] rounded-sm hover:brightness-110 active:translate-y-[2px] transition-[transform,filter]"
                  style={{
                    boxShadow:
                      'inset 0 0 0 2px rgba(240,237,224,0.2), inset 0 0 0 4px rgba(20,33,23,0.7), inset 0 0 0 5px rgba(240,237,224,0.12), 0 3px 8px rgba(0,0,0,0.55)',
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Map pinned to wall */}
          <div
            className="lg:col-span-7"
          >
            <div className="relative polaroid-aged wearouts p-3 sm:p-4 border-2 border-mighty-shadow shadow-pinned rotate-[0.5deg]">
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.4] contrast-110"
                  title="eGym Lokhandwala Location"
                />
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
                Mumbai · Andheri West · 400053
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
