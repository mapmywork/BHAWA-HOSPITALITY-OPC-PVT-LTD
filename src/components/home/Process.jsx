import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, CheckSquare, Navigation, Smile, Sparkles, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/services';

const stepIconMap = {
  MessageSquare: MessageSquare,
  FileText: FileText,
  CheckSquare: CheckSquare,
  Navigation: Navigation,
  Smile: Smile
};

const Process = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational SLA Workflow</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Flawless <span className="text-gradient-gold">5-Step Work Process</span>
          </h2>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg font-normal">
            From initial inquiry to client return, our standardized B2B workflow ensures speed, accuracy, and 100% white-label brand protection.
          </p>
        </div>

        {/* 5-Step Timeline Layout */}
        <div className="relative">
          
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#F97316] via-[#C89B3C] to-[#16A34A] z-0 opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const IconComp = stepIconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex flex-col items-center text-center relative"
                >
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#C89B3C] shadow-2xl flex items-center justify-center text-[#C89B3C] group-hover:bg-[#F97316] group-hover:border-white group-hover:text-white transition-all duration-300 mb-6 relative">
                    <IconComp className="w-9 h-9" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0F172A] border border-[#C89B3C] font-mono text-xs font-extrabold text-white flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-lg font-bold text-white mb-2 group-hover:text-[#C89B3C] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#FAFAF8]/70 leading-relaxed px-2">
                    {item.desc}
                  </p>

                  {/* Mobile/Tablet down arrow indicator */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden my-4 text-[#C89B3C] font-bold">
                      ↓
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom SLA Banner */}
        <div className="mt-20 text-center bg-[#1E293B]/80 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <div className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Turnaround SLA Commitment</div>
            <h4 className="font-playfair text-xl font-bold text-white">
              2-Hour White-Label Itinerary Delivery Guarantee
            </h4>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="px-8 py-3.5 bg-gradient-to-r from-[#F97316] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your First Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Process;
