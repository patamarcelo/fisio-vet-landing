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

export default function FisioterapiaPortoAlegre() {
  return (
    <div className="page-shell">
      <SeoLocalService
        title="Fisioterapia Veterinária em Porto Alegre | Atendimento Domiciliar"
        description="Fisioterapia veterinária em Porto Alegre com atendimento domiciliar para cães e gatos. Reabilitação, mobilidade, dor e qualidade de vida."
        canonical="https://fisiovetlanding.netlify.app/fisioterapia-veterinaria-porto-alegre"
      />

      <main>
        <Hero
          badge="Fisioterapia veterinária em Porto Alegre"
          title={
            <>
              Fisioterapia veterinária
              <br />
              em Porto Alegre
              <br />
              com atendimento domiciliar
            </>
          }
          description={
            <>
              Atendimento domiciliar para cães e gatos com foco em mobilidade, alívio da dor,
              recuperação funcional e qualidade de vida. Um cuidado técnico e individualizado
              para a rotina real do pet e da família.
            </>
          }
          whatsappText="Olá! Gostaria de saber mais sobre fisioterapia veterinária em Porto Alegre para meu pet."
          miniPills={['Cães e gatos', 'Atendimento domiciliar', 'Porto Alegre e região']}
        />

        <ServiceIntro
          badge="Quando a fisioterapia veterinária é indicada"
          title="A fisioterapia veterinária pode ajudar em diferentes fases do cuidado clínico."
          description="O acompanhamento fisioterapêutico pode contribuir em situações de dor, limitação de movimento, recuperação pós-operatória, perda de mobilidade e suporte funcional ao longo do tratamento."
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