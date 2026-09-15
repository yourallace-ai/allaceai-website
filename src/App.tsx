import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// 4 Core Pre-Launch Pages
import { HomePage } from './pages/HomePage';
import { HowPage } from './pages/HowPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Optional legacy secondary pages
import { ExplorePage } from './pages/ExplorePage';
import { LearnPage } from './pages/LearnPage';

// Legal Pages
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function getRouteFromPath(pathname: string): string {
  const clean = pathname.replace(/^\//, '').replace(/\.html$/, '').toLowerCase();
  if (!clean || clean === 'index' || clean === 'home') return 'home';
  if (clean === 'how' || clean === 'how-it-helps' || clean === 'how-allace-helps' || clean === 'features' || clean === 'journey') return 'how';
  if (clean === 'about' || clean === 'about-us' || clean === 'why-allace' || clean === 'trust-privacy') return 'about';
  if (clean === 'contact' || clean === 'contact-us') return 'contact';
  if (clean === 'explore' || clean === 'topics') return 'explore';
  if (clean === 'learn' || clean === 'how-it-works' || clean === 'refine' || clean === 'practice') return 'learn';
  if (clean === 'privacy' || clean === 'privacy-policy') return 'privacy-policy';
  if (clean === 'terms' || clean === 'terms-conditions') return 'terms';
  // If user enters legacy routes like /pricing or /faq, smoothly route to home
  if (clean === 'pricing' || clean === 'faq' || clean === 'faqs' || clean === 'download') return 'home';
  return '404';
}

const pageTitles: Record<string, string> = {
  home: 'Allace.Ai | Refine Your English. Express Yourself. Grow.',
  how: 'Allace.Ai | Better English Through Everyday Practice',
  about: 'About Allace.Ai | Better English for Everyday Life',
  contact: 'Contact Allace.Ai',
  explore: 'Refine & Express | Allace.Ai',
  learn: 'Practise & Grow | Allace.Ai',
  'privacy-policy': 'Privacy Policy | Allace AI',
  terms: 'Terms & Conditions | Allace AI',
  '404': 'Page Not Found (404) | Allace AI',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return getRouteFromPath(window.location.pathname);
  });
  const isFirstRender = useRef(true);

  // Handle browser back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and track SPA route navigation in Google Analytics
  useEffect(() => {
    const title = pageTitles[currentPage] || pageTitles.home;
    document.title = title;

    // Prevent duplicate initial page_view (gtag config in index.html sends the initial view)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Track SPA route change
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAF9F5' }}>
      <Header activeNav={currentPage} onNavigate={handleNavigate} />

      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'how' && (
          <HowPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'explore' && (
          <ExplorePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'learn' && (
          <LearnPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPage />
        )}

        {currentPage === 'terms' && (
          <TermsPage />
        )}

        {currentPage === '404' && (
          <NotFoundPage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
