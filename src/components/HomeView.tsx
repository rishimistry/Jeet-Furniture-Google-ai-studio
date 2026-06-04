import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Sparkles, Star, Award, Compass, Heart, 
  Users, HardHat, ChevronLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Project, Testimonial } from '../types';

interface HomeViewProps {
  onExploreCollection: () => void;
  onBookConsultation: () => void;
  projects: Project[];
  testimonials: Testimonial[];
}

export default function HomeView({
  onExploreCollection,
  onBookConsultation,
  projects,
  testimonials
}: HomeViewProps) {
  // Testimonials state
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  // Stats Counters state
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [craftdesigns, setCraftDesigns] = useState(0);

  useEffect(() => {
    // Smooth ticking timer for numbers
    const timer = setTimeout(() => {
      if (projectCount < 1240) setProjectCount(prev => Math.min(prev + 40, 1240));
      if (clientCount < 890) setClientCount(prev => Math.min(prev + 30, 890));
      if (experienceYears < 18) setExperienceYears(prev => prev + 1);
      if (craftdesigns < 350) setCraftDesigns(prev => Math.min(prev + 12, 350));
    }, 40);

    return () => clearTimeout(timer);
  }, [projectCount, clientCount, experienceYears, craftdesigns]);

  // Next / Prev Testimonial
  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Why Choose Us array
  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-[#b89467]" />,
      title: 'Premium Craftsmanship',
      description: 'Every singular joint is individually engineered by certified generational carpenters using premium wood specimens.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#b89467]" />,
      title: 'Custom Furniture Solutions',
      description: 'Fully matched specifications with customizable CAD blueprint configurations to perfectly match your floorplan.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#b89467]" />,
      title: 'Quality Sourced Materials',
      description: 'Meticulously selected seasoned Indian Teak, American Walnut, and luxury imported brass fixtures.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#b89467]" />,
      title: 'Ultra-Modern Designs',
      description: 'Striking a magnificent balance between timeless mid-century elegance and clean minimalist luxury.'
    },
    {
      icon: <HardHat className="w-6 h-6 text-[#b89467]" />,
      title: 'Professional Installation',
      description: 'Our certified logistics team delivers, positions, fits, and polishes each installation on-site.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#b89467]" />,
      title: 'Excellent Concierge Service',
      description: 'Dedicated premium relationship managers to oversee every step, from initial draft to hand-over delivery.'
    }
  ];

  // Elite Services list
  const eliteServices = [
    {
      name: 'Custom Furniture',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=600',
      tagline: 'Tailored Masterpieces',
      desc: 'Bespoke architectural chairs, credenzas, and state console panels customized precisely with raw timber choice and texture.'
    },
    {
      name: 'Home Interiors',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
      tagline: 'End-to-End Sophistication',
      desc: 'Complete living room blueprint overrides, mood styling, acoustic wooden cladding matrices, and smart ambient configurations.'
    },
    {
      name: 'Modular Kitchens',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
      tagline: 'Precision culinary theaters',
      desc: 'Anti-fingerprint matte slate panels, automated soft-close spice racks, internal organizer blocks, and stunning quartz edges.'
    },
    {
      name: 'Bespoke Wardrobes',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=600',
      tagline: 'Boutique Dressing Retreats',
      desc: 'Floor-to-ceiling sleek metal cabinets, premium leather-lined watch organizers, and glowing built-in movement light tracks.'
    },
    {
      name: 'Office Furniture',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
      tagline: 'Architectural Sanctums of Focus',
      desc: 'Ergonomic executive tables crafted in high-density seasoned timber with hidden magnetic cable paths.'
    },
    {
      name: 'Interior Space Design',
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=600',
      tagline: 'Atmosphere Consulting',
      desc: 'Our senior consultants design detailed 3D files of your residential, hospitality, or corporate architecture.'
    }
  ];

  return (
    <div className="bg-[#fdfcfb]" id="home-view-root">
      
      {/* 1. HERO SECTION (Split layouts matching Sleek Interface) */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden pt-20 border-b border-gray-200 bg-white">
        
        {/* Left Column: Premium Content Case */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 flex flex-col justify-center bg-white z-10 relative">
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-bold font-mono">
                Est. 2008 &bull; Bespoke Excellence
              </span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-[#1a1a1a]"
            >
              Crafting <span className="italic font-normal text-[#C5A059]">Timeless</span> <br />
              Furniture for <br />
              Modern Living
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-md"
            >
              Experience the pinnacle of luxury with bespoke hand-sculpted interior solutions tailored to your unique lifestyle using fine hardwoods and seasoned American Walnut.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button
                onClick={onExploreCollection}
                className="px-8 py-4 bg-[#121212] hover:bg-[#252525] text-white text-[11px] uppercase tracking-widest font-bold font-mono transition-all rounded shadow-md text-center flex items-center justify-center group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={onBookConsultation}
                className="px-8 py-4 border border-gray-200 text-[#1a1a1a] hover:bg-gray-50 bg-white text-[11px] uppercase tracking-widest font-bold font-mono transition-all rounded text-center"
              >
                Book Consultation
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Sleek Visual Segment with Decorative Gold Frame */}
        <div className="w-full lg:w-1/2 relative bg-[#121212] overflow-hidden min-h-[450px] lg:min-h-0 flex items-center justify-center py-16 lg:py-0">
          {/* Accent border frames */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 border-r border-t border-[#C5A059]/30 mt-6 sm:mt-12 mr-6 sm:mr-12"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 border-l border-b border-[#C5A059]/30 mb-6 sm:mb-12 ml-6 sm:ml-12"></div>
          
          {/* Abstract furniture mockup layout */}
          <div className="relative w-[85%] h-[80%] sm:w-[80%] aspect-[4/3] lg:aspect-auto lg:h-[80%] bg-[#221c16] shadow-2xl overflow-hidden group rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="The Autumn Heritage Suite"
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-7000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/75 via-transparent to-transparent"></div>
            
            {/* Texture overlay simulation */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            
            {/* Metadata overlay details */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white z-10 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold font-mono">Featured Autumn Series</p>
              <h3 className="text-2xl sm:text-3xl font-serif font-light">The Autumn Heritage Room</h3>
              <div className="h-[2px] w-12 bg-[#C5A059] transition-all duration-500 group-hover:w-full mt-2"></div>
            </div>
            
            {/* Massive chic floating watermark glyph */}
            <div className="absolute top-0 right-0 p-4 sm:p-8 text-white/5 text-8xl sm:text-9xl font-serif italic select-none">J</div>
          </div>
        </div>

      </section>

      {/* 3. FEATURED COLLECTIONS (Luxury gallery style) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#fdfcfb]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono text-[#C5A059] uppercase block font-bold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#1a1a1a]">
              The Autumn Heritage <br />
              <span className="italic text-[#C5A059]">Collection</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-xs sm:text-sm font-light mt-4 md:mt-0 leading-relaxed">
            Discover a sophisticated range of individual items built in limited quantities. Featuring walnut timbers paired with genuine leather upholstery.
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group relative h-[450px] overflow-hidden rounded bg-white border border-gray-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#C5A059]/40">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" 
                alt="Living room velvet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
              <span className="text-[9px] tracking-[0.25em] text-[#C5A059] font-mono uppercase block font-bold">Living Room Prestige</span>
              <h3 className="font-serif text-xl text-white font-medium">The Verona Sanctuary</h3>
              <p className="text-gray-200 text-xs font-light line-clamp-2">
                Plush foam and double wool fibers framed by polished charcoal timber nodes.
              </p>
              <button 
                onClick={onExploreCollection}
                className="pt-2 text-white font-mono text-[10px] tracking-widest uppercase flex items-center space-x-2 group-hover:text-[#C5A059] transition-colors"
              >
                <span>View Options</span>
                <ArrowRight className="w-3" />
              </button>
            </div>
          </div>

          <div className="group relative h-[450px] overflow-hidden rounded bg-white border border-gray-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#C5A059]/40">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" 
                alt="Bedroom Walnut"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
              <span className="text-[9px] tracking-[0.25em] text-[#C5A059] font-mono uppercase block font-bold">Midnight Boudoir</span>
              <h3 className="font-serif text-xl text-white font-medium">The Nocturne Suite</h3>
              <p className="text-gray-200 text-xs font-light line-clamp-2">
                Uncompromising platform layouts, wireless comfort nodes and backlit headboards.
              </p>
              <button 
                onClick={onExploreCollection}
                className="pt-2 text-white font-mono text-[10px] tracking-widest uppercase flex items-center space-x-2 group-hover:text-[#C5A059] transition-colors"
              >
                <span>View Options</span>
                <ArrowRight className="w-3" />
              </button>
            </div>
          </div>

          <div className="group relative h-[450px] overflow-hidden rounded bg-white border border-gray-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#C5A059]/40">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800" 
                alt="Dining Oak"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
              <span className="text-[9px] tracking-[0.25em] text-[#C5A059] font-mono uppercase block font-bold">Epicurean Gallery</span>
              <h3 className="font-serif text-xl text-white font-medium">The Augusta Travertine</h3>
              <p className="text-gray-200 text-xs font-light line-clamp-2">
                Sculptural fluted pillars supporting polished custom Italian Travertine stone slabs.
              </p>
              <button 
                onClick={onExploreCollection}
                className="pt-2 text-white font-mono text-[10px] tracking-widest uppercase flex items-center space-x-2 group-hover:text-[#C5A059] transition-colors"
              >
                <span>View Options</span>
                <ArrowRight className="w-3 animate-pulse" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES SECTION (Grid with light glow hover effect) */}
      <section className="bg-[#f5f2ed] py-24 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] font-mono text-[#C5A059] uppercase block mb-3 font-bold">CONCIERGE SERVICES</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1a1a1a] tracking-tight">
              Bespoke Spaces & <br />Interior Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eliteServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-gray-200 hover:border-[#C5A059] rounded p-6 transition-all duration-350 hover:shadow-[0_12px_40px_rgba(197,160,89,0.06)]"
              >
                {/* Visual Image container */}
                <div className="relative h-48 overflow-hidden rounded mb-6">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#121212]/5" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block font-bold">
                    {service.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#1a1a1a]">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY JEET FURNITURE (Value Proposition Icons & Detail Columns) */}
      <section className="bg-[#fdfcfb] py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          
          <div className="lg:col-span-1 space-y-6">
            <span className="text-xs tracking-[0.3em] font-mono text-[#C5A059] uppercase block font-bold">
              OUR LUXURY PLEDGE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#1a1a1a] leading-tight">
              Why Discerning <br />Clients Choose <br />Jeet Furniture
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A059]" />
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
              For eighteen years, we have declined mass-market shortcuts. We remain devoted to heavy, premium timbers, honest custom engineering, and transparent personal designer communication.
            </p>
            
            <button 
              onClick={onBookConsultation}
              className="px-6 py-3 bg-[#121212] hover:bg-[#2a2a2a] text-white text-xs font-mono tracking-widest uppercase rounded transition-all duration-300 shadow-sm"
            >
              Consult with Artisans
            </button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-white border border-gray-200 hover:border-[#C5A059] transition-all duration-300 rounded space-y-3 hover:shadow-lg"
              >
                <div className="bg-gray-50 p-2.5 rounded-lg w-max border border-gray-100 text-[#C5A059]">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] font-medium">
                  {benefit.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PROCESS SECTION (Consultation to Delivery in Creme Slate backdrop) */}
      <section className="bg-[#f5f2ed] py-24 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] font-mono text-[#C5A059] uppercase block mb-3 font-bold">THE JOURNEY</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1a1a1a] tracking-tight">
              A Symphony of Execution
            </h2>
            <p className="text-xs text-gray-500 font-light mt-4">
              Behind every finished installment lies a carefully regimented quality management pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Horizontal timeline bridge */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent z-0" />

            <div className="relative z-10 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-white border border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-[#C5A059] shadow-sm">
                01
              </div>
              <h4 className="font-serif text-base text-[#1a1a1a] tracking-tight">1. Consultation</h4>
              <p className="text-[11px] text-gray-500 font-light">Site visit, CAD brief, material alignment and conceptual outline.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-gray-400 hover:text-[#C5A059] transition-all shadow-sm">
                02
              </div>
              <h4 className="font-serif text-base text-[#1a1a1a] tracking-tight">2. Design & render</h4>
              <p className="text-[11px] text-gray-500 font-light">Comprehensive 3D visualizations, wood samples approval, and lock pricing.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-gray-400 hover:text-[#C5A059] transition-all shadow-sm">
                03
              </div>
              <h4 className="font-serif text-base text-[#1a1a1a] tracking-tight">3. Manufacturing</h4>
              <p className="text-[11px] text-gray-500 font-light">Hand-joinery, kiln dried timber seasoning and multi-stage sanding.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-gray-400 hover:text-[#C5A059] transition-all shadow-sm">
                04
              </div>
              <h4 className="font-serif text-base text-[#1a1a1a] tracking-tight">4. Installation</h4>
              <p className="text-[11px] text-gray-500 font-light">Zero-dust delivery, on-site heavy alignment, safety anchor tests.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#C5A059] border border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-white shadow-md">
                05
              </div>
              <h4 className="font-serif text-base text-[#1a1a1a] tracking-tight">5. Final Handover</h4>
              <p className="text-[11px] text-gray-500 font-light">Quality certificates signed, micro-polish layer added, handover complete.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS (Premium layout in off-white) */}
      <section className="bg-[#fdfcfb] py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-white rounded-xl border border-gray-200 p-8 sm:p-16 overflow-hidden shadow-sm">
          
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C5A059]/5 blur-[70px] pointer-events-none" />

          <div className="flex items-center space-x-2 text-[#C5A059] justify-center mb-6">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <p className="font-serif text-lg sm:text-2xl text-gray-700 font-light italic leading-relaxed">
              &ldquo;{testimonials[currentTestimonialIdx].comment}&rdquo;
            </p>

            <div className="flex items-center justify-center space-x-4 pt-6">
              <img 
                src={testimonials[currentTestimonialIdx].avatar} 
                alt={testimonials[currentTestimonialIdx].name}
                className="w-14 h-14 rounded-full border-2 border-[#C5A059] object-cover shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="block font-serif text-base font-medium text-[#1a1a1a]">
                  {testimonials[currentTestimonialIdx].name}
                </span>
                <span className="block text-xs font-mono text-gray-500 tracking-wider">
                  {testimonials[currentTestimonialIdx].role} &mdash; {testimonials[currentTestimonialIdx].company}
                </span>
              </div>
            </div>

            {/* Testimonials Navigation buttons */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2.5 rounded bg-gray-50 hover:bg-[#C5A059] text-gray-400 hover:text-white border border-gray-200 hover:border-[#C5A059] transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-gray-500">
                0{currentTestimonialIdx + 1} / 0{testimonials.length}
              </span>
              <button 
                onClick={nextTestimonial}
                className="p-2.5 rounded bg-gray-50 hover:bg-[#C5A059] text-gray-400 hover:text-white border border-gray-200 hover:border-[#C5A059] transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. IMPACTFUL CALL TO ACTION (CTA) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#fdfcfb]">
        <div className="relative bg-gradient-to-br from-[#1c1c1c] to-[#121212] border border-gray-800 rounded-2xl p-8 sm:p-16 overflow-hidden shadow-2xl">
          
          <div className="absolute top-[20%] right-[10%] w-[400px] h-32 bg-[#C5A059]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#C5A059] font-mono text-[10px] uppercase tracking-widest font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Complimentary design scoping session</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Let&apos;s Design Your <br />
                <span className="text-[#C5A059] italic font-serif">Sanctuary</span> Together
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                Connect with our project managers. Receive personalized wood cladding blueprints, custom sizing plans, and architectural design recommendations without heavy upfront obligations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#e2bb7a] text-black font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded shadow-2xl"
              >
                Book Free Consultation
              </button>
              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-gray-600 hover:border-[#C5A059] font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded"
              >
                View Catalog
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
