import React from 'react';
import { LotusCrown } from './LotusCrown';

export const InvitationCard: React.FC = () => {
  return (
    <section id="invitation" className="relative py-24 w-full bg-[#0a1930]">
      <div className="absolute inset-0 z-0">
        <img
          src="/invitation-bg.png"
          alt="Invitation Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Blue color overlay for the background */}
        <div className="absolute inset-0 bg-[#0d2252]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-blue-950/40"></div>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Editorial Title */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          YOU’RE INVITED TO
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-tight">
          An Evening of Grace &amp; Grandeur
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
      </div>

      {/* Luxury Editorial Card */}
      <div className="relative rounded-3xl royal-card p-8 sm:p-12 md:p-16 shadow-2xl shadow-black/80 overflow-hidden border border-[#d4af37]/35 text-center">
        {/* Subtle gold corner lines */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#d4af37]/60 pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6">
          <LotusCrown size={60} className="mx-auto mb-2" />

          {/* Exact Invitation Text */}
          <p className="font-cormorant text-2xl sm:text-3xl text-[#fbf0cf] leading-relaxed font-light italic text-balance">
            “Step into a night of glamour, culture, and unforgettable elegance.
          </p>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            We invite you to witness Miss &amp; Mrs Beauty Queen Sri Lanka in Italy 2026, presented by Imaya Liyanage — a stage where confidence meets culture and Sri Lankan pride shines brighter than ever.
          </p>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Join us as extraordinary women compete for the crown and celebrate the spirit of Sri Lanka in Italy.”
          </p>

          <div className="pt-6 pb-2">
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#07132e] via-[#0d2252] to-[#07132e] border border-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              <span className="font-sinhala text-xl sm:text-3xl md:text-4xl text-gold-bright font-bold tracking-wide block">
                “ඉතාලියේදී කිරුළු පලඳින ශ්‍රී ලාංකේය අභිමානය”
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
