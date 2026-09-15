import React from 'react';

interface AllyContainerProps {
  imageSrc?: string;
  alt?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  aspectRatio?: string;
  handwritingNote?: string;
  handwritingPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showRays?: boolean;
  raysPosition?: 'top-right' | 'top-left';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function AllyContainer({
  imageSrc = '/images/ally/Ally Character.png',
  alt = 'Ally, Your everyday word companion',
  maxHeight = '480px',
  maxWidth = '100%',
  aspectRatio = 'auto',
  handwritingNote,
  handwritingPosition = 'top-left',
  showRays = false,
  raysPosition = 'top-right',
  className = '',
  style = {},
  children,
}: AllyContainerProps) {
  // Handwriting position styles
  const getHandwritingStyle = (): React.CSSProperties => {
    switch (handwritingPosition) {
      case 'top-right':
        return { top: '-10px', right: '10px' };
      case 'bottom-left':
        return { bottom: '20px', left: '0px' };
      case 'bottom-right':
        return { bottom: '20px', right: '10px' };
      case 'top-left':
      default:
        return { top: '0px', left: '-20px' };
    }
  };

  return (
    <div
      className={`ally-frame-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        margin: '0 auto',
        ...style,
      }}
    >
      {/* Soft atmospheric ambient glow */}
      <div
        style={{
          position: 'absolute',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 130, 153, 0.12) 0%, rgba(234, 244, 248, 0.05) 60%, transparent 75%)',
          filter: 'blur(30px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Optional Handwritten Callout */}
      {handwritingNote && (
        <div
          className="ally-handwriting"
          style={{
            position: 'absolute',
            zIndex: 10,
            pointerEvents: 'none',
            whiteSpace: 'pre-line',
            ...getHandwritingStyle(),
          }}
        >
          {handwritingNote}
        </div>
      )}

      {/* Optional Rays / Sparks */}
      {showRays && (
        <div
          style={{
            position: 'absolute',
            ...(raysPosition === 'top-right' ? { top: '8%', right: '22%' } : { top: '8%', left: '22%' }),
            zIndex: 9,
            pointerEvents: 'none',
            color: '#0B1B2B',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="3" x2="12" y2="7" />
            <line x1="4" y1="8" x2="7.5" y2="10" />
            <line x1="20" y1="8" x2="16.5" y2="10" />
          </svg>
        </div>
      )}

      {/* Character Image Container */}
      <div
        className="ally-asset-container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio,
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          style={{
            maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 14px 28px rgba(11, 27, 43, 0.12))',
            display: 'block',
          }}
          loading="eager"
        />
        {children}
      </div>
    </div>
  );
}
