import { Helmet } from 'react-helmet-async'

export default function SeoLocalService({
  title,
  description,
  canonical,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonical}#localbusiness`,
    name: 'FisioVet Domiciliar',
    url: canonical,
    description,
    telephone: '+55 51 99280-6633',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    areaServed: [
      { '@type': 'City', name: 'Porto Alegre' },
      { '@type': 'Place', name: 'Bela Vista' },
      { '@type': 'Place', name: 'Moinhos de Vento' },
      { '@type': 'Place', name: 'Três Figueiras' },
      { '@type': 'Place', name: 'Zona Sul' },
    ],
    sameAs: ['https://instagram.com/vet.eduardapata'],
  }

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index,follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}