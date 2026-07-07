import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, CheckCircle2, Users, Building2, TrendingUp, Sparkles, Calendar } from 'lucide-react';
import { BRAND } from '../../constants/colors';

const timelineEvents = [
  {
    year: '2016',
    title: 'Foundation in Lucknow',
    desc: 'Established as a specialized DMC focusing on sacred tourism circuits across Uttar Pradesh, introducing professional ground handling in Varanasi and Prayagraj.'
  },
  {
    year: '2018',
    title: 'Expansion to Bihar & Ancestral Circuits',
    desc: 'Partnered with major NRI wholesalers to provide white-label Pind Daan and Buddhist pilgrimage logistics in Gaya and Bodh Gaya.'
  },
  {
    year: '2021',
    title: 'Southern India Operations Hub',
    desc: 'Opened operational hubs in Haridwar and Trivandrum, integrating Dravidian temple circuits (Madurai, Rameshwaram, Tirupati) into our B2B network.'
  },
  {
    year: 'Today',
    title: 'India’s Leading Pilgrimage DMC',
    desc: 'Trusted by over 300+ global travel agencies, managing 5000+ pilgrims annually across 4 major states with 100% brand confidentiality.'
  }
];

const About = ({ onOpenPartnerModal }) => {
  return (
    <section id="about" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage & Experience Badge (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80" 
                    alt="Kashi Ghats Pilgrimage" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#0F172A] text-white p-5 rounded-2xl shadow-xl border border-[#C89B3C]/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-gradient-gold">Since 2016</h4>
                    <p className="text-xs text-white/80 font-semibold">Specialized B2B Operations</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="h-56 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1705861144421-a9d8c3666f7d?auto=format&fit=crop&w=600&q=80" 
                    alt="Ram Mandir Ayodhya" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F97316] to-[#C89B3C] text-white p-4 rounded-2xl shadow-xl text-center">
                  <span className="text-2xl font-extrabold block">100%</span>
                  <span className="text-xs font-bold uppercase tracking-wide">White-Label Brand Protection</span>
                </div>
              </div>
            </div>

            {/* Decorative background outline box */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F172A]/5 to-[#C89B3C]/10 rounded-3xl -z-10 transform -rotate-2"></div>
          </motion.div>

          {/* Right Column: Narrative & Mission (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Corporate B2B DMC Profile</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Where Spiritual Tourism Meets <span className="text-gradient-saffron">Professional Destination Management</span>
            </h2>

            <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
              <strong>Bhawa Hospitality</strong> is a specialized Destination Management Company dedicated exclusively to India's sacred and cultural tourism circuits. Since our inception in <strong>2016</strong>, we have built an unshakeable operational foundation across Uttar Pradesh, Bihar, Tamil Nadu, and Telangana.
            </p>

            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              We partner with travel agencies, tour operators, wholesalers, and corporate travel planners worldwide, delivering seamless destination management while preserving each partner's brand identity. We don't simply manage logistics—we create authentic spiritual journeys backed by enterprise-grade execution.
            </p>

            {/* Key Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#0F172A]">Trade Confidentiality</h5>
                  <p className="text-xs text-gray-500">Your brand logo on placards, vehicles, and client vouchers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <Building2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#0F172A]">Direct Hotel Contracts</h5>
                  <p className="text-xs text-gray-500">Guaranteed room allocations and unbeatable net tariff sheets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <Users className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#0F172A]">GIT & FIT Specialists</h5>
                  <p className="text-xs text-gray-500">From solo travelers to 500+ passenger corporate charters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <MapPin className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#0F172A]">Local Hubs</h5>
                  <p className="text-xs text-gray-500">Physical branches in Lucknow, Haridwar, and Trivandrum.</p>
                </div>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3.5 bg-[#0F172A] hover:bg-[#F97316] text-white font-bold text-sm rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Request Our B2B Company Profile & Tariff Sheet</span>
              </button>
            </div>

          </motion.div>

        </div>

        {/* Bottom Section: Timeline 2016 -> Today */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Our Journey of Excellence</span>
            </div>
            <h3 className="font-playfair text-3xl font-bold text-[#0F172A]">
              The Evolution of India's Premier Pilgrimage DMC
            </h3>
            <p className="text-gray-600 text-sm">
              A decade of consistent operational expansion, technological adoption, and unwavering commitment to travel trade partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Connecting horizontal line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#F97316] via-[#C89B3C] to-[#16A34A] -z-0"></div>

            {timelineEvents.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-[#C89B3C] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white font-mono font-bold text-sm shadow-sm border border-[#C89B3C]/40">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-[#C89B3C]">Phase 0{idx + 1}</span>
                  </div>
                  <h4 className="font-playfair text-lg font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#16A34A]">
                  <span>Operational Milestones</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
