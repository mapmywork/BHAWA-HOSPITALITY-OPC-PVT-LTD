import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATISTICS } from '../../data/testimonials';
import { Award, Users, Compass, ShieldCheck } from 'lucide-react';

const statIcons = [Users, ShieldCheck, Compass, Award];

// Handle CommonJS / ESM interop where default export is wrapped in .default
const CountUpComponent = CountUp.default || CountUp;

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border-y-2 border-[#C89B3C]/40 relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {STATISTICS.map((stat, idx) => {
            const IconComp = statIcons[idx] || Award;
            return (
              <div key={idx} className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-center text-center first:pt-0 first:px-0">
                <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center mb-4 shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="font-playfair text-4xl sm:text-5xl font-extrabold text-gradient-gold tracking-tight">
                  {stat.prefix}
                  {isInView ? (
                    <CountUpComponent
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    '0'
                  )}
                  {stat.suffix}
                </div>

                <div className="text-sm font-bold text-[#FAFAF8]/90 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#C89B3C] mt-1 font-semibold">
                  Verified DMC Operations
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Statistics;
