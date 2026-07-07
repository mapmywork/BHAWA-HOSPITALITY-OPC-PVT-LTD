import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Headset, Compass, MapPin, Hotel, ShieldCheck, 
  TrendingUp, Clock, Lock, CheckCircle2, Sparkles 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/services';

const iconMap = {
  Award: Award,
  Headset: Headset,
  Compass: Compass,
  MapPin: MapPin,
  Hotel: Hotel,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Clock: Clock,
  Lock: Lock,
  CheckCircle2: CheckCircle2,
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAFAF8_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The B2B Advantage</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Travel Agents & Tour Operators <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg font-normal">
            We are engineered specifically for travel trade success. From brand protection to competitive net pricing, explore the pillars of our partnership model.
          </p>
        </div>

        {/* 10 Luxury Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            const isFeatured = idx === 0 || idx === 8; // Since 2016 Experience & Brand Confidentiality highlighted

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured 
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#C89B3C] shadow-2xl' 
                    : 'bg-[#1E293B]/60 hover:bg-[#1E293B] border border-white/10 hover:border-[#F97316]/50 shadow-lg'
                }`}
              >
                <div>
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      isFeatured 
                        ? 'bg-[#C89B3C] text-[#0F172A] shadow-md font-bold' 
                        : 'bg-white/10 text-[#C89B3C] group-hover:bg-[#F97316] group-hover:text-white'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-extrabold bg-[#C89B3C]/20 text-[#C89B3C] px-2 py-0.5 rounded uppercase tracking-wider">
                        Core Pillar
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-lg font-bold text-white mb-2 group-hover:text-[#C89B3C] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#FAFAF8]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-white/40 group-hover:text-[#16A34A] transition-colors">
                  <span>SLA Verified</span>
                  <span>✔</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-1">
            <h4 className="font-playfair text-xl sm:text-2xl font-bold text-white">
              Strictly No Consumer Direct Selling Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-[#FAFAF8]/70">
              We never bypass our B2B partners. All inquiries generated in your client's presence are redirected back to your agency.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#16A34A] px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wide whitespace-nowrap">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Confidentiality SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
