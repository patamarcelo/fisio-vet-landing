export default function ServiceIntro({
  badge = 'Atendimento especializado',
  title = 'Um cuidado técnico, próximo e pensado para a rotina real do pet.',
  description = 'Cada atendimento é construído de forma individualizada, respeitando o quadro clínico, a fase do tratamento e o contexto da família.',
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="soft-panel">
          <div className="badge">{badge}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{description}</p>
        </div>
      </div>
    </section>
  )
}