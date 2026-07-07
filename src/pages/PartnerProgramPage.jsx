import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Handshake, Lock, Clock, CheckCircle2, Sparkles, Building2, ChevronDown, ChevronUp, Users, DollarSign } from 'lucide-react';
import { FAQS } from '../data/faq';
import { BRAND } from '../constants/colors';

const PartnerProgramPage = ({ onOpenPartnerModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Confidential Net B2B Rates',
      desc: 'Access unbeatable wholesale net rates for hotels, transport, and temple rituals, ensuring robust profit margins for your agency.',
      icon: DollarSign
    },
    {
      title: '100% White-Label Branding',
      desc: 'Our airport greeters, vehicles, and placards display YOUR company name and logo. We remain entirely invisible to your clients.',
      icon: Lock
    },
    {
      title: '2-Hour Quote SLA',
      desc: 'Our specialized trade desk delivers white-labeled PDF itineraries with exact cost breakdowns within 2 business hours.',
      icon: Clock
    },
    {
      title: 'Dedicated Account Manager',
      desc: 'Get assigned a single point of contact familiar with your agency’s preferred hotel tiers, coach sizes, and payment protocols.',
      icon: Handshake
    },
    {
      title: 'Guaranteed Peak Season Inventory',
      desc: 'Pre-contracted room blocks in Kashi, Ayodhya, and Tirupati even during Diwali, Kartik Purnima, and Shravan rush.',
      icon: Building2
    },
    {
      title: 'Credit Line & Flexible Billing',
      desc: 'Registered and verified trade partners enjoy flexible payment schedules and credit facilities for regular GIT group series.',
      icon: ShieldCheck
    }
  ];

  return (
    <>
      <Helmet>
        <title>B2B Trade Partner Program | Bhawa Hospitality DMC</title>
        <meta name="description" content="Join India's leading B2B DMC Partner Program. Benefit from white-label ground handling, confidential net rates, and 24x7 command center support across UP, Bihar, TN, and TS." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 border-b-4 border-[#F97316] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Handshake className="w-3.5 h-3.5" />
            <span>Exclusive Trade Program Since 2016</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            The B2B Trade <span className="text-gradient-gold">Partner Network</span>
          </h1>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            We empower travel agencies, tour operators, wholesalers, and corporate travel planners worldwide with seamless destination management and total brand protection.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenPartnerModal("General B2B Partner Onboarding")}
              className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#C89B3C] hover:from-[#C89B3C] hover:to-[#F97316] text-[#0F172A] font-black text-base sm:text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Register as Authorized B2B Partner</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#C89B3C] uppercase tracking-widest">Why Partner With Us</div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Engineered For Travel Agency Growth
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore the core advantages that make Bhawa Hospitality the preferred DMC for over 300+ agencies across India and abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((ben, idx) => {
              const IconComp = ben.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-[#C89B3C] transition-all duration-300 space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#C89B3C] flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#0F172A]">
                    {ben.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLA Brand Protection Showcase */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#16A34A]/20 text-[#16A34A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Client Solicitation Guarantee</span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white leading-tight">
                Your Brand Identity, <span className="text-gradient-gold">Our On-Ground Execution</span>
              </h2>
              <p className="text-[#FAFAF8]/80 text-sm sm:text-base leading-relaxed">
                When you entrust your clients to Bhawa Hospitality, we sign a comprehensive <strong>Non-Disclosure and Brand Protection Agreement</strong>. Our team becomes your team.
              </p>
              
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Custom Placards & Banners:</strong> Airport greeters welcome guests with your logo and agency branding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>White-Label Documentation:</strong> Vouchers, hotel check-in slips, and itinerary kits carry your company details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Trained Driver Protocol:</strong> Chauffeurs are instructed never to hand out personal cards or mention DMC names.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl border-2 border-[#C89B3C] shadow-2xl space-y-6 text-center">
              <div className="w-16 h-16 bg-[#C89B3C]/20 text-[#C89B3C] rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">
                B2B Partner Registration
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                Ready to receive our confidential tariff sheets for Uttar Pradesh, Bihar, Tamil Nadu, and Telangana circuits?
              </p>
              <button
                onClick={() => onOpenPartnerModal("Trade Partner Onboarding Application")}
                className="w-full py-4 bg-[#F97316] hover:bg-[#C89B3C] text-[#0F172A] font-extrabold text-base rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Start Onboarding Application
              </button>
              <div className="text-[11px] font-mono text-gray-400">
                Turnaround Time: Under 2 Business Hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Trade FAQs */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#F97316] uppercase tracking-widest">Trade Partner FAQ</div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">
              Answers to common operational questions from tour operators and travel planners.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-playfair font-bold text-lg text-[#0F172A] hover:text-[#F97316] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'bg-[#F97316] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-gray-500">
            Have a specific operational query? Contact our trade desk directly at <a href={`mailto:${BRAND.email}`} className="text-[#0F172A] font-bold underline">{BRAND.email}</a> or WhatsApp <strong className="text-[#16A34A]">+91 {BRAND.phone}</strong>.
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerProgramPage;
