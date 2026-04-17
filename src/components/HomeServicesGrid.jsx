import { Link } from 'react-router-dom'

export default function HomeServicesGrid() {
  const items = [
    {
      title: 'Fisioterapia veterinária em Porto Alegre',
      to: '/fisioterapia-veterinaria-porto-alegre',
      description: 'Atendimento com foco em mobilidade, dor, recuperação funcional e qualidade de vida.',
    },
    {
      title: 'Reabilitação veterinária em Porto Alegre',
      to: '/reabilitacao-veterinaria-porto-alegre',
      description: 'Acompanhamento técnico e individualizado para diferentes quadros clínicos.',
    },
    {
      title: 'Atendimento domiciliar veterinário',
      to: '/fisioterapia-veterinaria-domiciliar-porto-alegre',
      description: 'Mais conforto para o pet e mais praticidade para a rotina da família.',
    },
  ]

  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="badge">Serviços</div>
        <h2 className="section-title">Áreas principais de atendimento em Porto Alegre</h2>
        <p className="section-subtitle">
          Conheça as principais frentes de fisioterapia e reabilitação veterinária com atendimento domiciliar.
        </p>

        <div style={{ height: 28 }} />

        <div className="grid-3">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="card" style={{ textDecoration: 'none' }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}