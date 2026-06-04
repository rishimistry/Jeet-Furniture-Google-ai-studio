import React, { useState } from 'react';
import { Sofa, Menu, X, Lock, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (loggedIn: boolean) => void;
  contactPhone: string;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
  contactPhone
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Residence' },
    { id: 'catalog', label: 'Bespoke Catalog' },
    { id: 'portfolio', label: 'Exquisite Projects' },
    { id: 'inspiration', label: 'Design Inspiration' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }}
          >
            <div className="bg-[#121212] p-2 rounded transition-transform duration-500 group-hover:rotate-12">
              <Sofa className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="font-serif text-xl font-light tracking-[0.16em] text-[#1a1a1a] block uppercase">
                JEET
              </span>
              <span className="text-[8px] tracking-[0.25em] font-mono text-[#C5A059] uppercase block -mt-1 font-bold">
                Luxury Furniture
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`relative py-2 text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${
                  activeTab === item.id 
                    ? 'text-[#C5A059] font-semibold' 
                    : 'text-gray-500 hover:text-[#1a1a1a]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] transform origin-left transition-all duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Action Button & Admin Fast Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 text-xs font-mono text-gray-600 hover:text-[#C5A059] transition-all bg-gray-50 px-4 py-2 border border-gray-200 rounded"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{contactPhone}</span>
            </a>

            {/* Admin Portal Fast Access Button */}
            <button
              onClick={() => {
                setActiveTab('admin');
                setIsMenuOpen(false);
              }}
              className={`flex items-center space-x-1.5 px-4 py-2 text-xs tracking-wider uppercase font-mono rounded border transition-all duration-300 ${
                activeTab === 'admin'
                  ? 'bg-[#121212] text-[#C5A059] border-[#121212]'
                  : isAdminLoggedIn
                    ? 'bg-[#f0f9f1] text-[#2e7d32] border-[#c8e6c9]'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-[#C5A059]'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'Admin Active' : 'Admin'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setActiveTab('admin')}
              className={`p-2 rounded border ${
                activeTab === 'admin'
                  ? 'text-[#C5A059] border-[#C5A059]'
                  : 'text-gray-500 border-gray-200'
              }`}
            >
              <Lock className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded text-gray-500 hover:text-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

         </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fdfcfb] border-t border-gray-200 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded font-mono text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? 'bg-gray-100/80 text-[#C5A059] border-l-2 border-[#C5A059] font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
            <a 
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-3 px-3 py-2.5 text-sm font-mono text-gray-600"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{contactPhone}</span>
            </a>
            
            <button
              onClick={() => {
                setActiveTab('admin');
                setIsMenuOpen(false);
              }}
              className={`flex items-center justify-center space-x-2 w-full py-3 text-sm tracking-wider uppercase font-mono rounded border transition-all ${
                activeTab === 'admin'
                  ? 'bg-[#121212] text-[#C5A059] border-[#121212]'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>{isAdminLoggedIn ? 'Access Admin Area' : 'Admin Area Log-in'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
