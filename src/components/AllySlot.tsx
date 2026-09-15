import React from 'react';

interface AllySlotProps {
  label?: string;
  imageSrc?: string;
  alt?: string;
  aspectRatio?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  handwritingNote?: string;
  handwritingPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showRays?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * AllySlot - Modular pre-launch placeholder & image container for Ally assets.
 * Once final Ally cut-outs/transparent PNGs are provided, simply supply `imageSrc`.
 */
export function AllySlot({
  label = 'Ally: Companion Visual Slot',
  imageSrc,
  alt = 'Ally, Your word companion',
  aspectRatio = '4/5',
  maxHeight = '480px',
  maxWidth = '360px',
  handwritingNote,
  handwritingPosition = 'top-left',
  showRays = false,
  className = '',
  style = {},
  children,
}: AllySlotProps) {
  const getHandwritingStyle = (): React.CSSProperties => {
    switch (handwritingPosition) {
      case 'top-right':
        return { top: '-14px', right: '4%' };
      case 'bottom-left':
        return { bottom: '16px', left: '2%' };
      case 'bottom-right':
        return { bottom: '16px', right: '4%' };
      case 'top-left':
      default:
        return { top: '-10px', left: '2%' };
    }
  };

  return (
    <div
      className={`ally-slot-wrapper ${className}`}
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
      {/* Soft atmospheric background glow */}
      <div
        style={{
          position: 'absolute',
          width: '85%',
          height: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 130, 153, 0.12) 0%, rgba(235, 244, 247, 0.08) 60%, transparent 75%)',
          filter: 'blur(28px)',
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
            top: '8%',
            right: '18%',
            zIndex: 9,
            pointerEvents: 'none',
            color: '#0B1B2B',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="3" x2="12" y2="7" />
            <line x1="4" y1="8" x2="7.5" y2="10" />
            <line x1="20" y1="8" x2="16.5" y2="10" />
          </svg>
        </div>
      )}

      {/* Content or Image Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={alt}
            style={{
              maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 18px 36px rgba(11, 27, 43, 0.14))',
              display: 'block',
            }}
          />
        ) : (
          /* Pre-launch Slot Placeholder: Clean, architected, ready for final image */
          <div
            style={{
              width: '100%',
              aspectRatio,
              maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
              borderRadius: '28px',
              border: '2px dashed rgba(0, 130, 153, 0.35)',
              backgroundColor: 'rgba(235, 244, 247, 0.45)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              textAlign: 'center',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Ally Silhouette / Placeholder Icon */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 130, 153, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                color: '#008299',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
                <path d="M12 3v-1" />
              </svg>
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#0A4E58',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              {label}
            </div>
            <div style={{ fontSize: '11.5px', color: '#667C83' }}>
              Awaiting final Ally artwork
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
