import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { DESTINATIONS, STATES_SERVED } from '../../data/destinations';

const DestinationGrid = ({ onOpenDestinationModal, onOpenPartnerModal }) => {
  const [selectedState, setSelectedState] = useState('All');

  const filteredDestinations = selectedState === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.state.includes(selectedState));

  return (
    <section id="destinations" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>4 Major Indian States Covered</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Sacred <span className="text-gradient-gold">B2B Pilgrimage Circuits</span>
          </h2>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg font-normal">
            We operate direct ground handling teams across India's most venerated spiritual centers. Explore our circuit itineraries and request confidential trade rates.
          </p>
        </div>

        {/* State Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            onClick={() => setSelectedState('All')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
              selectedState === 'All'
                ? 'bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-[#0F172A] shadow-lg scale-105'
                : 'bg-[#1E293B]/80 text-white/80 hover:text-white hover:bg-[#1E293B] border border-white/10'
            }`}
          >
            All Circuits ({DESTINATIONS.length})
          </button>

          {['Uttar Pradesh', 'Bihar', 'Tamil Nadu', 'Telangana'].map((stateName) => (
            <button
              key={stateName}
              onClick={() => setSelectedState(stateName)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                selectedState === stateName
                  ? 'bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-[#0F172A] shadow-lg scale-105'
                  : 'bg-[#1E293B]/80 text-white/80 hover:text-white hover:bg-[#1E293B] border border-white/10'
              }`}
            >
              {stateName}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#1E293B]/80 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C89B3C]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Hero */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-black/30"></div>
                    
                    {/* State Badge */}
                    <span className="absolute top-4 left-4 bg-[#0F172A]/80 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wide">
                      {dest.state}
                    </span>

                    {/* Circuit Code */}
                    <span className="absolute top-4 right-4 bg-[#F97316] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {dest.code}
                    </span>

                    {/* Title inside Image bottom */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-[11px] text-[#FAFAF8]/80 font-semibold">{dest.circuit}</div>
                      <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#FAFAF8]/80 leading-relaxed line-clamp-2">
                      {dest.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <div className="text-[11px] font-bold text-[#C89B3C] uppercase tracking-wider">VIP B2B Inclusions:</div>
                      {dest.highlights.slice(0, 2).map((high, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="truncate">{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/10 mt-4">
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{dest.duration}</span>
                  </div>

                  <button
                    onClick={() => onOpenDestinationModal(dest)}
                    className="px-4 py-2 bg-gradient-to-r from-[#F97316] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Circuit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#1E293B]/60 border border-[#C89B3C]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-playfair text-xl sm:text-2xl font-bold text-white">
              Planning a Custom Multi-State Group Pilgrimage?
            </h4>
            <p className="text-xs sm:text-sm text-[#FAFAF8]/70">
              We seamlessly connect Varanasi, Ayodhya, Gaya, and Southern circuits into unified white-label itineraries.
            </p>
          </div>
          <button
            onClick={() => onOpenPartnerModal("Multi-State Custom Pan-India Circuit")}
            className="px-6 py-3.5 bg-[#C89B3C] hover:bg-white text-[#0F172A] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all whitespace-nowrap cursor-pointer"
          >
            Request Custom Group Tariff
          </button>
        </div>

      </div>
    </section>
  );
};

export default DestinationGrid;
