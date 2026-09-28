import React from 'react';

interface LotusCrownProps {
  className?: string;
  size?: number;
  variant?: 'crown' | 'lotus' | 'combo';
}

export const LotusCrown: React.FC<LotusCrownProps> = ({
  className = '',
  size = 72,
  variant = 'combo',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Golden halo glow */}
      <div
        className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#fae084]/30 to-[#996515]/20 blur-xl pointer-events-none"
        aria-hidden="true"
      />

      <svg
        width={size}
        height={Math.round(size * 0.72)}
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-500 hover:scale-105"
      >
        <defs>
          <linearGradient id="goldSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7D6" />
            <stop offset="25%" stopColor="#F5D061" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6010" />
          </linearGradient>

          <linearGradient id="goldLightGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFFCED" />
            <stop offset="100%" stopColor="#B88F28" />
          </linearGradient>

          <radialGradient id="sapphireGem" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="80%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0B1536" />
          </radialGradient>
        </defs>

        {/* Base Lotus Petals (Sri Lankan Heritage Motif) */}
        <path
          d="M70 82C55 82 42 75 32 64C45 68 58 72 70 72C82 72 95 68 108 64C98 75 85 82 70 82Z"
          fill="url(#goldSilkGrad)"
          opacity="0.85"
        />
        {/* Outer Lotus Wings */}
        <path
          d="M28 66C18 56 16 42 22 34C28 44 34 54 44 60C38 62 33 64 28 66Z"
          fill="url(#goldLightGrad)"
        />
        <path
          d="M112 66C122 56 124 42 118 34C112 44 106 54 96 60C102 62 107 64 112 66Z"
          fill="url(#goldLightGrad)"
        />

        {/* Crown Arches & Spires */}
        {/* Center Main Spire */}
        <path
          d="M70 14L77 46C74 49 71 50 70 50C69 50 66 49 63 46L70 14Z"
          fill="url(#goldLightGrad)"
        />
        {/* Mid-Left Spire */}
        <path
          d="M45 26L54 50C51 52 47 52 44 51L37 38L45 26Z"
          fill="url(#goldSilkGrad)"
        />
        {/* Mid-Right Spire */}
        <path
          d="M95 26L103 38L96 51C93 52 89 52 86 50L95 26Z"
          fill="url(#goldSilkGrad)"
        />
        {/* Far-Left Spire */}
        <path
          d="M26 38L36 55C33 57 29 57 26 55L21 46L26 38Z"
          fill="url(#goldLightGrad)"
        />
        {/* Far-Right Spire */}
        <path
          d="M114 38L119 46L114 55C111 57 107 57 104 55L114 38Z"
          fill="url(#goldLightGrad)"
        />

        {/* Interlocking Filigree Arch Band */}
        <path
          d="M32 68C42 54 54 48 70 56C86 48 98 54 108 68C92 72 48 72 32 68Z"
          fill="url(#goldSilkGrad)"
        />

        {/* Crown Base Rim */}
        <path
          d="M24 78C45 83 95 83 116 78L114 84C93 89 47 89 26 84L24 78Z"
          fill="url(#goldLightGrad)"
          stroke="#F5D061"
          strokeWidth="0.7"
        />

        {/* Ceylon Blue Sapphire Gems */}
        <polygon
          points="70,44 75,51 70,58 65,51"
          fill="url(#sapphireGem)"
          stroke="#FFF7D6"
          strokeWidth="0.8"
        />
        <polygon points="46,52 49,56 46,60 43,56" fill="url(#sapphireGem)" stroke="#FFF7D6" strokeWidth="0.5" />
        <polygon points="94,52 97,56 94,60 91,56" fill="url(#sapphireGem)" stroke="#FFF7D6" strokeWidth="0.5" />
        <circle cx="70" cy="74" r="2.2" fill="url(#sapphireGem)" stroke="#FFF7D6" strokeWidth="0.5" />
        <circle cx="54" cy="74" r="1.6" fill="url(#sapphireGem)" stroke="#FFF7D6" strokeWidth="0.4" />
        <circle cx="86" cy="74" r="1.6" fill="url(#sapphireGem)" stroke="#FFF7D6" strokeWidth="0.4" />

        {/* Pearl Tips */}
        <circle cx="70" cy="13" r="3.2" fill="#FFFDF2" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="45" cy="25" r="2.6" fill="#FFFDF2" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="95" cy="25" r="2.6" fill="#FFFDF2" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="26" cy="37" r="2" fill="#FFFDF2" stroke="#D4AF37" strokeWidth="0.6" />
        <circle cx="114" cy="37" r="2" fill="#FFFDF2" stroke="#D4AF37" strokeWidth="0.6" />
      </svg>
    </div>
  );
};
