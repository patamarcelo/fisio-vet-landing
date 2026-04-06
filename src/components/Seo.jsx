import { Helmet } from 'react-helmet-async'

export default function Seo() {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>Fisioterapia Veterinária Domiciliar em Porto Alegre</title>
      <meta
        name="description"
        content="Atendimento domiciliar de fisioterapia e reabilitação veterinária em Porto Alegre e região, com foco em mobilidade, conforto e qualidade de vida para o seu pet."
      />
      <meta
        name="keywords"
        content="fisioterapia veterinária, reabilitação veterinária, fisioterapia pet porto alegre, atendimento domiciliar pet, fisioterapia para cães, fisioterapia veterinária em casa"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="Fisioterapia Veterinária Domiciliar em Porto Alegre" />
      <meta
        property="og:description"
        content="Cuidado técnico, acolhedor e personalizado para pets em atendimento domiciliar."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="theme-color" content="#f8eadb" />
    </Helmet>
  )
}