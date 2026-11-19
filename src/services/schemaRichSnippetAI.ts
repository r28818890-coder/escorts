export interface SchemaTypeItem {
  type: string;
  name: string;
  isApplied: boolean;
}

/**
 * 14. Schema & Rich Snippet AI Engine (11 Schema Types)
 */
export const getActiveSchemaTypes = (): SchemaTypeItem[] => {
  return [
    { type: 'LocalBusiness', name: 'EntertainmentBusiness / Directory Schema', isApplied: true },
    { type: 'FAQPage', name: 'Google SERP Expandable FAQ Schema', isApplied: true },
    { type: 'Article', name: 'BlogPosting & News Article Schema', isApplied: true },
    { type: 'BreadcrumbList', name: 'Google Breadcrumbs Schema', isApplied: true },
    { type: 'Service', name: 'Verified Companion Service Schema', isApplied: true },
    { type: 'Organization', name: 'Brand & Business Entity Schema', isApplied: true },
    { type: 'AggregateRating', name: 'Google Search Gold Stars (4.9) Schema', isApplied: true },
    { type: 'VideoObject', name: 'Verified Companion Video Schema', isApplied: true },
    { type: 'ImageObject', name: 'Real Photo Verified Profile Image Schema', isApplied: true },
    { type: 'WebSite', name: 'WebSite Domain Entity Schema', isApplied: true },
    { type: 'SearchAction', name: 'Sitelinks Searchbox Schema', isApplied: true },
  ];
};
