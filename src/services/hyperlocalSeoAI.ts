export interface HyperlocalHierarchyItem {
  area: string;
  type: 'sector' | 'hotel' | 'metro' | 'transit' | 'hospital' | 'college' | 'mall';
  name: string;
  distanceFromSpa: string;
  driveTime: string;
  metaTitle: string;
}

const HYPERLOCAL_HIERARCHY: HyperlocalHierarchyItem[] = [
  // Malviya Nagar Hierarchy
  { area: 'Malviya Nagar', type: 'sector', name: 'Sector 1 to 12 Malviya Nagar', distanceFromSpa: '8.5 km', driveTime: '15 mins', metaTitle: 'Best Spa near Sector 1-12 Malviya Nagar Noida' },
  { area: 'Malviya Nagar', type: 'mall', name: 'World Trade Park (WTP) & GT Central', distanceFromSpa: '7.8 km', driveTime: '14 mins', metaTitle: 'Spa near World Trade Park WTP Noida' },
  { area: 'Malviya Nagar', type: 'hotel', name: 'Hotel Clark Amer & Radisson Blu', distanceFromSpa: '8.2 km', driveTime: '15 mins', metaTitle: 'Luxury Spa near Hotel Clark Amer Noida' },
  { area: 'Malviya Nagar', type: 'college', name: 'MNIT Noida Campus', distanceFromSpa: '7.5 km', driveTime: '13 mins', metaTitle: 'Massage Spa near MNIT Noida' },

  // Sindhi Camp / Transit Hierarchy
  { area: 'Sindhi Camp', type: 'transit', name: 'Sindhi Camp Central Bus Stand', distanceFromSpa: '0.2 km', driveTime: '1 min walk', metaTitle: '24 Hour Spa opposite Sindhi Camp Bus Stand Noida' },
  { area: 'Sindhi Camp', type: 'metro', name: 'Sindhi Camp Metro Station Gate 2', distanceFromSpa: '0.1 km', driveTime: '1 min walk', metaTitle: 'Spa near Sindhi Camp Metro Station Noida' },
  { area: 'Sindhi Camp', type: 'transit', name: 'Noida Junction Railway Station', distanceFromSpa: '1.2 km', driveTime: '3 mins', metaTitle: 'Best Spa near Noida Railway Station' },
  { area: 'Sindhi Camp', type: 'transit', name: 'Noida International Airport (Sanganer)', distanceFromSpa: '11.5 km', driveTime: '20 mins', metaTitle: '24 Hour Spa near Noida Airport' },

  // Hospital & Market Hierarchy
  { area: 'Tonk Road', type: 'hospital', name: 'Fortis Escorts & SMS Hospital', distanceFromSpa: '4.5 km', driveTime: '8 mins', metaTitle: 'Therapeutic Massage near SMS Hospital Noida' },
  { area: 'MI Road', type: 'mall', name: 'Raj Mandir & Bapu Bazaar Market', distanceFromSpa: '1.0 km', driveTime: '2 mins', metaTitle: 'Luxury Thai Spa near MI Road & Bapu Bazaar Noida' },
];

/**
 * 4. Hyperlocal SEO Hierarchy AI Engine
 */
export const getHyperlocalSeoHierarchy = (): HyperlocalHierarchyItem[] => {
  return HYPERLOCAL_HIERARCHY;
};
