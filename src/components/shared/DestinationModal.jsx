import React from 'react';
import { MapPin, Clock, ShieldCheck, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Modal from './Modal';

const DestinationModal = ({ isOpen, onClose, destination, onOpenPartnerModal }) => {
  if (!destination) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`B2B Circuit Details: ${destination.name}`} maxWidth="max-w-3xl">
      <div className="space-y-6">
        
        {/* Hero Image inside modal */}
        <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
          <img 
            src={destination.heroImage || destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="inline-block bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-1">
                {destination.state}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                {destination.name}
              </h3>
            </div>
            <div className="bg-[#0F172A]/80 backdrop-blur-md border border-[#C89B3C]/40 px-3 py-1.5 rounded-lg text-xs text-[#FAFAF8] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{destination.duration}</span>
            </div>
          </div>
        </div>

        {/* Circuit Code & Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-[#FAFAF8] p-3 rounded-xl border border-gray-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0F172A] uppercase">Circuit:</span>
            <span className="text-[#F97316] font-semibold">{destination.circuit}</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-gray-500">
            <span>B2B Code:</span>
            <strong className="text-[#0F172A]">{destination.code}</strong>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-playfair text-lg font-bold text-[#0F172A] mb-2 border-l-3 border-[#C89B3C] pl-2">
            Circuit Overview
          </h4>
          <p className="text-[#334155] text-sm leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* B2B Operational Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0F172A] text-white p-4 rounded-xl space-y-3">
            <h5 className="font-playfair text-sm font-bold text-[#C89B3C] flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>VIP Spiritual Highlights</span>
            </h5>
            <ul className="space-y-2 text-xs">
              {destination.highlights.map((high, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#FAFAF8]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>{high}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAFAF8] border-2 border-[#C89B3C]/30 p-4 rounded-xl space-y-3 flex flex-col justify-between">
            <div>
              <h5 className="font-playfair text-sm font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                <span>B2B DMC Partner Guarantee</span>
              </h5>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {destination.b2bFeatures}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <div className="text-[11px] font-bold text-[#16A34A] uppercase flex items-center gap-1 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> 100% White-Label Execution
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Vehicles and local escorts will represent your agency brand. Confidential net trade tariffs provided upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Need customized FIT or GIT group pricing for <strong className="text-[#0F172A]">{destination.name}</strong>?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPartnerModal(destination.name);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#F97316] to-[#C89B3C] text-[#0F172A] font-extrabold text-xs rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Net B2B Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default DestinationModal;
