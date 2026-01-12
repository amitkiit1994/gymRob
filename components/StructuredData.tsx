export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Robin Carruthers',
    jobTitle: 'Fitness & Life Coach',
    description: '30+ years of coaching strength, discipline & life. Owner of eGym Lokhandwala.',
    url: siteUrl,
    sameAs: [
      'https://instagram.com/gymrob123',
      'https://instagram.com/egymlokhandwala',
    ],
    knowsAbout: [
      'Fitness Training',
      'Strength Training',
      'Life Coaching',
      'Body Recomposition',
      'Personal Training',
    ],
    owns: {
      '@type': 'Gym',
      name: 'eGym Lokhandwala',
      description: 'Old-school strength culture with modern coaching excellence',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

