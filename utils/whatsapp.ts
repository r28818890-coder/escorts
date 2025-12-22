const WHATSAPP_NUMBER = '919660030903';

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;

export const openWhatsAppWithMessage = (message: string) => {
  if (!message) return;
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const formatLeadMessage = (payload: Record<string, string>) => {
  const lines = Object.entries(payload)
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([key, value]) => `${key}: ${value.trim()}`);
  return lines.join('\n');
};

