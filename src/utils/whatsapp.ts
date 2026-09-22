import { BRAND, CONTACT } from '@/config/site';

const DEFAULT_NUMBER = CONTACT.whatsapp1;

export const buildWebsiteWhatsAppUrl = (
  serviceOrContext?: string,
  extraService?: string,
  number: string = DEFAULT_NUMBER
) => {
  let message = '';
  if (serviceOrContext && extraService) {
    message = `Hello ${BRAND.name}, I would like to inquire about ${serviceOrContext} along with: ${extraService}. Please share verified profile photos & availability.`;
  } else if (serviceOrContext) {
    message = `Hello ${BRAND.name}, I would like to inquire about ${serviceOrContext}. Please share available verified models.`;
  } else if (extraService) {
    message = `Hello ${BRAND.name}, I am interested in: ${extraService}. Please share available details.`;
  } else {
    message = `Hello ${BRAND.name}, I would like to inquire about verified companion availability today.`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const createWhatsAppLink = buildWebsiteWhatsAppUrl;

export const openWhatsAppWithMessage = (message: string, number: string = DEFAULT_NUMBER) => {
  if (!message) return;
  const cleanMsg = message.startsWith('Hello') ? message.trim() : `Hello ${BRAND.name}, ${message.trim()}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(cleanMsg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const formatLeadMessage = (payload: Record<string, string>) => {
  const lines = Object.entries(payload)
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([key, value]) => `${key}: ${value.trim()}`);
  return `Hello ${BRAND.name}, I would like to make an inquiry request:\n\n` + lines.join('\n');
};
