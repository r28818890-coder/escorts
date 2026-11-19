export interface HyperlocalHierarchyItem {
  area: string;
  type: 'sector' | 'hotel' | 'metro' | 'transit' | 'hospital' | 'college' | 'mall';
  name: string;
  distanceFromSpa: string;
  driveTime: string;
  metaTitle: string;
}

const HYPERLOCAL_HIERARCHY: HyperlocalHierarchyItem[] = [
  // Sector 18 Central Entertainment & Luxury Hub
  { area: 'Sector 18', type: 'sector', name: 'Sector 18 Commercial & Entertainment Hub', distanceFromSpa: '0.1 km', driveTime: '1 min walk', metaTitle: 'Call Girls & Escorts in Sector 18 Noida' },
  { area: 'Sector 18', type: 'hotel', name: 'Radisson Blu Hotel MBD Sector 18', distanceFromSpa: '0.2 km', driveTime: '2 mins walk', metaTitle: 'Luxury Outcall Escorts near Radisson Blu Sector 18 Noida' },
  { area: 'Sector 18', type: 'mall', name: 'DLF Mall of India & Gardens Galleria', distanceFromSpa: '0.4 km', driveTime: '3 mins', metaTitle: 'Verified Companions near DLF Mall of India Noida' },
  { area: 'Sector 18', type: 'metro', name: 'Noida Sector 18 Metro Station (Blue Line)', distanceFromSpa: '0.2 km', driveTime: '2 mins walk', metaTitle: 'Escorts near Sector 18 Metro Station Noida' },

  // Sector 62 IT & Institutional Hub
  { area: 'Sector 62', type: 'sector', name: 'Sector 62 IT & Corporate Hub', distanceFromSpa: '8.5 km', driveTime: '12 mins', metaTitle: 'VIP Escorts Service Sector 62 Noida IT Hub' },
  { area: 'Sector 62', type: 'hotel', name: 'Park Ascent Hotel Sector 62', distanceFromSpa: '8.8 km', driveTime: '14 mins', metaTitle: '5-Star Hotel Outcall Escorts near Park Ascent Noida' },
  { area: 'Sector 62', type: 'metro', name: 'Noida Electronic City Metro Station', distanceFromSpa: '9.0 km', driveTime: '15 mins', metaTitle: 'Verified Call Girls near Electronic City Metro Sector 62' },
  { area: 'Sector 62', type: 'hospital', name: 'Fortis Hospital Sector 62', distanceFromSpa: '8.2 km', driveTime: '12 mins', metaTitle: 'Doorstep Outcall Companions near Fortis Hospital Sector 62' },

  // Noida-Greater Noida Expressway / Sector 137 / 142
  { area: 'Noida Expressway', type: 'mall', name: 'Advant Navis Business Park Sector 142', distanceFromSpa: '9.5 km', driveTime: '12 mins', metaTitle: 'Elite Escorts near Advant Navis Sector 142 Noida' },
  { area: 'Noida Expressway', type: 'hospital', name: 'Felix Hospital Sector 137 Noida', distanceFromSpa: '10.2 km', driveTime: '14 mins', metaTitle: 'Escorts Service near Felix Hospital Sector 137 Noida' },
  { area: 'Noida Expressway', type: 'hotel', name: 'Sandal Suites by Lemon Tree Expressway', distanceFromSpa: '11.0 km', driveTime: '15 mins', metaTitle: 'Luxury Hotel Outcall Escorts near Sandal Suites Expressway' },

  // Greater Noida / Pari Chowk Hub
  { area: 'Pari Chowk', type: 'transit', name: 'Pari Chowk Interchange Greater Noida', distanceFromSpa: '22.0 km', driveTime: '22 mins', metaTitle: 'Call Girls & Escorts near Pari Chowk Greater Noida' },
  { area: 'Pari Chowk', type: 'mall', name: 'India Expo Centre & Mart Greater Noida', distanceFromSpa: '23.5 km', driveTime: '25 mins', metaTitle: 'Executive Exhibition Companions near India Expo Mart' },
  { area: 'Pari Chowk', type: 'hotel', name: 'Crowne Plaza Hotel Greater Noida', distanceFromSpa: '24.0 km', driveTime: '25 mins', metaTitle: 'VIP 5-Star Hotel Outcall near Crowne Plaza Greater Noida' },

  // Central Hub & Transit Connectors
  { area: 'Botanical Garden', type: 'metro', name: 'Botanical Garden Metro Interchange Station', distanceFromSpa: '1.8 km', driveTime: '4 mins', metaTitle: 'Escorts near Botanical Garden Metro Noida' },
  { area: 'Film City', type: 'sector', name: 'Noida Film City Sector 16A', distanceFromSpa: '1.5 km', driveTime: '3 mins', metaTitle: 'Glamour & Celebrity Escorts near Film City Noida' },
];

/**
 * Hyperlocal SEO Hierarchy AI Engine
 */
export const getHyperlocalSeoHierarchy = (): HyperlocalHierarchyItem[] => {
  return HYPERLOCAL_HIERARCHY;
};
