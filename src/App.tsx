import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Header from '@/components/layout/Header';
import NewsFooter from '@/components/layout/NewsFooter';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import WatermarkBackground from '@/components/common/WatermarkBackground';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LocationTracker, { LocationData } from '@/components/common/LocationTracker';

// Pages
import Home from '@/pages/Home';
import CategoryListingPage from '@/pages/CategoryListingPage';
import AdDetailPage from '@/pages/AdDetailPage';
import SafetyGuidePage from '@/pages/SafetyGuidePage';
import NoidaAreasPage from '@/pages/NoidaAreasPage';
import BookingPage from '@/pages/BookingPage';
import ServiceContactPage from '@/pages/ServiceContactPage';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';
import FaqPage from '@/pages/FaqPage';
import ServiceLegalPage from '@/pages/ServiceLegalPage';
import InsightsPage from '@/pages/InsightsPage';
import PostDetail from '@/pages/PostDetail';
import AdminNotificationPanel from '@/pages/AdminNotificationPanel';
import ServicePage from '@/pages/ServicePage';
import CityLanding from '@/pages/CityLanding';
import NotFoundPage from '@/pages/NotFoundPage';
import { PAGES_CONTENT } from '@/pages/serviceContent';

import { secureAPI } from '@/services/api';
import { trackVisitorAndNotifyAdmin } from '@/services/VisitorPushNotifier';
import { initSecurityShield } from '@/services/securityShield';
import { trackPageView } from '@/services/analytics';

const ScrollToTop = ({ lenis }: { lenis: Lenis | null }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    trackVisitorAndNotifyAdmin(pathname);
    trackPageView(pathname);
  }, [pathname, lenis]);
  return null;
};

const AppContent: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    initSecurityShield();

    secureAPI.trackVisit().catch(() => {});

    return () => lenis.destroy();
  }, []);

  const handleLocationFound = async (data: LocationData) => {
    try {
      await secureAPI.trackLocation({ city: data.city, region: data.region, country: data.country });
    } catch {}
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased relative">
        <ScrollToTop lenis={lenisRef.current} />
        <LocationTracker onLocationFound={handleLocationFound} />

        {/* Stable Fixed Background Watermark across all pages */}
        <WatermarkBackground />

        <div className="relative z-10">
          <Header />

          <main id="main-content" className="pt-[64px] sm:pt-[76px]">
            <Routes>
              {/* Core Home Route */}
              <Route path="/" element={<Home />} />

              {/* Programmatic Service & Location Landing Pages */}
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/location/:slug" element={<CityLanding />} />
              <Route path="/area/:slug" element={<CityLanding />} />

              {/* Portal Directory & Guides */}
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/safety-guide" element={<SafetyGuidePage />} />
              <Route path="/noida-areas" element={<NoidaAreasPage />} />

              {/* Category & Locality Classifieds Routes */}
              <Route path="/:category" element={<CategoryListingPage />} />
              <Route path="/:category/:locality" element={<CategoryListingPage />} />
              <Route path="/:category/:locality/:slug" element={<AdDetailPage />} />

              {/* Info & Legal Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ServiceContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/blog" element={<InsightsPage />} />
              <Route path="/blog/:id" element={<PostDetail />} />
              <Route path="/privacy" element={<ServiceLegalPage data={PAGES_CONTENT.privacy} />} />
              <Route path="/terms" element={<ServiceLegalPage data={PAGES_CONTENT.terms} />} />
              <Route path="/refund" element={<ServiceLegalPage data={PAGES_CONTENT.refund} />} />

              {/* Protected Admin */}
              <Route path="/admin" element={<AdminNotificationPanel />} />

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <NewsFooter />
          <WhatsAppButton />
        </div>
      </div>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;