export interface InternalLinkItem {
  anchorText: string;
  url: string;
  category: string;
}

/**
 * 5. Internal Linking AI Mesh
 * Connects programmatic pages to parent service clusters and main booking pages.
 */
export const generateInternalLinkMesh = (currentSlug: string): InternalLinkItem[] => {
  return [
    { anchorText: 'Traditional Thai Massage Noida', url: '/thai-massage-benefits-noida', category: 'Therapy Cluster' },
    { anchorText: 'Deep Tissue Muscle Pain Relief', url: '/deep-tissue-vs-swedish', category: 'Therapy Cluster' },
    { anchorText: 'Couple Luxury Spa Package Rate', url: '/#pricing', category: 'Pricing & Packages' },
    { anchorText: '24 Hour Sindhi Camp Spa Location', url: '/#location', category: 'Location Hub' },
    { anchorText: 'Noida Travel Distance Calculator', url: '/#calculator', category: 'Interactive Tool' },
  ];
};
