const whatsappNumber = '52XXXXXXXXXX';
const whatsappMessage = 'Hola, quiero agendar una consulta inicial con Arias Abogados.';

export const siteConfig = {
  brandName: 'Arias Abogados',
  siteUrl: 'https://ariasabogados.mx/',
  whatsappNumber,
  whatsappMessage,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  externalJorgeAriasUrl: 'https://jossergioj215.sg-host.com',
};
