import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { AppStoreBadges } from '../components/AppStoreBadges';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistJoined(true);
  };

  const plans = [
    {
      name: 'Explorer',
      tagline: 'Get familiar with words that matter.',
      status: 'Free at launch',
      price: '$0',
      period: 'free forever',
      highlight: false,
      features: [
        'Daily Word of the Day & audio',
        'Everyday conversation topics',
        'Basic tone comparisons',
        'Web exploration experience',
        'Bookmark up to 50 words',
      ],
      ctaText: 'Explore Free',
      action: () => onNavigate('explore'),
    },
    {
      name: 'Allace Pro',
      tagline: 'Your complete daily word companion with Ally.',
      status: 'Founding Member Access',
      price: 'Coming Soon',
      period: 'special launch pricing',
      highlight: true,
      features: [
        'Everything in Explorer',
        '120+ Curated workplace & life topics',
        'Nuanced tone alternatives (Work, Casual, Polished)',
        'Full interactive practice flow with Ally',
        'Unlimited word saves & custom lists',
        'Voice practice & real-time pronunciation',
        'Priority early access to the mobile app',
      ],
      ctaText: 'Reserve Early Access',
      action: () => {
        const el = document.getElementById('early-access-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const comparisonFeatures = [
    { name: 'Word of the Day & pronunciation', explorer: true, pro: true },
    { name: 'Core curated topics (Everyday & Travel)', explorer: true, pro: true },
    { name: 'Workplace & career scenarios', explorer: 'Limited', pro: 'Full access' },
    { name: 'Smart tone alternatives (4 calibrations)', explorer: false, pro: true },
    { name: 'Personalized learning journey tracker', explorer: false, pro: true },
    { name: 'Direct companion feedback from Ally', explorer: false, pro: true },
    { name: 'Offline mobile experience', explorer: false, pro: true },
  ];

  const pricingFaqs = [
    {
      q: 'When will the Allace.AI app officially launch?',
      a: 'We are currently polishing the mobile app experience for iOS and Android. Early access reservations will receive the first beta invites prior to public launch.',
    },
    {
      q: 'Will there be a free version when the app launches?',
      a: 'Yes! The Explorer tier will always be free so anyone can discover new words, listen to accurate pronunciations, and learn in context.',
    },
    {
      q: 'What is included with Founding Member Access?',
      a: 'Founding members who join the waitlist today will receive an exclusive discount on Allace Pro when the app goes live, along with priority early beta invitations.',
    },
    {
      q: 'Can I cancel or change plans anytime?',
      a: 'Always. There are no contracts, and you can switch plans or cancel at any time with a single tap directly in your account settings.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#FAF9F5', overflow: 'hidden' }}>
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section
        style={{
          paddingTop: '56px',
          paddingBottom: '64px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(220, 240, 245, 0.7) 0%, #FAF9F5 65%)',
        }}
      >
        <div className="container-narrow">
          <span className="eyebrow-text">PLANS & EARLY ACCESS</span>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: '800',
              color: '#0B1B2B',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
              marginBottom: '18px',
            }}
          >
            Simple plans.<br />
            A bigger you.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: '#4A6068',
              lineHeight: '1.6',
              maxWidth: '560px',
              margin: '0 auto 36px auto',
            }}
          >
            The Allace.AI app is launching soon. Reserve early access today to lock in founding member perks and discover words for real life.
          </p>

          {/* Early Access Form */}
          <div id="early-access-form" style={{ maxWidth: '480px', margin: '0 auto 24px auto' }}>
            {waitlistJoined ? (
              <div
                style={{
                  backgroundColor: '#E8F5F1',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  border: '1px solid #C8EBE1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} color="#0E5C4E" />
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0E5C4E' }}>
                  You’re on the founding waitlist! We’ll notify you first.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleJoinWaitlist}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D7E3E1',
                  borderRadius: '9999px',
                  padding: '6px 8px 6px 20px',
                  boxShadow: '0 8px 24px rgba(11, 27, 43, 0.06)',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email for early access..."
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '14.5px',
                    color: '#0B1B2B',
                    backgroundColor: 'transparent',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary-dark"
                  style={{ padding: '10px 22px', fontSize: '14px' }}
                >
                  <span>Join Early Access</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          <div style={{ fontSize: '12.5px', color: '#7C9197' }}>
            🔒 Zero spam. We’ll only reach out with early app access details.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: MODULAR PRICING TIERS
         ========================================================================= */}
      <section style={{ padding: '60px 0 80px 0', backgroundColor: '#FAF9F5' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              maxWidth: '920px',
              margin: '0 auto',
            }}
            className="pricing-cards-grid"
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: plan.highlight ? '2px solid #008299' : '1px solid #E5ECEB',
                  boxShadow: plan.highlight
                    ? '0 16px 40px rgba(0, 130, 153, 0.12)'
                    : '0 8px 24px rgba(11, 27, 43, 0.04)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      right: '28px',
                      backgroundColor: '#008299',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '800',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                    }}
                  >
                    FOUNDING ACCESS
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0B1B2B' }}>
                      {plan.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: plan.highlight ? '#008299' : '#667C83',
                        backgroundColor: plan.highlight ? '#EAF4F7' : '#F5F4EE',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                      }}
                    >
                      {plan.status}
                    </span>
                  </div>

                  <p style={{ fontSize: '14.5px', color: '#4A6068', marginBottom: '24px' }}>
                    {plan.tagline}
                  </p>

                  <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid #F0F2F2' }}>
                    <div style={{ fontSize: '36px', fontWeight: '800', color: '#0B1B2B', lineHeight: '1' }}>
                      {plan.price}
                    </div>
                    <div style={{ fontSize: '13px', color: '#7C9197', marginTop: '6px' }}>
                      {plan.period}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat) => (
                      <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#E8F5F1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={12} color="#0E5C4E" strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '14px', color: '#0B1B2B', lineHeight: '1.4' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={plan.action}
                  className={plan.highlight ? 'btn-primary-dark' : 'btn-outline-pill'}
                  style={{ width: '100%', padding: '13px', justifyContent: 'center' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURE COMPARISON
         ========================================================================= */}
      <section style={{ padding: '60px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #E5ECEB' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0B1B2B' }}>
              Compare features
            </h2>
            <p style={{ fontSize: '15px', color: '#667C83' }}>
              Designed to help you communicate with calm confidence at every step.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E5ECEB',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(11, 27, 43, 0.04)',
            }}
          >
            {/* Header Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                padding: '16px 24px',
                backgroundColor: '#FAF9F5',
                borderBottom: '1px solid #E5ECEB',
                fontSize: '13px',
                fontWeight: '800',
                color: '#0B1B2B',
              }}
            >
              <div>Feature</div>
              <div style={{ textAlign: 'center' }}>Explorer</div>
              <div style={{ textAlign: 'center', color: '#008299' }}>Allace Pro</div>
            </div>

            {/* Matrix Rows */}
            {comparisonFeatures.map((row, idx) => (
              <div
                key={row.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr',
                  padding: '16px 24px',
                  borderBottom: idx < comparisonFeatures.length - 1 ? '1px solid #F0F2F2' : 'none',
                  fontSize: '14px',
                  alignItems: 'center',
                }}
              >
                <div style={{ color: '#0B1B2B', fontWeight: '600' }}>{row.name}</div>
                <div style={{ textAlign: 'center', color: '#4A6068' }}>
                  {typeof row.explorer === 'boolean' ? (
                    row.explorer ? (
                      <Check size={16} color="#0E5C4E" style={{ margin: '0 auto' }} />
                    ) : (
                      <span style={{ color: '#BAC8CD' }}>-</span>
                    )
                  ) : (
                    row.explorer
                  )}
                </div>
                <div style={{ textAlign: 'center', color: '#008299', fontWeight: '700' }}>
                  {typeof row.pro === 'boolean' ? (
                    row.pro ? (
                      <Check size={16} color="#008299" style={{ margin: '0 auto' }} strokeWidth={3} />
                    ) : (
                      <span style={{ color: '#BAC8CD' }}>-</span>
                    )
                  ) : (
                    row.pro
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRICING FAQS
         ========================================================================= */}
      <section style={{ padding: '60px 0 80px 0', backgroundColor: '#FAF9F5', borderTop: '1px solid #E5ECEB' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0B1B2B' }}>
              Frequently asked questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E5ECEB',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontSize: '15.5px',
                      fontWeight: '700',
                      color: '#0B1B2B',
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 20px 24px',
                        fontSize: '14.5px',
                        color: '#4A6068',
                        lineHeight: '1.6',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMING SOON APP BANNER
         ========================================================================= */}
      <section
        style={{
          padding: '72px 0',
          background: 'linear-gradient(135deg, #F0F6F7 0%, #FAF9F5 50%, #F5F3EC 100%)',
          borderTop: '1px solid #E5ECEB',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <div>
              <span className="eyebrow-text">ALLACE.AI APP</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: '800', color: '#0B1B2B' }}>
                Better English starts here.
              </h2>
              <p style={{ fontSize: '16px', color: '#4A6068', marginTop: '8px' }}>
                Available soon on Google Play and the Apple App Store.
              </p>
            </div>

            <AppStoreBadges size="large" />
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
