import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block mb-2">
          CONTACT
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl text-white font-bold tracking-tight">
          RSVP &amp; Inquiries
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
      </div>

      <div className="rounded-3xl royal-card p-8 sm:p-10 border border-[#d4af37]/35 shadow-2xl">
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-cinzel text-lg text-white font-bold">
              Thank You
            </h3>
            <p className="text-xs text-slate-300">
              Your inquiry has been received.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#fae084] mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#040915] border border-[#d4af37]/35 text-white text-sm focus:outline-none focus:border-[#fae084]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#fae084] mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#040915] border border-[#d4af37]/35 text-white text-sm focus:outline-none focus:border-[#fae084]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#fae084] mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#040915] border border-[#d4af37]/35 text-white text-sm focus:outline-none focus:border-[#fae084]"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold tracking-wider uppercase text-[#050b18] bg-gold-gradient rounded-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
