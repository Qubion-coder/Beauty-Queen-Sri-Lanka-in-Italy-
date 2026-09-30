import React from 'react';

export const CelebritiesSection: React.FC = () => {
  const mainImage = '/sele/IMG_4493.JPG.jpeg';
  const otherImages = [
    '/sele/IMG_4070.JPG.jpeg',
    '/sele/IMG_4217.JPG.jpeg',
    '/sele/IMG_3377.JPG.jpeg',
    '/sele/IMG_4075.JPG.jpeg',
    '/sele/IMG_4079.JPG.jpeg',
    '/sele/IMG_4084.JPG.jpeg',
  ];

  return (
    <section id="celebrities" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          HONORED GUESTS
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Celebrity Appearances
        </h2>
        <p className="mt-4 text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
          Joining us all the way from Sri Lanka to Italy, bringing glamour and prestige to the grand stage.
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
        {/* Main Celebrity Photo */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <div className="relative group rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-black h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030713] via-transparent to-transparent opacity-80 z-10" />
            <img 
              src={mainImage} 
              alt="Main Celebrity Guest" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: '500px' }}
            />
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/60 z-20 pointer-events-none" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]/60 z-20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]/60 z-20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/60 z-20 pointer-events-none" />
          </div>
        </div>

        {/* Other Celebrities Grid */}
        <div className="w-full lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {otherImages.map((src, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden border border-[#d4af37]/20 aspect-[3/4]">
              <div className="absolute inset-0 bg-[#030713]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Celebrity Guest ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
