import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle2, ShieldCheck, Award, Sparkles, ArrowRight, Building2 } from 'lucide-react';
import { STATES_SERVED } from '../../data/destinations';

const InteractiveMap = ({ onOpenPartnerModal }) => {
  const [activeStateIndex, setActiveStateIndex] = useState(0);
  const activeState = STATES_SERVED[activeStateIndex];

  return (
    <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Pan-India DMC Network</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Interactive <span className="text-gradient-saffron">Spiritual Circuit Map</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal">
            We maintain physical operational presence across key pilgrim hubs. Select a state below to explore our on-ground handling infrastructure and active destinations.
          </p>
        </div>

        {/* Interactive Layout: Left Tabs / Visual Map Selector, Right Deep Circuit Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive State Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 px-1">
                Select State to Reveal Circuit Hubs:
              </div>
              {STATES_SERVED.map((st, idx) => {
                const isSelected = activeStateIndex === idx;
                return (
                  <motion.div
                    key={st.name}
                    onClick={() => setActiveStateIndex(idx)}
                    whileHover={{ x: 6 }}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white border-[#C89B3C] shadow-xl scale-[1.02]'
                        : 'bg-white text-[#0F172A] border-gray-200/80 hover:border-[#F97316]/50 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-playfair font-bold text-lg ${
                        isSelected 
                          ? 'bg-[#C89B3C] text-[#0F172A]' 
                          : 'bg-[#0F172A]/5 text-[#0F172A]'
                      }`}>
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-playfair font-bold text-lg">
                          {st.name}
                        </h4>
                        <div className={`text-xs font-medium ${isSelected ? 'text-[#C89B3C]' : 'text-gray-500'}`}>
                          {st.destinationsCount} Major Pilgrimage Hubs
                        </div>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isSelected ? 'bg-[#F97316] text-white rotate-90' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom SLA reminder box */}
            <div className="bg-gradient-to-br from-[#F97316]/10 to-[#C89B3C]/20 border border-[#C89B3C]/40 p-4 rounded-2xl flex items-center gap-3 mt-4">
              <ShieldCheck className="w-8 h-8 text-[#16A34A] shrink-0" />
              <div className="text-xs text-[#0F172A]">
                <strong className="block font-bold">Guaranteed On-Ground Escorts</strong>
                All 4 states feature dedicated multi-lingual escort teams representing your brand.
              </div>
            </div>
          </div>

          {/* Right Column: Active State Showcase Box (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#C89B3C]/40 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeState.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                {/* State Hero Image inside box */}
                <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    src={activeState.image}
                    alt={activeState.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Active Circuit Hub
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-[#C89B3C] text-xs font-mono px-3 py-1 rounded-full border border-white/10">
                      Est. 2016 Operations
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-[#C89B3C] font-bold uppercase tracking-widest">State Overview</div>
                    <h3 className="font-playfair text-3xl sm:text-4xl font-extrabold text-white">
                      {activeState.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#FAFAF8]/90 leading-relaxed">
                  {activeState.description}
                </p>

                {/* Destination Circuit List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Featured B2B Pilgrimage Destinations in {activeState.name}:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeState.highlights.map((destName, dIdx) => (
                      <div key={dIdx} className="bg-[#1E293B] border border-white/10 p-3.5 rounded-xl flex items-center gap-2.5 hover:border-[#F97316] transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-white truncate">{destName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hub Support Details */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <Building2 className="w-5 h-5 text-[#C89B3C] shrink-0" />
                    <span>Direct hotel contracting & own fleet deployment in {activeState.name}.</span>
                  </div>

                  <button
                    onClick={() => onOpenPartnerModal(`${activeState.name} Circuit Inquiry`)}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-extrabold text-xs rounded-xl shadow-lg transition-all whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request {activeState.name} Net Tariff</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveMap;
