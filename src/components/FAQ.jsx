export default function FAQ() {
  const items = [
    {
      question: 'Como funciona a primeira avaliação?',
      answer:
        'A primeira visita serve para entender o histórico do pet, o quadro atual, as limitações, a rotina da casa e os objetivos do tratamento. A partir disso, é definida a melhor conduta.',
    },
    {
      question: 'Quais animais podem se beneficiar da fisioterapia veterinária?',
      answer:
        'Pets em pós-operatório, com dor, dificuldade para se locomover, quadros ortopédicos, neurológicos ou limitações associadas à idade podem se beneficiar bastante, desde que avaliados individualmente.',
    },
    {
      question: 'O atendimento é somente em Porto Alegre?',
      answer:
        'O foco inicial é Porto Alegre e região. Dependendo da localização, é possível avaliar a viabilidade do atendimento sob consulta.',
    },
    {
      question: 'Precisa de encaminhamento veterinário?',
      answer:
        'Isso pode variar conforme o caso. Em muitos cenários, é importante que o acompanhamento esteja alinhado ao veterinário responsável pelo pet.',
    },
  ]

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="badge">Perguntas frequentes</div>
        <h2 className="section-title">Dúvidas comuns antes do primeiro contato.</h2>
        <p className="section-subtitle">
          Este bloco ajuda a reduzir objeções e deixa a decisão mais clara para quem está conhecendo o serviço.
        </p>

        <div style={{ height: 28 }} />

        <div className="faq-list">
          {items.map((item) => (
            <div className="faq-item" key={item.question}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}