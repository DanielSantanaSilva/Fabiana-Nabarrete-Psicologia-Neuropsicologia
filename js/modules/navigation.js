/**
 * Módulo de Navegação
 * Gerencia menu responsivo mobile e comportamento dos links
 */

export function initNavigation() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (!mobileBtn || !mobileMenu) return;

  function toggleMenu() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    if (menuIcon) {
      menuIcon.textContent = isHidden ? 'menu' : 'close';
    }
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    if (menuIcon) {
      menuIcon.textContent = 'menu';
    }
  }

  mobileBtn.addEventListener('click', toggleMenu);

  // Fechar ao clicar em qualquer link do menu
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}
