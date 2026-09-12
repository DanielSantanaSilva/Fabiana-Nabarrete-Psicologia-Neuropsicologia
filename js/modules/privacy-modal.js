export function initPrivacyModal() {
  const modal = document.getElementById('privacyModal');
  const openButtons = document.querySelectorAll('#privacyModalBtn, [data-open-privacy-modal]');
  const closeButton = document.getElementById('privacyModalClose');
  let lastFocusedElement;

  if (!modal || !openButtons.length || !closeButton) return;

  function openModal(event) {
    lastFocusedElement = event.currentTarget;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    lastFocusedElement?.focus();
  }

  openButtons.forEach((button) => button.addEventListener('click', openModal));
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}
