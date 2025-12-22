import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

// ✅ UPDATE: Kyunki ye file components folder me hai, hum './' use karenge
import { PAGES_CONTENT } from './serviceContent'; 
import { PageId } from '../types'; // Types usually root me hote hain, isliye ../

import ServiceGuidePage from './ServiceGuidePage';
import ServiceLegalPage from './ServiceLegalPage';

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // URL se check karo ki kaunsa data dikhana hai
  const data = PAGES_CONTENT[slug as PageId];

  // Agar page nahi mila toh Home par bhejo
  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Back button function
  const handleBack = () => {
    navigate(-1);
  };

  // Agar Guide wala page hai
  if (data.type === 'guide') {
    return <ServiceGuidePage data={data} onBack={handleBack} />;
  }

  // Agar Legal (Terms/Refund) wala page hai
  if (data.type === 'legal') {
    return <ServiceLegalPage data={data} onBack={handleBack} />;
  }

  return null;
};

export default DynamicPage;