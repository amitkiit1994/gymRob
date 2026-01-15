import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 border-t border-primary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Robin Carruthers</h3>
            <p className="text-gray-400 text-sm">
              For love of the game. 30+ years of coaching strength, discipline & life.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#transformation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Transformation
                </Link>
              </li>
              <li>
                <Link href="#egym" className="text-gray-400 hover:text-white transition-colors text-sm">
                  eGym Lokhandwala
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/gymrob123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Follow Robin Carruthers on Instagram"
                >
                  @gymrob123
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/egymlokhandwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Follow eGym Lokhandwala on Instagram"
                >
                  @egymlokhandwala
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Robin Carruthers. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            eGym Lokhandwala | For love of the game
          </p>
        </div>
      </div>
    </footer>
  )
}

