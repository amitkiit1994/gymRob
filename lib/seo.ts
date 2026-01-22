/**
 * SEO Utilities for Multi-Domain Support
 * 
 * Supports the following domains:
 * - www.gymrob.com
 * - gymrob.com
 * - robincarruthers.com
 * - www.robincarruthers.com
 * - gym-rob.vercel.app
 */

// Primary canonical domain (use this for canonical URLs)
export const PRIMARY_DOMAIN = 'https://www.robincarruthers.com'

// All supported domains
export const SUPPORTED_DOMAINS = [
  'www.gymrob.com',
  'gymrob.com',
  'robincarruthers.com',
  'www.robincarruthers.com',
  'gym-rob.vercel.app',
]

/**
 * Get the current site URL from environment or headers
 * Falls back to primary domain
 */
export function getSiteUrl(): string {
  // Check environment variable first
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  // In production, this will be set by Vercel
  // For now, return primary domain
  return PRIMARY_DOMAIN
}

/**
 * Get current domain URL for sharing (uses the domain user is currently on)
 * This is client-side only - uses window.location
 */
export function getCurrentShareUrl(path: string = ''): string {
  // Client-side: use window.location
  if (typeof window !== 'undefined') {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${window.location.origin}${cleanPath}`
  }
  
  // Server-side: fall back to canonical
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${PRIMARY_DOMAIN}${cleanPath}`
}

/**
 * Get canonical URL - always use primary domain for canonical
 */
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${PRIMARY_DOMAIN}${cleanPath}`
}

/**
 * Check if a domain is valid/supported
 */
export function isValidDomain(domain: string): boolean {
  try {
    const url = new URL(domain.startsWith('http') ? domain : `https://${domain}`)
    return SUPPORTED_DOMAINS.some(supported => 
      url.hostname === supported || url.hostname === `www.${supported}` || `www.${url.hostname}` === supported
    )
  } catch {
    return false
  }
}

/**
 * Get alternate language/domain links for hreflang
 * Primary domain uses x-default, others use en
 */
export function getAlternateLinks(path: string = ''): Array<{ href: string; hreflang: string }> {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  return [
    { href: `https://www.robincarruthers.com${cleanPath}`, hreflang: 'x-default' },
    { href: `https://www.robincarruthers.com${cleanPath}`, hreflang: 'en' },
    { href: `https://robincarruthers.com${cleanPath}`, hreflang: 'en' },
    { href: `https://www.gymrob.com${cleanPath}`, hreflang: 'en' },
    { href: `https://gymrob.com${cleanPath}`, hreflang: 'en' },
  ]
}

