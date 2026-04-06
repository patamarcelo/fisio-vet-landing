export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Primeiro contato',
      description:
        'Você explica o caso pelo WhatsApp e recebe as orientações iniciais sobre o atendimento.',
    },
    {
      number: '2',
      title: 'Avaliação do pet',
      description:
        'É feita uma avaliação individual para entender histórico, mobilidade, dor, rotina e necessidade clínica.',
    },
    {
      number: '3',
      title: 'Plano terapêutico',
      description:
        'Após a avaliação, é definida a melhor estratégia de acompanhamento para aquele momento.',
    },
    {
      number: '4',
      title: 'Acompanhamento e evolução',
      description:
        'O tratamento segue com ajustes conforme a resposta do pet e orientações práticas para a família.',
    },
  ]

  return (
    <section className="section" id="como-funciona">
      <div className="container editorial-split">
        <div className="editorial-photo" />

        <div className="editorial-content">
          <div className="badge">Como funciona</div>
          <h2 className="section-title">Um processo claro, delicado e pensado para a rotina real do pet.</h2>
          <p className="section-subtitle">
            O atendimento foi pensado para ser simples no contato, cuidadoso na avaliação
            e consistente ao longo da evolução clínica.
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