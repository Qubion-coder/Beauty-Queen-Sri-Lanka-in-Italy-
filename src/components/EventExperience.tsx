import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export const EventExperience: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          EXPERIENCE
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-tight">
          The Event Schedule
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
      </div>

      {/* Cinematic horizontal section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* RED CARPET 13.00 */}
        <div className="relative rounded-3xl royal-card p-10 border border-[#d4af37]/40 flex flex-col items-center text-center justify-between overflow-hidden group hover:border-[#fae084] transition-all">
          <div className="w-16 h-16 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-[#fae084]" />
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mb-2">
            RED CARPET
          </h3>

          <div className="font-mono text-4xl sm:text-5xl font-black text-gold-bright my-2">
            13.00
          </div>
        </div>

        {/* THE SHOW 13.45 */}
        <div className="relative rounded-3xl royal-card p-10 border border-[#d4af37]/40 flex flex-col items-center text-center justify-between overflow-hidden group hover:border-[#fae084] transition-all">
          <div className="w-16 h-16 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-[#fae084]" />
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mb-2">
            THE SHOW
          </h3>

          <div className="font-mono text-4xl sm:text-5xl font-black text-gold-bright my-2">
            13.45
          </div>
        </div>
      </div>
    </section>
  );
};
