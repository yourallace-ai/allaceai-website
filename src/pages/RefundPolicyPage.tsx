import React from 'react';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

export function RefundPolicyPage() {
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
            <RotateCcw size={13} />
            <span>Policy Information</span>
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
            Refund Policy
          </h1>

          <p style={{ fontSize: '14px', color: '#83989B' }}>
            Last updated: August 20, 2026 • Mayaa Solutions / Allace AI
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          <div className="glass-card" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '15px', color: '#355558', lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  1. Free Tier & Evaluation
                </h2>
                <p>
                  Allace provides a free tier so you can test and experience our communication companion without any upfront financial commitment. We encourage users to evaluate the service thoroughly before choosing a paid plan.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  2. Subscription Cancellations
                </h2>
                <p>
                  You may cancel your recurring subscription at any time through your account settings or via the platform through which you subscribed (e.g. Apple App Store or Google Play Store). Upon cancellation, you will continue to enjoy paid features until the end of your current billing period.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  3. Refund Eligibility
                </h2>
                <p>
                  If you encounter technical issues that prevent you from using the service, or if you believe you were charged erroneously, please submit a request through our contact page within 7 days of the billing event. Each request is reviewed fairly and respectfully by our support team.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  4. Third-Party App Store Purchases
                </h2>
                <p>
                  For subscriptions purchased through Apple App Store or Google Play Store, refund requests are managed directly according to the respective store’s refund guidelines and policies.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '10px' }}>
                  5. Contact for Billing Support
                </h2>
                <p>
                  For any billing or subscription questions, please reach out via our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
