import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
const MasterSeoPillarPage = lazy(() => import('@/pages/MasterSeoPillarPage'));
const NoidaMasterHubPage = lazy(() => import('@/pages/NoidaMasterHubPage'));
import { PAGES_CONTENT } from '@/pages/serviceContent';

import { secureAPI } from '@/services/api';
import { trackVisitorAndNotifyAdmin } from '@/services/VisitorPushNotifier';
import { initSecurityShield } from '@/services/securityShield';
import { trackPageView } from '@/services/analytics';

const ScrollToTop = ({ lenis }: { lenis: any | null }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenis) {
      try {
        lenis.scrollTo(0, { immediate: true });
      } catch (e) {}
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Defer route tracking to background to keep transition instant
    const trackTimer = setTimeout(() => {
      trackVisitorAndNotifyAdmin(pathname);
      trackPageView(pathname);
    }, 1500);
    return () => clearTimeout(trackTimer);
  }, [pathname, lenis]);
  return null;
};

const AppContent: React.FC = () => {
  const lenisRef = useRef<any | null>(null);

  useEffect(() => {
    // Only initialize smooth scroll on desktop non-touch screens (free up mobile CPU and reduce mobile bundle)
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    
    if (!isTouch) {
      let isMounted = true;
      let rafId: number;

      import('lenis').then(({ default: Lenis }) => {
        if (!isMounted) return;
        const lenis = new Lenis({
          duration: 0.8,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      }).catch(() => {});

      return () => {
        isMounted = false;
        if (rafId) cancelAnimationFrame(rafId);
        if (lenisRef.current) lenisRef.current.destroy();
      };
    }

    initSecurityShield();

    // Defer non-critical background tracking by 3.5s to unblock slow network rendering
    const bgTimer = setTimeout(() => {
      secureAPI.trackVisit().catch(() => {});
    }, 3500);

    return () => clearTimeout(bgTimer);
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

                {/* Dedicated Master Noida Deep Authority Landing Pages */}
                <Route path="/escorts-in-noida" element={<NoidaMasterHubPage />} />
                <Route path="/call-girl-in-noida" element={<NoidaMasterHubPage pageVariant="call-girl" />} />
                <Route path="/escorts-service-in-noida" element={<NoidaMasterHubPage pageVariant="escorts-service" />} />
                <Route path="/noida" element={<NoidaMasterHubPage />} />
                <Route path="/call-girls-noida" element={<NoidaMasterHubPage />} />

                {/* Dedicated Master SEO Landing Page (Price & Booking Guide) */}
                <Route path="/noida-escorts" element={<MasterSeoPillarPage targetSlug="noida-escorts" />} />

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

                {/* Cannibalized Pillar Redirects to Consolidated Canonical Targets */}
                <Route path="/noida-callgirl" element={<Navigate to="/call-girls" replace />} />
                <Route path="/callgirl-noida" element={<Navigate to="/call-girls" replace />} />
                <Route path="/escorts-noida" element={<Navigate to="/" replace />} />

                {/* Legacy Massage Redirects to Call Girls */}
                <Route path="/massages" element={<Navigate to="/call-girls" replace />} />
                <Route path="/massage" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/massages" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/thai-massage" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/swedish-massage" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/deep-tissue" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/balinese-massage" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/couple-massage" element={<Navigate to="/call-girls" replace />} />
                <Route path="/services/full-body-massage" element={<Navigate to="/call-girls" replace />} />

                {/* 404 Catch-all: Automatically redirect unmatched routes to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
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