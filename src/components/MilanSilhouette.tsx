import React from 'react';

export const MilanSilhouette: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-25"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="milanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fae084" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#050b18" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silkFlow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="30%" stopColor="#fae084" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Milan Duomo Architectural Outline Spires & Arches */}
        <g stroke="url(#milanGrad)" strokeWidth="1" fill="none">
          {/* Base arcade arches */}
          <path d="M0 220 Q 30 190 60 220 Q 90 190 120 220 Q 150 190 180 220 Q 210 190 240 220 Q 270 190 300 220 Q 330 190 360 220 Q 390 190 420 220 Q 450 190 480 220 Q 510 190 540 220 Q 570 190 600 220 Q 630 190 660 220 Q 690 190 720 220 Q 750 190 780 220 Q 810 190 840 220 Q 870 190 900 220 Q 930 190 960 220 Q 990 190 1020 220 Q 1050 190 1080 220 Q 1110 190 1140 220 Q 1170 190 1200 220" />

          {/* Spires left */}
          <path d="M280 220 L310 130 L320 130 L330 150 L340 100 L345 80 L350 100 L360 160 L380 220" />
          <path d="M345 78 L345 50" strokeWidth="1.5" />

          {/* Central Duomo Milan silhouette structure */}
          <path d="M480 220 L510 140 L520 110 L530 140 L540 90 L550 140 L560 70 L570 140 L580 50 L590 140 L600 20 L610 140 L620 50 L630 140 L640 70 L650 140 L660 90 L670 140 L680 110 L690 140 L720 220" />
          {/* Madonnina top pinnacle */}
          <circle cx="600" cy="18" r="2.5" fill="#fae084" />
          <path d="M600 16 L600 6" strokeWidth="1.2" stroke="#fae084" />

          {/* Spires right */}
          <path d="M820 220 L840 160 L850 100 L855 80 L860 100 L870 150 L880 130 L890 130 L920 220" />
          <path d="M855 78 L855 50" strokeWidth="1.5" />
        </g>

        {/* Dynamic flowing silk lines */}
        <path
          d="M0 160 C 250 80, 450 200, 700 120 C 950 40, 1100 180, 1200 110"
          stroke="url(#silkFlow)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 185 C 200 120, 500 220, 800 140 C 1000 90, 1150 190, 1200 150"
          stroke="url(#silkFlow)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};
