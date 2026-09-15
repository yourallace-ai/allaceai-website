import React, { useState } from 'react';
import {
  Volume2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  FileText,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface LearnPageProps {
  onNavigate: (page: string) => void;
}

export function LearnPage({ onNavigate }: LearnPageProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [learningStatus, setLearningStatus] = useState<'none' | 'known' | 'learning'>('none');
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const sampleWords = [
    {
      word: 'Serendipity',
      phonetic: '/ˌsɛrənˈdɪpɪti/',
      definition: 'Finding something good by chance.',
      sentence: '“We met by chance, and it was a moment of serendipity.”',
    },
    {
      word: 'Resilient',
      phonetic: '/rɪˈzɪl.jənt/',
      definition: 'Able to recover after a difficult time.',
      sentence: '“She stayed resilient and worked through the challenge.”',
    },
    {
      word: 'Articulate',
      phonetic: '/ɑːˈtɪk.jə.lət/',
      definition: 'Able to express thoughts clearly in words.',
      sentence: '“He gave a clear and articulate answer in the meeting.”',
    },
  ];

  const currentWord = sampleWords[activeWordIndex];

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextWord = () => {
    setActiveWordIndex((prev) => (prev + 1) % sampleWords.length);
    setLearningStatus('none');
  };

  const handlePrevWord = () => {
    setActiveWordIndex((prev) => (prev - 1 + sampleWords.length) % sampleWords.length);
    setLearningStatus('none');
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
              <span className="eyebrow-text">LEARN</span>

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
                Learn words<br />
                <span style={{ color: '#008299' }}>for real life.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(17px, 1.8vw, 20px)',
                  color: '#4A6068',
                  lineHeight: '1.6',
                  maxWidth: '480px',
                  marginBottom: '32px',
                }}
              >
                Discover. Understand. Practise. Remember.
              </p>

              <button
                onClick={() => {
                  const cardElement = document.getElementById('how-it-works-section');
                  if (cardElement) {
                    cardElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary-dark"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <span>Explore learning</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Column: Ally on Books with glowing book */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
                {/* Handwritten script note */}
                <div
                  className="ally-handwriting"
                  style={{
                    position: 'absolute',
                    top: '6%',
                    left: '8%',
                    transform: 'rotate(-8deg)',
                    fontSize: 'clamp(20px, 2.2vw, 30px)',
                    color: '#0A4E58',
                    zIndex: 2,
                    lineHeight: '1.15',
                    pointerEvents: 'none',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Small words.<br />Big possibilities.
                </div>

                <img
                  src="/images/learn-hero-ally-onbooks-withbook.webp"
                  alt="Ally sitting on books reading"
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
          SECTION 1: SEE HOW IT WORKS (Word Card Component)
         ========================================================================= */}
      <section
        id="how-it-works-section"
        style={{ padding: '80px 0', backgroundColor: '#FAF9F5' }}
      >
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr 0.8fr',
              alignItems: 'center',
              gap: '40px',
            }}
            className="how-it-works-grid"
          >
            {/* Left Header & Navigation */}
            <div>
              <span className="eyebrow-text">SEE HOW IT WORKS</span>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.15',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px',
                }}
              >
                One word.<br />
                A bigger you.
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A6068',
                  lineHeight: '1.6',
                  maxWidth: '360px',
                  marginBottom: '28px',
                }}
              >
                Learn a word, understand it and see how to use it.
              </p>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handlePrevWord}
                  className="btn-outline-pill"
                  style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                  aria-label="Previous Word"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextWord}
                  className="btn-outline-pill"
                  style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                  aria-label="Next Word"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Center: The Word Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid #E5ECEB',
                boxShadow: '0 12px 36px rgba(11, 27, 43, 0.06)',
                padding: '36px 36px 32px 36px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#008299',
                  marginBottom: '12px',
                }}
              >
                WORD OF THE DAY
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <h3
                  style={{
                    fontSize: '34px',
                    fontWeight: '800',
                    color: '#0B1B2B',
                    letterSpacing: '-0.5px',
                    margin: 0,
                  }}
                >
                  {currentWord.word}
                </h3>
                <button
                  onClick={handleSpeak}
                  style={{
                    color: isPlayingAudio ? '#008299' : '#667C83',
                    padding: '6px',
                    borderRadius: '50%',
                    backgroundColor: isPlayingAudio ? '#EAF4F7' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  title="Listen to pronunciation"
                  aria-label="Listen to pronunciation"
                >
                  <Volume2 size={20} />
                </button>
              </div>

              <div
                style={{
                  fontSize: '14.5px',
                  color: '#667C83',
                  fontFamily: 'monospace',
                  marginBottom: '18px',
                }}
              >
                {currentWord.phonetic}
              </div>

              <p
                style={{
                  fontSize: '16.5px',
                  color: '#304248',
                  lineHeight: '1.55',
                  marginBottom: '24px',
                }}
              >
                {currentWord.definition}
              </p>

              <div
                style={{
                  height: '1px',
                  backgroundColor: '#F0EFEA',
                  marginBottom: '20px',
                }}
              />

              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#667C83',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                  }}
                >
                  In a sentence
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#0B1B2B',
                    fontStyle: 'normal',
                    lineHeight: '1.5',
                  }}
                >
                  {currentWord.sentence}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setLearningStatus('known')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 22px',
                    borderRadius: '9999px',
                    border: '1.5px solid #D5E2E0',
                    backgroundColor: learningStatus === 'known' ? '#EBF5F2' : '#FFFFFF',
                    color: learningStatus === 'known' ? '#0E5C4E' : '#0B1B2B',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {learningStatus === 'known' ? <Check size={16} /> : <Bookmark size={16} />}
                  <span>{learningStatus === 'known' ? 'Saved' : 'I Know'}</span>
                </button>

                <button
                  onClick={() => setLearningStatus('learning')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 24px',
                    borderRadius: '9999px',
                    backgroundColor: learningStatus === 'learning' ? '#008299' : '#0B1B2B',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{learningStatus === 'learning' ? 'In Progress' : 'Learn This'}</span>
                </button>
              </div>
            </div>

            {/* Right: Handwritten Annotation */}
            <div style={{ position: 'relative', textAlign: 'left' }} className="learn-handwriting-col">
              <div
                className="ally-handwriting"
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  color: '#0A4E58',
                  lineHeight: '1.15',
                  transform: 'rotate(6deg)',
                }}
              >
                New<br />words.<br />Brighter<br />you.
              </div>
              <div style={{ marginTop: '10px', color: '#0A4E58', fontSize: '28px', transform: 'rotate(10deg)' }}>
                ///
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: YOUR LEARNING JOURNEY (Milestones)
         ========================================================================= */}
      <section
        style={{
          padding: '60px 0 80px 0',
          backgroundColor: '#FAF9F5',
          borderTop: '1px solid #EAE5DB',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignItems: 'center',
              gap: '48px',
            }}
            className="hero-split-grid"
          >
            <div>
              <span className="eyebrow-text">YOUR LEARNING JOURNEY</span>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 44px)',
                  fontWeight: '800',
                  color: '#0B1B2B',
                  lineHeight: '1.15',
                  letterSpacing: '-0.5px',
                }}
              >
                Small steps.<br />
                Lasting progress.
              </h2>
            </div>

            {/* Pipeline Milestones with connecting line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
              }}
              className="journey-steps-flow"
            >
              {/* Connecting Teal Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '28px',
                  left: '60px',
                  right: '60px',
                  height: '2px',
                  backgroundColor: '#78BCC6',
                  zIndex: 1,
                }}
                className="journey-line"
              />

              {/* Step 1: New */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  width: '140px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF4F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#008299',
                    marginBottom: '14px',
                    border: '3px solid #FAF9F5',
                  }}
                >
                  <FileText size={24} />
                </div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0B1B2B', marginBottom: '4px' }}>
                  New
                </div>
                <div style={{ fontSize: '13px', color: '#667C83' }}>
                  Words you discover.
                </div>
              </div>

              {/* Step 2: Learning */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  width: '140px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF4F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#008299',
                    marginBottom: '14px',
                    border: '3px solid #FAF9F5',
                  }}
                >
                  <BookOpen size={24} />
                </div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0B1B2B', marginBottom: '4px' }}>
                  Learning
                </div>
                <div style={{ fontSize: '13px', color: '#667C83' }}>
                  Words you are practising.
                </div>
              </div>

              {/* Step 3: Learned */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  width: '140px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#0E7A68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '14px',
                    border: '3px solid #FAF9F5',
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0B1B2B', marginBottom: '4px' }}>
                  Learned
                </div>
                <div style={{ fontSize: '13px', color: '#667C83' }}>
                  Words you know and use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMING SOON APP BANNER
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
            className="learn-cta-banner-wrapper"
          >
            {/* Image background with App Mockup on the right */}
            <div style={{ position: 'relative', width: '100%', minHeight: '360px' }}>
              <img
                src="/images/about-app-banner-cta.webp"
                alt="Allace AI App Banner"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '360px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Handwritten text near phone mockup */}
              <div
                className="ally-handwriting"
                style={{
                  position: 'absolute',
                  top: '24%',
                  right: '6%',
                  transform: 'rotate(10deg)',
                  fontSize: 'clamp(20px, 2.5vw, 34px)',
                  color: '#0A4E58',
                  pointerEvents: 'none',
                  lineHeight: '1.1',
                  textAlign: 'right',
                  zIndex: 3,
                }}
              >
                A<br />sharper<br />you.<br />Every day.
              </div>

              {/* Content overlay on left */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '56%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '40px 0 40px 48px',
                  zIndex: 2,
                }}
                className="learn-cta-text-overlay"
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
                  Let’s grow together.
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A6068',
                    lineHeight: '1.5',
                    maxWidth: '440px',
                    marginBottom: '10px',
                  }}
                >
                  Learn words you can use every day.
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#008299',
                    marginBottom: '24px',
                  }}
                >
                  The Allace.AI app is coming soon.
                </p>

                <AppStoreBadges size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
          .learn-handwriting-col {
            display: none !important;
          }
          .journey-line {
            display: none !important;
          }
          .journey-steps-flow {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .learn-cta-text-overlay {
            position: relative !important;
            width: 100% !important;
            padding: 32px 24px !important;
            background-color: #FAF9F5;
          }
        }
      `}</style>
    </div>
  );
}
