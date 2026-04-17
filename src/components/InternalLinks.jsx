import { Link } from 'react-router-dom'

export default function InternalLinks() {
  const items = [
    {
      to: '/fisioterapia-veterinaria-porto-alegre',
      title: 'Fisioterapia veterinária em Porto Alegre',
      description: 'Entenda como funciona o atendimento com foco em mobilidade, dor e qualidade de vida.',
    },
    {
      to: '/reabilitacao-veterinaria-porto-alegre',
      title: 'Reabilitação veterinária em Porto Alegre',
      description: 'Veja como a reabilitação pode ajudar em diferentes quadros clínicos.',
    },
    {
      to: '/fisioterapia-veterinaria-domiciliar-porto-alegre',
      title: 'Atendimento domiciliar veterinário',
      description: 'Conheça as vantagens do atendimento em casa para o pet e para a família.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="soft-panel">
          <div className="badge">Veja também</div>
          <h2 className="section-title">Explore outras páginas do atendimento</h2>
          <p className="section-subtitle">
            Conheça outras frentes de fisioterapia e reabilitação veterinária com atendimento domiciliar em Porto Alegre.
          </p>

          <div style={{ height: 28 }} />

          <div className="grid-3">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}