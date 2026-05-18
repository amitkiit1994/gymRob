/**
 * Press features — third-party media coverage about Robin Carruthers.
 *
 * Distinct from blogData (Robin's own writing). Each entry powers both the
 * homepage <PressFeature /> magazine section and the /press/[slug] article page.
 */

export interface PressFeature {
  slug: string
  title: string
  source: string
  sourceUrl: string
  sourceTagline?: string
  publishedDate: string  // ISO 8601
  displayDate: string
  image: string
  imageAlt: string
  ogImage: string
  pullQuote: string
  excerpt: string
  paragraphs: string[]
  /** Subset of paragraphs (or new strings) to render as inline pull-quotes on the article page */
  inlinePullQuotes: string[]
}

export const pressFeatures: PressFeature[] = [
  {
    slug: 'robin-carruthers-reinvents-in-adland',
    title: 'Advertising Veteran Robin Carruthers Reinvents Himself in Adland',
    source: 'MediaInfoline',
    sourceUrl:
      'https://www.mediainfoline.com/brand/advertising-veteran-robin-carruthers-reinvents-himself-in-adland',
    sourceTagline: "India's Media & Advertising News",
    publishedDate: '2026-05-18',
    displayDate: 'May 18, 2026',
    image: '/images/press/robin-mediainfoline.jpg',
    imageAlt:
      'Robin Carruthers — advertising veteran turned fitness coach, featured by MediaInfoline',
    ogImage: '/images/press/robin-mediainfoline.jpg',
    pullQuote: 'Fitness gave me my life back.',
    excerpt:
      'After nearly three decades leading out-of-home media and advertising businesses in India, Robin Carruthers has stepped into an entirely different arena — turning his own transformation into a movement for discipline-led fitness.',
    paragraphs: [
      'In an industry known for long hours, high stress, burnout, and relentless hustle culture, former advertising and out-of-home media veteran Robin Carruthers is turning his personal transformation into a larger conversation around discipline, health, and sustainable living.',
      "After spending close to three decades in India's advertising and media ecosystem, including leadership roles at companies such as Clear Channel Communications and Mediascope Publicitas, Carruthers has now stepped into an entirely different arena: fitness coaching and lifestyle transformation.",
      'Through Robin Carruthers Official Website and his Mumbai-based training community at eGym Lokhandwala, Carruthers is positioning fitness not as a vanity-driven trend, but as a long-term discipline rooted in consistency, mental resilience, and lifestyle correction.',
      "What makes the story particularly relevant for India's advertising and marketing industry is its relatability. Carruthers openly speaks about the physical and mental toll of agency life — late nights, stress-driven routines, unhealthy habits, and the gradual disconnect from personal wellbeing that many industry professionals silently experience.",
      '"At my heaviest, I was 120 kilos. What hurt more than the weight was the feeling that the best version of me was already behind me," says Carruthers. "The transformation didn\'t happen overnight. It came from showing up consistently, even on the days motivation disappeared."',
      'Unlike the influencer-led fitness ecosystem dominating social media today, Carruthers is deliberately building a counter-narrative — one focused on old-school strength culture, realistic body transformation, and sustainable routines rather than shortcuts and aesthetics.',
      'His messaging is increasingly resonating with professionals across advertising, media, entertainment, and startup ecosystems who are re-evaluating work-life balance post-pandemic and prioritising preventive health and mental wellbeing.',
      "Carruthers' career in advertising spans major leadership positions across India's out-of-home advertising sector. Over the years, he has worked with agencies including Grey Worldwide and played a key role in the growth of outdoor media businesses in India.",
      'Industry observers believe his shift reflects a larger cultural transition underway within corporate India, where conversations around burnout, wellness, discipline, and personal reinvention are becoming increasingly mainstream.',
      'At a time when marketing professionals are constantly discussing "brand transformation," Carruthers\' story stands out because it is deeply personal — a reinvention built not in boardrooms, but through consistency, lifestyle change, and physical resilience.',
      'Today, through personal coaching, long-term transformation programs, and content centred on discipline-first training, Carruthers is building a community that challenges quick-fix fitness culture and encourages professionals to reclaim control over their health.',
      '"Fitness gave me my life back," he adds. "This isn\'t about six-packs or trends. It\'s about rebuilding character, energy, confidence, and discipline."',
      "For India's advertising and marketing fraternity, an industry often celebrated for creativity but equally associated with stress and burnout, Robin Carruthers' second innings may well become one of the more relatable transformation stories emerging from within adland itself.",
    ],
    inlinePullQuotes: [
      'At my heaviest, I was 120 kilos. What hurt more than the weight was the feeling that the best version of me was already behind me.',
      "Fitness gave me my life back. This isn't about six-packs or trends. It's about rebuilding character, energy, confidence, and discipline.",
    ],
  },
]

export function getPressFeatureBySlug(slug: string): PressFeature | undefined {
  return pressFeatures.find((p) => p.slug === slug)
}

export function getAllPressSlugs(): string[] {
  return pressFeatures.map((p) => p.slug)
}
