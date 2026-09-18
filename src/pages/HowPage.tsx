import React, { useState } from 'react';
import {
  BookOpen,
  MessageSquare,
  TrendingUp,
  ChevronDown,
  Briefcase,
  Coffee,
  Heart,
  Globe,
  Award,
  Users,
} from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface HowPageProps {
  onNavigate: (page: string) => void;
}

export function HowPage({ onNavigate }: HowPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      name: 'REFINE',
      tagline: 'Build better English through everyday practice.',
      detail:
        'Learn useful words, phrases, verbs, expressions and sentence patterns. Understand how they fit together and start using them naturally.',
      icon: <BookOpen size={26} color="#0B1B2B" />,
      color: '#E5F1F3',
    },
    {
      name: 'EXPRESS',
      tagline: 'Know what to say and how to say it.',
      detail:
        'Learn how language changes depending on the situation, relationship and setting, from everyday conversations to professional communication.',
      icon: <MessageSquare size={26} color="#0B1B2B" />,
      color: '#EAF4F7',
    },
    {
      name: 'GROW',
      tagline: 'Use English with more ease and confidence.',
      detail:
        'Keep practising, keep using what you learn, and become more comfortable expressing yourself in any conversation.',
      icon: <TrendingUp size={26} color="#0B1B2B" />,
      color: '#E8F5EE',
    },
  ];

  const situations = [
    {
      title: 'At work & meetings',
      desc: 'Speak clearly, contribute with ease, and sound professional without overthinking.',
      icon: <Briefcase size={22} color="#008299" />,
    },
    {
      title: 'With friends & colleagues',
      desc: 'Keep conversations relaxed, natural, and expressive in everyday social settings.',
      icon: <Coffee size={22} color="#008299" />,
    },
    {
      title: 'In personal conversations',
      desc: 'Share thoughts and feelings with clarity, warmth, and the right degree of nuance.',
      icon: <Heart size={22} color="#008299" />,
    },
    {
      title: 'Online & social media',
      desc: 'Phrase messages, comments, and posts with the right tone, cadence, and clarity.',
      icon: <Globe size={22} color="#008299" />,
    },
    {
      title: 'Formal situations',
      desc: 'Find polite, polished phrasing with confidence whenever occasions call for it.',
      icon: <Award size={22} color="#008299" />,
    },
    {
      title: 'Speaking in front of others',
      desc: 'Express your ideas before groups and audiences with calm, steady composure.',
      icon: <Users size={22} color="#008299" />,
    },
  ];

  const faqs = [
    {
      q: 'What is Allace?',
      a: 'Allace is your everyday English companion. It helps you refine how you speak and write through calm, daily practice and real-world language.',
    },
    {
      q: 'Who is Allace for?',
      a: 'Allace is designed for adults and professionals who already understand English but want to sound more natural, expressive, and confident in daily and workplace conversations.',
    },
    {
      q: 'Is Allace only about learning words?',
      a: 'No. Words are only one part of English. Allace helps you refine your English, practise regularly, learn useful language, understand how to use it in different situations, express yourself better, and grow your confidence.',
    },
    {
      q: 'Can Allace help me improve my English?',
      a: 'Yes. Allace helps you move from knowing English to actually using it with clarity, better sentence phrasing, and natural flow.',
    },
    {
      q: 'Can I practise English every day?',
      a: 'Yes. Daily practice is at the heart of Allace. Bite-sized sessions fit naturally into your day without feeling like homework.',
    },
    {
      q: 'Can Allace help me learn phrases and expressions?',
      a: 'Yes. You will learn useful phrases, idioms, verbs, and natural expressions that go far beyond memorising isolated vocabulary lists.',
    },
    {
      q: 'Can Allace help me know what to say in different situations?',
      a: 'Yes. Allace explores how language changes between workplace meetings, casual talks with friends, online writing, and formal settings.',
    },
    {
      q: 'When is Allace launching?',
      a: 'The Allace mobile app is in final development and will be launching soon on iOS and Android. You can follow our updates right here on the website.',
    },
    {
      q: 'Is Allace available yet?',
      a: 'Not quite yet. We are completing final polish to deliver a calm, welcoming, and high-quality experience. It is coming soon.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION: DEDICATED HOW HERO
         ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '44px',
          paddingBottom: '52px',
          backgroundColor: '#FAF9F5',
          borderBottom: '1px solid #EAE6DD',
        }}
        className="section-pad-hero"
      >
        <div className="container-wide">
          {/* ONE COMPLETE HOW HERO BANNER CANVAS */}
          <div className="how-hero-canvas">
            {/* Editorial Content Layer in the Natural Left Safe Zone */}
            <div className="how-hero-content-layer">
              <span className="eyebrow-text" style={{ marginBottom: '12px' }}>
                HOW ALLACE HELPS
              </span>

              <h1 className="how-hero-title">
                English gets better<br />
                when you use it.
              </h1>

              <p className="how-hero-subtitle">
                Practise regularly, learn useful language, and discover how to communicate naturally in different situations.
              </p>
            </div>

            {/* Visual Foundation Canvas with Ally and Handwriting */}
            <div className="how-hero-art-canvas">
              <img
                src="/images/about-ally-with-book.webp"
                alt="Ally refining everyday English"
                className="how-hero-art-img"
              />
              <div className="ally-handwriting how-hero-handwriting">
                Small practice.<br />Real confidence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: THE THREE PILLARS (REFINE, EXPRESS, GROW)
         ========================================================================= */}
      <section
        id="pillars-section"
        style={{
          padding: '80px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EAE6DD',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow-text">THE CORE PILLARS</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: '800',
                color: '#0B1B2B',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                marginBottom: '14px',
              }}
            >
              Refine. Express. Grow.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#4A6068',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Three connected steps that turn everyday language into genuine communication confidence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
            className="how-pillars-grid"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                style={{
                  backgroundColor: '#FAF9F5',
                  borderRadius: '24px',
                  border: '1px solid #EAE5DB',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 4px 16px rgba(11, 27, 43, 0.03)',
                }}
                className="how-pillar-card"
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px',
                  }}
                >
                  {pillar.icon}
                </div>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    color: '#008299',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Pillar
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: '#0B1B2B',
                    letterSpacing: '-0.3px',
                    marginBottom: '10px',
                  }}
                >
                  {pillar.name}
                </h3>

                <p
                  style={{
                    fontSize: '15.5px',
                    fontWeight: '700',
                    color: '#0B1B2B',
                    lineHeight: '1.4',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.tagline}
                </p>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#4A6068',
                    lineHeight: '1.6',
                    marginTop: 'auto',
                  }}
                >
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SITUATION-BASED ENGLISH
         ========================================================================= */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#FAF9F5',
          borderBottom: '1px solid #EAE6DD',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow-text">LANGUAGE IN REAL LIFE</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: '800',
                color: '#0B1B2B',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                marginBottom: '14px',
              }}
            >
              Know what to say. Wherever you are.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#4A6068',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              At work. With friends. Online. In everyday conversations. Learn how to express yourself in ways that fit the moment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="situations-grid"
          >
            {situations.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #EAE5DB',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 14px rgba(11, 27, 43, 0.02)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                className="situation-card"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#EAF4F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#0B1B2B',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#4A6068',
                    lineHeight: '1.55',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DAILY PRACTICE
         ========================================================================= */}
      <section
        style={{
          padding: '72px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EAE6DD',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <span className="eyebrow-text" style={{ marginBottom: '12px' }}>
              THE EVERYDAY HABIT
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
              Make English part of your everyday.
            </h2>

            <p
              style={{
                fontSize: 'clamp(15.5px, 1.5vw, 18px)',
                color: '#4A6068',
                lineHeight: '1.65',
                marginBottom: '24px',
              }}
            >
              A little practice each day can help you feel more comfortable using English. No pressure, no tests, just natural progress.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#FAF9F5',
          borderBottom: '1px solid #EAE6DD',
        }}
      >
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="eyebrow-text">COMMON QUESTIONS</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: '800',
                color: '#0B1B2B',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                marginBottom: '12px',
              }}
            >
              Frequently asked questions.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#4A6068',
                lineHeight: '1.6',
              }}
            >
              Everything you need to know about Allace before launch.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  style={{
                    borderRadius: '18px',
                    backgroundColor: isOpen ? '#FFFFFF' : '#FAF9F5',
                    border: '1px solid #EAE5DB',
                    overflow: 'hidden',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '22px 26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: '16.5px',
                        fontWeight: '700',
                        color: '#0B1B2B',
                        lineHeight: '1.35',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: '#008299',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 26px 24px 26px',
                        fontSize: '15px',
                        color: '#4A6068',
                        lineHeight: '1.65',
                        borderTop: '1px solid #F0ECE4',
                        paddingTop: '16px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PRE-LAUNCH APP BANNER
         ========================================================================= */}
      <section
        style={{
          padding: '60px 0 80px 0',
          backgroundColor: '#FAF9F5',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              backgroundColor: '#F3F9FA',
              borderRadius: '28px',
              border: '1px solid #DFEEF0',
              padding: '44px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
            className="how-bottom-banner"
          >
            <div>
              <span className="eyebrow-text" style={{ marginBottom: '8px' }}>
                ALLACE.AI APP
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
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
                  marginBottom: '8px',
                }}
              >
                Your everyday English companion.
              </p>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#4A6068',
                  maxWidth: '440px',
                  margin: 0,
                  lineHeight: '1.55',
                }}
              >
                Practise, express and grow with Allace. Launching soon on mobile.
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
           HOW HERO BANNER CANVAS (ONE COMPLETE VISUAL COMPOSITION)
           ========================================================================= */
        .how-hero-canvas {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #EAE5DB;
          box-shadow: 0 16px 44px rgba(11, 27, 43, 0.06);
          background: linear-gradient(105deg, #FFFFFF 0%, #FFFFFF 44%, #F2F8FA 78%, #EBF4F7 100%);
          min-height: 450px;
          display: flex;
          align-items: center;
        }

        .how-hero-art-canvas {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 65%;
          max-width: 100%;
          pointer-events: none;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 12%, rgba(0, 0, 0, 0.2) 22%, rgba(0, 0, 0, 0.7) 36%, black 50%);
          mask-image: linear-gradient(to right, transparent 0%, transparent 12%, rgba(0, 0, 0, 0.2) 22%, rgba(0, 0, 0, 0.7) 36%, black 50%);
        }

        .how-hero-art-img {
          position: absolute;
          right: -30px;
          top: 48%;
          transform: translateY(-50%);
          height: 126%;
          width: auto;
          object-fit: contain;
          object-position: center center;
          display: block;
          mix-blend-mode: multiply;
        }

        .how-hero-handwriting {
          position: absolute;
          top: 11%;
          right: 7%;
          transform: rotate(5deg);
          font-size: clamp(18px, 1.6vw, 23px);
          color: #0A4E58;
          z-index: 3;
          pointer-events: none;
          line-height: 1.15;
          text-align: right;
          white-space: nowrap;
        }

        .how-hero-content-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 46%;
          padding: 36px 20px 36px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .how-hero-title {
          font-size: clamp(34px, 3.8vw, 50px);
          font-weight: 800;
          color: #0B1B2B;
          line-height: 1.12;
          letter-spacing: -1.2px;
          margin-bottom: 14px;
          max-width: 440px;
        }

        .how-hero-subtitle {
          font-size: clamp(15.5px, 1.4vw, 17.5px);
          color: #4A6068;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        .how-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(11, 27, 43, 0.06) !important;
        }

        .situation-card:hover {
          transform: translateY(-3px);
          border-color: #D5E5EC !important;
          box-shadow: 0 10px 24px rgba(11, 27, 43, 0.05) !important;
        }

        @media (max-width: 1024px) {
          .how-hero-canvas {
            min-height: 460px;
          }
          .how-hero-content-layer {
            max-width: 48%;
            padding: 36px 16px 36px 36px;
          }
          .how-hero-title {
            font-size: clamp(28px, 3.4vw, 38px);
          }
          .how-hero-subtitle {
            font-size: 15px;
          }
          .how-hero-art-canvas {
            width: 60%;
            min-width: 480px;
          }
          .how-hero-art-img {
            height: 94%;
            right: -15px;
          }
          .how-hero-handwriting {
            top: 11%;
            right: 5%;
            font-size: 18px;
          }
          .situations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 900px) {
          .how-pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .how-bottom-banner {
            padding: 32px 24px !important;
          }
        }

        @media (max-width: 768px) {
          .how-hero-canvas {
            min-height: auto;
            border-radius: 24px;
            display: flex;
            flex-direction: column-reverse;
            align-items: stretch;
            justify-content: flex-start;
            background-color: #FFFFFF;
          }
          .how-hero-content-layer {
            position: relative;
            max-width: 100%;
            padding: 24px 20px 32px 20px;
          }
          .how-hero-title {
            font-size: clamp(26px, 6vw, 36px);
            margin-bottom: 12px;
          }
          .how-hero-subtitle {
            font-size: 15px;
          }
          .how-hero-art-canvas {
            position: relative;
            right: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            height: auto;
            max-height: 300px;
            min-width: 100%;
            max-width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #EBF4F7 0%, #FAF9F5 100%);
            padding: 16px 16px 0 16px;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .how-hero-art-img {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            width: 100%;
            max-width: 320px;
            height: auto;
            max-height: 270px;
            object-fit: contain;
            object-position: center bottom;
            mix-blend-mode: multiply;
          }
          .how-hero-handwriting {
            top: 14px;
            right: 16px;
            font-size: clamp(14px, 4vw, 17px) !important;
            line-height: 1.15;
            z-index: 10;
            transform: rotate(4deg);
            white-space: nowrap;
          }
        }

        @media (max-width: 480px) {
          .how-hero-content-layer {
            padding: 20px 16px 28px 16px;
          }
          .how-hero-art-canvas {
            max-height: 260px;
            padding: 12px 12px 0 12px;
          }
          .how-hero-handwriting {
            font-size: 13.5px !important;
            right: 12px;
          }
        }

        @media (max-width: 640px) {
          .situations-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
