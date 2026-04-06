import { trackEvent } from '../utils/trackEvent'

export default function ServiceArea() {
  const handleViewArea = () => {
    trackEvent('view_service_area', {
      section: 'service_area',
    })
  }

  return (
    <section className="section" id="area-atendimento">
      <div className="container">
        <div className="grid-2">
          <div className="card">
            <div className="icon-circle">📍</div>
            <h3>Atendimento em Porto Alegre e região</h3>
            <p>
              A landing já nasce com foco local. Aqui depois podemos detalhar bairros prioritários,
              cidades próximas e critérios de deslocamento conforme a estratégia comercial.
            </p>
          </div>

          <div className="card">
            <div className="icon-circle">🗺️</div>
            <h3>Região sob consulta</h3>
            <p>
              Para áreas mais afastadas, a disponibilidade pode variar. O ideal é confirmar pelo WhatsApp
              para validar região, agenda e formato do atendimento.
            </p>

            <div style={{ height: 18 }} />

            <button className="btn btn-secondary" onClick={handleViewArea}>
              Porto Alegre, Zona Sul, Bela Vista, Moinhos, Três Figueiras e região
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}