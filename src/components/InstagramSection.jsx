import { trackEvent } from '../utils/trackEvent'

const INSTAGRAM_URL = 'https://instagram.com/seuinstagram'

export default function InstagramSection() {
  const handleInstagramClick = () => {
    trackEvent('click_instagram', {
      section: 'instagram_section',
    })

    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="section" id="instagram">
      <div className="container">
        <div className="badge">Instagram profissional</div>
        <h2 className="section-title">Use o Instagram como apoio de autoridade e prova social.</h2>
        <p className="section-subtitle">
          A landing será a página de conversão. O Instagram entra como reforço de confiança, bastidores,
          conteúdo educativo e acompanhamento da rotina profissional.
        </p>

        <div className="instagram-box">
          <div className="instagram-preview" />

          <div className="instagram-copy">
            <h3 style={{ marginTop: 0 }}>Mostre o cuidado além da consulta.</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Depois podemos encaixar aqui prints reais do perfil, destaques com serviços, bastidores,
              antes e depois autorizados e conteúdos educativos para fortalecer a decisão do tutor.
            </p>

            <div style={{ height: 18 }} />

            <button className="btn btn-primary" onClick={handleInstagramClick}>
              Acessar Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}