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

export default function ReabilitacaoPortoAlegre() {
  return (
    <div className="page-shell">
      <SeoLocalService
        title="Reabilitação Veterinária em Porto Alegre | Atendimento Domiciliar"
        description="Reabilitação veterinária em Porto Alegre com atendimento domiciliar e foco em mobilidade, recuperação funcional e qualidade de vida do pet."
        canonical="https://fisiovetlanding.netlify.app/reabilitacao-veterinaria-porto-alegre"
      />

      <main>
        <Hero
          badge="Reabilitação veterinária em Porto Alegre"
          title={
            <>
              Reabilitação veterinária
              <br />
              em Porto Alegre
              <br />
              com atendimento domiciliar
            </>
          }
          description={
            <>
              Acompanhamento domiciliar para recuperação funcional, melhora da mobilidade,
              alívio do desconforto e suporte à qualidade de vida de cães e gatos em diferentes quadros clínicos.
            </>
          }
          whatsappText="Olá! Gostaria de saber mais sobre reabilitação veterinária em Porto Alegre para meu pet."
          miniPills={['Recuperação funcional', 'Mobilidade', 'Porto Alegre e região']}
        />

        <ServiceIntro
          badge="Como a reabilitação veterinária ajuda"
          title="A reabilitação veterinária busca devolver função, conforto e segurança no dia a dia."
          description="O objetivo do acompanhamento é apoiar o pet ao longo da recuperação, com um plano individualizado que considere evolução clínica, rotina da casa e necessidades funcionais reais."
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