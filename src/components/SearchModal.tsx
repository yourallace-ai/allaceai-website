import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic?: (topic: string) => void;
}

export function SearchModal({ isOpen, onClose, onSelectTopic }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularWords = [
    { word: 'Serendipity', type: 'Noun', meaning: 'The unexpected discovery of something good.' },
    { word: 'Resilient', type: 'Adjective', meaning: 'Able to recover quickly from difficult situations.' },
    { word: 'Articulate', type: 'Adjective / Verb', meaning: 'Expressing ideas clearly and effectively.' },
    { word: 'Nuance', type: 'Noun', meaning: 'A subtle distinction or variation in expression.' },
  ];

  const quickTopics = ['Confidence', 'Job interview', 'Travel', 'Better alternatives', 'Workplace emails'];

  const filteredWords = query
    ? popularWords.filter(
        (w) =>
          w.word.toLowerCase().includes(query.toLowerCase()) ||
          w.meaning.toLowerCase().includes(query.toLowerCase())
      )
    : popularWords;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 27, 43, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 20px 20px 20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 24px 60px rgba(11, 27, 43, 0.25)',
          overflow: 'hidden',
          border: '1px solid #E5ECEB',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '18px 24px',
            borderBottom: '1px solid #E5ECEB',
            gap: '12px',
          }}
        >
          <Search size={22} color="#008299" />
          <input
            type="text"
            placeholder="Search words, situations or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '17px',
              color: '#0B1B2B',
              backgroundColor: 'transparent',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: '#8E9FA4', padding: '4px' }}
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: '#F5F4EE',
              fontSize: '12px',
              color: '#4A6068',
              fontWeight: '600',
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick Topic Chips */}
        <div style={{ padding: '16px 24px 8px 24px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#7C9197', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '10px' }}>
            Suggested Topics
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {quickTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  if (onSelectTopic) onSelectTopic(topic);
                  onClose();
                }}
                className="topic-chip"
                style={{ fontSize: '12.5px', padding: '6px 14px' }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Results / Featured list */}
        <div style={{ padding: '16px 24px 24px 24px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#7C9197', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '12px' }}>
            {query ? 'Matching Words' : 'Curated Words'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filteredWords.map((item) => (
              <div
                key={item.word}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#FAF9F5',
                  border: '1px solid #EAE6DC',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                onClick={() => {
                  if (onSelectTopic) onSelectTopic(item.word);
                  onClose();
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#0B1B2B' }}>{item.word}</span>
                    <span style={{ fontSize: '11px', color: '#008299', backgroundColor: '#EBF4F7', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>
                      {item.type}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#4A6068', marginTop: '2px' }}>{item.meaning}</div>
                </div>
                <ArrowRight size={16} color="#008299" />
              </div>
            ))}
          </div>
        </div>

        {/* Ally note footer */}
        <div
          style={{
            backgroundColor: '#F7FAF9',
            borderTop: '1px solid #E5ECEB',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#0A4E58' }}>
            <Sparkles size={14} color="#008299" />
            <span className="ally-handwriting-sm">Ally is ready with 120+ topics</span>
          </div>
          <span style={{ fontSize: '12px', color: '#7C9197' }}>Allace.AI App Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
