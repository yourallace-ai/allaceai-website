import React from 'react';
import { BookOpen, ArrowRight, Clock, User, Sparkles } from 'lucide-react';
import { DownloadCTA } from '../components/DownloadCTA';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'speaking-naturally-vs-correctly',
    title: 'Speaking Naturally vs. Speaking Correctly: Why Grammar Isn’t the Real Goal',
    excerpt: 'Many adults speak in rigid, mechanical sentences because they prioritize 100% textbook grammar over natural conversational rhythm. Here is how to make the shift.',
    readTime: '4 min read',
    date: 'August 2026',
    category: 'Communication Mindset',
  },
  {
    id: 'workplace-meeting-confidence',
    title: 'How to Sound Confident in Workplace Meetings Without Overthinking Every Word',
    excerpt: 'The 5-second hesitation before unmuting in a team meeting is common. Learn how to structure simple, assertive status updates and diplomatic questions.',
    readTime: '5 min read',
    date: 'August 2026',
    category: 'Workplace English',
  },
  {
    id: 'multilingual-thinking-english',
    title: 'Why Literal Translation Fails: How to Bridge Native Thoughts into Natural English',
    excerpt: 'Translating word-for-word from Hindi, Marathi, Kannada, or German often leads to awkward phrasing. Discover how focusing on intent changes everything.',
    readTime: '6 min read',
    date: 'August 2026',
    category: 'Language Nuance',
  },
  {
    id: 'sound-less-formal-more-approachable',
    title: 'How to Sound Less Formal and More Approachable in Everyday Workplace Messages',
    excerpt: 'Overly formal phrasing like "Please find attached herewith" can create unintended distance between colleagues. Here are warm, modern alternatives.',
    readTime: '4 min read',
    date: 'August 2026',
    category: 'Tone & Phrasing',
  },
];

interface BlogsPageProps {
  onNavigate: (page: string) => void;
  onSelectPost: (postId: string) => void;
  onGetApp: () => void;
}

export function BlogsPage({ onNavigate, onSelectPost, onGetApp }: BlogsPageProps) {
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
            <BookOpen size={13} />
            <span>Communication Insights</span>
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
            Insights on Natural English Communication
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#355558',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Practical guides, perspectives on conversational confidence, and actionable advice for workplace and everyday English.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1040px',
              margin: '0 auto',
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="glass-card-interactive"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  onSelectPost(post.id);
                  onNavigate('blog-single');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      backgroundColor: '#EAF8F5',
                      color: '#134E4A',
                      padding: '4px 10px',
                      borderRadius: '12px',
                    }}
                  >
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#83989B' }}>
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#163A3D',
                    lineHeight: '1.35',
                    marginBottom: '12px',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#355558',
                    lineHeight: '1.65',
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid #F1F5F9',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#83989B' }}>{post.date}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#134E4A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadCTA onGetApp={onGetApp} />
    </div>
  );
}
