import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { DownloadCTA } from '../components/DownloadCTA';

interface TrustPrivacyPageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

export function TrustPrivacyPage({ onNavigate, onGetApp }: TrustPrivacyPageProps) {
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
            <ShieldCheck size={13} />
            <span>Trust & Privacy</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 4.5vw, 48px)',
              fontWeight: '800',
              color: '#163A3D',
              lineHeight: '1.2',
              marginBottom: '20px',
              letterSpacing: '-0.8px',
            }}
          >
            Built on Trust, Confidentiality, and Respect
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#355558',
              lineHeight: '1.7',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            When you use Allace to refine workplace discussions or personal thoughts, you are trusting us with your voice. Here is our direct commitment to how your data is handled.
          </p>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              maxWidth: '1040px',
              margin: '0 auto',
            }}
          >
            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <EyeOff size={22} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                1. We Never Sell Your Data
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
                Your personal thoughts, voice recordings, and conversation refinements are never sold, rented, or distributed to third-party ad networks or data brokers.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Lock size={22} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                2. Encrypted Data Transmission
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
                All communications between the Allace app and our servers use modern industry-standard TLS encryption protocols to protect your information in transit.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Server size={22} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                3. Strict Account Isolation
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
                Saved expressions, preferences, and personal history are stored under strict per-user authentication controls so no other user can access your data.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <HeartHandshake size={22} color="#134E4A" />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                4. Non-Judgmental Companion Standard
              </h2>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
                Allace is engineered strictly to assist you. Our automated systems do not grade, evaluate, or assign judgment to your English proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Control & Account Deletion */}
      <section className="section-padding-sm" style={{ backgroundColor: '#F5F8F7' }}>
        <div className="container-narrow">
          <div className="mint-card" style={{ padding: '36px 30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#134E4A', marginBottom: '12px' }}>
              Full Control Over Your Profile & Data
            </h3>
            <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto 20px auto' }}>
              You have the right to request deletion of your account and saved history at any time through the in-app profile settings or by reaching out to our support team.
            </p>
            <button
              onClick={() => {
                onNavigate('privacy-policy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary"
              style={{ fontSize: '14px' }}
            >
              Read Full Legal Privacy Policy →
            </button>
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
