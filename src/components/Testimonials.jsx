export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Nos sentimos muito mais seguros fazendo o acompanhamento em casa. Nosso cão ficou mais tranquilo e a evolução foi muito perceptível nas primeiras semanas.',
      author: 'Mariana R.',
      meta: 'Tutora de cão em recuperação ortopédica',
    },
    {
      quote:
        'A atenção ao caso e as orientações para o dia a dia fizeram muita diferença. O atendimento domiciliar trouxe praticidade e mais conforto para toda a família.',
      author: 'Fernando L.',
      meta: 'Tutor de pet idoso com limitação motora',
    },
    {
      quote:
        'Além do cuidado técnico, o atendimento foi muito humano. Foi importante sentir que havia acompanhamento real da evolução do nosso pet.',
      author: 'Juliana P.',
      meta: 'Tutora de paciente em reabilitação',
    },
  ]

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="badge">Depoimentos</div>
        <h2 className="section-title">Confiança se constrói com cuidado, presença e resultado percebido.</h2>
        <p className="section-subtitle">
          Estes textos são mockups para estrutura da página. Depois podemos substituir por depoimentos reais,
          com autorização e uma apresentação visual mais forte.
        </p>

        <div style={{ height: 28 }} />

        <div className="grid-3">
          {testimonials.map((item) => (
            <div className="card testimonial-card" key={item.author}>
              <p className="testimonial-quote">“{item.quote}”</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar" />
                <div className="testimonial-meta">
                  <strong>{item.author}</strong>
                  <span>{item.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}