import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551999999999'

export default function VaccinesSection() {
  const handleClick = () => {
    trackEvent('click_whatsapp_vaccines', {
      section: 'vaccines',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre vacinas e atendimento veterinário.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const items = [
    {
      title: 'Prevenção e cuidado contínuo',
      description:
        'Vacinação é um pilar essencial para proteger a saúde do pet e manter o acompanhamento preventivo em dia.',
    },
    {
      title: 'Mais praticidade para a família',
      description:
        'Quando bem integrada à rotina do atendimento, a vacinação agrega valor, conveniência e segurança.',
    },
    {
      title: 'Relação de confiança',
      description:
        'Além da reabilitação, a vacinação fortalece o vínculo com a família e amplia a percepção de cuidado completo.',
    },
    {
      title: 'Produto estratégico',
      description:
        'É um serviço importante tanto do ponto de vista clínico quanto comercial, porque atende uma necessidade real e recorrente.',
    },
  ]

  return (
    <section className="section" id="vacinas">
      <div className="container">
        <div className="vaccine-grid">
          <div className="vaccine-visual" />

          <div className="vaccine-panel">
            <div className="badge">Vacinas e prevenção</div>
            <h2 className="section-title">Vacinação também é uma frente valiosa dentro da jornada de cuidado.</h2>
            <p className="section-subtitle">
              Além da fisioterapia e da reabilitação, a prevenção é um tema forte para comunicar na landing.
              Isso amplia o posicionamento profissional, reforça autoridade e traz um serviço importante
              para a rotina de saúde do pet.
            </p>

            <div className="vaccine-list">
              {items.map((item) => (
                <div className="vaccine-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>

            <div style={{ height: 22 }} />

            <button className="btn btn-primary" onClick={handleClick}>
              Tirar dúvidas sobre vacinas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}