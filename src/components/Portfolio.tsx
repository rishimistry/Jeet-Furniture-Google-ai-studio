import React, { useState } from 'react';
import { SlidersHorizontal, MapPin, Calendar, User, Eye, X, Compass, ChevronRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
}

const PROJECT_CATEGORIES = [
  'All Transformations',
  'Luxury Residence',
  'Modern Kitchens',
  'Elite Interiors'
];

export default function Portfolio({ projects }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Transformations');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Before & After Interactive Slider Value State (0 to 100)
  // Store an object map of slider values per project ID: { 'pr1': 50, 'pr2': 50 }
  const [sliders, setSliders] = useState<Record<string, number>>(() => {
    const initialSliders: Record<string, number> = {};
    projects.forEach(p => {
      initialSliders[p.id] = 50; // default to half split
    });
    return initialSliders;
  });

  const handleSliderChange = (projId: string, val: number) => {
    setSliders(prev => ({
      ...prev,
      [projId]: val
    }));
  };

  const filteredProjects = projects.filter(proj => {
    return selectedCategory === 'All Transformations' || proj.category === selectedCategory;
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="portfolio-view-root">
      
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs tracking-[0.3em] font-mono text-[#b89467] uppercase block">
          CASE STUDIES
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-none">
          Transformation <span className="italic">Gallery</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#b89467] mx-auto my-4" />
        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
          Slide the custom brass headers back and forth on each card below to visually experience the premium physical before-and-after transformations handled by Jeet Furniture.
        </p>
      </div>

      {/* Categories Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {PROJECT_CATEGORIES.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-[10px] tracking-widest font-mono uppercase rounded transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#b89467] text-black font-semibold'
                : 'bg-[#0d0d0d] text-gray-400 hover:text-white border border-[#212121] hover:border-gray-700'
            }`}
          >
            {cat.replace(' Transformations', '')}
          </button>
        ))}
      </div>

      {/* Interactive Before-After Slider Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {filteredProjects.map((proj) => {
          const sliderVal = sliders[proj.id] ?? 50;
          return (
            <div 
              key={proj.id}
              className="bg-[#0c0c0c] border border-[#1f1f1f] hover:border-gray-700 transition-colors rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xl"
            >
              
              {/* INTERACTIVE BEFORE-AFTER SLIDER CANVAS */}
              <div className="relative h-72 sm:h-80 rounded-lg overflow-hidden select-none bg-[#111]">
                
                {/* AFTER IMAGE (Background - fully visible on right) */}
                <img 
                  src={proj.imageAfter} 
                  alt="After design"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* AFTER BADGE - bottom right */}
                <div className="absolute bottom-3 right-3 z-10 bg-black/60 border border-emerald-800 text-emerald-400 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">
                  Bespoke After
                </div>

                {/* BEFORE IMAGE (Foreground - cropped from left using slider value) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderVal}%` }}
                >
                  <img 
                    src={proj.imageBefore} 
                    alt="Before design"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BEFORE BADGE - bottom left */}
                <div className="absolute bottom-3 left-3 z-10 bg-black/60 border border-orange-950 text-orange-400 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">
                  Raw Before
                </div>

                {/* GOLD DIVIDER DIVISION BAR (Positioned at sliderVal%) */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-[#b89467] z-20 pointer-events-none"
                  style={{ left: `${sliderVal}%` }}
                >
                  {/* Brass handling anchor node */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111] border-2 border-[#b89467] flex items-center justify-center shadow-lg">
                    <SlidersHorizontal className="w-3 h-3 text-[#b89467]" />
                  </div>
                </div>

                {/* Invisible native range input overlaying the image to handle drag moves safely */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderVal} 
                  onChange={(e) => handleSliderChange(proj.id, Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                />

              </div>

              {/* Informational Text summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="uppercase tracking-widest text-[#b89467]">{proj.category}</span>
                  <span>{proj.year} Case</span>
                </div>
                
                <h3 className="font-serif text-xl font-medium text-white">{proj.name}</h3>
                <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* View Deep Specs Case Study button */}
              <button
                onClick={() => setSelectedProject(proj)}
                className="w-full py-2.5 bg-[#171717] hover:bg-[#b89467] text-gray-300 hover:text-black font-mono text-[10px] tracking-widest uppercase rounded border border-[#2b2b2b] hover:border-[#b89467] transition-all flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>Read Technical Specs</span>
              </button>

            </div>
          );
        })}
      </div>

      {/* Extra Luxury Quote Segment */}
      <div className="bg-[#0d0d0d] border border-[#212121] rounded-xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <blockquote className="font-serif text-lg sm:text-xl italic text-gray-300 font-light leading-relaxed">
          &ldquo;Simple spaces are converted into timeless investments. We blend heavy architectural joinery with precision lighting grids to unlock real value.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center space-x-2 mt-4 text-[#b89467]">
          <span className="h-[1px] w-8 bg-[#b89467]" />
          <span className="text-[10px] font-mono tracking-widest uppercase">JEET ARCHITECTURAL BUREAU</span>
          <span className="h-[1px] w-8 bg-[#b89467]" />
        </div>
      </div>

      {/* Case Study Details Modal overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0c0c0c] border border-[#2d2d2d] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Closer */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#171717] hover:bg-red-950 text-gray-400 hover:text-white border border-[#222222] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 sm:p-10">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#b89467] uppercase block">{selectedProject.category} Case Study</span>
                  <h2 className="font-serif text-3xl font-normal text-white mt-1">{selectedProject.name}</h2>
                </div>

                {/* Dual Image Preview of result */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded overflow-hidden h-60 bg-[#171717]">
                    <img 
                      src={selectedProject.imageBefore} 
                      alt="Before transformation"
                      className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="bg-black/60 text-orange-400 text-[8px] font-mono uppercase px-2 py-1 select-none text-center -mt-6 relative z-10">
                      Before State
                    </div>
                  </div>
                  <div className="rounded overflow-hidden h-60 bg-[#171717]">
                    <img 
                      src={selectedProject.imageAfter} 
                      alt="After transformation"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="bg-[#b89467] text-black font-semibold text-[8px] font-mono uppercase px-2 py-1 select-none text-center -mt-6 relative z-10">
                      Installed Masterpiece
                    </div>
                  </div>
                </div>

                {/* Metadata details block */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#111] p-4 rounded border border-[#212121] text-xs font-mono">
                  <div>
                    <span className="block text-gray-500 uppercase text-[9px]">Distinguished Client</span>
                    <span className="block text-gray-100 font-medium truncate">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 uppercase text-[9px]">Location coordinates</span>
                    <span className="block text-gray-100 font-medium truncate">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 uppercase text-[9px]">Handover Season</span>
                    <span className="block text-[#b89467] font-medium">{selectedProject.year}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 uppercase text-[9px]">Engineering Team</span>
                    <span className="block text-gray-100 font-medium">Jeet Elite Bureau</span>
                  </div>
                </div>

                {/* Structured Text: Description -> Challenge -> Solution */}
                <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed text-gray-300">
                  <div>
                    <h4 className="font-serif text-base text-white tracking-tight flex items-center space-x-2 mb-2">
                      <Compass className="w-4 h-4 text-[#b89467]" />
                      <span>Conceptual Vision Overview</span>
                    </h4>
                    <p>{selectedProject.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1a1a1a]">
                    <div className="bg-[#171311] border border-orange-950/40 p-4 rounded-lg">
                      <h5 className="font-mono text-xs text-[#cca574] uppercase tracking-widest mb-2 font-semibold">The Architect&apos;s Challenge</h5>
                      <p className="text-xs text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                    </div>

                    <div className="bg-[#121a13] border border-emerald-950/40 p-4 rounded-lg">
                      <h5 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2 font-semibold">The Custom Engineered Solution</h5>
                      <p className="text-xs text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
