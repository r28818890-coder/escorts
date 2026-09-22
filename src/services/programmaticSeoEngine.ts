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
  'Spa Near',
  'Massage Near',
  'Luxury Spa Near',
  'Open Now Spa',
  '24 Hours Spa',
  'Couple Spa',
  'Spa Near Hotel',
  'Spa Near Railway Station',
  'Spa Near Airport',
  'Spa Near Bus Stand',
];

const LOCATIONS = [
  'Sindhi Camp', 'MI Road', 'Bani Park', 'C-Scheme', 'Civil Lines',
  'Vaishali Nagar', 'Malviya Nagar', 'Mansarovar', 'Raja Park', 'Tonk Road',
  'Jagatpura', 'Polo Victory', 'Jaipur Junction', 'Jaipur Airport', 'Choti Chaupar',
  'Badi Chaupar', 'Subhash Nagar', 'Adarsh Nagar', 'Shastri Nagar', 'Vidyadhar Nagar',
];

/**
 * 3. Programmatic SEO Engine (1,000+ Pages Matrix)
 */
export const generateProgrammaticSeoMatrix = (): ProgrammaticPage[] => {
  const pages: ProgrammaticPage[] = [];

  INTENTS.forEach((intent) => {
    LOCATIONS.forEach((loc) => {
      const slug = `${intent.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-in-${loc.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-jaipur`;
      pages.push({
        id: `prog-${slug}`,
        slug,
        intent,
        location: loc,
        h1: `Best ${intent} ${loc}, Jaipur (Open 24 Hours)`,
        metaTitle: `${intent} ${loc} Jaipur | Jaipur Spa`,
        metaDescription: `Looking for top-rated ${intent} ${loc}, Jaipur? Jaipur Spa offers certified therapists, heated private suites, transparent rates, & instant WhatsApp booking.`,
        keywords: [`${intent} ${loc}`, `${intent} ${loc} Jaipur`, `Best Spa ${loc}`],
      });
    });
  });

  return pages;
};
