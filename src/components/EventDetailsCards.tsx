import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const EventDetailsCards: React.FC = () => {
  return (
    <section id="event" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Three elegant information cards with gold line icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {/* CARD 1: DATE */}
        <div className="rounded-2xl royal-glass p-8 flex flex-col items-center text-center justify-between border border-[#d4af37]/35 shadow-xl hover:border-[#d4af37] transition-all">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-[#fae084]" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] mb-2">
              DATE
            </div>

            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white tracking-tight">
              28.11.2026
            </div>
          </div>
        </div>

        {/* CARD 2: LOCATION */}
        <div className="rounded-2xl royal-glass p-8 flex flex-col items-center text-center justify-between border border-[#d4af37]/35 shadow-xl hover:border-[#d4af37] transition-all">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-[#fae084]" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] mb-2">
              LOCATION
            </div>

            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2">
              Royal Graden Hotel
            </h3>

            <div className="text-sm text-slate-200 leading-relaxed">
              <p>Via Giuseppe di Vittorio, 4</p>
              <p className="text-[#fae084]">20057 Assago, Milano</p>
            </div>
          </div>
        </div>

        {/* CARD 3: TIME */}
        <div className="rounded-2xl royal-glass p-8 flex flex-col items-center text-center justify-between border border-[#d4af37]/35 shadow-xl hover:border-[#d4af37] transition-all">
          <div className="flex flex-col items-center w-full">
            <div className="w-14 h-14 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-[#fae084]" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] mb-4">
              TIME
            </div>

            <div className="space-y-3 w-full">
              <div className="p-2.5 rounded-xl bg-[#061026]/90 border border-[#d4af37]/20">
                <div className="font-mono text-xl font-bold text-[#fae084]">
                  13.00
                </div>
                <div className="text-xs text-white">
                  Red Carpet Start
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#061026]/90 border border-[#d4af37]/20">
                <div className="font-mono text-xl font-bold text-white">
                  13.45
                </div>
                <div className="text-xs text-slate-200">
                  Show Start
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
