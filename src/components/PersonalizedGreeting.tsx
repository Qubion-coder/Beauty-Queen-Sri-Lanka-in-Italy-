import React from 'react';

interface PersonalizedGreetingProps {
  guestName?: string | null;
}

export const PersonalizedGreeting: React.FC<PersonalizedGreetingProps> = ({ guestName }) => {
  if (!guestName) return null;

  return (
    <section className="relative w-full py-16 bg-[#0a1930] overflow-hidden">
      {/* Decorative top & bottom borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <div className="bg-[#0d2252]/90 backdrop-blur-sm rounded-2xl px-6 py-10 sm:px-12 sm:py-16">
            <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#fbf0cf] leading-snug font-light italic text-balance">
              We cordially invite <br className="sm:hidden" />
              <span className="font-semibold text-[#d4af37] not-italic font-cinzel tracking-widest mt-4 inline-block drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]">
                {guestName}
              </span>
              <br className="sm:hidden" /> to join us for this prestigious celebration.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
