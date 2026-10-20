import { useRef } from "react";
import { pages, getPage } from "./config/pages";
import { INSTAGRAM_URL, whatsappUrl } from "./config/site";
import { trackEvent } from "./utils/trackEvent";

function Arrow({ diagonal = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

function ContactLink({
  section,
  children = "Conversar sobre meu pet",
  className = "button button-primary",
  message,
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("click_whatsapp", {
          section,
          page_path: window.location.pathname,
        })
      }
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}

function InstagramLink({ section, children, className }) {
  return (
    <a
      className={className}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_instagram", { section })}
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}

function Header() {
  const menu = useRef(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" title="Voltar ao início">
          <span className="brand-symbol" aria-hidden="true">
            f<span>v</span>
          </span>
          <span>
            <strong>
              fisio<span>vet</span>
            </strong>
            <small>EDUARDA PATA</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/#casos">Para seu pet</a>
          <a href="/#como-funciona">Como funciona</a>
          <a href="/#quem-sou-eu">A veterinária</a>
          <a href="/#faq">Dúvidas</a>
        </nav>
        <ContactLink section="header" className="header-contact">
          Fale com a Eduarda
        </ContactLink>
        <details
          className="mobile-nav"
          ref={menu}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
              menu.current.querySelector("summary").focus();
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">☰</span>
          </summary>
          <nav aria-label="Navegação pelo celular" onClick={close}>
            <a href="/#casos">Para seu pet</a>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#quem-sou-eu">Conheça a Eduarda</a>
            <a href="/#area-atendimento">Área de atendimento</a>
            <a href="/#faq">Dúvidas frequentes</a>
            <ContactLink section="mobile_menu">Falar no WhatsApp</ContactLink>
          </nav>
        </details>
      </div>
    </header>
  );
}

const cases = [
  [
    "01",
    "Depois de uma cirurgia",
    "Apoio à recuperação, respeitando a liberação e as orientações do cirurgião.",
    "/reabilitacao-pos-operatoria-caes-porto-alegre",
  ],
  [
    "02",
    "Quando andar fica difícil",
    "Avaliação de dificuldades para levantar, caminhar e se movimentar em casa.",
    "/fisioterapia-veterinaria-porto-alegre",
  ],
  [
    "03",
    "Na rotina de um pet idoso",
    "Atenção ao conforto e à mobilidade nas mudanças que acompanham a idade.",
    "/fisioterapia-para-caes-porto-alegre",
  ],
  [
    "04",
    "Durante a reabilitação",
    "Acompanhamento de limitações ortopédicas e neurológicas, conforme cada caso.",
    "/reabilitacao-veterinaria-porto-alegre",
  ],
];
const steps = [
  [
    "Vamos conversar",
    "Conte pelo WhatsApp o que seu pet precisa e em qual bairro vocês moram.",
  ],
  [
    "Avaliação em casa",
    "Histórico, movimentos e ambiente ajudam a entender as necessidades do animal.",
  ],
  [
    "Um plano para o seu pet",
    "A conduta e a frequência são definidas após a avaliação, com orientações para a rotina.",
  ],
];
const questions = [
  [
    "Você atende cães e gatos?",
    "Sim. O atendimento é para cães e gatos, sempre com avaliação individual. No caso dos gatos, informe como ele costuma reagir a visitas e ao manejo para que possamos conversar sobre os cuidados necessários.",
  ],
  [
    "Como funciona a primeira avaliação?",
    "A visita considera o histórico clínico, os movimentos, as limitações e o ambiente onde o animal vive. Tenha em mãos os exames e as recomendações veterinárias disponíveis. Depois da avaliação, são discutidos o plano e a frequência do acompanhamento.",
  ],
  [
    "Quais regiões são atendidas?",
    "O atendimento é domiciliar em Porto Alegre e região. Envie seu bairro ou cidade pelo WhatsApp para confirmar a disponibilidade de deslocamento e agenda.",
  ],
  [
    "Meu pet precisa de encaminhamento?",
    "Se ele já está em tratamento ou passou por cirurgia, compartilhe as orientações do veterinário responsável. A necessidade de encaminhamento e o momento de começar são avaliados conforme o caso.",
  ],
  [
    "Quantas sessões serão necessárias?",
    "Não há um número igual para todos os animais. A frequência e a duração do acompanhamento dependem da avaliação, da condição clínica e da resposta ao tratamento.",
  ],
  [
    "Como consultar valores e horários?",
    "Pelo WhatsApp, informe seu bairro, se o pet é cão ou gato e o motivo do contato. Assim, você pode consultar valores e disponibilidade antes de combinar a visita.",
  ],
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="footer-name">
            FisioVet · Eduarda Pata
          </a>
          <p>
            Fisioterapia e reabilitação veterinária.
            <br />
            Cães e gatos. Na sua casa.
          </p>
          <InstagramLink section="footer" className="text-link">
            @fisiovet.eduardapata
          </InstagramLink>
        </div>
        <nav aria-label="Serviços">
          <strong>Conheça o atendimento</strong>
          {pages.slice(1).map((page) => (
            <a href={page.path} key={page.path}>
              {page.label}
            </a>
          ))}
        </nav>
        <div>
          <strong>Porto Alegre e região</strong>
          <p>
            Disponibilidade conforme
            <br />
            localização e agenda.
          </p>
          <ContactLink section="footer" className="text-link">
            Falar com a Eduarda
          </ContactLink>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} FisioVet · Eduarda Pata</span>
        <span>Cuidar do movimento é cuidar da vida.</span>
      </div>
    </footer>
  );
}

export default function App({ path = "/" }) {
  const page = getPage(path);
  if (!page)
    return (
      <>
        <Header />
        <main id="conteudo" className="container not-found">
          <p className="eyebrow">Página não encontrada</p>
          <h1>Vamos encontrar o caminho?</h1>
          <p>
            Este endereço não existe. Conheça o atendimento ou fale com a
            Eduarda.
          </p>
          <a className="button button-primary" href="/">
            Voltar ao início <Arrow />
          </a>
        </main>
        <Footer />
      </>
    );
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" />
                {page.eyebrow}
              </p>
              <h1 id="hero-heading">{page.heading}</h1>
              <p className="hero-description">{page.intro}</p>
              <ContactLink
                section="hero"
                message={`Olá, Eduarda! Vim pela página de ${page.service.toLowerCase()} e gostaria de conversar sobre meu pet.`}
              />
              <p className="hero-note">
                Atendimento com a médica-veterinária Eduarda Pata.
              </p>
            </div>
            <figure className="hero-photo">
              <img
                src="/images/eduarda-800.webp"
                srcSet="/images/eduarda-480.webp 480w, /images/eduarda-800.webp 800w, /images/eduarda-1200.webp 1200w"
                sizes="(min-width: 900px) 46vw, 100vw"
                width="1200"
                height="1600"
                fetchPriority="high"
                alt="Eduarda Pata ao lado de um cão durante um atendimento veterinário"
              />
              <figcaption>
                <span>Por perto, em cada passo.</span>
                <span>Eduarda Pata · Médica-veterinária</span>
              </figcaption>
            </figure>
          </div>
          <div className="container hero-foot">
            <span>Fisioterapia & reabilitação</span>
            <span>Atendimento domiciliar</span>
            <span>Cães & gatos</span>
          </div>
        </section>
        {page.detail && (
          <section className="section detail-section">
            <div className="container two-column">
              <div>
                <p className="eyebrow">Sobre este atendimento</p>
                <h2>{page.detailTitle}</h2>
              </div>
              <div>
                <p>{page.detail}</p>
                <ul className="care-list">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
        <section className="section" id="casos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Quando procurar ajuda</p>
              <h2>
                Pequenas mudanças
                <br />
                merecem atenção.
              </h2>
              <p>
                Um movimento diferente pode mudar a rotina inteira. A avaliação
                ajuda a entender o que seu pet precisa.
              </p>
            </div>
            <div className="cases-grid">
              {cases.map(([number, title, text, href]) => (
                <a className="case-item" href={href} key={number}>
                  <span className="case-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="case-link">
                      Entenda o atendimento <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="section-note">
              Cada animal tem seu tempo. A indicação e os objetivos do
              tratamento dependem da avaliação clínica.
            </p>
          </div>
        </section>
        <section className="section process-section" id="como-funciona">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Do primeiro contato à visita</p>
              <h2>Começa com uma conversa.</h2>
              <p>
                Você não precisa saber qual tratamento procurar. Conte o que
                está acontecendo com seu pet.
              </p>
            </div>
            <ol className="steps">
              {steps.map(([title, description], index) => (
                <li key={title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
            <ContactLink section="how_it_works" className="text-link">
              Dar o primeiro passo
            </ContactLink>
          </div>
        </section>
        <section className="section" id="quem-sou-eu">
          <div className="container about-grid">
            <div className="about-heading">
              <p className="eyebrow">Quem vai até a sua casa</p>
              <h2>
                Oi, eu sou
                <br />
                <em>a Eduarda.</em>
              </h2>
              <span className="signature-line">
                Medicina veterinária · Fisioterapia e reabilitação
              </span>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Meu trabalho é cuidar do movimento e do conforto de cães e
                gatos, olhando também para a vida que acontece ao redor deles.
              </p>
              <p>
                No atendimento domiciliar, conheço o espaço onde seu pet
                caminha, descansa e convive com a família. Isso faz parte da
                avaliação e das orientações para o dia a dia.
              </p>
              <p>
                O acompanhamento é individual: conversamos sobre as necessidades
                do animal, os próximos passos e os cuidados que fazem sentido
                para ele.
              </p>
              <InstagramLink section="about" className="text-link">
                Conheça meu trabalho no Instagram
              </InstagramLink>
            </div>
          </div>
        </section>
        <section className="section area-section" id="area-atendimento">
          <div className="container two-column">
            <div>
              <p className="eyebrow">O cuidado acontece em casa</p>
              <h2>
                Porto Alegre
                <br />e região.
              </h2>
            </div>
            <div>
              <p>
                Mais facilidade para quem tem dificuldade de se deslocar. E a
                oportunidade de avaliar seu pet no ambiente que ele conhece.
              </p>
              <p>
                Envie seu bairro ou cidade para consultar a disponibilidade de
                atendimento e os horários.
              </p>
              <ContactLink
                section="service_area"
                message="Olá, Eduarda! Gostaria de consultar o atendimento em casa. Meu bairro/cidade é: "
              >
                Consultar meu bairro
              </ContactLink>
            </div>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container faq-grid">
            <div className="section-heading">
              <p className="eyebrow">Antes da primeira visita</p>
              <h2>
                É normal
                <br />
                ter dúvidas.
              </h2>
              <p>Se a sua não estiver aqui, podemos conversar pelo WhatsApp.</p>
            </div>
            <div className="faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section closing-section">
          <div className="container">
            <p className="eyebrow">Vamos cuidar desses próximos passos?</p>
            <h2>
              Conte um pouco
              <br />
              sobre o seu pet.
            </h2>
            <p>
              Seu nome, seu bairro e o que você tem observado já são um bom
              começo.
            </p>
            <ContactLink section="closing">Falar com a Eduarda</ContactLink>
          </div>
        </section>
      </main>
      <Footer />
      <div className="mobile-contact">
        <span>Um cuidado mais perto.</span>
        <ContactLink section="mobile_sticky">Falar no WhatsApp</ContactLink>
      </div>
    </>
  );
}
