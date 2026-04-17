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

export default function DomiciliarPortoAlegre() {
  return (
    <div className="page-shell">
      <SeoLocalService
        title="Fisioterapia Veterinária Domiciliar em Porto Alegre"
        description="Atendimento domiciliar de fisioterapia veterinária em Porto Alegre para cães e gatos, com foco em conforto, mobilidade e reabilitação."
        canonical="https://fisiovetlanding.netlify.app/fisioterapia-veterinaria-domiciliar-porto-alegre"
      />

      <main>
        <Hero
          badge="Atendimento domiciliar em Porto Alegre"
          title={
            <>
              Fisioterapia veterinária
              <br />
              domiciliar em Porto Alegre
              <br />
              para cães e gatos
            </>
          }
          description={
            <>
              Atendimento em casa com foco em conforto, adaptação à rotina da família,
              mobilidade, recuperação funcional e qualidade de vida do pet.
            </>
          }
          whatsappText="Olá! Gostaria de saber mais sobre fisioterapia veterinária domiciliar em Porto Alegre."
          miniPills={['Atendimento em casa', 'Menos estresse', 'Porto Alegre e região']}
        />

        <ServiceIntro
          badge="Vantagens do atendimento domiciliar"
          title="O atendimento em casa torna o acompanhamento mais confortável e mais conectado à rotina real do pet."
          description="No ambiente em que o animal vive, é possível observar melhor o contexto do dia a dia, reduzir o desgaste do deslocamento e construir orientações mais personalizadas para a família."
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