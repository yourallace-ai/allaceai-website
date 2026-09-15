import React, { useState } from 'react';
import { Sparkles, MessageSquare, Volume2, ArrowRight } from 'lucide-react';

interface Scenario {
  id: string;
  tabLabel: string;
  context: string;
  input: string;
  refined: string;
  tone: string;
  whyItWorks: string;
}

const scenarios: Scenario[] = [
  {
    id: 'meeting',
    tabLabel: 'Workplace Meeting',
    context: 'Status update with manager & team',
    input: '"I cannot finish this task today because I am having many bug problems."',
    refined: '"I’m currently resolving a couple of technical blockers on this, so I will have the finalized deliverable ready first thing tomorrow morning."',
    tone: 'Professional & Constructive',
    whyItWorks: 'Shifts from expressing frustration to communicating clear timelines and proactive ownership.',
  },
  {
    id: 'email',
    tabLabel: 'Client Email',
    context: 'Polite deadline extension request',
    input: '"Give me 2 more days because data is not coming from backend."',
    refined: '"Could we adjust our delivery timeline by two days? We are finalizing data integration to ensure complete accuracy for you."',
    tone: 'Diplomatic & Reassuring',
    whyItWorks: 'Replaces a blunt demand with a courteous question centered on quality standards.',
  },
  {
    id: 'interview',
    tabLabel: 'Job Interview',
    context: 'Responding to a question about handling team disagreements',
    input: '"I tell everyone my opinion and then we see who is right."',
    refined: '"I share my perspective clearly, invite the team to discuss alternative viewpoints, and align on whatever solution best serves the project."',
    tone: 'Collaborative & Confident',
    whyItWorks: 'Demonstrates active listening and constructive collaboration instead of defensive debating.',
  },
  {
    id: 'everyday',
    tabLabel: 'Everyday Talk',
    context: 'Turning down an invitation respectfully',
    input: '"I don’t want to come because I have no energy."',
    refined: '"I’d love to join next time, but I need a quiet evening to recharge today. Thank you so much for thinking of me!"',
    tone: 'Warm & Considerate',
    whyItWorks: 'Protects your personal boundary while warmly expressing gratitude and leaving future doors open.',
  },
];

export function RefineInteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayVoice = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 2200);
  };

  return (
    <div className="glass-card" style={{ padding: '28px', maxWidth: '820px', margin: '0 auto' }}>
      {/* Scenario Selector Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          borderBottom: '1px solid #E4ECEB',
          marginBottom: '24px',
        }}
      >
        {scenarios.map((sc) => {
          const isSelected = activeScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(sc)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: isSelected ? '700' : '600',
                backgroundColor: isSelected ? '#134E4A' : '#F5F8F7',
                color: isSelected ? '#FFFFFF' : '#355558',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Context Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MessageSquare size={14} color="#134E4A" />
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#134E4A', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            Scenario: {activeScenario.context}
          </span>
        </div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '700',
            backgroundColor: '#EAF8F5',
            color: '#134E4A',
            padding: '4px 10px',
            borderRadius: '12px',
            border: '1px solid #CCFBF1',
          }}
        >
          {activeScenario.tone}
        </span>
      </div>

      {/* Before & After Comparison */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* User Input Bubble */}
        <div
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            padding: '16px 20px',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', display: 'block', marginBottom: '4px', letterSpacing: '0.4px' }}>
            RAW THOUGHT (WHAT YOU SAID):
          </span>
          <p style={{ fontSize: '15px', color: '#334155', fontStyle: 'italic', lineHeight: '1.5' }}>
            {activeScenario.input}
          </p>
        </div>

        {/* Arrow Transition */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FAFCFB',
              border: '1px solid #E4ECEB',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#134E4A',
            }}
          >
            <Sparkles size={12} color="#134E4A" />
            <span>ALLACE REFINEMENT</span>
          </div>
        </div>

        {/* Refined Output Bubble */}
        <div
          style={{
            backgroundColor: '#F0F9F6',
            border: '1px solid #CCFBF1',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(19, 78, 74, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', letterSpacing: '0.4px' }}>
              HOW TO SAY IT NATURALLY:
            </span>
            <button
              onClick={handlePlayVoice}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                color: '#134E4A',
                fontWeight: '700',
                backgroundColor: '#FFFFFF',
                padding: '4px 10px',
                borderRadius: '6px',
                border: '1px solid #CCFBF1',
              }}
              title="Listen to natural pronunciation"
            >
              <Volume2 size={14} color="#134E4A" />
              <span>{isPlayingAudio ? 'Playing pronunciation...' : 'Listen'}</span>
            </button>
          </div>

          <p style={{ fontSize: '17px', fontWeight: '700', color: '#163A3D', lineHeight: '1.5', marginBottom: '12px' }}>
            {activeScenario.refined}
          </p>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(126, 224, 210, 0.4)',
            }}
          >
            <p style={{ fontSize: '13px', color: '#355558', lineHeight: '1.5' }}>
              <strong>Why this works:</strong> {activeScenario.whyItWorks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
