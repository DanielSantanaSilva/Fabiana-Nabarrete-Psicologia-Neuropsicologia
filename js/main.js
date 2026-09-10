/**
 * Ponto de Entrada Principal da Aplicação
 * Fabiana Nabarréte - Psicologia & Neuropsicologia
 */

import { initNavigation } from './modules/navigation.js';
import { initContactForm } from './modules/contact-form.js';
import { initScrollEffects } from './modules/scroll-effects.js';
import { initPrivacyModal } from './modules/privacy-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initContactForm();
  initScrollEffects();
  initPrivacyModal();
});
