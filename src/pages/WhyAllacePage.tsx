import React from 'react';
import { Compass, CheckCircle2, XCircle, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { DownloadCTA } from '../components/DownloadCTA';

interface WhyAllacePageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

export function WhyAllacePage({ onNavigate, onGetApp }: WhyAllacePageProps) {
  return (
    <div>
      {/* Page Hero */}
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
            <Compass size={13} />
            <span>The Philosophy Behind Allace</span>
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
            Knowing English is not the same as communicating with confidence.
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
            Millions of adults understand English grammar and read comfortably, yet hesitate when speaking in high-stakes meetings or daily conversations. Here is why this happens, and how Allace changes the equation.
          </p>
        </div>
      </section>

      {/* The Core Insight */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            <div>
              <div className="pill-badge">
                <span>The Invisible Gap</span>
              </div>
              <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#163A3D', lineHeight: '1.3', marginBottom: '18px' }}>
                Why adults struggle to communicate naturally
              </h2>
              <p style={{ fontSize: '15px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                When you were taught English in school, the focus was almost entirely on rules: tenses, passive voice, spelling, and error correction. You were trained to fear mistakes.
              </p>
              <p style={{ fontSize: '15px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                In the real workplace, nobody grades your grammar. What people evaluate is <strong>clarity</strong>, <strong>tone</strong>, <strong>confidence</strong>, and <strong>relevance</strong>.
              </p>
              <p style={{ fontSize: '15px', color: '#355558', lineHeight: '1.7' }}>
                Because standard tools only point out mechanical errors, they increase anxiety instead of building real conversational ease.
              </p>
            </div>

            <div className="mint-card" style={{ padding: '36px 30px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#134E4A', marginBottom: '20px' }}>
                The 4 Common Communication Hesitations:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'The "Is this right?" hesitation',
                    desc: 'Knowing what you want to say, but pausing because you aren’t sure if the sentence sounds natural.',
                  },
                  {
                    title: 'The tone uncertainty',
                    desc: 'Worrying that your direct message sounds rude or your email sounds too formal.',
                  },
                  {
                    title: 'The mental translation delay',
                    desc: 'Converting thoughts from your native language in real-time and missing the flow of discussion.',
                  },
                  {
                    title: 'The vocabulary trap',
                    desc: 'Using the same basic words repeatedly because you can’t recall the right nuance under pressure.',
                  },
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#134E4A', marginTop: '6px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '14px', color: '#163A3D', display: 'block', marginBottom: '2px' }}>{item.title}</strong>
                      <span style={{ fontSize: '13px', color: '#355558', lineHeight: '1.5' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Comparison Matrix */}
      <section className="section-padding" style={{ backgroundColor: '#F5F8F7' }}>
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-mint">
              <span>Comparison</span>
            </div>
            <h2 className="section-title">How Allace Compares</h2>
            <p className="section-subtitle">
              We did not build another grammar checker. Here is how Allace differs from existing alternatives:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Traditional Grammar Tools */}
            <div className="glass-card" style={{ padding: '32px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <XCircle size={20} color="#A83B3B" />
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#163A3D' }}>Grammar Checkers</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#5D7679', lineHeight: '1.6', marginBottom: '16px' }}>
                Fixes mechanical typos, punctuation, and passive voice.
              </p>
              <div style={{ fontSize: '13px', color: '#355558', borderTop: '1px solid #E4ECEB', paddingTop: '14px' }}>
                <strong>Limitation:</strong> Doesn't help you sound natural in spoken meetings or understand real-life conversational nuance.
              </div>
            </div>

            {/* Translation Apps */}
            <div className="glass-card" style={{ padding: '32px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <XCircle size={20} color="#A83B3B" />
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#163A3D' }}>Literal Translators</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#5D7679', lineHeight: '1.6', marginBottom: '16px' }}>
                Converts text from one language to another word-by-word.
              </p>
              <div style={{ fontSize: '13px', color: '#355558', borderTop: '1px solid #E4ECEB', paddingTop: '14px' }}>
                <strong>Limitation:</strong> Produces stiff, robotic phrasing that sounds unnatural in professional or casual English conversations.
              </div>
            </div>

            {/* Allace AI */}
            <div
              className="glass-card"
              style={{
                padding: '32px 26px',
                backgroundColor: '#134E4A',
                color: '#FFFFFF',
                border: '1px solid #134E4A',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <CheckCircle2 size={20} color="#7EE0D2" />
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#FFFFFF' }}>Allace AI Companion</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#CCFBF1', lineHeight: '1.6', marginBottom: '16px' }}>
                Understands your real context, audience, and intent to provide natural, confident phrasing.
              </p>
              <div style={{ fontSize: '13px', color: '#EAF8F5', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '14px' }}>
                <strong>Advantage:</strong> Non-judgmental, calm, and practical. Delivers actionable phrasing you can use right away.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#FAFCFB' }}>
        <div className="container">
          <div className="section-header">
            <div className="pill-badge">
              <span>Principles</span>
            </div>
            <h2 className="section-title">The Three Pillars of Allace</h2>
            <p className="section-subtitle">
              Every interaction inside Allace is guided by these principles:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1040px',
              margin: '0 auto',
            }}
          >
            <div className="glass-card" style={{ padding: '32px 26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <HeartHandshake size={20} color="#134E4A" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                1. Always Non-Judgmental
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.65' }}>
                No scorecards, no red pens, no grades. Allace is your private sounding board where you can make mistakes freely without embarrassment.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Compass size={20} color="#134E4A" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                2. Context Over Theory
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.65' }}>
                We don't give you abstract grammar lectures. We help you say what you need to say in your specific meeting, interview, email, or chat.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px 26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#EAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={20} color="#134E4A" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '10px' }}>
                3. Private & Confidential
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.65' }}>
                Your workplace updates and personal communications belong exclusively to you. Your conversations are processed securely and never monetized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
