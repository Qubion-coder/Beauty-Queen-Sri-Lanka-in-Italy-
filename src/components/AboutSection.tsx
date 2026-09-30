import React from 'react';
import { LotusCrown } from './LotusCrown';

export const AboutSection: React.FC = () => {
  const elements = [
    { title: 'Beauty', icon: <img src="/icon_beauty.jpg" alt="Beauty" className="w-full h-full object-cover rounded-xl" /> },
    { title: 'Confidence', icon: <img src="/icon_confidence.jpg" alt="Confidence" className="w-full h-full object-cover rounded-xl" /> },
    { title: 'Culture', icon: <img src="/icon_culture.jpg" alt="Culture" className="w-full h-full object-cover rounded-xl" /> },
    { title: 'Sri Lankan Heritage', icon: <img src="/icon_heritage.jpg" alt="Heritage" className="w-full h-full object-cover rounded-xl" /> },
    { title: 'Women’s Empowerment', icon: <img src="/icon_empowerment.jpg" alt="Empowerment" className="w-full h-full object-cover rounded-xl" /> },
    { title: 'Sri Lankan Pride in Italy', icon: <img src="/icon_pride_italy.jpg" alt="Pride" className="w-full h-full object-cover rounded-xl" /> },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          ABOUT THE PAGEANT
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-tight">
          A Celebration of Excellence
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
      </div>

      {/* Grid of the 6 given aspects */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {elements.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl royal-glass p-6 sm:p-8 border border-[#d4af37]/30 flex flex-col items-center justify-center text-center hover:border-[#fae084] transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#081533] border border-[#d4af37]/40 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-cinzel text-sm sm:text-base font-bold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
