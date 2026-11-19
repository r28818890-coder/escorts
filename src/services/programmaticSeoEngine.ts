export interface ProgrammaticPage {
  id: string;
  slug: string;
  intent: string;
  location: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

const INTENTS = [
  'Escorts Near',
  'Call Girls Near',
  'VIP Escorts in',
  '24 Hours Escorts',
  'Hotel Outcall Escorts',
  'Independent Escorts',
  'Russian Escorts',
  'Cash on Delivery Escorts',
  'Luxury Companions in',
  'Doorstep Outcall in',
];

const LOCATIONS = [
  'Sector 18 Noida', 'Sector 62 Noida', 'Sector 50 Noida', 'Sector 137 Expressway',
  'Sector 142 Advant', 'Sector 128 Jaypee', 'Sector 76 Noida', 'Botanical Garden',
  'Film City Sector 16', 'Pari Chowk Greater Noida', 'Noida Extension',
  'Sector 44 Noida', 'Sector 15 Noida', 'Sector 27 Noida', 'Sector 29 Noida',
  'Sector 32 Noida', 'Sector 52 Noida', 'Sector 104 Noida', 'Sector 121 Noida',
  'Sector 150 Noida',
];

/**
 * Programmatic SEO Engine (Noida & NCR Matrix)
 */
export const generateProgrammaticSeoMatrix = (): ProgrammaticPage[] => {
  const pages: ProgrammaticPage[] = [];

  INTENTS.forEach((intent) => {
    LOCATIONS.forEach((loc) => {
      const slug = `${intent.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-in-${loc.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      pages.push({
        id: `prog-${slug}`,
        slug,
        intent,
        location: loc,
        h1: `Verified ${intent} ${loc} (100% Real Photos & 20-Min Outcall)`,
        metaTitle: `${intent} ${loc} | Escorts Hub Noida`,
        metaDescription: `Looking for top-rated ${intent} ${loc}? Escorts Hub Noida offers 100% verified real photos, zero advance payment, direct hotel outcall arrival within 20 mins, & instant WhatsApp booking.`,
        keywords: [`${intent} ${loc}`, `${intent} ${loc} Noida`, `Best Companions ${loc}`],
      });
    });
  });

  return pages;
};
