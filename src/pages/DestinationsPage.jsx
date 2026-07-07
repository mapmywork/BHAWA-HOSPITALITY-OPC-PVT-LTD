import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Download, Award } from 'lucide-react';
import { DESTINATIONS, STATES_SERVED } from '../data/destinations';

const DestinationsPage = ({ onOpenDestinationModal, onOpenPartnerModal }) => {
  const [selectedState, setSelectedState] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredDestinations = selectedState === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.state.includes(selectedState));

  return (
    <>
      <Helmet>
        <title>Sacred Pilgrimage Circuits | Bhawa Hospitality B2B DMC</title>
        <meta name="description" content="Explore our white-label B2B pilgrimage circuits across Uttar Pradesh (Kashi, Ayodhya, Prayagraj), Bihar (Gaya), Tamil Nadu (Madurai, Rameshwaram), and Telangana (Tirupati)." />
      </Helmet>

      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 border-b-4 border-[#C89B3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>9+ Major Indian Pilgrimage Circuits</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Sacred <span className="text-gradient-gold">Destination Circuits</span>
          </h1>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            Direct ground handling across India’s most venerated spiritual centers. We provide guaranteed room blocks, VIP temple darshan protocol, and white-labeled transport logistics.
          </p>
        </div>
      </section>

      {/* State Filter & Circuit Display */}
      <section className="py-20 bg-[#FAFAF8] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            <button
              onClick={() => setSelectedState('All')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                selectedState === 'All'
                  ? 'bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white shadow-xl scale-105 border-2 border-[#C89B3C]'
                  : 'bg-white text-[#0F172A] hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All States ({DESTINATIONS.length} Circuits)
            </button>

            {['Uttar Pradesh', 'Bihar', 'Tamil Nadu', 'Telangana'].map((stName) => (
              <button
                key={stName}
                onClick={() => setSelectedState(stName)}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  selectedState === stName
                    ? 'bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white shadow-xl scale-105 border-2 border-[#C89B3C]'
                    : 'bg-white text-[#0F172A] hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {stName}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30"></div>
                    
                    <span className="absolute top-4 left-4 bg-[#0F172A]/80 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wide">
                      {dest.state}
                    </span>

                    <span className="absolute top-4 right-4 bg-[#F97316] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {dest.code}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-[11px] text-[#C89B3C] font-semibold">{dest.circuit}</div>
                      <h3 className="font-playfair text-2xl font-bold group-hover:text-[#F97316] transition-colors">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider">B2B VIP Protocol Highlights:</div>
                      {dest.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>

                    {/* B2B Feature Box */}
                    <div className="bg-[#0F172A]/5 border-l-3 border-[#C89B3C] p-3 rounded-r-xl text-xs text-gray-600">
                      <strong className="block font-bold text-[#0F172A] mb-0.5">Ground Guarantee:</strong>
                      {dest.b2bFeatures}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-3 border-t border-gray-100 flex items-center justify-between gap-3 mt-4 bg-gray-50/50">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{dest.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenDestinationModal(dest)}
                      className="px-3.5 py-2 bg-white hover:bg-gray-100 text-[#0F172A] border border-gray-300 font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      View Itinerary
                    </button>
                    <button
                      onClick={() => onOpenPartnerModal(`${dest.name} Net Tariff`)}
                      className="px-4 py-2 bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-[#0F172A] font-extrabold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Net Rates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Download Brochure Box */}
          <div className="mt-20 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#C89B3C]/40 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 text-[#C89B3C] px-3 py-1 rounded-full text-xs font-bold uppercase">
                <Download className="w-3.5 h-3.5" />
                <span>Trade Partner Downloads</span>
              </div>
              <h3 className="font-playfair text-3xl font-extrabold">
                Download Complete B2B Pilgrimage Circuit Catalog
              </h3>
              <p className="text-sm text-gray-300 max-w-xl">
                Get white-labeled PDF itineraries, net hotel tariff matrices, and transport rate sheets across UP, Bihar, TN, and TS.
              </p>
            </div>

            <button
              onClick={() => {
                alert("Thank you! Downloading Bhawa Hospitality B2B Trade Catalog & Tariff Matrix (PDF)...");
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-[#0F172A] font-black text-base rounded-2xl shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Download B2B Trade Catalog</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default DestinationsPage;
