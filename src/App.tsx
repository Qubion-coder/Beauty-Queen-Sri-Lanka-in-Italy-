/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { GoldCanvas } from './components/GoldCanvas';
import { Butterflies } from './components/Butterflies';
import { Hero } from './components/Hero';
import { InvitationCard } from './components/InvitationCard';
import { EventDetailsCards } from './components/EventDetailsCards';
import { AboutSection } from './components/AboutSection';
import { CelebritiesSection } from './components/CelebritiesSection';
import { EventExperience } from './components/EventExperience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { PersonalizedGreeting } from './components/PersonalizedGreeting';

export default function App() {
  const path = window.location.pathname;

  if (path === '/admin') {
    return <Admin />;
  }

  const encodedGuestName = path.length > 1 ? path.substring(1) : null;
  const guestName = encodedGuestName ? decodeURIComponent(encodedGuestName) : null;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setIsVideoPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  if (!hasEnteredSite) {
    return (
      <>
        <audio ref={audioRef} src="/Miss%20Universe%20Master.wav" loop preload="auto" />
        <div className="min-h-screen bg-[#050b18] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Intro Background (Optional: can just be black, or re-use gold particles) */}
        <GoldCanvas />

        {isVideoPlaying ? (
          <div className="absolute inset-0 z-50 bg-[#050b18] flex items-center justify-center">
            <video
              src="/invitation-video.mp4"
              autoPlay
              playsInline
              muted
              onEnded={() => setHasEnteredSite(true)}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setHasEnteredSite(true)}
              className="absolute bottom-8 right-8 text-white/70 hover:text-[#d4af37] transition-colors z-[60] bg-black/60 hover:bg-black/80 px-6 py-3 rounded-full flex items-center gap-2 font-cinzel font-semibold tracking-wider text-sm sm:text-base border border-transparent hover:border-[#d4af37]/50 backdrop-blur-sm"
              aria-label="Skip Video"
            >
              SKIP INTRO
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
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
              onClick={startExperience}
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
      </>
    );
  }

  return (
    <>
      <audio ref={audioRef} src="/Miss%20Universe%20Master.wav" loop preload="auto" />
      <div className="min-h-screen bg-[#030713] text-[#f4efe6] relative overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#fae084]">
      {/* Subtle gold particles background */}
      <GoldCanvas />
      
      {/* Elegant flying butterflies */}
      <Butterflies />

      {/* Navigation: HOME | ABOUT | EVENT | GALLERY | CONTACT */}
      <Navbar />

      {/* Main Content Sections: strictly only given information */}
      <main className="relative z-10">
        <Hero />
        <PersonalizedGreeting guestName={guestName} />
        <InvitationCard guestName={guestName} />
        <EventDetailsCards />
        <AboutSection />
        <CelebritiesSection />
        <EventExperience />
        <ContactSection />
      </main>

      <Footer />
    </div>
    </>
  );
}
