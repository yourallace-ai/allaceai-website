import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { AppStoreBadges } from './AppStoreBadges';

interface DownloadCTAProps {
  onGetApp?: () => void;
}

export function DownloadCTA({ onGetApp }: DownloadCTAProps) {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#FAF9F5' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#0B1B2B',
            borderRadius: '28px',
            padding: '60px 40px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(11, 27, 43, 0.16)',
          }}
        >
          {/* Subtle teal aura */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 130, 153, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(0, 211, 255, 0.2)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: '800',
              color: '#7FE0D4',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={13} color="#7FE0D4" />
            <span>ALLACE.AI APP · COMING SOON</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '-0.5px',
            }}
          >
            Better English starts here.
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#B5CCD4',
              maxWidth: '620px',
              margin: '0 auto 36px auto',
              lineHeight: '1.65',
            }}
          >
            Meet Ally, your everyday English companion. Refine your English, learn useful language, and express yourself with confidence. Launching soon on mobile.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '36px',
            }}
          >
            <AppStoreBadges size="large" onBadgeClick={onGetApp} />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: '#8CA7B1',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#7FE0D4" />
              <span>Private & confidential</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HeartHandshake size={16} color="#7FE0D4" />
              <span>Support, not correction</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="#7FE0D4" />
              <span>Built for real people</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
