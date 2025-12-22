import React, { useState, useRef, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GrowthProcess from './components/GrowthProcess';
import GrowthAnimation from './components/GrowthAnimation';
import IndiaMap from './components/IndiaMap';
import GuideTabs from './components/GuideTabs';
import NewsFooter from './components/NewsFooter';
import Modal from './components/Modal';
import { PageId } from './types';
import { PAGES_CONTENT } from './serviceContent';
import ServiceGuidePage from './components/ServiceGuidePage';
import ServiceLegalPage from './components/ServiceLegalPage';
import ServiceContactPage from './components/ServiceContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const pageTopRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const handleNavigate = (pageId: PageId) => {
    // Save current scroll position if on home page
    if (currentPage === 'home') {
      setPreviousScrollPosition(window.scrollY);
    }
    
    setCurrentPage(pageId);
    
    // Smooth scroll to top using Lenis
    requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { immediate: false });
    });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    // Restore previous scroll position after a short delay
    setTimeout(() => {
      lenisRef.current?.scrollTo(previousScrollPosition, { immediate: false });
    }, 100);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return (
        <>
          <Hero />
          <Stats />
          <GrowthProcess />
          <GrowthAnimation />
          <IndiaMap />
          <div ref={servicesRef} id="services">
            <GuideTabs onNavigate={handleNavigate} />
          </div>
          <NewsFooter onNavigate={handleNavigate} />
        </>
      );
    }

    if (currentPage === 'contact') {
      return (
        <>
          <ServiceContactPage onBack={handleNavigate} />
          <NewsFooter onNavigate={handleNavigate} />
        </>
      );
    }

    const data = PAGES_CONTENT[currentPage];
    if (!data) {
      return (
        <>
          <ServiceContactPage />
          <NewsFooter onNavigate={handleNavigate} />
        </>
      );
    }

    if (data.type === 'guide') {
      return (
        <>
          <ServiceGuidePage data={data} onBack={handleBackToHome} />
          <NewsFooter onNavigate={handleNavigate} />
        </>
      );
    }

    if (data.type === 'legal') {
      return (
        <>
          <ServiceLegalPage data={data} onBack={handleBackToHome} />
          <NewsFooter onNavigate={handleNavigate} />
        </>
      );
    }

    return null;
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Smooth scroll to top when page changes
  useEffect(() => {
    if (currentPage !== 'home') {
      requestAnimationFrame(() => {
        lenisRef.current?.scrollTo(0, { immediate: false });
      });
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <div ref={pageTopRef} className="absolute top-0" aria-hidden="true" />
      <Header
        onNavigate={handleNavigate}
        onScrollToServices={() => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
            // slight delay to ensure home is rendered before scroll
            setTimeout(() => {
              if (servicesRef.current) {
                lenisRef.current?.scrollTo(servicesRef.current, { offset: 0, immediate: false });
              }
            }, 100);
          } else {
            if (servicesRef.current) {
              lenisRef.current?.scrollTo(servicesRef.current, { offset: 0, immediate: false });
            }
          }
        }}
      />
      <main className="pt-28 md:pt-32">{renderPage()}</main>
      <Modal />
    </div>
  );
};

export default App;