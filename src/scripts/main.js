import { siteConfig } from '../data/site.config.js';
import { initReveal } from './reveal.js';

document.documentElement.classList.add('js');

document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  link.setAttribute('href', siteConfig.whatsappUrl);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

document.querySelectorAll('[data-config-link="externalJorgeAriasUrl"]').forEach((link) => {
  link.setAttribute('href', siteConfig.externalJorgeAriasUrl);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

const masthead = document.querySelector('#masthead');
const menuButton = document.querySelector('.masthead-menu');
const menu = document.querySelector('#masthead-nav');

function setMenuState(isOpen) {
  masthead?.classList.toggle('is-open', isOpen);
  menuButton?.setAttribute('aria-expanded', String(isOpen));
}

menuButton?.addEventListener('click', () => {
  setMenuState(!masthead?.classList.contains('is-open'));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

initReveal();
