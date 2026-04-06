import { trackEvent } from '../utils/trackEvent'

export default function ServiceArea() {
  const handleViewArea = () => {
    trackEvent('view_service_area', { section: 'service_area' })
  }

  const items = [
    {
      title: 'Menos deslocamento',
      description: 'O atendimento em casa reduz o desgaste para o pet e facilita a logística da família.',
    },
    {
      title: 'Rotina preservada',
      description: 'A observação no ambiente real do animal ajuda a personalizar melhor as orientações.',
    },
    {
      title: 'Mais praticidade',
      description: 'Ideal para famílias que buscam um atendimento técnico com comodidade.',
    },
    {
      title: 'Porto Alegre e região',
      description: 'A disponibilidade pode variar conforme agenda e localização.',
    },
  ]

  return (
    <section className="section" id="area-atendimento">
      <div className="container">
        <div className="soft-panel">
          <div className="badge">Atendimento domiciliar</div>
          <h2 className="section-title">Cuidado técnico no espaço em que o seu pet vive de verdade.</h2>
          <p className="section-subtitle">
            O ambiente da casa traz contexto, conforto e informações valiosas para um acompanhamento
            mais próximo da realidade do animal.
          </p>

          <div style={{ height: 28 }} />

          <div className="benefit-list">
            {items.map((item) => (
              <div className="benefit-item" key={item.title}>
                <div className="benefit-check">✓</div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 22 }} />

          <button className="btn btn-secondary" onClick={handleViewArea}>
            Porto Alegre, Bela Vista, Moinhos, Três Figueiras, Zona Sul e região
          </button>
        </div>
      </div>
    </section>
  )
}