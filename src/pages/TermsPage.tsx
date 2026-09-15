import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export function TermsPage() {
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
            <FileText size={13} />
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
            Terms & Conditions
          </h1>

          <p style={{ fontSize: '14px', color: '#83989B' }}>
            Last updated: August 20, 2026 • Mayaa Solutions / Allace AI
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          <div className="glass-card" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '15px', color: '#355558', lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using Allace AI (available via mobile application, website, or web service), you agree to be bound by these Terms and Conditions. Allace is a product developed and operated by <strong>Mayaa Solutions</strong>. If you do not agree to these terms, please discontinue using the service.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  2. Description of Services
                </h2>
                <p>
                  Allace provides an AI-powered communication companion that assists users in refining English communication (Refine), expressing native thoughts in natural English (Express), and accessing contextual communication learning resources (Sharpen).
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  3. Acceptable Use
                </h2>
                <p style={{ marginBottom: '10px' }}>
                  You agree to use Allace solely for lawful and ethical purposes. You may not:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Transmit abusive, defamatory, harassing, or unlawful content.</li>
                  <li>Attempt to reverse engineer, scrape, or interfere with the infrastructure of Allace.</li>
                  <li>Use the service to generate unauthorized automated spam or harmful materials.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  4. Subscriptions & Billing
                </h2>
                <p>
                  Allace offers both free access allowances and optional paid subscription tiers. Subscription fees are billed periodically according to the selected plan. You may manage or cancel renewals at any time via your account settings.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  5. Intellectual Property
                </h2>
                <p>
                  All software code, brand trademarks, logos, visual designs, and curated learning content are the intellectual property of Mayaa Solutions / Allace.Ai. You retain ownership of your personal inputs and conversations.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  6. Limitation of Liability & Disclaimer
                </h2>
                <p>
                  Allace is provided as a supportive communication companion. While we aim for high accuracy and natural phrasing, we do not guarantee specific business, academic, or legal outcomes resulting from communication generated through the service.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  7. Governing Law & Inquiries
                </h2>
                <p>
                  These Terms are governed by applicable laws in India. For questions regarding these Terms and Conditions, please contact us via our official contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
