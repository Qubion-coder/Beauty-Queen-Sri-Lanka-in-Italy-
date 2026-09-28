import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-black flex justify-center"
    >
      <img
        src="/hero-bg.png"
        alt="Hero Background"
        className="w-full h-auto object-contain max-h-screen"
      />

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#invitation"
          className="inline-flex flex-col items-center gap-2 text-slate-300 hover:text-[#fae084] transition-colors group cursor-pointer drop-shadow-md"
        >
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-[#fae084] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border border-[#d4af37]/70 flex items-start justify-center p-1 bg-black/20 backdrop-blur-sm">
            <div className="w-1 h-2 bg-[#fae084] rounded-full animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </section>
  );
};
