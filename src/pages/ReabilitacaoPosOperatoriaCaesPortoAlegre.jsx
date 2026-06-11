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

export default function ReabilitacaoPosOperatoriaCaesPortoAlegre() {
  return (
    <div className="page-shell">
      <SeoLocalService
        title="Reabilitação Pós-operatória para Cães em Porto Alegre"
        description="Reabilitação pós-operatória para cães em Porto Alegre com atendimento domiciliar, foco em recuperação funcional, mobilidade, conforto e segurança."
        canonical="https://duda.fisiovet.app/reabilitacao-pos-operatoria-caes-porto-alegre"
        serviceName="Reabilitação pós-operatória para cães em Porto Alegre"
      />

      <main>
        <Hero
          badge="Reabilitação pós-operatória para cães"
          title={
            <>
              Reabilitação pós-operatória
              <br />
              para cães em Porto Alegre
              <br />
              com atendimento domiciliar
            </>
          }
          description={
            <>
              Acompanhamento em casa para cães em recuperação após cirurgia, com foco
              em mobilidade, conforto, retorno funcional gradual e mais segurança na rotina
              da família.
            </>
          }
          whatsappText="Olá! Gostaria de saber mais sobre reabilitação pós-operatória para meu cão em Porto Alegre."
          miniPills={['Pós-operatório', 'Recuperação funcional', 'Atendimento em casa']}
        />

        <ServiceIntro
          badge="Recuperação com mais segurança"
          title="A reabilitação pós-operatória ajuda o cão a retomar função, movimento e confiança de forma gradual."
          description="Após cirurgias ortopédicas ou procedimentos que afetam a mobilidade, o acompanhamento fisioterapêutico pode contribuir para controle do desconforto, melhora funcional, fortalecimento e adaptação segura à rotina."
        />

        <ServiceIntro
          badge="Orientação para a rotina em casa"
          title="O pós-operatório não acontece só na sessão: a rotina da casa também faz parte da recuperação."
          description="No atendimento domiciliar, é possível orientar a família sobre cuidados no ambiente, manejo da locomoção, restrição de atividades, adaptação de pisos e formas mais seguras de apoiar o cão durante a recuperação."
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