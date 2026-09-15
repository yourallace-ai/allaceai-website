import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { blogPosts, BlogPost } from './BlogsPage';
import { DownloadCTA } from '../components/DownloadCTA';

interface BlogSinglePageProps {
  postId?: string;
  onNavigate: (page: string) => void;
  onSelectPost: (postId: string) => void;
  onGetApp: () => void;
}

export function BlogSinglePage({ postId = 'speaking-naturally-vs-correctly', onNavigate, onSelectPost, onGetApp }: BlogSinglePageProps) {
  const currentPost = blogPosts.find((p) => p.id === postId) || blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.id !== currentPost.id).slice(0, 2);

  return (
    <div>
      {/* Header Bar */}
      <section
        style={{
          paddingTop: '48px',
          paddingBottom: '40px',
          backgroundColor: '#FAFCFB',
          borderBottom: '1px solid #E4ECEB',
        }}
      >
        <div className="container-narrow">
          <button
            onClick={() => {
              onNavigate('blogs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#134E4A',
              fontWeight: '700',
              fontSize: '14px',
              marginBottom: '20px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to all insights</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: '#EAF8F5',
                color: '#134E4A',
                padding: '4px 12px',
                borderRadius: '12px',
              }}
            >
              {currentPost.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#83989B' }}>
              <Clock size={13} />
              <span>{currentPost.readTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#83989B' }}>
              <Calendar size={13} />
              <span>{currentPost.date}</span>
            </div>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '800',
              color: '#163A3D',
              lineHeight: '1.25',
              letterSpacing: '-0.6px',
            }}
          >
            {currentPost.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          <div style={{ fontSize: '16px', color: '#355558', lineHeight: '1.8' }}>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#163A3D', lineHeight: '1.7', marginBottom: '24px' }}>
              If you’ve ever found yourself mentally replaying a conversation wondering if you said something "wrong," you are not alone. For most adults who learn English as a second language, the fear of making a grammatical mistake is the single biggest cause of hesitation.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginTop: '36px', marginBottom: '16px' }}>
              The Difference Between Grammar and Communication
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Grammar is a set of formal structural guidelines designed for written documentation and academic clarity. In conversational English, however, native speakers constantly use idioms, contractions, short sentences, and colloquial phrasing that might look imperfect on a grammar exam but convey warmth and clear intent.
            </p>

            {/* Comparison Callout */}
            <div className="mint-card" style={{ padding: '24px', margin: '32px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#134E4A', marginBottom: '12px' }}>
                Look at the difference in a team standup:
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#A83B3B', textTransform: 'uppercase', display: 'block' }}>
                  Technically Grammatical but Stiff:
                </span>
                <p style={{ fontSize: '14px', color: '#163A3D', fontStyle: 'italic' }}>
                  "I am writing to inform you that I have completed the assignment which was assigned to me yesterday."
                </p>
              </div>

              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', textTransform: 'uppercase', display: 'block' }}>
                  Natural & Conversational:
                </span>
                <p style={{ fontSize: '15px', color: '#163A3D', fontWeight: '700' }}>
                  "I’ve finished up yesterday's task and it's ready for your review."
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#163A3D', marginTop: '36px', marginBottom: '16px' }}>
              3 Ways to Build Natural Confidence
            </h2>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0 32px 0' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="#134E4A" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#163A3D' }}>Focus on your listener's understanding:</strong> If your listener understands your point, your communication succeeded. Minor preposition errors do not block understanding.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="#134E4A" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#163A3D' }}>Calibrate for tone rather than rules:</strong> Strive for politeness, clarity, and collaborative intent instead of memorizing verb tables.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="#134E4A" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#163A3D' }}>Use a non-judgmental sounding board:</strong> Testing your thoughts with an AI companion like Allace allows you to practice phrasing without fear of judgment.
                </div>
              </li>
            </ul>

            <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #134E4A', marginTop: '36px' }}>
              <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#163A3D', margin: 0 }}>
                "Confidence doesn’t come from knowing every single rule in the dictionary. It comes from knowing that your core message is understood clearly and respected."
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #E4ECEB' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#163A3D', marginBottom: '24px' }}>
              More Communication Insights
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {otherPosts.map((post) => (
                <div
                  key={post.id}
                  className="glass-card"
                  style={{ padding: '24px', cursor: 'pointer' }}
                  onClick={() => {
                    onSelectPost(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#134E4A', display: 'block', marginBottom: '6px' }}>
                    {post.category}
                  </span>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#163A3D', marginBottom: '8px', lineHeight: '1.4' }}>
                    {post.title}
                  </h4>
                  <span style={{ fontSize: '13px', color: '#134E4A', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read article <ArrowRight size={13} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
