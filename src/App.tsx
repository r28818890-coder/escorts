import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Header from '@/components/layout/Header';
import NewsFooter from '@/components/layout/NewsFooter';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import WatermarkBackground from '@/components/common/WatermarkBackground';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LocationTracker, { LocationData } from '@/components/common/LocationTracker';

// Core Home Page loaded eagerly for instant FCP / LCP
import Home from '@/pages/Home';

// Lazy-load all other pages on-demand to minimize initial JS bundle
const CategoryListingPage = lazy(() => import('@/pages/CategoryListingPage'));
const AdDetailPage = lazy(() => import('@/pages/AdDetailPage'));
const SafetyGuidePage = lazy(() => import('@/pages/SafetyGuidePage'));
const NoidaAreasPage = lazy(() => import('@/pages/NoidaAreasPage'));
const BookingPage = lazy(() => import('@/pages/BookingPage'));
const ServiceContactPage = lazy(() => import('@/pages/ServiceContactPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const ServiceLegalPage = lazy(() => import('@/pages/ServiceLegalPage'));
const InsightsPage = lazy(() => import('@/pages/InsightsPage'));
const PostDetail = lazy(() => import('@/pages/PostDetail'));
const AdminNotificationPanel = lazy(() => import('@/pages/AdminNotificationPanel'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const CityLanding = lazy(() => import('@/pages/CityLanding'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
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
    // Only initialize smooth scroll on desktop non-touch screens (free up mobile CPU)
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    
    if (!isTouch) {
      const lenis = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    initSecurityShield();
    secureAPI.trackVisit().catch(() => {});
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
            <Suspense fallback={<div className="min-h-[50vh] bg-[#f8fafc]" />}>
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
            </Suspense>
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