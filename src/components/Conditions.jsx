export default function Conditions() {
  const conditions = [
    {
      title: 'Pós-operatório',
      description: 'Recuperação funcional com foco em mobilidade, conforto e retorno gradual das atividades.',
    },
    {
      title: 'Dor e limitações ortopédicas',
      description: 'Suporte em casos articulares, musculares e ortopédicos com objetivo de melhorar movimento e qualidade de vida.',
    },
    {
      title: 'Casos neurológicos',
      description: 'Acompanhamento para pets com alterações neurológicas e necessidade de reabilitação motora.',
    },
    {
      title: 'Pets idosos',
      description: 'Abordagem para manutenção de mobilidade, autonomia e redução de desconfortos comuns do envelhecimento.',
    },
    {
      title: 'Fraqueza ou dificuldade para andar',
      description: 'Condutas voltadas para ganho funcional, equilíbrio, estabilidade e confiança na locomoção.',
    },
    {
      title: 'Suporte complementar',
      description: 'Trabalho integrado ao tratamento veterinário, respeitando a condição clínica de cada paciente.',
    },
  ]

  return (
    <section className="section" id="casos">
      <div className="container">
        <div className="badge">Para quais situações</div>
        <h2 className="section-title">Indicado para diferentes fases da recuperação e do cuidado clínico.</h2>
        <p className="section-subtitle">
          Cada caso é avaliado de forma individual. A proposta é oferecer um atendimento seguro,
          técnico e alinhado à necessidade real do pet.
        </p>

        <div style={{ height: 28 }} />

        <div className="list-grid">
          {conditions.map((item) => (
            <div className="list-item" key={item.title}>
              <div className="list-check">✓</div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}