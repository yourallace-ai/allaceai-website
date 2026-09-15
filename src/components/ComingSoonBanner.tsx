import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AppStoreBadges } from './AppStoreBadges';

interface ComingSoonBannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showAppBadges?: boolean;
  handwritingNote?: string;
  allyImageSrc?: string;
  showMobileMockup?: boolean;
  onBadgeClick?: () => void;
  variant?: 'default' | 'compact' | 'light';
}

export function ComingSoonBanner({
  eyebrow = 'ALLACE.AI APP',
  title = 'Coming Soon',
  subtitle = 'Your word companion. On the go. Learn, practice and grow, anytime, anywhere.',
  ctaText,
  onCtaClick,
  showAppBadges = true,
  handwritingNote = 'Small words. Big possibilities.',
  allyImageSrc = '/images/ally/Ally Character Pose - 1.png',
  showMobileMockup = false,
  onBadgeClick,
}: ComingSoonBannerProps) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F0F6F7 0%, #FAF9F5 50%, #F5F3EB 100%)',
        borderTop: '1px solid #E5ECEB',
        borderBottom: '1px solid #E5ECEB',
        padding: '64px 0',
      }}
    >
      {/* Ambient background blur elements */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 130, 153, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            alignItems: 'center',
            gap: '48px',
          }}
          className="hero-split-grid"
        >
          {/* Left / Ally Visual or Mockup */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Handwritten callout */}
            {handwritingNote && (
              <div
                className="ally-handwriting"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '10px',
                  zIndex: 5,
                  maxWidth: '180px',
                  whiteSpace: 'pre-line',
                }}
              >
                {handwritingNote}
              </div>
            )}

            {/* Visual Container */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '20px',
                width: '100%',
                maxHeight: '340px',
              }}
            >
              <img
                src={allyImageSrc}
                alt="Ally companion"
                style={{
                  maxHeight: '320px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 28px rgba(11, 27, 43, 0.12))',
                }}
              />

              {showMobileMockup && (
                <div
                  style={{
                    width: '180px',
                    height: '280px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    border: '6px solid #0B1B2B',
                    boxShadow: '0 16px 36px rgba(11, 27, 43, 0.15)',
                    padding: '16px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    transform: 'rotate(4deg)',
                  }}
                  className="mobile-mockup-frame"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', fontWeight: '700', color: '#0B1B2B' }}>
                    <span>ALLACE.AI</span>
                    <span style={{ fontSize: '8px', color: '#008299' }}>●●●</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#0B1B2B', marginTop: '6px' }}>
                    Good to see you!
                  </div>
                  <div style={{ fontSize: '9px', color: '#667C83', backgroundColor: '#F0F5F6', padding: '6px 8px', borderRadius: '8px' }}>
                    Search words, topics...
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    <div style={{ fontSize: '10px', fontWeight: '600', padding: '6px', backgroundColor: '#F8F9F9', borderRadius: '6px', border: '1px solid #E5ECEB' }}>
                      📖 Learn
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: '600', padding: '6px', backgroundColor: '#F8F9F9', borderRadius: '6px', border: '1px solid #E5ECEB' }}>
                      💬 Practice
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: '600', padding: '6px', backgroundColor: '#F8F9F9', borderRadius: '6px', border: '1px solid #E5ECEB' }}>
                      🧭 Explore
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Content & Coming Soon CTAs */}
          <div>
            {eyebrow && (
              <span className="eyebrow-text" style={{ marginBottom: '8px' }}>
                {eyebrow}
              </span>
            )}
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: '800',
                color: '#0B1B2B',
                lineHeight: '1.2',
                marginBottom: '14px',
                letterSpacing: '-0.5px',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#4A6068',
                lineHeight: '1.6',
                maxWidth: '520px',
                marginBottom: '28px',
              }}
            >
              {subtitle}
            </p>

            {/* Badges or CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {showAppBadges && (
                <AppStoreBadges onBadgeClick={onBadgeClick} />
              )}

              {ctaText && onCtaClick && (
                <button
                  onClick={onCtaClick}
                  className="btn-primary-dark"
                  style={{ padding: '13px 28px', fontSize: '15px' }}
                >
                  <span>{ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
