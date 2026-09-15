import React from 'react';

interface AppStoreBadgesProps {
  onBadgeClick?: () => void;
  className?: string;
  size?: 'default' | 'large' | 'compact';
}

export function AppStoreBadges({ onBadgeClick, className = '', size = 'default' }: AppStoreBadgesProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBadgeClick) onBadgeClick();
  };

  const pad = size === 'compact' ? '7px 14px' : size === 'large' ? '12px 20px' : '9px 18px';
  const iconSize = size === 'compact' ? 18 : size === 'large' ? 24 : 20;
  const btnWidth = size === 'compact' ? '160px' : size === 'large' ? '196px' : '180px';

  return (
    <div
      className={`app-store-badges-wrap ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}
    >
      {/* Google Play - Coming Soon */}
      <button
        onClick={handleClick}
        className="app-badge-btn"
        style={{ padding: pad, width: btnWidth, minWidth: btnWidth, boxSizing: 'border-box' }}
        title="Google Play - Coming Soon"
        aria-label="Google Play - Coming Soon"
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.8-9.8v-.2L3.7 1.7l-.1.1z"
            fill="#00D3FF"
          />
          <path
            d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-3.9 2.2-.1.1z"
            fill="#FFD200"
          />
          <path
            d="M13.5 12.1L3.6 22.3c.4.4 1 .5 1.7.1l11.5-6.6-3.3-3.7z"
            fill="#FF3333"
          />
          <path
            d="M13.5 12.1l3.3-3.7L5.3 1.8c-.7-.4-1.3-.3-1.7.1l9.9 10.2z"
            fill="#00F076"
          />
        </svg>
        <div>
          <div className="app-badge-text-sub">GET IT ON</div>
          <div className="app-badge-text-title">Google Play</div>
          <div className="app-badge-text-tag">Coming Soon</div>
        </div>
      </button>

      {/* Apple App Store - Coming Soon */}
      <button
        onClick={handleClick}
        className="app-badge-btn"
        style={{ padding: pad, width: btnWidth, minWidth: btnWidth, boxSizing: 'border-box' }}
        title="App Store - Coming Soon"
        aria-label="App Store - Coming Soon"
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ flexShrink: 0 }}
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.79 1.1-1.89.98-2.99-.95.04-2.11.64-2.79 1.43-.6.69-1.13 1.81-.99 2.89 1.06.08 2.15-.55 2.8-1.33z" />
        </svg>
        <div>
          <div className="app-badge-text-sub">Download on the</div>
          <div className="app-badge-text-title">App Store</div>
          <div className="app-badge-text-tag">Coming Soon</div>
        </div>
      </button>
    </div>
  );
}
