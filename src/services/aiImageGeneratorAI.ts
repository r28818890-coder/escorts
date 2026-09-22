export interface ImageSeoItem {
  id: string;
  imageName: string;
  url: string;
  altText: string;
  category: 'service' | 'blog' | 'og' | 'featured';
}

/**
 * 12. AI Image & ALT Text Generator Engine
 * Generates SEO-optimized visual assets and keyword-targeted ALT text tags.
 */
export const generateSeoOptimizedImages = (): ImageSeoItem[] => {
  return [
    {
      id: 'img-1',
      imageName: 'jaipur_escorts_club_logo.jpg',
      url: '/jaipur_escorts_club_logo.jpg',
      altText: 'Jaipur Skokka VIP Escorts & Spa Luxury Emblem Jaipur',
      category: 'og',
    },
    {
      id: 'img-2',
      imageName: 'thai_massage_jaipur.jpg',
      url: '/images/spa_therapy.jpg',
      altText: 'Certified Thai Massage Therapist performing acupressure stretch in Jaipur',
      category: 'service',
    },
    {
      id: 'img-3',
      imageName: 'couple_spa_suite.jpg',
      url: '/images/spa_therapy.jpg',
      altText: 'Luxury Soundproof Couple Spa Suite in Jaipur',
      category: 'featured',
    },
  ];
};
