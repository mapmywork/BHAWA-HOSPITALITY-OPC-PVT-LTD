import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Compass, Handshake, Hotel, Bus, Users, 
  CalendarCheck, Briefcase, Building2, Crown, Sparkles, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../../data/services';

const serviceIconMap = {
  MapPin: MapPin,
  Compass: Compass,
  Handshake: Handshake,
  Hotel: Hotel,
  Bus: Bus,
  Users: Users,
  CalendarCheck: CalendarCheck,
  Briefcase: Briefcase,
  Building2: Building2,
  Crown: Crown
};

const Services = ({ onOpenPartnerModal }) => {
  return (
    <section id="services" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Comprehensive DMC Portfolio</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Our Premium <span className="text-gradient-saffron">B2B Services</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal">
            From ground logistics to confidential net tariff contracting, we act as an extension of your own agency operations across India’s sacred circuits.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = serviceIconMap[srv.iconName] || Briefcase;
            const isHighlighted = idx === 0 || idx === 1 || idx === 2; // Highlight top 3

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isHighlighted 
                    ? 'bg-white border-[#C89B3C] shadow-xl hover:shadow-2xl hover:-translate-y-1.5' 
                    : 'bg-white/80 hover:bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#F97316]/50'
                }`}
              >
                <div>
                  {/* Top Header of Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${
                      isHighlighted 
                        ? 'bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#C89B3C]' 
                        : 'bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#0F172A] group-hover:text-[#C89B3C]'
                    }`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-[#F97316]">
                      SRV-0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-1 group-hover:text-[#F97316] transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] mb-3">
                    {srv.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#334155] leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Key Capabilities:</div>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Value & Action */}
                <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wide">
                    B2B Net Tariff Available
                  </span>
                  <button
                    onClick={onOpenPartnerModal}
                    className="text-xs font-extrabold text-[#F97316] hover:text-[#0F172A] flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Inquire Rates</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#64748B] mb-4">
            Need custom VIP protocol or charter handling not listed above? We tailor our services to your agency's exact requirements.
          </p>
          <button
            onClick={onOpenPartnerModal}
            className="px-8 py-3.5 bg-[#0F172A] hover:bg-[#F97316] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Full DMC Service Guide & Tariff Sheet</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
