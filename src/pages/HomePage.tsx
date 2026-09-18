import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HOME HERO SECTION: INTEGRATED FULL-WIDTH CANVAS
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
          {/* One Large Full-Width Hero Canvas */}
          <div className="home-hero-canvas">
            {/* The Hero Image acting as the visual foundation */}
            <img
              src="/images/home-hero-ally-with-app.webp"
              alt="Ally standing beside the Allace AI app"
              className="home-hero-canvas-img"
            />

            {/* Existing Hero Content overlaid on the blank LEFT area of the image */}
            <div className="home-hero-content-layer">
              <span className="eyebrow-text" style={{ marginBottom: '14px' }}>
                IT STARTS WITH HOW YOU EXPRESS YOURSELF.
              </span>

              <h1 className="home-hero-title">
                Better English.<br />
                More confidence.
              </h1>

              <p className="home-hero-subtitle">
                Meet Ally, your everyday English companion.
              </p>

              <p className="home-hero-desc">
                Refine your English, practise every day, and learn how to express yourself naturally in real-life situations.
              </p>

              {/* Pre-launch Store Badges */}
              <div className="home-hero-badges">
                <AppStoreBadges size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: INTRODUCING ALLACE (Curiosity & Broader Value)
         ========================================================================= */}
      <section
        style={{
          padding: '64px 0 48px 0',
          borderTop: '1px solid #EAE6DD',
          backgroundColor: '#FAF9F5',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <span className="eyebrow-text" style={{ marginBottom: '12px' }}>
              BETTER ENGLISH FOR EVERYDAY LIFE
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: '800',
                color: '#0B1B2B',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                marginBottom: '16px',
              }}
            >
              Knowing English is one thing. Knowing how to use it is another.
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 1.5vw, 18px)',
                color: '#4A6068',
                lineHeight: '1.65',
                marginBottom: '28px',
              }}
            >
              Allace bridges that gap. Practise a little every day, learn language you can actually use, and feel confident in any conversation.
            </p>

            <div>
              <button
                onClick={() => onNavigate('how')}
                className="btn-primary-dark"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>See How Allace Works</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMING SOON APP BANNER (ART-DIRECTED CANVAS)
         ========================================================================= */}
      <section
        style={{
          padding: '36px 0 80px 0',
          backgroundColor: '#FAF9F5',
        }}
      >
        <div className="container-wide">
          <div className="home-cta-banner-wrapper">
            {/* The Image is the Visual Foundation Canvas */}
            <img
              src="/images/home-ally-in-cta.webp"
              alt="Ally on books, ready to grow with words"
              className="home-cta-bg-img"
            />

            {/* Handwritten callout intentionally positioned near Ally on the left */}
            <div className="ally-handwriting home-cta-handwriting">
              Ready<br />to refine<br />your English?
            </div>

            {/* Art-Directed Content Layer in the natural blank area */}
            <div className="home-cta-content-layer">
              <span className="eyebrow-text" style={{ marginBottom: '8px' }}>
                ALLACE.AI APP
              </span>

              <h2 className="home-cta-title">
                Better English starts here.
              </h2>

              <h3 className="home-cta-subtitle">
                Your everyday English companion.
              </h3>

              <p className="home-cta-desc">
                Practise. Express. Grow. The Allace mobile app is coming soon.
              </p>

              {/* App store badges */}
              <div className="home-cta-badges">
                <AppStoreBadges size="default" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Integrated Full-Width Hero Canvas */
        .home-hero-canvas {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #EAE5DB;
          box-shadow: 0 16px 44px rgba(11, 27, 43, 0.06);
          background-color: #FFFFFF;
          min-height: 580px;
          display: flex;
          align-items: center;
        }

        .home-hero-canvas-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
          display: block;
          pointer-events: none;
        }

        .home-hero-content-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 46%;
          padding: 60px 20px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .home-hero-title {
          font-size: clamp(34px, 4.2vw, 56px);
          font-weight: 800;
          color: #0B1B2B;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }

        .home-hero-subtitle {
          font-size: clamp(17px, 1.8vw, 21px);
          font-weight: 700;
          color: #008299;
          line-height: 1.35;
          margin-bottom: 10px;
          max-width: 440px;
        }

        .home-hero-desc {
          font-size: clamp(14px, 1.3vw, 17px);
          color: #4A6068;
          line-height: 1.55;
          margin-bottom: 28px;
          max-width: 420px;
        }

        .home-hero-badges {
          display: flex;
          align-items: center;
        }

        /* Art-Directed Promotional CTA Banner */
        .home-cta-banner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 44px rgba(11, 27, 43, 0.06);
          border: 1px solid #EAE5DB;
          background-color: #FAF9F5;
          display: flex;
          align-items: center;
        }

        .home-cta-bg-img {
          width: 100%;
          height: auto;
          display: block;
          pointer-events: none;
        }

        .home-cta-handwriting {
          position: absolute;
          top: 15%;
          left: 39%;
          transform: rotate(-6deg);
          font-size: clamp(20px, 1.8vw, 26px);
          color: #0A4E58;
          pointer-events: none;
          line-height: 1.15;
          z-index: 3;
          white-space: nowrap;
          text-align: left;
        }

        .home-cta-content-layer {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 52%;
          right: 4%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }

        .home-cta-title {
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800;
          color: #0B1B2B;
          line-height: 1.1;
          margin-bottom: 8px;
          letter-spacing: -0.8px;
        }

        .home-cta-subtitle {
          font-size: clamp(15px, 1.4vw, 19px);
          font-weight: 700;
          color: #008299;
          margin-bottom: 6px;
          line-height: 1.35;
        }

        .home-cta-desc {
          font-size: clamp(13px, 1.1vw, 15.5px);
          color: #4A6068;
          line-height: 1.5;
          max-width: 440px;
          margin-bottom: 20px;
        }

        .home-cta-badges {
          display: flex;
          align-items: center;
        }

        .pillar-col:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }
        .pillar-col:hover .pillar-icon-wrap {
          transform: scale(1.08);
          background-color: #D6EAEF;
        }

        @media (max-width: 1024px) {
          .home-hero-canvas {
            min-height: 500px;
          }
          .home-hero-canvas-img {
            object-position: 84% center;
          }
          .home-hero-content-layer {
            max-width: 50%;
            padding: 44px 20px 44px 36px;
          }
          .home-hero-title {
            font-size: clamp(30px, 3.8vw, 42px);
          }
          .home-cta-banner-wrapper {
            min-height: 380px;
          }
          .home-cta-bg-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 15% center;
          }
          .home-cta-handwriting {
            font-size: 19px;
            top: 14%;
            left: 36%;
            display: block;
          }
          .home-cta-content-layer {
            left: 50%;
            right: 4%;
          }
          .home-cta-title {
            font-size: 28px;
          }
          .home-cta-subtitle {
            font-size: 15px;
          }
          .home-cta-desc {
            font-size: 13px;
            margin-bottom: 16px;
          }
        }

        @media (max-width: 768px) {
          .home-hero-canvas {
            min-height: auto;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: #FFFFFF;
          }
          .home-hero-canvas-img {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            max-height: 320px;
            object-fit: contain;
            object-position: center;
            background-color: #FAF9F5;
            padding: 12px 12px 0 12px;
          }
          .home-hero-content-layer {
            position: relative;
            max-width: 100%;
            padding: 24px 20px 32px 20px;
          }
          .home-hero-title {
            font-size: clamp(26px, 6.5vw, 36px);
            margin-bottom: 12px;
            letter-spacing: -0.8px;
          }
          .home-hero-subtitle {
            font-size: clamp(15px, 4vw, 18px);
            margin-bottom: 8px;
          }
          .home-hero-desc {
            font-size: clamp(13.5px, 3.5vw, 15px);
            margin-bottom: 20px;
          }
          .home-cta-banner-wrapper {
            min-height: auto;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: #FAF9F5;
          }
          .home-cta-bg-img {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            max-height: 280px;
            object-fit: contain;
            object-position: center;
            background-color: #F5F3EC;
            padding: 12px 12px 0 12px;
          }
          .home-cta-handwriting {
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            margin: 16px 20px 4px 20px;
            font-size: clamp(16px, 4.5vw, 22px);
            line-height: 1.15;
            transform: rotate(-3deg);
            display: inline-block;
            text-align: left;
            white-space: normal;
          }
          .home-cta-content-layer {
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            padding: 12px 20px 32px 20px;
          }
          .home-cta-title {
            font-size: clamp(24px, 6vw, 32px);
            margin-bottom: 6px;
          }
          .home-cta-subtitle {
            font-size: 15px;
            margin-bottom: 6px;
          }
          .home-cta-desc {
            font-size: 13.5px;
            margin-bottom: 18px;
          }
        }

        @media (max-width: 480px) {
          .home-hero-content-layer {
            padding: 20px 16px 28px 16px;
          }
          .home-cta-content-layer {
            padding: 12px 16px 28px 16px;
          }
          .home-cta-handwriting {
            margin: 14px 16px 4px 16px;
          }
        }
      `}</style>
    </div>
  );
}
