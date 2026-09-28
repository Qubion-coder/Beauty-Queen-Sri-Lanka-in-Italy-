import React from 'react';
import { Sparkles, Crown, Camera, MapPin, Gem, Award } from 'lucide-react';
import { LotusCrown } from './LotusCrown';

interface GalleryCard {
  title: string;
  icon: React.ReactNode;
}

const galleryCards: GalleryCard[] = [
  {
    title: 'Beauty-Pageant Glamour',
    icon: <Sparkles className="w-8 h-8 text-[#fae084]" />,
  },
  {
    title: 'Crowns and Evening Gowns',
    icon: <LotusCrown size={52} />,
  },
  {
    title: 'Sri Lankan Cultural Elegance',
    icon: <Award className="w-8 h-8 text-[#fae084]" />,
  },
  {
    title: 'Italy / Milan Architecture',
    icon: <MapPin className="w-8 h-8 text-[#fae084]" />,
  },
  {
    title: 'Red Carpet Atmosphere',
    icon: <Camera className="w-8 h-8 text-[#fae084]" />,
  },
  {
    title: 'Luxury Event Details',
    icon: <Gem className="w-8 h-8 text-[#fae084]" />,
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto text-center">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          GALLERY
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Visual Splendor
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryCards.map((card) => (
          <div
            key={card.title}
            className="group relative rounded-2xl overflow-hidden royal-glass border border-[#d4af37]/35 p-8 flex flex-col items-center justify-center text-center h-56 hover:border-[#fae084] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300"
          >
            {/* Subtle inner gold frame */}
            <div className="absolute inset-2 border border-[#d4af37]/15 rounded-xl pointer-events-none group-hover:border-[#d4af37]/40 transition-colors" />

            <div className="w-16 h-16 rounded-2xl bg-[#091535] border border-[#d4af37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>

            <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#fae084] transition-colors">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
