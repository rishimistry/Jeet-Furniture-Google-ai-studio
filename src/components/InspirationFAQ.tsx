import React, { useState } from 'react';
import { Sparkles, HelpCircle, ChevronDown, CheckCircle, Mail, Image as ImageIcon } from 'lucide-react';
import { DESIGN_INSPIRATIONS, INITIAL_FAQS } from '../data/initialData';

export default function InspirationFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [subEmail, setSubEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubSuccess(true);
    setTimeout(() => {
      setSubEmail('');
      setSubSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="inspiration-view-root">
      
      {/* Visual Mood Board Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs tracking-[0.3em] font-mono text-[#b89467] uppercase block">
          CREATIVE ATMOSPHERE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-none">
          Design <span className="italic">Inspiration</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#b89467] mx-auto my-4" />
        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
          Unlock your imagination. Review the macro photography, architectural angles, and timber palettes handpicked by the founders of Jeet Furniture.
        </p>
      </div>

      {/* Mosaic Design Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {DESIGN_INSPIRATIONS.map((item) => (
          <div 
            key={item.id}
            onClick={() => setLightboxImg(item.image)}
            className="group relative h-80 rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] cursor-pointer hover:border-[#b89467] transition-all"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark mask gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            {/* Float details */}
            <div className="absolute bottom-0 left-0 w-full p-6 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[9px] tracking-widest font-mono text-[#b89467] uppercase block">{item.tag}</span>
              <h3 className="font-serif text-base text-white font-medium">{item.title}</h3>
              <span className="text-[10px] text-gray-400 font-mono flex items-center space-x-1 uppercase">
                <ImageIcon className="w-3 h-3 text-[#b89467] inline" />
                <span>Trigger Lightbox Zoom</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Elegant Faq accordion and Newsletter alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* FAQ Left Block */}
        <div className="space-y-8">
          <div>
            <span className="text-xs tracking-[0.3em] font-mono text-[#b89467] uppercase block mb-2">RESOLVING AMBIGUITY</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
              Aman & Architect FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {INITIAL_FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-[#0c0c0c] border border-[#1f1f1f] rounded overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-[#b89467] transition-colors"
                  >
                    <span className="font-serif text-base font-light pr-4">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#b89467] shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-[#151515] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Newsletter Capture Form Right Block */}
        <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-8 sm:p-12 space-y-6">
          <div className="bg-[#171717] p-3 rounded-full w-max border border-[#2b2b2b]">
            <Sparkles className="w-6 h-6 text-[#b89467]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-white font-medium">The Jeet Gazette</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We periodically issue print catalogs, timber sourcing updates, private preview opportunities for new collections, and design essays authored by our directors. No spam, ever.
            </p>
          </div>

          {subSuccess ? (
            <div className="bg-[#122213] border border-[#1e3c20] text-[#5cb85c] rounded p-4 text-center space-y-1">
              <span className="text-sm font-semibold block">Aesthetic Subscription Completed!</span>
              <p className="text-[11px] text-gray-300 font-light">
                Your email coordinates have been prioritized. Our next design volume will land in your coordinates folder of Choice.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-500 mb-1.5">Email Destination</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input 
                    type="email"
                    required
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="e.g. premium@concierge.com"
                    className="w-full bg-[#171717] hover:bg-[#1a1a1a] focus:bg-[#1f1f1f] transition-colors rounded border border-[#2d2d2d] focus:border-[#b89467] py-3.5 pl-11 pr-4 text-xs font-mono text-gray-300 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#b89467] hover:bg-[#cca574] text-black font-semibold tracking-widest text-[10px] uppercase font-mono rounded transition-colors"
              >
                Join Private Mailing List
              </button>
            </form>
          )}

          {/* Social Proof */}
          <div className="pt-4 border-t border-[#171717] flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>Join 3,400+ Interior Specialists</span>
            <span>Est. Delivery: Once per month</span>
          </div>

        </div>

      </div>

      {/* Lightbox zoomed modal layout */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <img 
            src={lightboxImg} 
            alt="Expanded visual perspective"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain border border-[#444]"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

    </div>
  );
}
