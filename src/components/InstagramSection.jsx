import { trackEvent } from '../utils/trackEvent'

const INSTAGRAM_URL = 'https://instagram.com/vet.eduardapata'

const posts = [
  {
    tag: 'Atendimento',
    caption: 'Cuidado individualizado com foco em reabilitação e conforto.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    className: 'tall',
  },
  {
    tag: 'Rotina',
    caption: 'Um olhar próximo sobre a evolução do pet no ambiente da casa.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
    className: '',
  },
  {
    tag: 'Reabilitação',
    caption: 'Conteúdo educativo, bastidores e orientações sobre mobilidade.',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80',
    className: '',
  },
  {
    tag: 'Porto Alegre',
    caption: 'Atendimento com praticidade e acolhimento para famílias da região.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    className: 'wide',
  },
  {
    tag: 'FisioVet',
    caption: 'Uma estética de feed mais viva, humana e próxima da marca.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80',
    className: '',
  },
  {
    tag: 'Bem-estar',
    caption: 'A proposta é unir técnica, funcionalidade e leveza na jornada.',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80',
    className: '',
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
              <div
                className="insta-avatar"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(201,111,45,0.18), rgba(240,166,74,0.22)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80')",
                }}
              />
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
              <h3>Uma presença visual mais viva, editorial e conectada com a marca.</h3>
              <p>
                Essa seção já funciona como um preview premium do Instagram dentro da landing.
                Depois, ela pode ser ligada ao conteúdo real sem perder a estrutura visual.
              </p>
              <p>
                O objetivo é transmitir proximidade, autoridade e constância de marca.
              </p>

              <button className="btn btn-primary" onClick={handleInstagramClick}>
                Abrir Instagram
              </button>
            </div>
          </div>

          <div className="insta-grid">
            {posts.map((post, index) => (
              <div className={`insta-post ${post.className || ''}`} key={index}>
                <div
                  className="insta-post-bg"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
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