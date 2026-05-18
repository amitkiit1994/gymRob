'use client'

import { motion } from 'framer-motion'

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
    <section id="location" className="relative bg-mighty-shadow text-rocky-paper py-16 sm:py-20 overflow-hidden">
      {/* Top weld seam */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-[10px] sm:text-xs font-bold text-mighty-red tracking-[0.3em] uppercase px-2.5 py-1 border border-rocky-paper/30 rounded-sm">
            · The Address ·
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-rocky-paper/40 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT — Address card on a leather plate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-rocky-leather leather-grain stitched text-mighty-shadow p-6 sm:p-7 rounded-sm border-4 border-mighty-shadow shadow-[0_14px_28px_rgba(0,0,0,0.7),inset_0_2px_0_rgba(255,255,255,0.12)] -rotate-1">
              <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />

              <p className="font-mono text-[10px] sm:text-xs font-bold text-mighty-red tracking-[0.3em] uppercase mb-3">
                Plate · 05A
              </p>
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
                  className="relative inline-flex items-center justify-center gap-2 bg-mighty-red border-2 border-mighty-shadow px-5 py-2.5 font-painted text-rocky-paper text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:bg-mighty-shadow hover:text-rocky-paper active:translate-y-[2px] transition-all"
                >
                  <span className="pin-bolt absolute -top-1.5 -left-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  <span className="pin-bolt absolute -top-1.5 -right-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  Open Maps
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="relative inline-flex items-center justify-center gap-2 bg-mighty-shadow border-2 border-rocky-paper/40 px-5 py-2.5 font-painted text-rocky-paper text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:border-rocky-paper active:translate-y-[2px] transition-all"
                >
                  <span className="pin-bolt absolute -top-1.5 -left-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  <span className="pin-bolt absolute -top-1.5 -right-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Map pinned to wall */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-paper p-3 sm:p-4 border-2 border-mighty-shadow shadow-pinned rotate-[0.5deg]">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
