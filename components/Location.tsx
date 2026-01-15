'use client'

import { motion } from 'framer-motion'

export default function Location() {
  const address = "Prerna apartment, 4th Cross Rd, Swami Samarth Nagar, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053"
  const phone = "091371 36354"
  const locationName = "Prerna Apartments"
  const hours = "Opens 6 am"
  // Google Maps embed URL using address query parameter
  // To get the exact embed code: Visit https://maps.app.goo.gl/7kymNroXqtpctVHv6 → Click "Embed a map" → Copy the iframe src URL
  const encodedBusinessName = encodeURIComponent("E- Gym Lokhandwala")
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedBusinessName}+${encodeURIComponent(address)}&output=embed`

  return (
    <section id="location" className="py-24 bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Visit eGym Lokhandwala
          </h2>
          <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find us at our location in Lokhandwala Complex
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Address & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-primary-900 p-6 sm:p-8 rounded-lg border border-primary-800">
                <h3 className="text-2xl font-bold text-white mb-6">eGym Lokhandwala</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <div className="flex items-start mb-2">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-accent-500 font-semibold mb-1">Located in</p>
                        <p className="text-gray-300 font-medium">{locationName}</p>
                        <p className="text-gray-400 mt-2 leading-relaxed">{address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-start mb-2">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-accent-500 font-semibold mb-1">Phone</p>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-gray-300 hover:text-accent-600 transition-colors font-medium"
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-start mb-2">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-accent-500 font-semibold mb-1">Hours</p>
                        <p className="text-gray-300 font-medium">{hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Options */}
                  <div>
                    <div className="flex items-start mb-2">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <div>
                        <p className="text-accent-500 font-semibold mb-1">Service Options</p>
                        <p className="text-gray-300 font-medium">Offers online classes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-primary-800 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://maps.app.goo.gl/7kymNroXqtpctVHv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-bold rounded transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Open in Maps
                  </a>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex-1 px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold rounded transition-all transform hover:scale-105 text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary-900 p-2 rounded-lg border border-primary-800">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="eGym Lokhandwala Location"
                  />
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.app.goo.gl/7kymNroXqtpctVHv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-600 transition-colors text-sm inline-flex items-center gap-1"
                  >
                    View larger map
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

