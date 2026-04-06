import { Helmet } from 'react-helmet-async'

export default function Seo() {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>Fisioterapia Veterinária Domiciliar em Porto Alegre</title>
      <meta
        name="description"
        content="Atendimento domiciliar de fisioterapia veterinária em Porto Alegre e região. Mais conforto, mobilidade e qualidade de vida para seu pet."
      />
      <meta
        name="keywords"
        content="fisioterapia veterinária, fisioterapia pet, reabilitação veterinária, fisioterapia veterinária porto alegre, atendimento domiciliar pet"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="Fisioterapia Veterinária Domiciliar em Porto Alegre" />
      <meta
        property="og:description"
        content="Atendimento em casa para pets com dor, mobilidade reduzida, pós-operatório e reabilitação."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="theme-color" content="#0b1020" />
    </Helmet>
  )
}