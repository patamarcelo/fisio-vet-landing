import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://duda.fisiovet.app'
const SITE_NAME = 'FisioVet Domiciliar'
const INSTAGRAM_URL = 'https://instagram.com/vet.eduardapata'
const OG_IMAGE = `${SITE_URL}/favicon.svg`

export default function Seo() {
  const title = 'Fisioterapia Veterinária Domiciliar em Porto Alegre'
  const description =
    'Atendimento domiciliar de fisioterapia e reabilitação veterinária em Porto Alegre e região, com foco em mobilidade, conforto e qualidade de vida para o seu pet.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    description,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
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
    sameAs: [INSTAGRAM_URL],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fisioterapia veterinária domiciliar',
          areaServed: {
            '@type': 'City',
            name: 'Porto Alegre',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reabilitação veterinária',
          areaServed: {
            '@type': 'City',
            name: 'Porto Alegre',
          },
        },
      },
    ],
  }

  return (
    <Helmet>
      <html lang="pt-BR" />

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="fisioterapia veterinária, reabilitação veterinária, fisioterapia pet porto alegre, atendimento domiciliar pet, fisioterapia para cães, fisioterapia para gatos, fisioterapia veterinária em casa, reabilitação animal porto alegre"
      />

      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={SITE_URL} />

      <meta name="theme-color" content="#f8eadb" />

      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Porto Alegre" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Cuidado técnico, acolhedor e personalizado para pets em atendimento domiciliar em Porto Alegre."
      />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="FisioVet Domiciliar em Porto Alegre" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Fisioterapia e reabilitação veterinária domiciliar para cães e gatos em Porto Alegre."
      />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}