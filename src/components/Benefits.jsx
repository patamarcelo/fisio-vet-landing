export default function Benefits() {
  const items = [
    {
      icon: '🏠',
      title: 'Atendimento no ambiente do pet',
      description:
        'O cuidado acontece onde o animal se sente mais seguro, reduzindo ansiedade e melhorando a adaptação ao tratamento.',
    },
    {
      icon: '🦴',
      title: 'Foco em dor, mobilidade e reabilitação',
      description:
        'Condutas voltadas para ganho funcional, alívio de desconforto e melhora da qualidade de vida.',
    },
    {
      icon: '🤝',
      title: 'Acompanhamento próximo com a família',
      description:
        'Orientações práticas para o dia a dia, tornando o processo mais claro e efetivo para todos.',
    },
  ]

  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="badge">Por que escolher atendimento domiciliar</div>
        <h2 className="section-title">Uma abordagem mais confortável, prática e personalizada.</h2>
        <p className="section-subtitle">
          A fisioterapia veterinária domiciliar permite um cuidado mais próximo da realidade do pet
          e da rotina da família, com atenção total ao contexto clínico e ambiental.
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