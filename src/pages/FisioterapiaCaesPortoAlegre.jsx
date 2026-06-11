import SeoLocalService from '../components/SeoLocalService'
import Hero from '../components/Hero'
import ServiceIntro from '../components/ServiceIntro'
import Conditions from '../components/Conditions'
import HowItWorks from '../components/HowItWorks'
import AboutProfessional from '../components/AboutProfessional'
import ServiceArea from '../components/ServiceArea'
import FAQ from '../components/FAQ'
import FooterCTA from '../components/FooterCTA'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import InternalLinks from '../components/InternalLinks'

export default function FisioterapiaCaesPortoAlegre() {
  return (
    <div className="page-shell">
      <SeoLocalService
        title="Fisioterapia para Cães em Porto Alegre | Atendimento Domiciliar"
        description="Fisioterapia para cães em Porto Alegre com atendimento domiciliar, foco em mobilidade, dor, recuperação funcional e qualidade de vida."
        canonical="https://duda.fisiovet.app/fisioterapia-para-caes-porto-alegre"
        serviceName="Fisioterapia para cães em Porto Alegre"
      />

      <main>
        <Hero
          badge="Fisioterapia para cães em Porto Alegre"
          title={
            <>
              Fisioterapia para cães
              <br />
              em Porto Alegre
              <br />
              com atendimento em casa
            </>
          }
          description={
            <>
              Atendimento domiciliar para cães com dificuldade de locomoção, dor,
              recuperação funcional, pós-operatório, perda de mobilidade ou necessidade
              de mais conforto e qualidade de vida.
            </>
          }
          whatsappText="Olá! Gostaria de saber mais sobre fisioterapia para cães em Porto Alegre."
          miniPills={['Cães idosos', 'Atendimento domiciliar', 'Porto Alegre e região']}
        />

        <ServiceIntro
          badge="Cuidado individualizado para cães"
          title="A fisioterapia pode ajudar cães em diferentes fases da vida e da recuperação."
          description="O acompanhamento fisioterapêutico pode ser indicado para cães com dor, dificuldade para levantar, perda de força, limitação de movimento, recuperação após cirurgia ou alterações que afetam a mobilidade no dia a dia."
        />

        <ServiceIntro
          badge="Atendimento no ambiente do pet"
          title="Em casa, o cão tende a ficar mais confortável e a avaliação considera a rotina real."
          description="O atendimento domiciliar permite observar como o cão se movimenta no ambiente onde vive, como lida com pisos, escadas, camas, sofás e outros desafios da rotina. Isso ajuda a construir orientações mais práticas para a família."
        />

        <ServiceArea />
        <Conditions />
        <HowItWorks />
        <AboutProfessional />
        <FAQ />
        <InternalLinks />
        <FooterCTA />
      </main>

      <FloatingWhatsApp />
    </div>
  )
}