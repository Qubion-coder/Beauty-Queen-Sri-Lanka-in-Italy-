import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbytjYIxe4woVQ9Rut81WOMnCsRumtkcAyI2Biv5IkgETWeevOEWZYBjJlrRtjaE_Kic-Q/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      // Using FormData to easily send the data to Google Apps Script
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        // mode: 'no-cors' is often needed to bypass CORS issues with Google Apps Script
        mode: 'no-cors'
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
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
        {status === 'success' ? (
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
            {status === 'error' && (
              <div className="text-red-400 text-sm text-center mb-4">
                Failed to submit. Please try again.
              </div>
            )}
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
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold tracking-wider uppercase text-[#050b18] bg-gold-gradient rounded-lg hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
