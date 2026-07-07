import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Lock, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from '../../constants/colors';

const Navbar = ({ onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About DMC', path: '/#about' },
    { name: 'B2B Services', path: '/#services' },
    { name: 'Sacred Destinations', path: '/destinations' },
    { name: 'Partner Program', path: '/partner-program' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const elem = document.getElementById(elementId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Top B2B Announcement Bar */}
      <div className="bg-[#0F172A] text-white text-xs py-2 px-4 border-b border-[#C89B3C]/20 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#FAFAF8]/90">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span className="font-semibold tracking-wide uppercase text-[11px] text-[#C89B3C]">Strictly B2B Trade Only:</span>
            <span>Serving Global Tour Operators & Travel Agencies Since 2016</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#C89B3C] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>24x7 B2B Helpdesk: +{BRAND.phone}</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <button 
              onClick={onOpenPartnerModal}
              className="flex items-center gap-1 text-[#C89B3C] hover:text-white font-semibold transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Agent Login / Register</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-lg border-b border-[#C89B3C]/20 py-3' 
            : 'bg-[#FAFAF8]/80 backdrop-blur-sm py-5 border-b border-gray-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center border border-[#C89B3C]/40 shadow-md group-hover:border-[#C89B3C] transition-all duration-300">
                <span className="text-2xl" role="img" aria-label="Temple">🛕</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl sm:text-2xl text-[#0F172A] tracking-tight group-hover:text-[#F97316] transition-colors">
                  Bhawa <span className="text-[#C89B3C]">Hospitality</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#64748B] uppercase">
                  B2B Destination Management Company
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.hash === link.path.replace('/', ''));
                return link.path.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'text-[#F97316] bg-[#F97316]/10 font-bold' 
                        : 'text-[#0F172A] hover:text-[#F97316] hover:bg-[#0F172A]/5'
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive 
                        ? 'text-[#F97316] bg-[#F97316]/10 font-bold' 
                        : 'text-[#0F172A] hover:text-[#F97316] hover:bg-[#0F172A]/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenPartnerModal}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-xl group bg-gradient-to-br from-[#F97316] to-[#C89B3C] group-hover:from-[#F97316] group-hover:to-[#0F172A] hover:text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0F172A] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C89B3C] group-hover:text-white transition-colors" />
                  <span>Become Our Partner</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#0F172A] text-white hover:bg-[#F97316] transition-colors focus:outline-none shadow-md cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F172A] text-white border-t border-[#C89B3C]/30 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs text-[#C89B3C]">
                <span>Est. 2016 • Lucknow | Haridwar | Trivandrum</span>
                <span className="bg-[#C89B3C]/20 text-[#C89B3C] px-2 py-0.5 rounded font-bold uppercase">B2B Trade</span>
              </div>
              
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-[#F97316] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-[#F97316] transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPartnerModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Become Our Partner</span>
                </button>
                
                <a
                  href={`tel:${BRAND.phone}`}
                  className="block w-full py-3 px-4 rounded-xl bg-white/10 text-center text-white font-semibold border border-white/20"
                >
                  Call B2B Helpdesk: +{BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
