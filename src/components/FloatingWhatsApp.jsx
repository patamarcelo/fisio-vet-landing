import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551992806633'

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackEvent('click_whatsapp_float', {
      section: 'floating_button',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Vim pelo site e gostaria de mais informações sobre fisioterapia veterinária domiciliar.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <button className="floating-whatsapp" onClick={handleClick}>
      WhatsApp
    </button>
  )
}