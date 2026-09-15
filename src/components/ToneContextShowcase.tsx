import React, { useState } from 'react';
import { Sliders, CheckCircle2 } from 'lucide-react';

type ToneKey = 'professional' | 'warm' | 'direct' | 'diplomatic';

interface ToneData {
  title: string;
  badge: string;
  phrase: string;
  context: string;
  nuance: string;
}

const toneMap: Record<ToneKey, ToneData> = {
  professional: {
    title: 'Workplace Professional',
    badge: 'Polite & Structured',
    phrase: '"Could you please share the latest progress update so we can coordinate our next steps?"',
    context: 'Ideal for client correspondence, cross-functional teams, and executive status reports.',
    nuance: 'Maintains respect and professionalism while ensuring everyone stays aligned on objectives.',
  },
  warm: {
    title: 'Warm & Friendly',
    badge: 'Approachable & Casual',
    phrase: '"Whenever you get a few minutes, could you send over a quick update on where things stand?"',
    context: 'Great for 1-on-1 peer chats, Slack/Teams messages, and supportive team dynamics.',
    nuance: 'Removes tension and establishes psychological safety without losing clarity.',
  },
  direct: {
    title: 'Confident & Direct',
    badge: 'Decisive & Crisp',
    phrase: '"Please send over the finalized numbers by 3 PM so we can submit the proposal on time."',
    context: 'Essential for urgent milestone deadlines, operations management, and decision-making.',
    nuance: 'Clear, concise, and action-driven without sounding aggressive or blunt.',
  },
  diplomatic: {
    title: 'Diplomatic & Tactful',
    badge: 'Thoughtful Alignment',
    phrase: '"I want to make sure we are fully aligned on the requirements before we proceed with the rollout."',
    context: 'Best for addressing conflicting opinions, clarifying scope creep, or managing expectations.',
    nuance: 'Focuses on shared alignment rather than assigning blame or pointing out mistakes.',
  },
};

export function ToneContextShowcase() {
  const [selectedTone, setSelectedTone] = useState<ToneKey>('professional');
  const current = toneMap[selectedTone];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F5F8F7' }}>
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-mint">
            <Sliders size={13} />
            <span>Tone Calibration</span>
          </div>
          <h2 className="section-title">The Right Words for Every Situation</h2>
          <p className="section-subtitle">
            The same underlying thought can be phrased in multiple ways depending on who you are speaking to.
            Allace helps you calibrate your expression to match the exact context.
          </p>
        </div>

        {/* Thought Anchor */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 28px auto',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '12px',
            border: '1px dashed #CAD7D5',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#5D7679', textTransform: 'uppercase' }}>
            Base Thought:
          </span>
          <span style={{ fontSize: '15px', color: '#163A3D', fontWeight: '600', marginLeft: '8px' }}>
            "I need an update on the project quickly."
          </span>
        </div>

        {/* Tone Selector Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          {(Object.keys(toneMap) as ToneKey[]).map((key) => {
            const isSelected = selectedTone === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedTone(key)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: isSelected ? '700' : '600',
                  backgroundColor: isSelected ? '#134E4A' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#355558',
                  border: isSelected ? '1px solid #134E4A' : '1px solid #E4ECEB',
                  boxShadow: isSelected ? '0 4px 12px rgba(19, 78, 74, 0.15)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                }}
              >
                {toneMap[key].title}
              </button>
            );
          })}
        </div>

        {/* Demo Display Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '36px 32px',
            borderLeft: '4px solid #134E4A',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#134E4A', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              {current.title}
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                backgroundColor: '#EAF8F5',
                color: '#134E4A',
                padding: '4px 12px',
                borderRadius: '12px',
              }}
            >
              {current.badge}
            </span>
          </div>

          <p
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#163A3D',
              lineHeight: '1.45',
              marginBottom: '16px',
            }}
          >
            {current.phrase}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#83989B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Where to use:
              </span>
              <p style={{ fontSize: '13px', color: '#355558', lineHeight: '1.5' }}>
                {current.context}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#83989B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Communication effect:
              </span>
              <p style={{ fontSize: '13px', color: '#355558', lineHeight: '1.5' }}>
                {current.nuance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
