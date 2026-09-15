import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, HeartHandshake } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          paddingTop: '64px',
          paddingBottom: '48px',
          backgroundColor: '#FAFCFB',
          borderBottom: '1px solid #E4ECEB',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <div className="pill-badge pill-badge-mint">
            <ShieldCheck size={13} />
            <span>Legal Documentation</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '800',
              color: '#163A3D',
              lineHeight: '1.2',
              marginBottom: '12px',
              letterSpacing: '-0.6px',
            }}
          >
            Privacy Policy
          </h1>

          <p style={{ fontSize: '14px', color: '#83989B' }}>
            Last updated: August 20, 2026 • Mayaa Solutions / Allace AI
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          <div className="glass-card" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '15px', color: '#355558', lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  1. Overview & Commitment
                </h2>
                <p>
                  At Allace AI (a product by <strong>Mayaa Solutions</strong>), your privacy and data security are our highest priorities. This Privacy Policy outlines how we collect, handle, process, and protect your information when using the Allace application, web interface, and related services.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  2. Information We Collect
                </h2>
                <p style={{ marginBottom: '10px' }}>
                  We collect information necessary to deliver and personalize your communication refinement experience:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Account Details:</strong> Basic profile credentials (such as mobile number or email address, display name, and communication preferences).</li>
                  <li><strong>Voice & Text Inputs:</strong> Audio and text provided during Refine or Express sessions to generate natural English phrasing.</li>
                  <li><strong>Saved Expressions:</strong> Vocabulary items, idioms, and notes saved to your personal My Space repository.</li>
                  <li><strong>Usage Telemetry:</strong> Minimal technical metrics (app performance, error logs) to maintain service reliability.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  3. Audio & Conversation Processing
                </h2>
                <p>
                  Audio inputs captured during voice sessions are converted to text using secure Speech-to-Text processing. Your raw inputs and conversation histories are never sold, rented, or distributed to third-party advertisers or commercial brokers.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  4. Data Security & Encryption
                </h2>
                <p>
                  Allace utilizes industry-standard encryption protocols (TLS/HTTPS in transit and encrypted data storage at rest). User data is isolated under row-level and token-based authentication to prevent unauthorized access.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  5. Non-Judgmental Automated Standard
                </h2>
                <p>
                  Allace operates as a private, supportive companion. Our systems do not evaluate, score, or publicly report your language proficiency levels.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  6. User Control & Data Deletion
                </h2>
                <p>
                  You retain full ownership of your personal data. You may delete your saved expressions, conversation history, or entire account at any time directly through the app settings or by contacting our team.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  7. Contact Information
                </h2>
                <p>
                  For privacy questions, data requests, or clarifications regarding this policy, please reach out through our official contact page or email us at our official communication channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
