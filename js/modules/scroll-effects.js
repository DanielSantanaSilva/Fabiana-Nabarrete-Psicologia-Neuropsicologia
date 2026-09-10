/**
 * Módulo de Efeitos de Rolagem
 * Altera estilo do header e comportamento de rolagem
 */

export function initScrollEffects() {
  const header = document.querySelector('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
      header.classList.remove('shadow-[0_1px_8px_rgba(0,0,0,0.04)]');
    } else {
      header.classList.remove('shadow-md');
      header.classList.add('shadow-[0_1px_8px_rgba(0,0,0,0.04)]');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
