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
              src="/images/home-hero-ally-with-app.png"
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
              src="/images/home-ally-in-cta.png"
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
            min-height: 520px;
          }
          .home-hero-canvas-img {
            object-position: 84% center;
          }
          .home-hero-content-layer {
            max-width: 49%;
            padding: 44px 16px 44px 40px;
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

        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .pillar-col {
            border-right: none !important;
            border-bottom: 1px solid #E8E4DA;
            padding: 24px !important;
          }
        }

        @media (max-width: 860px) {
          .home-hero-canvas {
            min-height: 480px;
          }
          .home-hero-canvas-img {
            object-position: 88% center;
          }
          .home-hero-content-layer {
            max-width: 53%;
            padding: 36px 14px 36px 32px;
          }
          .home-hero-title {
            font-size: 32px;
            letter-spacing: -1px;
            margin-bottom: 12px;
          }
          .home-hero-subtitle {
            font-size: 16px;
            margin-bottom: 8px;
          }
          .home-hero-desc {
            font-size: 13.5px;
            margin-bottom: 20px;
          }
          .home-cta-banner-wrapper {
            min-height: 360px;
          }
          .home-cta-bg-img {
            object-position: 12% center;
          }
          .home-cta-handwriting {
            font-size: 16.5px;
            top: 12%;
            left: 33.5%;
            display: block;
          }
          .home-cta-content-layer {
            left: 47%;
            right: 3%;
          }
          .home-cta-title {
            font-size: 25px;
          }
          .home-cta-subtitle {
            font-size: 14px;
          }
          .home-cta-desc {
            font-size: 12px;
            margin-bottom: 12px;
          }
        }

        @media (max-width: 640px) {
          .home-hero-canvas {
            min-height: 640px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .home-hero-canvas-img {
            object-position: 74% 92%;
          }
          .home-hero-content-layer {
            max-width: 100%;
            padding: 32px 20px 20px 20px;
          }
          .home-hero-title {
            font-size: 30px;
            margin-bottom: 10px;
          }
          .home-hero-subtitle {
            font-size: 15.5px;
            margin-bottom: 8px;
          }
          .home-hero-desc {
            font-size: 13.5px;
            margin-bottom: 20px;
          }
          .home-cta-banner-wrapper {
            min-height: 520px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            position: relative;
          }
          .home-cta-bg-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 18% 95%;
          }
          .home-cta-content-layer {
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            padding: 30px 20px 16px 20px;
            z-index: 2;
          }
          .home-cta-title {
            font-size: 26px;
            margin-bottom: 6px;
          }
          .home-cta-subtitle {
            font-size: 14.5px;
            margin-bottom: 6px;
          }
          .home-cta-desc {
            font-size: 13px;
            margin-bottom: 16px;
          }
          .home-cta-handwriting {
            position: absolute;
            top: auto;
            bottom: 18%;
            left: 50%;
            right: auto;
            font-size: 17px;
            line-height: 1.15;
            transform: rotate(-6deg);
            display: block;
            z-index: 3;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
