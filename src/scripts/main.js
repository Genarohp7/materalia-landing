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

initReveal();
