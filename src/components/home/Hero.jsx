import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Sparkles, ChevronRight, CheckCircle2, Building2, Users } from 'lucide-react';

const heroSlides = [
  {
    title: "Kashi Vishwanath & Ganga Ghats",
    location: "Varanasi, Uttar Pradesh",
    image: "/images/kashi.png",
    tag: "VIP Temple Darshan Protocol"
  },
  {
    title: "Ram Mandir & Sacred Saryu",
    location: "Ayodhya, Uttar Pradesh",
    image: "/images/ayodhya.png",
    tag: "Guaranteed Room Allotments"
  },
  {
    title: "Meenakshi Amman Temple Architecture",
    location: "Madurai, Tamil Nadu",
    image: "/images/madurai.png",
    tag: "Southern Dravidian Circuit"
  },
  {
    title: "Tirumala Venkateswara Abode",
    location: "Tirupati, Telangana / AP Circuit",
    image: "/images/tirupati.png",
    tag: "VIP Break Darshan Handling"
  },
  {
    title: "Ramanathaswamy Sacred Corridor",
    location: "Rameshwaram, Tamil Nadu",
    image: "/images/rameshwaram.png",
    tag: "Char Dham Ground Support"
  }
];

const Hero = ({ onOpenPartnerModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0F172A]">
      
      {/* Background Slider with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40"></div>
        
        {/* Subtle geometric grid pattern for corporate B2B feel */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: B2B Messaging (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#C89B3C]/50 px-4 py-2 rounded-full shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FAFAF8]">
                Serving Travel Agencies Worldwide <span className="text-[#F97316]">Since 2016</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              India's Trusted <span className="text-gradient-gold">B2B Destination</span> Management Company
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-[#FAFAF8]/90 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We specialize in white-label ground execution for Indian spiritual circuits. Partner with us for flawless logistics, confidential net trade tariffs, and VIP protocol handling.
            </motion.p>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-[#C89B3C] pt-1"
            >
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Pilgrimage Tours
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Destination Management
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Ground Operations
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Corporate Travel & GITs
              </span>
            </motion.div>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-extrabold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-[#0F172A] group-hover:rotate-12 transition-transform" />
                <span>Become Our Partner</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <Link
                to="/destinations"
                className="w-full sm:w-auto px-8 py-4 bg-[#1E293B]/80 hover:bg-[#1E293B] text-white border border-[#C89B3C]/40 hover:border-[#C89B3C] font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Sacred Destinations</span>
                <MapPin className="w-4 h-4 text-[#C89B3C]" />
              </Link>
            </motion.div>

            {/* Active Slide Tracker */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-[#F97316]' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] font-mono text-[#FAFAF8]/60 ml-2">
                Featured: {heroSlides[currentSlide].location}
              </span>
            </div>

          </div>

          {/* Right Column: Glassmorphism Statistics Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316] via-[#C89B3C] to-[#16A34A] rounded-3xl blur-xl opacity-30 animate-pulse"></div>

              {/* Main Glass Card */}
              <div className="relative glass-card-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C89B3C]/40 space-y-6">
                
                {/* Header of card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-white">B2B Excellence</h3>
                      <p className="text-[11px] text-[#C89B3C] font-semibold uppercase tracking-wider">Corporate Trade Partner</p>
                    </div>
                  </div>
                  <span className="bg-[#16A34A]/20 text-[#16A34A] border border-[#16A34A]/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Verified DMC
                  </span>
                </div>

                {/* 4 Core Metric Boxes */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Metric 1 */}
                  <div className="bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl text-center group hover:border-[#C89B3C] transition-all">
                    <div className="font-playfair text-3xl sm:text-4xl font-extrabold text-gradient-gold">
                      Since 2016
                    </div>
                    <div className="text-xs font-semibold text-[#FAFAF8]/80 mt-1 uppercase tracking-wider">
                      Established Trust
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl text-center group hover:border-[#F97316] transition-all">
                    <div className="font-playfair text-3xl sm:text-4xl font-extrabold text-white">
                      4+ <span className="text-[#F97316] text-xl sm:text-2xl font-sans">States</span>
                    </div>
                    <div className="text-xs font-semibold text-[#FAFAF8]/80 mt-1 uppercase tracking-wider">
                      UP, Bihar, TN, TS
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl text-center group hover:border-[#16A34A] transition-all">
                    <div className="font-playfair text-3xl sm:text-4xl font-extrabold text-white">
                      11+ <span className="text-[#16A34A] text-xl sm:text-2xl font-sans">Circuits</span>
                    </div>
                    <div className="text-xs font-semibold text-[#FAFAF8]/80 mt-1 uppercase tracking-wider">
                      Sacred Destinations
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl text-center group hover:border-[#C89B3C] transition-all">
                    <div className="font-playfair text-2xl sm:text-3xl font-extrabold text-[#C89B3C]">
                      B2B Only
                    </div>
                    <div className="text-xs font-semibold text-[#FAFAF8]/80 mt-1 uppercase tracking-wider">
                      Trade Specialists
                    </div>
                  </div>

                </div>

                {/* Footer of Card */}
                <div className="pt-2">
                  <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/15 p-3.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#C89B3C]" />
                      <span className="text-xs font-medium text-white/90">300+ Active Agency Partners</span>
                    </div>
                    <button 
                      onClick={onOpenPartnerModal}
                      className="text-xs font-bold text-[#F97316] hover:text-[#C89B3C] underline transition-colors cursor-pointer"
                    >
                      Join Network
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none">
        <svg className="relative block w-full h-8 sm:h-12 text-[#FAFAF8]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.4,130.83,121.5,201,114,241.6,109.68,282.2,96.33,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
