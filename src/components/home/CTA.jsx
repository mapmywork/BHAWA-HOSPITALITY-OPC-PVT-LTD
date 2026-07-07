import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';
import { BRAND } from '../../constants/colors';

const CTA = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border-y-4 border-[#C89B3C]">
      
      {/* Background Decorative Temple Glow & Pattern */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C89B3C]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Exclusively For Tour Operators & Travel Trade</span>
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Extraordinary <span className="text-gradient-gold">Pilgrimage Experiences</span> Together
          </h2>

          {/* Paragraph */}
          <p className="text-[#FAFAF8]/90 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Expand your agency's reach across Uttar Pradesh, Bihar, Tamil Nadu, and Telangana without adding fixed overhead. We handle the operations; you take the credit.
          </p>

          {/* SLA Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-[#FAFAF8]/80 pt-2">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> 100% Brand Confidentiality
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Building2 className="w-4 h-4 text-[#F97316]" /> Net Confidential Trade Rates
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" /> 24x7 Command Center Support
            </span>
          </div>

          {/* CTA Action Button */}
          <div className="pt-6">
            <button
              onClick={onOpenPartnerModal}
              className="px-10 py-5 bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-black text-lg sm:text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Partner With Bhawa Hospitality</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Subtitle note */}
          <div className="text-xs font-mono text-[#FAFAF8]/60 pt-2">
            Direct Helpdesk: +{BRAND.phone} | Established in {BRAND.established}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
