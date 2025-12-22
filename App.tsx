import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// --- IMPORTS (Corrected for your folder structure) ---
// Ab hum seedha './components/...' use kar rahe hain kyunki 'src' folder nahi hai

import Header from './components/Header';
import NewsFooter from './components/NewsFooter';
import Modal from './components/Modal';
import ServiceContactPage from './components/ServiceContactPage'; 

// Note: Agar Home.tsx components folder me hai to './components/Home' likhein.
// Agar Home.tsx abhi tak nahi banaya, to niche instructions dekhein.
import Home from './components/Home'; 
import DynamicPage from './components/DynamicPage';

const ScrollToTop = ({ lenis }: { lenis: Lenis | null }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);
  return null;
};

const AppContent: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop lenis={lenisRef.current} />
      
      {/* Header */}
      <Header />

      <main className="pt-28 md:pt-32">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* Contact Page Route */}
          <Route path="/contact" element={<ServiceContactPage />} />

          {/* Dynamic Routes (Services) */}
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </main>

      <NewsFooter />
      <Modal />
    </div>
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