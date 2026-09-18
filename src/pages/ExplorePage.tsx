import React, { useState } from 'react';
import {
  Search,
  ArrowRight,
  Coffee,
  Briefcase,
  Plane,
  Heart,
  Coins,
  MoreHorizontal,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface ExplorePageProps {
  onNavigate: (page: string) => void;
}

export function ExplorePage({ onNavigate }: ExplorePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Everyday Life');
  const [isPlayingSerendipity, setIsPlayingSerendipity] = useState(false);
  const [isPlayingResilient, setIsPlayingResilient] = useState(false);

  const topicChips = [
    'Confidence',
    'Work',
    'Travel',
    'Everyday life',
    'Better ways to say it',
  ];

  const topics = [
    { name: 'Everyday Life', icon: <Coffee size={22} /> },
    { name: 'Work & Career', icon: <Briefcase size={22} /> },
    { name: 'Travel', icon: <Plane size={22} /> },
    { name: 'Health & Lifestyle', icon: <Heart size={22} /> },
    { name: 'Money', icon: <Coins size={22} /> },
    { name: 'More Topics', icon: <MoreHorizontal size={22} /> },
  ];

  const toneSteps = [
    { label: 'Work', text: '“Can we discuss this further?”' },
    { label: 'Casual', text: '“Let’s talk more about this!”' },
    { label: 'Confident', text: '“I’d like to explore this further.”' },
    { label: 'Polished', text: '“I look forward to discussing this at your convenience.”' },
  ];

  const handleSpeak = (text: string, isResilient: boolean = false) => {
    if ('speechSynthesis' in window) {
      if (isResilient) {
        setIsPlayingResilient(true);
      } else {
        setIsPlayingSerendipity(true);
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.onend = () => {
        setIsPlayingSerendipity(false);
        setIsPlayingResilient(false);
      };
      utterance.onerror = () => {
        setIsPlayingSerendipity(false);
        setIsPlayingResilient(false);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '48px',
          paddingBottom: '64px',
          background: 'radial-gradient(ellipse at 85% 30%, rgba(220, 242, 246, 0.6) 0%, #FAF9F5 65%)',
        }}
        className="section-pad-hero"
      >
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              alignItems: 'center',
              gap: '40px',
            }}
            className="hero-split-grid"
          >
            {/* Left Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span className="eyebrow-text" style={{ marginBottom: 0 }}>
                  EXPLORE
                </span>
                <span style={{ width: '28px', height: '1.5px', backgroundColor: '#008299' }} />
              </div>

              <h1
                style={{
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.08',
                  letterSpacing: '-1.5px',
                  marginBottom: '18px',
                }}
              >
                Find the words<br />
                <span style={{ color: '#008299' }}>you need.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 19px)',
                  color: '#4A6068',
                  lineHeight: '1.6',
                  maxWidth: '480px',
                  marginBottom: '32px',
                }}
              >
                Explore words, expressions and ideas for real life.
              </p>

              {/* Discovery Search Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D5E1DF',
                  borderRadius: '9999px',
                  padding: '7px 8px 7px 22px',
                  boxShadow: '0 8px 24px rgba(11, 27, 43, 0.06)',
                  maxWidth: '520px',
                  marginBottom: '20px',
                }}
              >
                <Search size={19} color="#7C9197" style={{ marginRight: '12px', flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search for a word, topic or situation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '15px',
                    color: '#0B1B2B',
                    backgroundColor: 'transparent',
                  }}
                />
                <button
                  onClick={() => {
                    onNavigate('learn');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#0B1B2B',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'transform 0.15s ease',
                  }}
                  aria-label="Submit search"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Topic Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {topicChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setSearchQuery(chip)}
                    className="topic-chip"
                    style={{
                      backgroundColor: searchQuery === chip ? '#008299' : '#FFFFFF',
                      color: searchQuery === chip ? '#FFFFFF' : '#334D57',
                      borderColor: searchQuery === chip ? '#008299' : '#E0E8E6',
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Ally with Magnifying Glass */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
                {/* Handwritten annotations */}
                <div
                  className="ally-handwriting"
                  style={{
                    position: 'absolute',
                    top: '8%',
                    left: '52%',
                    transform: 'rotate(-6deg)',
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    color: '#0A4E58',
                    zIndex: 2,
                    lineHeight: '1.15',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Curious<br />about a word?<br />I'm here!
                </div>

                <div
                  className="ally-handwriting explore-handwriting-bottom"
                  style={{
                    position: 'absolute',
                    bottom: '22%',
                    right: '-4%',
                    transform: 'rotate(8deg)',
                    fontSize: 'clamp(18px, 2vw, 26px)',
                    color: '#0A4E58',
                    zIndex: 2,
                    pointerEvents: 'none',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Small words.<br />Big possibilities.
                </div>

                <img
                  src="/images/explore-hero-ally-searching.webp"
                  alt="Ally searching with magnifying glass"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '24px',
                    filter: 'drop-shadow(0 20px 40px rgba(11, 27, 43, 0.08))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: EXPLORE BY TOPIC
         ========================================================================= */}
      <section style={{ padding: '60px 0 50px 0', backgroundColor: '#FAF9F5' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0B1B2B' }}>
              Explore by topic
            </h2>
            <button
              onClick={() => {
                onNavigate('learn');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14.5px',
                fontWeight: '700',
                color: '#0B1B2B',
                cursor: 'pointer',
              }}
            >
              <span>View all</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '16px',
            }}
            className="explore-topics-grid"
          >
            {topics.map((topic) => {
              const isSelected = selectedTopic === topic.name;
              return (
                <div
                  key={topic.name}
                  onClick={() => setSelectedTopic(topic.name)}
                  className="topic-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: isSelected ? '#008299' : '#E5EDE8',
                    boxShadow: isSelected
                      ? '0 8px 24px rgba(0, 130, 153, 0.12)'
                      : '0 2px 10px rgba(11, 27, 43, 0.03)',
                    padding: '24px 16px',
                    borderRadius: '18px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      margin: '0 auto 14px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isSelected ? '#008299' : '#EAF4F7',
                      color: isSelected ? '#FFFFFF' : '#008299',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {topic.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#0B1B2B',
                      lineHeight: '1.3',
                      display: 'block',
                    }}
                  >
                    {topic.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED WORDS (3 CARDS)
         ========================================================================= */}
      <section style={{ padding: '40px 0 60px 0', backgroundColor: '#FAF9F5' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0B1B2B' }}>
              Featured words
            </h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn-outline-pill"
                style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="btn-outline-pill"
                style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
            className="featured-words-grid"
          >
            {/* Card 1: Serendipity */}
            <div
              style={{
                backgroundColor: '#EAF3F7',
                borderRadius: '24px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                border: '1px solid #D5E4EC',
                boxShadow: '0 4px 18px rgba(11, 27, 43, 0.04)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#008299',
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  WORD OF THE DAY
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '30px', fontWeight: '800', color: '#0B1B2B', margin: 0 }}>
                    Serendipity
                  </h3>
                  <button
                    onClick={() => handleSpeak('Serendipity')}
                    style={{
                      color: isPlayingSerendipity ? '#008299' : '#5E747C',
                      padding: '4px',
                      cursor: 'pointer',
                    }}
                    title="Pronounce Serendipity"
                    aria-label="Pronounce Serendipity"
                  >
                    <Volume2 size={19} />
                  </button>
                </div>
                <p style={{ fontSize: '15.5px', color: '#4A6068', lineHeight: '1.55' }}>
                  Finding something good by chance.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0B1B2B',
                  marginTop: '32px',
                  cursor: 'pointer',
                }}
              >
                <span>See examples</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 2: Smart Alternative */}
            <div
              style={{
                backgroundColor: '#FDF7EE',
                borderRadius: '24px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                border: '1px solid #F0E6D5',
                boxShadow: '0 4px 18px rgba(11, 27, 43, 0.04)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#B26F12',
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  SMART ALTERNATIVE
                </span>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#667C83', marginBottom: '6px' }}>
                    Instead of
                  </div>
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '9px 14px',
                      fontSize: '14.5px',
                      color: '#4A6068',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    “I’m very happy.”
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#008299', marginBottom: '6px' }}>
                    Try
                  </div>
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '9px 14px',
                      fontSize: '14.5px',
                      color: '#0B1B2B',
                      fontWeight: '700',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    “I’m really pleased.”
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0B1B2B',
                  marginTop: '24px',
                  cursor: 'pointer',
                }}
              >
                <span>See more</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 3: Resilient */}
            <div
              style={{
                backgroundColor: '#EAF4F3',
                borderRadius: '24px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                border: '1px solid #D6ECE7',
                boxShadow: '0 4px 18px rgba(11, 27, 43, 0.04)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#008299',
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  REAL LIFE USAGE
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '30px', fontWeight: '800', color: '#0B1B2B', margin: 0 }}>
                    Resilient
                  </h3>
                  <button
                    onClick={() => handleSpeak('Resilient', true)}
                    style={{
                      color: isPlayingResilient ? '#008299' : '#5E747C',
                      padding: '4px',
                      cursor: 'pointer',
                    }}
                    title="Pronounce Resilient"
                    aria-label="Pronounce Resilient"
                  >
                    <Volume2 size={19} />
                  </button>
                </div>
                <p style={{ fontSize: '15.5px', color: '#4A6068', lineHeight: '1.55' }}>
                  Able to recover after a difficult time.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0B1B2B',
                  marginTop: '32px',
                  cursor: 'pointer',
                }}
              >
                <span>See examples</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TONE PROGRESSION
         ========================================================================= */}
      <section style={{ padding: '60px 0 80px 0', backgroundColor: '#FAF9F5' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.8fr',
              alignItems: 'center',
              gap: '48px',
            }}
            className="hero-split-grid"
          >
            {/* Left Narrative */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 42px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.2',
                  marginBottom: '12px',
                  letterSpacing: '-0.5px',
                }}
              >
                Know the words.<br />
                <span style={{ color: '#008299' }}>Know how to use them.</span>
              </h2>
              <p style={{ fontSize: '17px', color: '#4A6068', marginBottom: '28px' }}>
                The right words can change how you say something.
              </p>
              <button
                onClick={() => {
                  onNavigate('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-outline-pill"
                style={{ padding: '12px 24px', fontSize: '14.5px', fontWeight: '700' }}
              >
                <span>Explore Examples</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right: 4 Connected Tone Cards */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="tone-flow-container"
            >
              {toneSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '20px 16px',
                      border: '1px solid #E5ECEB',
                      boxShadow: '0 4px 14px rgba(11, 27, 43, 0.04)',
                      minHeight: '130px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        color: idx === 3 ? '#008299' : '#5E737B',
                        backgroundColor: idx === 3 ? '#EAF4F7' : '#F4F7F8',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        width: 'fit-content',
                        marginBottom: '10px',
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        color: '#0B1B2B',
                        fontWeight: idx === 3 ? '700' : '500',
                        lineHeight: '1.4',
                      }}
                    >
                      {step.text}
                    </div>
                  </div>
                  {idx < toneSteps.length - 1 && (
                    <div style={{ color: '#008299', fontSize: '18px', fontWeight: 'bold' }} className="tone-arrow">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMING SOON APP BANNER
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
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(11, 27, 43, 0.07)',
              border: '1px solid #EAE5DB',
            }}
            className="explore-cta-banner-wrapper"
          >
            {/* Image background with Ally peeking */}
            <div style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
              <img
                src="/images/explore-ally-in-cta.webp"
                alt="Ally peeking, ready to find your words"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '380px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Handwritten text near Ally on left */}
              <div
                className="ally-handwriting"
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '24%',
                  transform: 'rotate(12deg)',
                  fontSize: 'clamp(24px, 2.8vw, 38px)',
                  color: '#0A4E58',
                  pointerEvents: 'none',
                  lineHeight: '1.1',
                  zIndex: 3,
                }}
              >
                Ready<br />to find<br />your words?
              </div>

              {/* Content overlay on right */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: '56%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '40px 48px 40px 0',
                  zIndex: 2,
                }}
                className="explore-cta-text-overlay"
              >
                <span className="eyebrow-text" style={{ marginBottom: '8px' }}>
                  ALLACE.AI APP
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(32px, 4.2vw, 52px)',
                    fontWeight: '800',
                    color: '#0B1B2B',
                    lineHeight: '1.1',
                    marginBottom: '10px',
                    letterSpacing: '-1px',
                  }}
                >
                  Ready to explore more?
                </h2>
                <h3
                  style={{
                    fontSize: 'clamp(17px, 1.8vw, 21px)',
                    fontWeight: '700',
                    color: '#008299',
                    marginBottom: '8px',
                  }}
                >
                  The Allace.AI app is coming soon.
                </h3>

                <div style={{ marginTop: '24px' }}>
                  <AppStoreBadges size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 990px) {
          .explore-topics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .featured-words-grid {
            grid-template-columns: 1fr !important;
          }
          .tone-flow-container {
            flex-direction: column !important;
          }
          .tone-arrow {
            transform: rotate(90deg);
          }
          .explore-cta-banner-wrapper {
            display: flex !important;
            flex-direction: column !important;
          }
          .explore-cta-text-overlay {
            position: relative !important;
            width: 100% !important;
            padding: 28px 20px !important;
            background-color: #FAF9F5;
          }
        }
        @media (max-width: 768px) {
          .explore-handwriting-bottom {
            right: 4% !important;
          }
        }
        @media (max-width: 580px) {
          .explore-topics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
