import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LotusCrown } from './LotusCrown';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EVENT', href: '#event' },
    { label: 'GUESTS', href: '#celebrities' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030713]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-4 shadow-lg shadow-black/50'
          : 'bg-[#030713] border-b border-[#d4af37]/10 py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#home" className="flex items-center gap-3 group">
          <LotusCrown size={32} />
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-gold-gradient">
              BEAUTY QUEEN
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#fae084]/80">
              SRI LANKA IN ITALY 2026
            </span>
          </div>
        </a>

        {/* Refined Navigation Menu: HOME | ABOUT | EVENT | GALLERY | CONTACT */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-[0.25em] text-slate-300">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                className="hover:text-[#fae084] transition-colors py-1"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-[#d4af37]/30 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-[#fae084] rounded-lg border border-[#d4af37]/30 bg-[#07132e]/80"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040a18]/98 border-b border-[#d4af37]/30 px-6 py-6 space-y-4 text-center backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-cinzel text-xs tracking-[0.25em] text-slate-200 hover:text-[#fae084] py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
