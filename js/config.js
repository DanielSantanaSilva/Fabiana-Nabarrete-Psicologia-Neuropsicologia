/**
 * Configurações Centrais e Dados da Clínica
 * Fabiana Nabarréte - Psicologia Clínica & Neuropsicologia
 */

export const CLINIC_CONFIG = {
  name: "Fabiana Nabarréte",
  title: "Psicóloga Clínica & Neuropsicóloga",
  crp: "CRP 06/123456",
  specialization: "Especialista pela Santa Casa de SP",
  phone: "(11) 98298-5683",
  whatsappRaw: "5511982985683",
  email: "psi.nabarretefabiana@outlook.com",
  defaultWhatsAppMessage: "Olá, gostaria de informações sobre agendamento de consulta.",
  addresses: {
    santoAndre: {
      title: "Consultório Santo André",
      street: "Rua Catequese, 1171",
      neighborhood: "Vila Guiomar",
      city: "Santo André",
      state: "SP",
      mapsUrl: "https://maps.google.com/?q=Rua+Catequese+1171+Santo+Andre+SP"
    },
    maua: {
      title: "Consultório Mauá",
      street: "Rua dos Bandeirantes, 215",
      neighborhood: "Vila Bocaina",
      city: "Mauá",
      state: "SP",
      mapsUrl: "https://maps.google.com/?q=Rua+dos+Bandeirantes+215+Maua+SP"
    }
  }
};

/**
 * Gera URL direta do WhatsApp com mensagem codificada
 * @param {string} text - Mensagem a ser enviada
 * @returns {string} URL formatada do WhatsApp
 */
export function getWhatsAppUrl(text = CLINIC_CONFIG.defaultWhatsAppMessage) {
  return `https://wa.me/${CLINIC_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
