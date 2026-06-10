// src/components/SeoLocalService.jsx

import { Helmet } from 'react-helmet-async'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  INSTAGRAM_URL,
} from '../config/site'

export default function SeoLocalService({
  title,
  description,
  canonical,
  serviceName,
  path = '',
}) {
  const url = canonical || `${SITE_URL}${path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    description,
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Porto Alegre',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Região Metropolitana de Porto Alegre',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    sameAs: [INSTAGRAM_URL],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: serviceName || title,
        areaServed: {
          '@type': 'City',
          name: 'Porto Alegre',
        },
      },
    },
  }

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Porto Alegre" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}