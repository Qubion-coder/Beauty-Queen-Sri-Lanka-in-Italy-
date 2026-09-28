/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GoldCanvas } from './components/GoldCanvas';
import { Hero } from './components/Hero';
import { InvitationCard } from './components/InvitationCard';
import { EventDetailsCards } from './components/EventDetailsCards';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { EventExperience } from './components/EventExperience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);

  if (!hasEnteredSite) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        {/* Intro Background (Optional: can just be black, or re-use gold particles) */}
        <GoldCanvas />

        {isVideoPlaying ? (
          <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
            <video
              src="/invitation-video.mp4"
              autoPlay
              playsInline
              onEnded={() => setHasEnteredSite(true)}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setHasEnteredSite(true)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60] bg-black/50 p-2 rounded-full"
              aria-label="Skip Video"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
            <img 
              src="/logo.png" 
              alt="Miss & Mrs Beauty Queen Logo" 
              className="w-80 sm:w-96 md:w-[32rem] lg:w-[40rem] h-auto mb-12 -mt-24 sm:-mt-32 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            />
            <div className="flex flex-col items-center gap-2 mb-12">
              <span className="font-cinzel text-xl sm:text-2xl text-[#fbf0cf] tracking-[0.25em] font-semibold">
                MISS &amp; MRS
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-7xl text-[#d4af37] tracking-widest font-bold my-2">
                BEAUTY QUEEN
              </h1>
              <span className="text-[#fbf0cf] tracking-[0.2em] text-sm sm:text-lg font-light">
                SRI LANKA IN ITALY 2026
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
                <span className="font-script text-2xl sm:text-3xl text-[#fae084] font-normal tracking-wide">
                  by Imaya Liyanage
                </span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
              </div>
            </div>
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="px-8 py-4 bg-[#030713]/80 hover:bg-[#d4af37]/90 text-[#fbf0cf] hover:text-black font-cinzel font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] backdrop-blur-md rounded-sm border border-[#d4af37]/50 hover:border-transparent flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 text-[#d4af37] group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Invitation
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030713] text-[#f4efe6] relative overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#fae084]">
      {/* Subtle gold particles background */}
      <GoldCanvas />

      {/* Navigation: HOME | ABOUT | EVENT | GALLERY | CONTACT */}
      <Navbar />

      {/* Main Content Sections: strictly only given information */}
      <main className="relative z-10">
        <Hero />
        <InvitationCard />
        <EventDetailsCards />
        <AboutSection />
        <GallerySection />
        <EventExperience />
        <ContactSection />
      </main>

      {/* Luxurious Dark Navy Footer */}
      <Footer />
    </div>
  );
}
