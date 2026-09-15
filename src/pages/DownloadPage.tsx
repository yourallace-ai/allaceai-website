import React from 'react';
import { Smartphone, Monitor, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

export function DownloadPage({ onNavigate, onGetApp }: DownloadPageProps) {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          paddingTop: '64px',
          paddingBottom: '56px',
          backgroundColor: '#FAFCFB',
          borderBottom: '1px solid #E4ECEB',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <div className="pill-badge pill-badge-mint">
            <Sparkles size={13} />
            <span>Get Started</span>
          </div>

          {/* Official Brand Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img
              src="/images/allaceai-complete-logo-dark.webp"
              alt="Allace AI"
              style={{
                height: '76px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 4.5vw, 48px)',
              fontWeight: '800',
              color: '#163A3D',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '-0.8px',
            }}
          >
            Get Allace AI Today
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#355558',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Experience a calm, intelligent companion that helps you say what you mean naturally. Available across your everyday devices.
          </p>
        </div>
      </section>

      {/* Access Cards */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {/* Web Experience */}
            <div className="glass-card-interactive" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Monitor size={24} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#163A3D', marginBottom: '8px' }}>
                Web Application
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                Launch directly in your web browser on desktop or tablet. Perfect for drafting client emails, preparing meeting notes, and practicing presentations.
              </p>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>Instant browser access</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>Voice & microphone input supported</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>Cross-device synchronization</span>
                </div>
              </div>

              <button
                onClick={onGetApp}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <span>Launch Web App</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile App */}
            <div className="glass-card-interactive" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Smartphone size={24} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#163A3D', marginBottom: '8px' }}>
                Mobile Experience
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                Carry your English communication companion everywhere you go. Ideal for on-the-go voice refinement, quick message checks, and daily practice.
              </p>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>Optimized for iOS and Android</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>One-tap voice recording & playback</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span>Save helpful expressions to My Space</span>
                </div>
              </div>

              <button
                onClick={onGetApp}
                className="btn-secondary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <span>Get Mobile App</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="section-padding-sm" style={{ backgroundColor: '#F5F8F7' }}>
        <div className="container-narrow">
          <div className="mint-card" style={{ padding: '32px 28px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '14px', color: '#134E4A', fontWeight: '700' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={18} />
                <span>100% Private & Confidential</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={18} />
                <span>No Credit Card Required</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={18} />
                <span>Non-Judgmental Companion</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
