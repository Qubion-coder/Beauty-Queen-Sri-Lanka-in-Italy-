import React from 'react';
import { LotusCrown } from './LotusCrown';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#030713] text-slate-400 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Refined Gold Decorative Crown / Lotus Mark */}
        <LotusCrown size={48} />

        {/* Miss & Mrs Beauty Queen Sri Lanka in Italy 2026 */}
        <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-white tracking-[0.18em]">
          Miss &amp; Mrs Beauty Queen Sri Lanka in Italy 2026
        </h2>

        {/* by Imaya Liyanage */}
        <p className="font-script text-2xl sm:text-3xl text-[#fae084] font-normal">
          by Imaya Liyanage
        </p>

        {/* Elegant Social Media Icons */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#081533] border border-[#d4af37]/35 flex items-center justify-center text-slate-300 hover:text-[#fae084] hover:border-[#fae084] transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#081533] border border-[#d4af37]/35 flex items-center justify-center text-slate-300 hover:text-[#fae084] hover:border-[#fae084] transition-all"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#081533] border border-[#d4af37]/35 flex items-center justify-center text-slate-300 hover:text-[#fae084] hover:border-[#fae084] transition-all"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
