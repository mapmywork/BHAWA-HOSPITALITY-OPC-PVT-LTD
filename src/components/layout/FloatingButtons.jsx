import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { BRAND } from '../../constants/colors';

const FloatingButtons = ({ onOpenPartnerModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Partner Trigger Pill on Mobile/Desktop */}
      <button
        onClick={onOpenPartnerModal}
        className="pointer-events-auto bg-gradient-to-r from-[#0F172A] to-[#1E293B] border border-[#C89B3C] text-[#FAFAF8] px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 hover:border-[#F97316] transition-all group cursor-pointer mb-1"
      >
        <Sparkles className="w-4 h-4 text-[#C89B3C] group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-wider">B2B Trade Inquiry</span>
      </button>

      <div className="flex items-center gap-3">
        {/* Call Assistance Button */}
        <a
          href={`tel:${BRAND.phone}`}
          className="pointer-events-auto w-12 h-12 rounded-full bg-[#0F172A] text-white hover:bg-[#F97316] flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border-2 border-[#C89B3C]"
          title="Call 24x7 B2B Helpdesk"
          aria-label="Call Assistance"
        >
          <Phone className="w-5 h-5 text-[#C89B3C] hover:text-white" />
        </a>

        {/* Sticky WhatsApp Button */}
        <a
          href={`https://wa.me/919161765406?text=Hello%20Bhawa%20Hospitality%20DMC%20team,%20I%20am%20a%20travel%20agent/operator%20interested%20in%20your%20B2B%20pilgrimage%20circuit%20rates.`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-14 h-14 rounded-full bg-[#16A34A] text-white hover:bg-[#15803d] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group"
          title="WhatsApp B2B Support"
          aria-label="WhatsApp B2B Support"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C89B3C]"></span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#0F172A] border border-gray-300 shadow-lg hover:bg-[#0F172A] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer mt-1"
          title="Back To Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};

export default FloatingButtons;
