const configuredNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '';
const whatsappNumber = configuredNumber.replace(/\D/g, '');

export const contact = {
  configuredNumber,
  hasWhatsapp: /^\d{10,15}$/.test(whatsappNumber),
  get href() {
    return this.hasWhatsapp
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero consultar productos de Anime Store Cusco.')}`
      : '#contacto';
  },
  get label() {
    return this.hasWhatsapp ? 'Consultar por WhatsApp' : 'Ver contacto';
  },
  get target() {
    return this.hasWhatsapp ? '_blank' : undefined;
  },
  get rel() {
    return this.hasWhatsapp ? 'noopener noreferrer' : undefined;
  },
};
