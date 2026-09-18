import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeNav: string;
  onNavigate: (nav: string) => void;
}

export function Header({ activeNav, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  // Primary Multi-Page Navigation: EXACT MATCH WITH SPECIFICATION
  const navLinks = [
    { id: 'home', label: 'ALLACE' },
    { id: 'how', label: 'HOW' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(250, 249, 245, 0.96)' : 'rgba(250, 249, 245, 0.9)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(229, 236, 235, 0.8)',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
          className="header-inner-container"
        >
          {/* EXACT OFFICIAL ALLACE.AI LOGO ASSET FROM CURRENT PROJECT */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              textAlign: 'left',
              padding: '4px 0',
              minHeight: '44px',
            }}
            aria-label="Allace AI Home"
          >
            <img
              src="/images/allaceai-symbol-dark.webp"
              alt="Allace AI Symbol"
              className="header-brand-symbol"
            />
            <img
              src="/images/allaceai-name-dark.webp"
              alt="Allace AI"
              style={{
                height: '14px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              className="header-brand-name"
            />
          </button>

          {/* Center Navigation: Explore, Learn, About, Contact */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '36px',
            }}
            className="desktop-nav-menu"
          >
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    fontSize: '15px',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#0B1B2B' : '#4A6068',
                    padding: '6px 0',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0',
                        right: '0',
                        height: '2px',
                        backgroundColor: '#0B1B2B',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Area: APP COMING SOON button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* APP COMING SOON button */}
            <button
              onClick={() => {
                const el = document.querySelector('.home-cta-banner-wrapper');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('home');
                }
              }}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '9999px',
                backgroundColor: '#EAF4F7',
                border: '1px solid #D5E5EC',
                fontSize: '12px',
                fontWeight: '700',
                color: '#008299',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="desktop-status-tag"
              title="Allace.AI App Coming Soon"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DDF0F4')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EAF4F7')}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#008299' }} />
              <span>APP COMING SOON</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '44px',
                height: '44px',
                color: '#0B1B2B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FAF9F5',
              borderTop: '1px solid #E5ECEB',
              padding: '16px 20px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              boxShadow: '0 12px 30px rgba(11, 27, 43, 0.08)',
            }}
            className="animate-fade-in"
          >
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    minHeight: '46px',
                    borderRadius: '10px',
                    backgroundColor: isActive ? '#EBF4F7' : 'transparent',
                    color: isActive ? '#008299' : '#0B1B2B',
                    fontWeight: isActive ? '700' : '600',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#008299',
                      }}
                    />
                  )}
                </button>
              );
            })}

            <div style={{ height: '1px', backgroundColor: '#E5ECEB', margin: '4px 0' }} />

            <div
              style={{
                padding: '12px 14px',
                fontSize: '12px',
                fontWeight: '700',
                color: '#008299',
                backgroundColor: '#EAF4F7',
                borderRadius: '10px',
                textAlign: 'center',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
              }}
            >
              Allace.AI App · Coming Soon
            </div>
          </div>
        )}

        <style>{`
          .header-inner-container {
            padding: 14px 28px;
          }
          .header-brand-symbol {
            height: 30px;
            width: auto;
            object-fit: contain;
            display: block;
          }
          .header-brand-name {
            height: 14px;
            width: auto;
            object-fit: contain;
            display: block;
          }
          @media (max-width: 768px) {
            .header-inner-container {
              padding: 12px 18px;
            }
          }
          @media (max-width: 375px) {
            .header-inner-container {
              padding: 10px 14px;
            }
            .header-brand-symbol {
              height: 26px;
            }
            .header-brand-name {
              height: 12px;
            }
          }
          @media (max-width: 320px) {
            .header-inner-container {
              padding: 8px 12px;
            }
            .header-brand-symbol {
              height: 24px;
            }
            .header-brand-name {
              height: 11px;
            }
          }
          @media (min-width: 860px) {
            .desktop-nav-menu {
              display: flex !important;
            }
            .desktop-status-tag {
              display: inline-flex !important;
            }
            .mobile-toggle-btn {
              display: none !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}
