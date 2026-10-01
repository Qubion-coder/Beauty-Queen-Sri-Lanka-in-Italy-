import React from 'react';
import { LotusCrown } from './LotusCrown';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#030713] text-slate-400 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Refined Gold Decorative Crown / Lotus Mark */}
        <LotusCrown size={48} />

        {/* Sinhala Invitation Message */}
        <div className="max-w-2xl mx-auto space-y-4 px-4 py-6">
          <p className="font-sinhala text-base sm:text-lg lg:text-xl font-light text-slate-300 text-balance leading-relaxed opacity-90">
            මව්බිමෙන් දුර බැහැරව වෙසෙන මෙවන් විදේශයකදී ශ්‍රී ලාංකේය සහයෝගිතාවය වෙනුවෙන් අප සමඟ ආදරයෙන් අත්වැල් බැඳගන්නට මෙම ප්‍රභාමය සැදෑවට ඔබගේ පැමිණීම ගෞරවනීයව අපේක්ෂා කරමි…!
          </p>
          <p className="font-sinhala text-xl sm:text-2xl text-[#d4af37] font-medium pt-2">
            ඉමායා ලියනගේ
          </p>
        </div>

        <div className="w-12 h-px bg-[#d4af37]/30 mb-6" />

        {/* Miss & Mrs Beauty Queen Sri Lanka in Italy 2026 */}
        <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-white tracking-[0.18em]">
          Miss &amp; Mrs Beauty Queen Sri Lanka in Italy 2026
        </h2>

        {/* by Imaya Liyanage */}
        <p className="font-script text-2xl sm:text-3xl text-[#fae084] font-normal">
          by Imaya Liyanage
        </p>

        {/* Attribution */}
        <div className="pt-6">
          <p className="text-slate-400/80 text-xs font-sans tracking-wider">
            Want a digital invitation like this? Create yours with{' '}
            <a 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#d4af37] hover:text-white underline transition-colors duration-300" 
              href="https://wa.me/94707819074"
            >
              invitemint
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
