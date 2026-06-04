import React from 'react';
import { Sofa, Facebook, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  contactDetails: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}

export default function Footer({ setActiveTab, contactDetails }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#1a1a1a] text-xs font-mono text-gray-500" id="footer-root">
      
      {/* Primary widgets bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand identity */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-[#b89467] p-1.5 rounded text-black">
              <Sofa className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-widest text-white block uppercase">JEET</span>
              <span className="text-[8px] tracking-[0.25em] font-mono text-[#b89467] block -mt-1 uppercase">Luxury Furniture</span>
            </div>
          </div>
          
          <p className="text-[11px] font-light leading-relaxed text-gray-400">
            For eighteen years, we have designed timber layouts without compromise. Merging architectural precision with the finest hardwoods on earth.
          </p>

          <div className="flex items-center space-x-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b89467] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b89467] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b89467] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Directory links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#1c1c1c] pb-2">
            Explore Portfolio
          </h4>
          <ul className="space-y-2 text-[11px] text-gray-400 list-none">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-[#b89467] transition-colors">
                &mdash; Luxury Residences
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-[#b89467] transition-colors">
                &mdash; Bespoke Catalog
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('portfolio')} className="hover:text-[#b89467] transition-colors">
                &mdash; Transformation Cases
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('inspiration')} className="hover:text-[#b89467] transition-colors">
                &mdash; FAQs & Trends
              </button>
            </li>
          </ul>
        </div>

        {/* Categories Niche highlights */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#1c1c1c] pb-2">
            Luxury Niches
          </h4>
          <ul className="space-y-2 text-[11px] text-gray-400 list-none">
            <li>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-[#b89467] transition-colors">
                &bull; Verona Lounges
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-[#b89467] transition-colors">
                &bull; Modular Matte Kitchens
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-[#b89467] transition-colors">
                &bull; Bronze Glass Wardrobes
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-[#b89467] transition-colors">
                &bull; Executive Timber Desks
              </button>
            </li>
          </ul>
        </div>

        {/* Contact coordinates */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#1c1c1c] pb-2">
            Head Office
          </h4>
          <div className="space-y-2 text-[11px] text-gray-400">
            <p className="leading-relaxed font-sans">{contactDetails.address}</p>
            <span className="block pt-1 text-white font-mono">{contactDetails.hours}</span>
            <span className="block text-[#b89467] font-semibold">{contactDetails.phone}</span>
          </div>
        </div>

      </div>

      {/* Sub-bar Copyright & top helper */}
      <div className="bg-[#040404] py-8 border-t border-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[10px] space-y-4 sm:space-y-0">
          <div>
            <span>&copy; 2026 Jeet Furniture Bureau. All Rights Reserved.</span>
            <span className="text-gray-700 ml-2">| Handcrafted Solid Hardwoods Sourcing &bull; Mumbai Office</span>
          </div>

          <button 
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors bg-[#111] px-3.5 py-2 rounded border border-[#222]"
          >
            <span>Back to Zenith</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#b89467]" />
          </button>
        </div>
      </div>

    </footer>
  );
}
