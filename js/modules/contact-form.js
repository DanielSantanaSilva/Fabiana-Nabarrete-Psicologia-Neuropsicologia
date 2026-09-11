export function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const feedbackMessage = document.getElementById('formFeedbackMessage');
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (feedback && feedbackMessage) {
      feedback.classList.remove('hidden');
      feedbackMessage.textContent = 'Enviando sua solicitação...';
    }

    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/psi.nabarretefabiana@outlook.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: new FormData(form)
      });

      if (!response.ok) throw new Error('Falha no envio');

      form.reset();

      if (feedbackMessage) {
        feedbackMessage.textContent = 'Obrigado! Sua solicitação foi enviada com sucesso.';
      }
    } catch {
      if (feedbackMessage) {
        feedbackMessage.textContent = 'Não foi possível enviar agora. Tente novamente ou entre em contato pelo WhatsApp.';
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
