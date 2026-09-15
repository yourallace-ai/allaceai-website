import React, { useState } from 'react';
import { Sparkles, Mic, Sliders, Volume2, ArrowRight, CheckCircle2, MessageSquare, Globe, BookOpen } from 'lucide-react';
import { RefineInteractiveDemo } from '../components/RefineInteractiveDemo';
import { DownloadCTA } from '../components/DownloadCTA';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

export function HowItWorksPage({ onNavigate, onGetApp }: HowItWorksPageProps) {
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
            <span>The Natural Journey</span>
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
            How Allace Works
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
            No complex setup, no grammar exams. Just a simple, calm flow that turns your raw thoughts into clear, natural English whenever you need to communicate.
          </p>
        </div>
      </section>

      {/* 4 Simple Steps */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From Thought to Expression in 4 Steps</h2>
            <p className="section-subtitle">
              Here is what happens every time you communicate with Allace:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto 48px auto',
            }}
          >
            {/* Step 1 */}
            <div className="glass-card" style={{ padding: '32px 24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#EAF8F5',
                  color: '#134E4A',
                  fontWeight: '800',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '8px' }}>
                Speak or Type
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.6' }}>
                Express your raw thought naturally via voice or text. You can speak in rough English or in your native language (Hindi, Marathi, Kannada, German).
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card" style={{ padding: '32px 24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#EAF8F5',
                  color: '#134E4A',
                  fontWeight: '800',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '8px' }}>
                Allace Understands
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.6' }}>
                Instead of searching for grammar errors, Allace analyzes what you <em>mean</em>, your target audience, and the conversational setting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card" style={{ padding: '32px 24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#EAF8F5',
                  color: '#134E4A',
                  fontWeight: '800',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '8px' }}>
                Review & Refine
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.6' }}>
                Receive natural, polished phrasing formatted for workplace meetings, client emails, or casual discussions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-card" style={{ padding: '32px 24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#EAF8F5',
                  color: '#134E4A',
                  fontWeight: '800',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                04
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '8px' }}>
                Understand Why
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.6' }}>
                A brief, calm note explains why the refined version communicates better, helping you build real confidence with every use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience Demo */}
      <section className="section-padding" style={{ backgroundColor: '#F5F8F7' }}>
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-mint">
              <span>Interactive Demonstration</span>
            </div>
            <h2 className="section-title">See Allace Refine in Action</h2>
            <p className="section-subtitle">
              Try switching between real-world scenarios below to see how rough thoughts transform into natural, confident communication:
            </p>
          </div>

          <RefineInteractiveDemo />
        </div>
      </section>

      {/* Voice & Accessibility Features */}
      <section className="section-padding" style={{ backgroundColor: '#FAFCFB' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              maxWidth: '1040px',
              margin: '0 auto',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="pill-badge">
                <Mic size={13} />
                <span>Voice First</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#163A3D', marginBottom: '16px', lineHeight: '1.3' }}>
                Speak naturally. Listen to pronunciation.
              </h2>
              <p style={{ fontSize: '15px', color: '#355558', lineHeight: '1.7', marginBottom: '16px' }}>
                Real communication is spoken. With Allace, you don’t have to type long messages, just speak whatever comes to mind.
              </p>
              <p style={{ fontSize: '15px', color: '#355558', lineHeight: '1.7', marginBottom: '20px' }}>
                Allace captures your speech, produces refined phrasing, and lets you listen to natural audio pronunciation so you can speak aloud with confidence.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span style={{ fontSize: '14px', color: '#163A3D', fontWeight: '600' }}>Voice-to-Text Speech Recognition</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span style={{ fontSize: '14px', color: '#163A3D', fontWeight: '600' }}>Natural Audio Playback (Text-to-Speech)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#134E4A" />
                  <span style={{ fontSize: '14px', color: '#163A3D', fontWeight: '600' }}>Adjustable Tone & Context Profiles</span>
                </div>
              </div>
            </div>

            <div className="mint-card" style={{ padding: '36px 30px', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#134E4A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: '0 4px 16px rgba(19, 78, 74, 0.2)',
                }}
              >
                <Mic size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#163A3D', marginBottom: '8px' }}>
                "Just say what you mean."
              </h3>
              <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>
                No fear of stuttering, no grading, no pressure. Allace listens with complete patience and helps you sound your best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
