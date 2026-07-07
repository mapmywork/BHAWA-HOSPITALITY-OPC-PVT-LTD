import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, ShieldCheck, Award, Lock, ExternalLink } from 'lucide-react';
import { BRAND, COLORS } from '../../constants/colors';
import { DESTINATIONS } from '../../data/destinations';

const Footer = ({ onOpenPartnerModal }) => {
  const circuits = [
    { name: 'Uttar Pradesh (Kashi & Ayodhya)', path: '/destinations#kashi-varanasi' },
    { name: 'Bihar (Gaya Ancestral Circuit)', path: '/destinations#gaya' },
    { name: 'Tamil Nadu (Madurai & Rameshwaram)', path: '/destinations#madurai' },
    { name: 'Telangana (Mallikarjun & Tirupati)', path: '/destinations#mallikarjun-srisailam' },
    { name: 'Char Dham Ground Handling', path: '/destinations' },
  ];

  const services = [
    'Destination Management',
    'Pilgrimage Tours GIT & FIT',
    'B2B Travel Partnerships',
    'Luxury Hotel Contracting',
    'Fleet & Coach Transportation',
    'VIP Temple Darshan Protocol'
  ];

  return (
    <footer className="bg-[#0F172A] text-[#FAFAF8] pt-16 pb-12 border-t-4 border-[#C89B3C] relative overflow-hidden">
      {/* Subtle background decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action Box inside Footer */}
        <div className="bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-[#C89B3C]/30 rounded-2xl p-6 md:p-8 mb-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 text-[#C89B3C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>India's Premier DMC Since 2016</span>
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Ready to Expand Your Agency's Pilgrimage Portfolio?
            </h3>
            <p className="text-[#FAFAF8]/70 text-sm max-w-xl">
              Partner with Bhawa Hospitality today for guaranteed hotel allotments, net B2B pricing, and 100% white-label on-ground execution.
            </p>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-extrabold text-base rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>Partner With Bhawa DMC</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#C89B3C]/50 shadow-lg shrink-0">
                <img src="/logo.jpeg" alt="Bhawa Hospitality Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-2xl text-white tracking-tight">
                  Bhawa <span className="text-[#C89B3C]">Hospitality</span>
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#C89B3C] uppercase">
                  Est. 2016 • B2B DMC Specialists
                </span>
              </div>
            </Link>
            
            <p className="text-[#FAFAF8]/80 text-sm leading-relaxed">
              Bhawa Hospitality is a specialized Destination Management Company dedicated exclusively to India's sacred and cultural tourism circuits. We empower travel agencies and tour operators with white-label ground handling, VIP temple protocol, and luxury logistics.
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider mb-2">Our Operational Branches:</div>
              <div className="flex flex-wrap gap-2">
                {BRAND.branches.map((branch) => (
                  <span key={branch} className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-semibold text-white/90 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span>{branch}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#FAFAF8]/60">
              <span className="flex items-center gap-1 text-[#16A34A] font-semibold">
                <ShieldCheck className="w-4 h-4" /> 100% Brand Confidentiality
              </span>
              <span>•</span>
              <span>24x7 Command Center</span>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-playfair text-lg font-bold text-white border-l-2 border-[#F97316] pl-3">
              B2B Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link to="/#services" className="text-[#FAFAF8]/70 hover:text-[#C89B3C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#F97316] font-bold">›</span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Circuits (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-playfair text-lg font-bold text-white border-l-2 border-[#C89B3C] pl-3">
              Sacred Circuits
            </h4>
            <ul className="space-y-2.5 text-sm">
              {circuits.map((circ, idx) => (
                <li key={idx}>
                  <Link to={circ.path} className="text-[#FAFAF8]/70 hover:text-[#C89B3C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#C89B3C] font-bold">›</span>
                    <span>{circ.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-playfair text-lg font-bold text-white border-l-2 border-[#F97316] pl-3">
              B2B Trade Desk
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#FAFAF8]/80">
                <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{BRAND.address}</span>
              </div>
              
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 text-[#FAFAF8]/90 hover:text-[#C89B3C] transition-colors">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <span className="font-semibold text-sm">+91 {BRAND.phone} (24x7 Support)</span>
              </a>

              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-[#FAFAF8]/90 hover:text-[#C89B3C] transition-colors">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span className="text-sm underline">{BRAND.email}</span>
              </a>
            </div>

            {/* Newsletter for Trade Updates */}
            <div className="pt-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Trade Newsletter & Net Tariff Alerts</div>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Bhawa Hospitality B2B Net Rate Alerts!"); }} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Agency email address..." 
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C89B3C] flex-1"
                />
                <button 
                  type="submit"
                  className="bg-[#F97316] hover:bg-[#C89B3C] text-white p-2 rounded-lg transition-colors cursor-pointer"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAFAF8]/50">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">{BRAND.name}</strong>. All rights reserved. B2B Destination Management Company. Established 2016.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Trade & SLA</Link>
            <Link to="/partner-program" className="hover:text-[#C89B3C] text-[#C89B3C] font-semibold transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Partner Confidentiality Agreement</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
