export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'
  
  // Person Schema for Robin Carruthers
  const personSchema = {
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
      'Lifestyle Coaching',
      'Transformation Programs',
    ],
  }

  // LocalBusiness Schema for eGym Lokhandwala
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Gym',
    name: 'eGym Lokhandwala',
    description: 'Old-school strength culture with modern coaching excellence. 30+ years of proven training methods.',
    url: siteUrl,
    image: `${siteUrl}/images/Gemini_Generated_Image_e6489be6489be648.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Prerna apartment, 4th Cross Rd, Swami Samarth Nagar, Lokhandwala Complex',
      addressLocality: 'Andheri West',
      addressRegion: 'Maharashtra',
      postalCode: '400053',
      addressCountry: 'IN',
    },
    telephone: '+919137136354',
    openingHours: 'Mo-Su 06:00-22:00',
    priceRange: '$$',
    servesCuisine: false,
    acceptsReservations: false,
    owner: {
      '@type': 'Person',
      name: 'Robin Carruthers',
    },
    sameAs: [
      'https://instagram.com/gymrob123',
      'https://instagram.com/egymlokhandwala',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50+',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fitness Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Training',
            description: 'One-on-one fitness coaching',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strength Training',
            description: 'Old-school strength training programs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Body Recomposition',
            description: 'Transform your body composition',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Life Coaching',
            description: 'Lifestyle and mindset coaching',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Classes',
            description: 'Virtual fitness coaching',
          },
        },
      ],
    },
  }

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Robin Carruthers Fitness',
    url: siteUrl,
    logo: `${siteUrl}/images/Gemini_Generated_Image_vbopksvbopksvbop.png`,
    description: '30+ years of coaching strength, discipline & life. Transform your body and mind with proven training methods.',
    founder: {
      '@type': 'Person',
      name: 'Robin Carruthers',
    },
    sameAs: [
      'https://instagram.com/gymrob123',
      'https://instagram.com/egymlokhandwala',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

