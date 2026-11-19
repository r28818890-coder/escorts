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
      imageName: 'ecj-mark.svg',
      url: '/ecj-mark.svg',
      altText: 'Escorts Hub Noida VIP Crest Emblem Noida',
      category: 'og',
    },
    {
      id: 'img-2',
      imageName: 'hero_vip_model.webp',
      url: '/images/hero-hot-model-bg.webp',
      altText: 'Verified VIP Escorts and Call Girls in Noida & NCR',
      category: 'service',
    },
    {
      id: 'img-3',
      imageName: 'riya-vip-escorts-sector-18-noida.webp',
      url: '/images/riya-vip-escorts-sector-18-noida.webp',
      altText: 'Luxury 5-Star Hotel Outcall VIP Escort in Sector 18 Noida',
      category: 'featured',
    },
  ];
};
