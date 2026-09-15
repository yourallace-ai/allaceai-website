import React from 'react';
import { Briefcase, Globe, HeartHandshake, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { DownloadCTA } from '../components/DownloadCTA';

interface ForYouPageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

export function ForYouPage({ onNavigate, onGetApp }: ForYouPageProps) {
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
            <span>Tailored for Your Life</span>
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
            Built for You and Your Real Situations
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
            Different people have different communication goals. Whether you are leading a team meeting, speaking with international colleagues, or finding your confidence, Allace meets you where you are.
          </p>
        </div>
      </section>

      {/* 4 Audience Profiles */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1040px', margin: '0 auto' }}>
            {/* 1. Working Professionals */}
            <div
              className="glass-card"
              style={{
                padding: '40px 32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#134E4A', fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
                  <Briefcase size={16} />
                  <span>FOR WORKING PROFESSIONALS</span>
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginBottom: '14px', lineHeight: '1.3' }}>
                  Sound clear, constructive, and confident at work
                </h2>
                <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                  You are already an expert in your field. Allace ensures your English communication reflects your true competence during meetings, client emails, presentations, and interviews.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Cross-functional status updates & standups</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Diplomatic client & stakeholder emails</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Handling tough interview questions gracefully</span>
                  </div>
                </div>
              </div>

              <div className="mint-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#83989B', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Example in Practice:
                </span>
                <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic', marginBottom: '10px' }}>
                  "I want to tell the team we have to delay release by 3 days."
                </p>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Allace Workplace Tone:
                </span>
                <p style={{ fontSize: '15px', fontWeight: '700', color: '#163A3D', lineHeight: '1.4' }}>
                  "To ensure stability, we are shifting the release date by three days to finalize quality testing."
                </p>
              </div>
            </div>

            {/* 2. Multilingual Thinkers */}
            <div
              className="glass-card"
              style={{
                padding: '40px 32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#134E4A', fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
                  <Globe size={16} />
                  <span>FOR MULTILINGUAL THINKERS</span>
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginBottom: '14px', lineHeight: '1.3' }}>
                  Think in your comfortable language. Communicate in English.
                </h2>
                <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                  When your thoughts originate in Hindi, Marathi, Kannada, or German, trying to translate them word-for-word creates awkward sentences. Allace bridges your native intent directly to natural English.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Preserves the true meaning, not just words</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Avoids unnatural literal translations</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Supports voice & text input seamlessly</span>
                  </div>
                </div>
              </div>

              <div className="mint-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#83989B', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Native Thought (Hindi / Marathi / Kannada / German):
                </span>
                <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic', marginBottom: '10px' }}>
                  "Mujhe lagta hai yeh approach me thoda risk hai."
                </p>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Allace Natural English:
                </span>
                <p style={{ fontSize: '15px', fontWeight: '700', color: '#163A3D', lineHeight: '1.4' }}>
                  "I believe there might be some potential risks associated with this approach that we should consider."
                </p>
              </div>
            </div>

            {/* 3. Hesitant Speakers */}
            <div
              className="glass-card"
              style={{
                padding: '40px 32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#134E4A', fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
                  <HeartHandshake size={16} />
                  <span>FOR THOSE WHO UNDERSTAND BUT HESITATE</span>
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginBottom: '14px', lineHeight: '1.3' }}>
                  A safe, private space to practice without judgment
                </h2>
                <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                  Fear of making a mistake in public causes many capable people to stay quiet. Allace is your private companion where you can test what you want to say beforehand.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Zero embarrassment or public scrutiny</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Instant feedback before you speak in meetings</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#163A3D', fontWeight: '600' }}>
                    <CheckCircle2 size={15} color="#134E4A" />
                    <span>Builds muscle memory and calm confidence</span>
                  </div>
                </div>
              </div>

              <div className="mint-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#83989B', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Hesitant Thought:
                </span>
                <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic', marginBottom: '10px' }}>
                  "Is it okay if I say 'I agree with him' or does that sound too informal?"
                </p>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Allace Guidance:
                </span>
                <p style={{ fontSize: '15px', fontWeight: '700', color: '#163A3D', lineHeight: '1.4' }}>
                  "Both are fine! In a meeting, 'I second that viewpoint' or 'I agree with Alex's point' sounds natural and engaged."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Commitment */}
      <section className="section-padding-sm" style={{ backgroundColor: '#F5F8F7' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '12px' }}>
            Our Honest Perspective on Fluency
          </h3>
          <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
            Allace does not promise miraculous overnight transformations. Real communication confidence comes from having a reliable, intelligent sounding board in your everyday moments. That is what we built Allace to be.
          </p>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
