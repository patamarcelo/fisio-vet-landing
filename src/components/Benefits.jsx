export default function Benefits() {
  const items = [
    {
      icon: '🏡',
      title: 'O pet é atendido onde se sente seguro',
      description:
        'A casa reduz estresse, facilita adaptação e permite um cuidado mais conectado à rotina real da família.',
    },
    {
      icon: '✨',
      title: 'Experiência mais acolhedora',
      description:
        'A proposta é unir técnica e sensibilidade para tornar a jornada de reabilitação mais leve e mais humana.',
    },
    {
      icon: '🦴',
      title: 'Cuidado focado em mobilidade e função',
      description:
        'Cada sessão busca ganho funcional, alívio de desconforto e melhora na qualidade de vida do pet.',
    },
  ]

  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="badge">Benefícios do atendimento domiciliar</div>
        <h2 className="section-title">Uma experiência de cuidado mais leve, próxima e personalizada.</h2>
        <p className="section-subtitle">
          Mais do que tratar um quadro clínico, a proposta é construir um acompanhamento
          que respeite a individualidade do pet e a dinâmica da família.
        </p>

        <div style={{ height: 28 }} />

        <div className="grid-3">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}