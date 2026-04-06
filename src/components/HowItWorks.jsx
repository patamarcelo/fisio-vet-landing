export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Primeiro contato',
      description:
        'Você envia uma mensagem no WhatsApp, explica o caso e recebe as informações iniciais sobre atendimento e região.',
    },
    {
      number: '2',
      title: 'Avaliação domiciliar',
      description:
        'É feita uma avaliação individual do pet para entender histórico, limitações, dor, funcionalidade e objetivos do tratamento.',
    },
    {
      number: '3',
      title: 'Plano terapêutico',
      description:
        'Após a avaliação, é definida a melhor estratégia de acompanhamento conforme a necessidade clínica do animal.',
    },
    {
      number: '4',
      title: 'Evolução acompanhada',
      description:
        'As sessões seguem com monitoramento de progresso, adaptação de condutas e orientações para casa.',
    },
  ]

  return (
    <section className="section" id="como-funciona">
      <div className="container split-panel">
        <div className="panel-visual" />

        <div className="panel-content">
          <div className="badge">Como funciona</div>
          <h2 className="section-title">Um processo simples, claro e focado no bem-estar do pet.</h2>
          <p className="section-subtitle">
            Desde o primeiro contato até o acompanhamento da evolução, tudo é pensado para tornar
            o cuidado mais acessível, humanizado e eficiente.
          </p>

          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}