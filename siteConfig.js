// Central place for contact details so numbers/emails are never duplicated
// across components. Update here and the whole site updates.

export const WHATSAPP_NUMBER = '2348026636134'
export const WHATSAPP_DISPLAY = '+234 802 663 6134'
export const CONTACT_EMAIL = 'fulaniturto111@gmail.com'

export const whatsappLink = (message = "Hi Fulaniturto! I'd like to learn more.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const mailtoLink = (subject = 'Enquiry from Fulaniturto website') =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

export const SOCIALS = {
  whatsapp: whatsappLink(),
  tiktok: 'https://www.tiktok.com',
  facebook: 'https://www.facebook.com',
}
