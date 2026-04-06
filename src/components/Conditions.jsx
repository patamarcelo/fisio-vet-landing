const cases = [
  {
    title: 'Pós-operatório',
    description: 'Recuperação com foco em conforto, mobilidade e retorno funcional progressivo.',
    image:
      'url(https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    title: 'Dor e limitação motora',
    description: 'Acompanhamento para melhorar movimento, bem-estar e qualidade de vida.',
    image:
      'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    title: 'Pets idosos',
    description: 'Cuidado voltado à autonomia, conforto e suporte nas mudanças do envelhecimento.',
    image:
      'url(https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    title: 'Casos neurológicos',
    description: 'Reabilitação com atenção ao quadro funcional e às necessidades específicas do paciente.',
    image:
      'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    title: 'Dificuldade para andar',
    description: 'Suporte para ganho de estabilidade, segurança e mobilidade no dia a dia.',
    image:
      'url(https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80)',
  },
  {
    title: 'Acompanhamento complementar',
    description: 'Atuação integrada ao cuidado veterinário, respeitando a necessidade clínica do pet.',
    image:
      'url(https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80)',
  },
]

export default function Conditions() {
  return (
    <section className="section" id="casos">
      <div className="container">
        <div className="badge">Principais casos atendidos</div>
        <h2 className="section-title">Diferentes quadros podem se beneficiar de um olhar de reabilitação.</h2>
        <p className="section-subtitle">
          Cada caso exige avaliação individual, mas existem situações em que o atendimento
          fisioterapêutico pode fazer grande diferença na rotina e no bem-estar do pet.
        </p>

        <div style={{ height: 28 }} />

        <div className="case-grid">
          {cases.map((item) => (
            <div className="case-card" key={item.title}>
              <div className="case-bg" style={{ backgroundImage: item.image }} />
              <div className="case-overlay" />
              <div className="case-content">
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