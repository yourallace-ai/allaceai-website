import React from 'react';
import {
  MessageSquare,
  Sparkles,
  TrendingUp,
  Clock,
  Compass,
  Smile,
  Users,
} from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const outcomes = [
    {
      title: 'Clearer communication',
      icon: <MessageSquare size={24} color="#0B1B2B" />,
    },
    {
      title: 'More confidence',
      icon: <Sparkles size={24} color="#0B1B2B" />,
    },
    {
      title: 'Greater ease',
      icon: <TrendingUp size={24} color="#0B1B2B" />,
    },
  ];

  const approaches = [
    {
      title: 'Practise at your pace',
      icon: <Clock size={22} color="#008299" />,
    },
    {
      title: 'Use language in real life',
      icon: <Compass size={22} color="#008299" />,
    },
    {
      title: 'Understand different situations',
      icon: <Smile size={22} color="#008299" />,
    },
    {
      title: 'Built for real people',
      icon: <Users size={22} color="#008299" />,
    },
  ];

  const brandValues = ['Heard', 'Supported', 'Encouraged', 'More confident'];

  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION: ONE LARGE EDITORIAL HERO COMPOSITION
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
          {/* One Large Hero Composition */}
          <div className="about-hero-canvas">
            {/* Primary Hero Image: Ally with Mobile */}
            <img
              src="/images/about-hero-ally-with-mobile.webp"
              alt="Ally exploring English on mobile"
              className="about-hero-canvas-img"
            />

            {/* Editorial Content Layer positioned in the natural negative space on the left */}
            <div className="about-hero-content-layer">
              <span className="eyebrow-text" style={{ marginBottom: '14px' }}>
                ABOUT ALLACE
              </span>

              <h1 className="about-hero-title">
                English is more than<br />
                knowing the rules.
              </h1>

              <p className="about-hero-subtitle">
                It is knowing how to use it.
              </p>

              <p className="about-hero-desc">
                Allace helps you refine your English through daily practice, learn useful language, and express yourself with more confidence in real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: WHY WE EXIST (Signpost Visual)
         ========================================================================= */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #EAE5DB' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              alignItems: 'center',
              gap: '64px',
            }}
            className="hero-split-grid"
          >
            <div>
              <span className="eyebrow-text">WHY WE EXIST</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  letterSpacing: '-0.5px',
                }}
              >
                Knowing English is one thing. Knowing how to use it is another.
              </h2>

              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.65', marginBottom: '14px' }}>
                You know what you want to say. But in the moment, you pause.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '22px',
                  paddingLeft: '16px',
                  borderLeft: '3px solid #008299',
                  fontStyle: 'italic',
                  color: '#0B1B2B',
                  fontSize: '15.5px',
                }}
              >
                <div>“Is this the right phrase?”</div>
                <div>“Does this sound natural?”</div>
                <div>“How do I say this in this situation?”</div>
              </div>

              <p style={{ fontSize: '16.5px', color: '#008299', fontWeight: '700', lineHeight: '1.65' }}>
                Allace is here to bridge that gap.
              </p>
            </div>

            {/* Right Column: Direction Signpost Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/about-directions-bar-visual.webp"
                alt="Direction signpost, We have all been there"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  boxShadow: '0 12px 36px rgba(11, 27, 43, 0.05)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR BELIEF (3 Outcomes)
         ========================================================================= */}
      <section style={{ padding: '60px 0 80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #EAE5DB' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              alignItems: 'center',
              gap: '48px',
            }}
            className="hero-split-grid"
          >
            <div>
              <span className="eyebrow-text">OUR BELIEF</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                  marginBottom: '16px',
                }}
              >
                Progress, not perfection.
              </h2>
              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.6' }}>
                Knowing more English is useful. Knowing how to use it is powerful. When you practise regularly, expressing your thoughts becomes natural and comfortable.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
              className="about-outcomes-grid"
            >
              {outcomes.map((item, idx) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '24px 16px',
                    borderRight: idx < 2 ? '1px solid #EAE5DB' : 'none',
                  }}
                  className="outcome-col"
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#EAF4F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '800',
                      color: '#0B1B2B',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '4px',
                      borderRadius: '9999px',
                      backgroundColor: '#008299',
                      opacity: 0.7,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY "ALLACE"? (Ally with Heart)
         ========================================================================= */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #EAE5DB' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              alignItems: 'center',
              gap: '64px',
            }}
            className="hero-split-grid"
          >
            {/* Left: Ally with glowing heart */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                {/* Handwritten equation */}
                <div
                  className="ally-handwriting equation-handwriting"
                  style={{
                    position: 'absolute',
                    top: '28%',
                    left: '-16%',
                    transform: 'rotate(-10deg)',
                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                    color: '#0A4E58',
                    zIndex: 2,
                    pointerEvents: 'none',
                    lineHeight: '1.2',
                    textAlign: 'center',
                  }}
                >
                  Ally<br />+<br />Solace<br />=<br />Allace<br />♡
                </div>

                <img
                  src="/images/about-ally-with-heart.webp"
                  alt="Ally holding glowing heart"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '50%',
                    boxShadow: '0 16px 40px rgba(11, 27, 43, 0.08)',
                  }}
                />
              </div>
            </div>

            {/* Right: Narrative */}
            <div>
              <span className="eyebrow-text">WHY “ALLACE”?</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  letterSpacing: '-0.5px',
                }}
              >
                A name with heart.
              </h2>

              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.65', marginBottom: '20px' }}>
                Allace is a blend of two meaningful words:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ fontSize: '16px', color: '#0B1B2B', lineHeight: '1.5' }}>
                  <strong style={{ color: '#0B1B2B', fontSize: '17px' }}>Ally</strong>
                  <span style={{ color: '#4A6068' }}> represents a trusted friend who helps and supports you.</span>
                </div>
                <div style={{ fontSize: '16px', color: '#0B1B2B', lineHeight: '1.5' }}>
                  <strong style={{ color: '#0B1B2B', fontSize: '17px' }}>Solace</strong>
                  <span style={{ color: '#4A6068' }}> represents comfort and reassurance.</span>
                </div>
              </div>

              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.65', marginBottom: '28px' }}>
                Together, Allace reflects the kind of experience we want people to have.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {brandValues.map((val) => (
                  <span
                    key={val}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '9999px',
                      backgroundColor: '#EAF4F7',
                      color: '#008299',
                      fontWeight: '700',
                      fontSize: '13.5px',
                    }}
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR APPROACH (4 Cards)
         ========================================================================= */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #EAE5DB' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              alignItems: 'center',
              gap: '64px',
            }}
            className="hero-split-grid"
          >
            <div>
              <span className="eyebrow-text">OUR APPROACH</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  letterSpacing: '-0.5px',
                }}
              >
                Support, not correction.
              </h2>
              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.65', maxWidth: '480px' }}>
                Allace is built to support your English journey with warmth, curiosity, and encouragement.
              </p>
            </div>

            {/* 4 Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
              className="approach-grid"
            >
              {approaches.map((app) => (
                <div
                  key={app.title}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #E5ECEB',
                    padding: '32px 24px',
                    textAlign: 'center',
                    boxShadow: '0 4px 14px rgba(11, 27, 43, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginBottom: '14px' }}>{app.icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#0B1B2B', lineHeight: '1.3' }}>
                    {app.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEET ALLY (Waving Ally)
         ========================================================================= */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #EAE5DB' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              alignItems: 'center',
              gap: '64px',
            }}
            className="hero-split-grid"
          >
            {/* Left: Ally Waving */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/about-ally-hi.webp"
                alt="Ally waving hello"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  borderRadius: '50%',
                  boxShadow: '0 16px 40px rgba(11, 27, 43, 0.08)',
                }}
              />
            </div>

            {/* Right: Narrative */}
            <div>
              <span className="eyebrow-text">MEET ALLY</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  letterSpacing: '-0.5px',
                }}
              >
                A little ally for a bigger you.
              </h2>
              <p style={{ fontSize: '16.5px', color: '#4A6068', lineHeight: '1.65', maxWidth: '480px', marginBottom: '14px' }}>
                Ally is your companion when you are unsure what to say, how to phrase it, or which expression fits best.
              </p>
              <p style={{ fontSize: '16px', color: '#0B1B2B', fontWeight: '600', lineHeight: '1.6', maxWidth: '480px' }}>
                Curious when you are. Helpful when you need it. Always on your side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: BOTTOM CTA
         ========================================================================= */}
      <section
        style={{
          padding: '20px 0 80px 0',
          backgroundColor: '#FAF9F5',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              backgroundColor: '#F3F9FA',
              borderRadius: '28px',
              border: '1px solid #DFEEF0',
              padding: '40px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
            className="about-bottom-cta"
          >
            <div>
              <span className="eyebrow-text" style={{ marginBottom: '6px' }}>
                ALLACE.AI APP
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '6px',
                }}
              >
                Better English starts here.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#008299',
                  marginBottom: '6px',
                }}
              >
                Your everyday English companion.
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: '#4A6068',
                  margin: 0,
                }}
              >
                The Allace mobile app is coming soon.
              </p>
            </div>

            <div>
              <AppStoreBadges size="large" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================================================
           ABOUT HERO BANNER CANVAS (ONE COMPLETE VISUAL COMPOSITION)
           ========================================================================= */
        .about-hero-canvas {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #EAE5DB;
          box-shadow: 0 16px 44px rgba(11, 27, 43, 0.06);
          background-color: #F8F7F3;
          min-height: 560px;
          display: flex;
          align-items: center;
        }

        .about-hero-canvas-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right 30%;
          display: block;
          pointer-events: none;
        }

        .about-hero-content-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 48%;
          padding: 64px 20px 64px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-hero-title {
          font-size: clamp(32px, 3.8vw, 52px);
          font-weight: 800;
          color: #0B1B2B;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 14px;
        }

        .about-hero-subtitle {
          font-size: clamp(17px, 1.7vw, 21px);
          font-weight: 700;
          color: #008299;
          line-height: 1.35;
          margin-bottom: 16px;
        }

        .about-hero-desc {
          font-size: clamp(14px, 1.25vw, 16.5px);
          color: #4A6068;
          line-height: 1.65;
          max-width: 450px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .about-hero-canvas {
            min-height: 500px;
          }
          .about-hero-canvas-img {
            object-position: 85% 30%;
          }
          .about-hero-content-layer {
            max-width: 52%;
            padding: 44px 16px 44px 36px;
          }
          .about-hero-title {
            font-size: clamp(28px, 3.4vw, 38px);
          }
        }

        @media (max-width: 768px) {
          .about-hero-canvas {
            min-height: auto;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
          .about-hero-content-layer {
            position: relative;
            max-width: 100%;
            padding: 36px 24px 24px 24px;
          }
          .about-hero-title {
            font-size: clamp(26px, 6vw, 34px);
            margin-bottom: 10px;
          }
          .about-hero-subtitle {
            font-size: 16px;
            margin-bottom: 10px;
          }
          .about-hero-desc {
            font-size: 14px;
          }
          .about-hero-canvas-img {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: 65% center;
          }
        }

        @media (max-width: 900px) {
          .about-outcomes-grid {
            grid-template-columns: 1fr !important;
          }
          .outcome-col {
            border-right: none !important;
            border-bottom: 1px solid #EAE5DB;
          }
          .equation-handwriting {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            margin-bottom: 16px !important;
          }
          .about-bottom-cta {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
