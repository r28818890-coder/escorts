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
    { anchorText: 'Escorts in Noida Hub', url: '/', category: 'Core Service Hub' },
    { anchorText: 'Call Girls in Noida Directory', url: '/call-girls', category: 'Category Hub' },
    { anchorText: 'Noida Escorts Price List & Booking Guide', url: '/noida-escorts', category: 'Pricing & Guides' },
    { anchorText: 'VIP Escorts Noida Five-Star Outcall', url: '/vip-escorts', category: 'Luxury VIP' },
    { anchorText: 'Russian Escorts Noida', url: '/russian-escorts', category: 'International Models' },
    { anchorText: '24/7 Hotel Outcall Booking Desk', url: '/booking', category: 'Direct Dispatch' },
  ];
};
