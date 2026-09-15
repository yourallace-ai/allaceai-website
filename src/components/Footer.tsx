import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
  };

  const currentYear = new Date().getFullYear();

  // Primary Multi-Page Navigation: EXACT MATCH WITH SPECIFICATION
  const navLinks = [
    { id: 'home', label: 'Allace' },
    { id: 'how', label: 'How' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#FAF9F5',
        borderTop: '1px solid #E5ECEB',
        padding: '48px 0 36px 0',
        color: '#0B1B2B',
      }}
    >
      <div className="container-wide">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            paddingBottom: '36px',
            borderBottom: '1px solid #EBE6DC',
          }}
        >
          {/* EXACT OFFICIAL ALLACE.AI LOGO ASSET FROM CURRENT PROJECT */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              textAlign: 'left',
              padding: 0,
            }}
            aria-label="Allace AI Home"
          >
            <img
              src="/images/allaceai-symbol-dark.webp"
              alt="Allace AI Symbol"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <img
              src="/images/allaceai-name-dark.webp"
              alt="Allace AI"
              style={{
                height: '15px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </button>

          {/* Navigation Links: EXACT SAME AS HEADER */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#4A6068',
                  transition: 'color 0.15s ease',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0B1B2B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6068')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/allace.ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4A6068', transition: 'color 0.15s ease' }}
              aria-label="Instagram"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#008299')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6068')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/111789292/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4A6068', transition: 'color 0.15s ease' }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#008299')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6068')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCGVJX_4HH0dR40WJO0Hi5xQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4A6068', transition: 'color 0.15s ease' }}
              aria-label="YouTube"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#008299')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6068')}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4A6068', transition: 'color 0.15s ease' }}
              aria-label="X"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#008299')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6068')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright + Ally Script Signature */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
          }}
        >
          <div style={{ fontSize: '13px', color: '#7C9197' }}>
            © {currentYear} Allace.AI. All rights reserved.
          </div>

          {/* Small handwritten brand line */}
          <div
            className="ally-handwriting-sm"
            style={{ color: '#0A4E58', fontSize: '22px' }}
          >
            Small practice. Big possibilities.
          </div>
        </div>
      </div>
    </footer>
  );
}
