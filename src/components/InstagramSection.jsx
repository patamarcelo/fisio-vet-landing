import { trackEvent } from '../utils/trackEvent'

const INSTAGRAM_URL = 'https://instagram.com/vet.eduardapata'

const posts = [
  {
    tag: 'Atendimento',
    caption: 'Cuidado individualizado com foco em reabilitação e conforto.',
    image:
      'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    tag: 'Rotina',
    caption: 'Um olhar próximo sobre a evolução do pet no ambiente da casa.',
    image:
      'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    tag: 'Reabilitação',
    caption: 'Conteúdo educativo, bastidores e orientações sobre mobilidade.',
    image:
      'url(https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    tag: 'Porto Alegre',
    caption: 'Atendimento com praticidade e acolhimento para famílias da região.',
    image:
      'url(https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    tag: 'FisioVet',
    caption: 'Uma estética de feed mais viva, humana e próxima da marca.',
    image:
      'url(https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    tag: 'Bem-estar',
    caption: 'A proposta é unir técnica, funcionalidade e leveza na jornada.',
    image:
      'url(https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80)',
  },
]

export default function InstagramSection() {
  const handleInstagramClick = () => {
    trackEvent('click_instagram', { section: 'instagram_section' })
    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="section" id="instagram">
      <div className="container">
        <div className="insta-shell">
          <div className="badge">Instagram profissional</div>

          <div className="insta-top">
            <div className="insta-profile-card">
              <div className="insta-avatar" />
              <h3>@vet.eduardapata</h3>
              <p>
                Fisioterapia e reabilitação veterinária. Atendimento domiciliar, atendimento
                em clínicas e conteúdo que reforça autoridade, proximidade e confiança.
              </p>

              <div className="insta-stats">
                <div className="insta-stat">Feed da marca</div>
                <div className="insta-stat">Prova social</div>
                <div className="insta-stat">Conteúdo educativo</div>
              </div>
            </div>

            <div className="insta-copy">
              <h3>Uma seção inspirada no Instagram, mas com visual mais premium na landing.</h3>
              <p>
                Por enquanto, esse grid é visual e estático. Depois podemos trocar por posts
                reais do perfil profissional sem mexer na estrutura da página.
              </p>
              <p>
                A ideia é que essa seção funcione como ponte entre autoridade, estética e
                continuidade da marca — sem perder controle visual dentro da landing.
              </p>

              <button className="btn btn-primary" onClick={handleInstagramClick}>
                Abrir Instagram
              </button>
            </div>
          </div>

          <div className="insta-grid">
            {posts.map((post, index) => (
              <div className="insta-post" key={index}>
                <div className="insta-post-bg" style={{ backgroundImage: post.image }} />
                <div className="insta-post-overlay" />
                <div className="insta-post-tag">{post.tag}</div>
                <div className="insta-post-caption">{post.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}