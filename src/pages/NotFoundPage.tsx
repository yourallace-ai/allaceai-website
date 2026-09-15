import React from 'react';
import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FAFCFB', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container-narrow">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <img
            src="/images/allaceai-symbol-dark.webp"
            alt="Allace AI Symbol"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        <div className="pill-badge pill-badge-mint" style={{ margin: '0 auto 16px auto' }}>
          <Compass size={13} />
          <span>Page Not Found</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '800',
            color: '#134E4A',
            lineHeight: '1.1',
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          404
        </h1>

        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginBottom: '16px' }}>
          This page could not be found.
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: '#355558',
            maxWidth: '520px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6',
          }}
        >
          The link you followed may be broken or the page may have been moved.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            <Home size={16} />
            <span>Return to Homepage</span>
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}
