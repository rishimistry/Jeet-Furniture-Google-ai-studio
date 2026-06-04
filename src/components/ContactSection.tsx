import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, Calendar, 
  MessageSquare, Users, Sparkles, AlertCircle, Share2, 
  ExternalLink 
} from 'lucide-react';
import { Consultation } from '../types';

interface ContactSectionProps {
  onAddConsultation: (consultation: Omit<Consultation, 'id' | 'status'>) => void;
  contactDetails: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    hours: string;
  };
}

export default function ContactSection({ onAddConsultation, contactDetails }: ContactSectionProps) {
  // Appointment Form state
  const [conDate, setConDate] = useState('');
  const [conTime, setConTime] = useState('');
  const [conName, setConName] = useState('');
  const [conEmail, setConEmail] = useState('');
  const [conPhone, setConPhone] = useState('');
  const [conService, setConService] = useState('Home Interiors');
  const [conMessage, setConMessage] = useState('');
  const [conSuccess, setConSuccess] = useState(false);

  // General Message contact form state
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgSuccess, setMsgSuccess] = useState(false);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conName || !conEmail || !conPhone || !conDate || !conTime) return;

    onAddConsultation({
      date: conDate,
      time: conTime,
      name: conName,
      email: conEmail,
      phone: conPhone,
      serviceType: conService,
      message: conMessage || `Scheduled ${conService} scoping brief.`
    });

    setConSuccess(true);
    setTimeout(() => {
      setConDate('');
      setConTime('');
      setConName('');
      setConEmail('');
      setConPhone('');
      setConMessage('');
      setConSuccess(false);
    }, 4500);
  };

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgEmail || !msgText) return;
    setMsgSuccess(true);
    setTimeout(() => {
      setMsgName('');
      setMsgEmail('');
      setMsgText('');
      setMsgSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact-view-root">
      
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs tracking-[0.3em] font-mono text-[#C5A059] uppercase block font-bold">
          COMMUNICATION INTERFACE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#1a1a1a] tracking-tight leading-none font-medium">
          Contact & <span className="italic text-[#C5A059]">Booking</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto my-4" />
        <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
          Initialize connection. Reserve your private CAD space consult, call our Andheri headquarters directly, or initiate Instant WhatsApp Concierge chats below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Contact Coordinates Panel: Col span 5 */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Stats list */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif text-xl font-normal text-[#1a1a1a] border-b border-gray-100 pb-4">
              Headquarters Coordinates
            </h3>

            <div className="space-y-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-2.5 rounded border border-gray-100 shrink-0 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#C5A059] uppercase tracking-widest mb-1 font-bold">HQ Address</span>
                  <p className="text-gray-700 font-light leading-relaxed">{contactDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-2.5 rounded border border-gray-100 shrink-0 text-[#C5A059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#C5A059] uppercase tracking-widest mb-1 font-bold">Direct Voice Line</span>
                  <a href={`tel:${contactDetails.phone}`} className="text-[#C5A059] hover:underline font-mono text-base font-semibold block">{contactDetails.phone}</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-2.5 rounded border border-gray-100 shrink-0 text-[#C5A059]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#C5A059] uppercase tracking-widest mb-1 font-bold">Secure Email Inbox</span>
                  <a href={`mailto:${contactDetails.email}`} className="text-gray-700 font-light hover:text-[#C5A059] font-mono transition-colors block">{contactDetails.email}</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-2.5 rounded border border-gray-100 shrink-0 text-[#C5A059]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#C5A059] uppercase tracking-widest mb-1 font-bold">Business Hours</span>
                  <p className="text-gray-700 font-light leading-relaxed">{contactDetails.hours}</p>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp Button */}
            <div className="pt-4 border-t border-gray-100">
              <a 
                href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-xs uppercase tracking-widest font-bold rounded transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Whatsapp Concierge</span>
              </a>
            </div>

          </div>

          {/* Interactive Mock Map coordinates panel */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden h-72 shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70 animate-pulse" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-bold">
                  Operational GPS Active
                </span>
                <h4 className="font-serif text-lg text-[#1a1a1a] mt-2">Interactive Blueprint Map</h4>
                <p className="text-xs text-gray-500 font-light mt-1">Andheri West Design Hub &bull; Zone 4</p>
              </div>

              {/* Pinpoint diagram */}
              <div className="relative border-t border-[dashed] border-gray-200 py-4 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 animate-ping absolute" />
                <div className="w-8 h-8 rounded-full bg-[#C5A059] border-4 border-white flex items-center justify-center relative z-10 shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                
                <div className="absolute right-4 text-right">
                  <span className="text-[10px] text-gray-400 font-mono block">LAT: 19.1136&deg; N</span>
                  <span className="text-[10px] text-gray-400 font-mono block">LONG: 72.8697&deg; E</span>
                </div>
              </div>

              {/* External Redirect Direction */}
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] hover:underline flex items-center space-x-1 font-bold"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Dynamic Booking & Consultation form: Col span 7 */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-8 sm:p-10 space-y-8 shadow-sm">
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-6">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-widest block font-bold">PRIVATE RESERVATIONS</span>
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-medium font-serif">Bespoke CAD Consultation</h2>
            </div>
            <Sparkles className="w-5 h-5 text-[#C5A059] hidden sm:block animate-pulse" />
          </div>

          {conSuccess ? (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg p-8 text-center space-y-4">
              <span className="font-serif text-xl font-bold block">Appointment Logged Successfully!</span>
              <p className="text-xs text-gray-600 font-light leading-relaxed max-w-md mx-auto">
                Thank you. Your consultation ticket has been logged into our local registry database. Our Senior Architect will analyze your requested slot <strong>({conDate} at {conTime})</strong> and verify availability within 2 business hours.
              </p>
              <div className="text-[11px] text-gray-500 font-mono italic">
                A verification link has been piped toward {conEmail}.
              </div>
            </div>
          ) : (
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">My Full Name</label>
                  <input 
                    type="text"
                    required
                    value={conName}
                    onChange={(e) => setConName(e.target.value)}
                    placeholder="e.g. Yash Chopra"
                    className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Phone / Mobile</label>
                  <input 
                    type="tel"
                    required
                    value={conPhone}
                    onChange={(e) => setConPhone(e.target.value)}
                    placeholder="e.g. +91 98200 45678"
                    className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Secure Email Destination</label>
                <input 
                  type="email"
                  required
                  value={conEmail}
                  onChange={(e) => setConEmail(e.target.value)}
                  placeholder="e.g. yash@choprafilms.com"
                  className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Desired Session Date</label>
                  <input 
                    type="date"
                    required
                    value={conDate}
                    onChange={(e) => setConDate(e.target.value)}
                    className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Desired Time Frame</label>
                  <input 
                    type="time"
                    required
                    value={conTime}
                    onChange={(e) => setConTime(e.target.value)}
                    className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Scope of Project</label>
                  <select
                    value={conService}
                    onChange={(e) => setConService(e.target.value)}
                    className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all"
                  >
                    <option value="Home Interiors">Home Interiors</option>
                    <option value="Modular Kitchens">Modular Kitchens</option>
                    <option value="Bespoke Wardrobes">Bespoke Wardrobes</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Office Architecture">Office Architecture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-2 font-bold select-none">Describe Your Spatial Requirements</label>
                <textarea 
                  rows={4}
                  value={conMessage}
                  onChange={(e) => setConMessage(e.target.value)}
                  placeholder="Describe your design aesthetics, architectural layouts, and ceiling parameters..."
                  className="w-full bg-gray-50 hover:bg-gray-100/70 text-xs font-mono text-[#1a1a1a] rounded border border-gray-200 focus:border-[#C5A059] focus:bg-white py-3 px-4 outline-none transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#121212] hover:bg-[#252525] text-white font-bold tracking-widest text-xs uppercase font-mono rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Lock Down Appointment Space</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
