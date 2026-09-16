import React from 'react';
import { Mail } from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/allace.ai/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/111789292/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCGVJX_4HH0dR40WJO0Hi5xQ',
      icon: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61587212822635',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION: ONE LARGE EDITORIAL CONTACT HERO BANNER CANVAS
         ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '28px',
          paddingBottom: '64px',
          backgroundColor: '#FAF9F5',
        }}
        className="section-pad-hero"
      >
        <div className="container-wide">
          {/* ONE COMPLETE CONTACT HERO BANNER */}
          <div className="contact-hero-canvas">
            {/* Visual Foundation Canvas Image */}
            <img
              src="/images/contact-ally.webp"
              alt="Ally listening at desk with coffee"
              className="contact-hero-canvas-img"
            />

            {/* Content Layer Integrated into the Left Negative Space */}
            <div className="contact-hero-content-layer">
              <span className="eyebrow-text" style={{ marginBottom: '14px' }}>
                CONTACT ALLACE
              </span>

              <h1 className="contact-hero-title">
                Have a question or<br />
                just want to say hello?
              </h1>

              <p className="contact-hero-subtitle">
                Email us or find us on social.
              </p>

              {/* Direct Clickable Email Link */}
              <div className="contact-hero-email-wrap">
                <a
                  href="mailto:contactally@allaceai.co"
                  className="contact-hero-email-link"
                >
                  <Mail size={20} className="contact-hero-email-icon" />
                  <span>contactally@allaceai.co</span>
                </a>
              </div>

              {/* Integrated Social Media Channels */}
              <div className="contact-hero-social-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-hero-social-btn"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM BANNER: STAY CONNECTED (BALANCED 3-PART COMPOSITION)
         ========================================================================= */}
      <section
        style={{
          padding: '24px 0 80px 0',
          backgroundColor: '#FAF9F5',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              backgroundColor: '#F3F8F9',
              borderRadius: '28px',
              border: '1px solid #DFEEF0',
              padding: '48px 52px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.9fr 1fr',
              alignItems: 'center',
              gap: '32px',
            }}
            className="contact-cta-balanced"
          >
            {/* LEFT / MAIN AREA */}
            <div className="contact-cta-main">
              <span className="eyebrow-text" style={{ marginBottom: '10px' }}>
                STAY CONNECTED
              </span>

              <h2
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.15',
                  letterSpacing: '-0.5px',
                  marginBottom: '8px',
                }}
              >
                Better English starts here.
              </h2>

              <p
                style={{
                  fontSize: '15.5px',
                  fontWeight: '700',
                  color: '#008299',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                The Allace mobile app is coming soon.
              </p>
            </div>

            {/* MIDDLE / SUPPORTING AREA */}
            <div
              className="contact-cta-middle"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                className="ally-handwriting"
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 34px)',
                  color: '#0A4E58',
                  transform: 'rotate(4deg)',
                  whiteSpace: 'nowrap',
                  lineHeight: '1.2',
                }}
              >
                Same curiosity.<br />Bigger you.
              </div>
            </div>

            {/* RIGHT / ACTION AREA */}
            <div
              className="contact-cta-action"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <AppStoreBadges size="large" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================================================
           CONTACT HERO BANNER CANVAS (ONE COMPLETE VISUAL COMPOSITION)
           ========================================================================= */
        .contact-hero-canvas {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #EAE5DB;
          box-shadow: 0 16px 44px rgba(11, 27, 43, 0.06);
          background-color: #FAF9F5;
          min-height: 560px;
          display: flex;
          align-items: center;
        }

        .contact-hero-canvas-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right 58%;
          display: block;
          pointer-events: none;
        }

        .contact-hero-content-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 48%;
          padding: 60px 20px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-hero-title {
          font-size: clamp(30px, 3.6vw, 46px);
          font-weight: 800;
          color: #0B1B2B;
          line-height: 1.14;
          letter-spacing: -1.2px;
          margin-bottom: 12px;
        }

        .contact-hero-subtitle {
          font-size: clamp(15.5px, 1.5vw, 18px);
          color: #4A6068;
          line-height: 1.55;
          margin-bottom: 26px;
        }

        .contact-hero-email-wrap {
          margin-bottom: 24px;
        }

        .contact-hero-email-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(14px, 4.5vw, 20px);
          font-weight: 800;
          color: #008299;
          text-decoration: none;
          transition: color 0.15s ease, transform 0.15s ease;
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .contact-hero-email-link:hover {
          color: #0B1B2B;
          transform: translateX(2px);
        }

        .contact-hero-email-icon {
          color: #008299;
          flex-shrink: 0;
        }

        .contact-hero-social-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .contact-hero-social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.85);
          border: 1px solid #E5ECEB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A6068;
          backdrop-filter: blur(4px);
          transition: all 0.2s ease;
        }

        .contact-hero-social-btn:hover {
          background-color: #EAF4F7;
          color: #008299;
          border-color: #D5E5EC;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .contact-hero-canvas {
            min-height: 500px;
          }
          .contact-hero-canvas-img {
            object-position: 85% 58%;
          }
          .contact-hero-content-layer {
            max-width: 52%;
            padding: 44px 16px 44px 36px;
          }
          .contact-hero-title {
            font-size: clamp(26px, 3.2vw, 36px);
          }
        }

        @media (max-width: 768px) {
          .contact-hero-canvas {
            min-height: auto;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
          .contact-hero-content-layer {
            position: relative;
            max-width: 100%;
            padding: 36px 24px 24px 24px;
          }
          .contact-hero-title {
            font-size: clamp(24px, 5.5vw, 32px);
            margin-bottom: 10px;
          }
          .contact-hero-subtitle {
            font-size: 15px;
            margin-bottom: 20px;
          }
          .contact-hero-email-wrap {
            margin-bottom: 20px;
          }
          .contact-hero-email-link {
            font-size: 17px;
          }
          .contact-hero-canvas-img {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: 75% 65%;
            display: block;
          }
        }

        @media (max-width: 960px) {
          .contact-cta-balanced {
            grid-template-columns: 1fr !important;
            padding: 36px 28px !important;
            gap: 28px !important;
          }
          .contact-cta-middle {
            justify-content: flex-start !important;
            text-align: left !important;
          }
          .contact-cta-action {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
