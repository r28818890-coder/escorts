import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Data Import
import { PAGES_CONTENT } from '@/pages/serviceContent'; 
import { JAIPUR_LOCATIONS } from '@/config/site';

// Component Imports
import ServiceGuidePage from '@/pages/ServiceGuidePage';
import ServiceLegalPage from '@/pages/ServiceLegalPage';
import CityLanding from '@/pages/CityLanding';
import SEO from '@/components/common/SEO';
import NotFoundPage from '@/pages/NotFoundPage';

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // 1. Check if it's a location page
  const isLocation = JAIPUR_LOCATIONS.some(loc => loc.slug === slug);
  if (isLocation) {
    // We can render CityLanding, but we need to pass the slug as cityId, or CityLanding should use slug.
    // Let's just render CityLanding here, but we need to modify CityLanding to read `slug` instead of `cityId`.
    // Wait, let's just pass `slug` down as a prop or modify CityLanding.
    // I'll render CityLanding and let it handle the slug. I will update CityLanding next.
    return <CityLanding />;
  }

  // 2. Check if it's a service/legal page
  const data = slug ? PAGES_CONTENT[slug] : undefined;
  
  // If slug missing or page not found, show 404
  if (!slug || !data) {
    return <NotFoundPage />;
  }

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  const currentUrl = window.location.href;

  return (
    <>
      <SEO 
        title={data.title} 
        description={data.subtitle} 
        image={data.heroImage}
        url={currentUrl}
      />

      {data.type === 'guide' ? (
        <ServiceGuidePage data={data} onBack={handleBack} />
      ) : (
        <ServiceLegalPage data={data} onBack={handleBack} />
      )}
    </>
  );
};

export default DynamicPage;