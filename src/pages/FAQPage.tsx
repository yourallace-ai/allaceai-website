import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { DownloadCTA } from '../components/DownloadCTA';

interface FAQPageProps {
  onNavigate: (page: string) => void;
  onGetApp: () => void;
}

interface FaqItem {
  q: string;
  a: string;
  category: 'General' | 'Usage' | 'Privacy' | 'Plans';
}

const allFaqs: FaqItem[] = [
  {
    category: 'General',
    q: 'What is Allace AI?',
    a: 'Allace is an AI-powered English communication companion. It is designed for adults and professionals who already know basic English, helping them speak and write with natural confidence, clarity, and ease in workplace and personal situations.',
  },
  {
    category: 'General',
    q: 'Who is Allace for?',
    a: 'Allace is built for adults who understand English but hesitate when speaking, professionals preparing for meetings or interviews, multilingual thinkers (whose thoughts start in Hindi, Marathi, Kannada, or German), and anyone who wants their communication to sound more natural and polished.',
  },
  {
    category: 'General',
    q: 'Is Allace an English-learning app or grammar checker?',
    a: 'No. Allace is not a traditional grammar course, dictionary, or exam preparation app. It does not grade you or give you homework. Instead, it takes what you want to communicate in real life and helps you express it naturally and appropriately in the moment.',
  },
  {
    category: 'General',
    q: 'Does Allace replace an English teacher?',
    a: 'No, Allace serves a different purpose. While a teacher teaches formal grammar rules and theory, Allace acts as your everyday real-time communication sounding board, helping you find the right words right when you need to send an email or step into a meeting.',
  },
  {
    category: 'Usage',
    q: 'Can I use Allace for work meetings, presentations, and emails?',
    a: 'Yes! Workplace communication is one of the primary use cases. Allace includes context presets specifically calibrated for team standups, executive presentations, client updates, and job interviews.',
  },
  {
    category: 'Usage',
    q: 'Can I speak into Allace instead of typing?',
    a: 'Yes. Allace features voice input (Speech-to-Text) so you can speak your raw thoughts out loud. It also includes natural audio playback (Text-to-Speech) so you can hear how the refined phrasing sounds before speaking it.',
  },
  {
    category: 'Usage',
    q: 'What languages does Express multilingual support?',
    a: 'Currently, Express supports Hindi, Marathi, Kannada, German, and English. You can speak or type in your comfortable native language, and Allace will bridge your intent directly into natural, confident English without mechanical word-for-word translation.',
  },
  {
    category: 'Usage',
    q: 'How does Allace decide how to refine what I say?',
    a: 'Allace analyzes your core message, intended audience, context, and selected tone (such as Professional, Friendly, or Confident) to generate natural phrasing that preserves your true meaning.',
  },
  {
    category: 'Privacy',
    q: 'Is my data secure and confidential?',
    a: 'Yes. We treat all personal and workplace communication with strict confidentiality. Allace uses encrypted TLS data transmission, secure account isolation, and never sells your data or conversations to third-party advertisers.',
  },
  {
    category: 'Privacy',
    q: 'Will Allace judge or criticize my English skills?',
    a: 'Never. Allace is built from the ground up to be calm, supportive, and 100% non-judgmental. There are no scorecards, error counts, or red marks.',
  },
  {
    category: 'Plans',
    q: 'Is Allace free to use?',
    a: 'Allace provides a free tier so you can experience everyday communication refinement. Pro subscriptions are available for users who want higher daily allowances and advanced capabilities.',
  },
  {
    category: 'Plans',
    q: 'Where can I access Allace?',
    a: 'Allace is available on the web and on mobile platforms. You can click "Get Allace" to access the app directly from your browser or mobile device.',
  },
];

export function FAQPage({ onNavigate, onGetApp }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['All', 'General', 'Usage', 'Privacy', 'Plans'];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
            <HelpCircle size={13} />
            <span>Frequently Asked Questions</span>
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
            Everything You Need to Know About Allace
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#355558',
              lineHeight: '1.7',
              maxWidth: '720px',
              margin: '0 auto 32px auto',
            }}
          >
            Have a question about how Allace works, privacy, languages, or workplace usage? Browse our clear, practical answers below.
          </p>

          {/* Search Input */}
          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search size={18} color="#83989B" style={{ position: 'absolute', left: '16px' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. privacy, workplace, pricing)..."
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontSize: '15px',
                backgroundColor: '#FFFFFF',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: isSelected ? '700' : '600',
                    backgroundColor: isSelected ? '#134E4A' : '#F5F8F7',
                    color: isSelected ? '#FFFFFF' : '#355558',
                    border: isSelected ? '1px solid #134E4A' : '1px solid #E4ECEB',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Accordion Stack */}
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <p style={{ fontSize: '16px', color: '#5D7679' }}>No questions matched your search query.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                style={{ marginTop: '12px', color: '#134E4A', fontWeight: '700', fontSize: '14px' }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="glass-card" style={{ padding: '20px 24px' }}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        gap: '16px',
                      }}
                      aria-expanded={isOpen}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '700', color: '#163A3D' }}>
                        {faq.q}
                      </span>
                      {isOpen ? <ChevronUp size={20} color="#134E4A" /> : <ChevronDown size={20} color="#83989B" />}
                    </button>

                    {isOpen && (
                      <div style={{ paddingTop: '14px', marginTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                        <p style={{ fontSize: '14px', color: '#355558', lineHeight: '1.7' }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions Box */}
          <div
            className="mint-card"
            style={{
              marginTop: '48px',
              padding: '28px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#134E4A', marginBottom: '8px' }}>
              Still have a question?
            </h3>
            <p style={{ fontSize: '14px', color: '#355558', marginBottom: '16px', maxWidth: '480px' }}>
              We’re here to help you get the most out of Allace. Send us a message and our team will get back to you.
            </p>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary"
              style={{ fontSize: '14px' }}
            >
              Contact Support →
            </button>
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
