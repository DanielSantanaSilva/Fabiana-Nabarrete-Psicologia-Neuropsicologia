/**
 * Módulo do Formulário de Contato e Agendamento
 * Valida os campos e redireciona com mensagem personalizada para o WhatsApp
 */

import { getWhatsAppUrl } from '../config.js';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome')?.value.trim() || '';
    const whatsapp = document.getElementById('whatsapp')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const modalidade = document.getElementById('modalidade')?.value || '';
    const demanda = document.getElementById('demanda')?.value || '';
    const mensagem = document.getElementById('mensagem')?.value.trim() || '';

    // Feedback visual imediato
    if (feedback) {
      feedback.classList.remove('hidden');
    }

    // Formatação da mensagem para o WhatsApp
    const linhas = [
      `Olá, Fabiana! Gostaria de agendar uma consulta.`,
      ``,
      `*Nome:* ${nome}`,
      `*WhatsApp:* ${whatsapp}`,
      `*E-mail:* ${email}`,
      `*Modalidade:* ${modalidade}`,
      `*Demanda:* ${demanda}`
    ];

    if (mensagem) {
      linhas.push(`*Mensagem:* ${mensagem}`);
    }

    const textoFinal = linhas.join('\n');
    const urlDestino = getWhatsAppUrl(textoFinal);

    // Redirecionamento suave
    setTimeout(() => {
      window.open(urlDestino, '_blank');
    }, 800);
  });
}
