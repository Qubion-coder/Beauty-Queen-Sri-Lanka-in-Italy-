import React, { useState } from 'react';
import { Copy, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';
import { GoldCanvas } from './GoldCanvas';

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  
  const [generatedLink, setGeneratedLink] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [displayNameOutput, setDisplayNameOutput] = useState('');

  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleGenerate = () => {
    if (!guestName.trim()) return;

    let dName = '';
    let msgName = '';

    if (prefix === 'Family') {
      dName = `${guestName.trim()} and Family`;
      msgName = `${guestName.trim()} and Family`;
    } else if (prefix === 'Dear') {
      dName = guestName.trim();
      msgName = guestName.trim();
    } else {
      dName = `${prefix} ${guestName.trim()}`;
      msgName = dName;
    }

    const baseURL = window.location.origin;
    const link = `${baseURL}/${encodeURIComponent(dName)}`;

    const message = `Dear ${msgName} ❤️

With great pleasure, we warmly invite you to join us for the prestigious Miss & Mrs Beauty Queen Sri Lanka in Italy 2026, a celebration of beauty, elegance, culture, and excellence.

Please view our invitation and all event details through the link below 🌐:

${link}

Your presence would truly make this special occasion even more memorable, and we would be honored to have you celebrate this remarkable event with us.

With warm regards,
❤️ Miss & Mrs Beauty Queen Sri Lanka in Italy 2026
by Imaya Liyanage`;

    setDisplayNameOutput(dName);
    setGeneratedLink(link);
    setGeneratedMessage(message);
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const copyToClipboard = async (text: string, isLink: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isLink) {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedMessage(true);
        setTimeout(() => setCopiedMessage(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openWhatsApp = () => {
    if (!generatedMessage) return;
    const url = `https://wa.me/?text=${encodeURIComponent(generatedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#030713] text-[#f4efe6] relative overflow-x-hidden">
      <GoldCanvas />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src="/logo.png" 
            alt="Miss & Mrs Beauty Queen Logo" 
            className="w-48 sm:w-64 h-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          />
          <h1 className="font-cinzel text-2xl sm:text-3xl text-white font-bold tracking-widest uppercase">
            Invitation Portal
          </h1>
          <p className="text-[#d4af37] tracking-[0.2em] font-light mt-2 text-sm sm:text-base">
            Generate Personalized Links
          </p>
        </div>

        {/* Generator Card */}
        <div className="w-full bg-[#0a1930]/80 backdrop-blur-md rounded-2xl border border-[#d4af37]/30 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1">
              <label className="block text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-2 font-semibold">Prefix</label>
              <select 
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full bg-[#030713] border border-[#d4af37]/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Mr. & Mrs.">Mr. & Mrs.</option>
                <option value="Family">Family</option>
                <option value="Dear">Dear</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-2 font-semibold">Guest Name</label>
              <input 
                type="text" 
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full bg-[#030713] border border-[#d4af37]/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button
              onClick={handleGenerate}
              disabled={!guestName.trim()}
              className="px-8 py-3 bg-[#d4af37] hover:bg-[#fae084] text-black font-cinzel font-bold tracking-widest uppercase transition-colors rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Link
            </button>
          </div>

          {/* Results Area */}
          <div className={`transition-all duration-500 overflow-hidden ${generatedLink ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mb-8" />
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-2 font-semibold">Generated Link</label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-[#030713] border border-[#d4af37]/30 rounded-lg px-4 py-3 font-mono text-sm sm:text-base text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {generatedLink}
                  </div>
                  <button
                    onClick={() => copyToClipboard(generatedLink, true)}
                    className="flex-shrink-0 p-3 bg-[#0d2252] hover:bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-lg transition-colors text-[#d4af37] flex items-center justify-center min-w-[3rem]"
                    title="Copy Link"
                  >
                    {copiedLink ? <CheckCircle size={20} className="text-green-400" /> : <ExternalLink size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-2 font-semibold flex justify-between items-end">
                  <span>Message Preview</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(generatedMessage, false)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#0d2252] hover:bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-md transition-colors text-xs text-[#d4af37]"
                    >
                      {copiedMessage ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
                      {copiedMessage ? 'COPIED!' : 'COPY MESSAGE'}
                    </button>
                    <button
                      onClick={openWhatsApp}
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-900/40 hover:bg-green-800/60 border border-green-500/50 rounded-md transition-colors text-xs text-green-400"
                    >
                      <MessageSquare size={14} />
                      WHATSAPP
                    </button>
                  </div>
                </label>
                <div className="w-full bg-[#030713] border border-[#d4af37]/30 rounded-lg p-5 font-sans text-sm sm:text-base text-slate-300 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {generatedMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
