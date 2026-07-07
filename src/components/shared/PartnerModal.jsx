import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShieldCheck, CheckCircle2, Send, Building2, User, Mail, Phone, Globe, MapPin, Calendar, Users } from 'lucide-react';
import Modal from './Modal';

const PartnerModal = ({ isOpen, onClose, initialDestination = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      partnerType: 'Travel Agency / Tour Operator',
      destinationRequired: initialDestination || 'Uttar Pradesh (Kashi/Ayodhya)',
      passengers: '15-30 (GIT Group)',
      country: 'India'
    }
  });

  const onSubmit = (data) => {
    console.log("B2B Partner Inquiry Submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      onClose();
    }, 3500);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => {
        setIsSubmitted(false);
        onClose();
      }} 
      title="B2B Trade Partner Registration & Quick Quote"
      maxWidth="max-w-3xl"
    >
      {isSubmitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#16A34A]/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="font-playfair text-2xl font-bold text-[#0F172A]">
            B2B Partner Application Received!
          </h4>
          <p className="text-[#64748B] text-sm max-w-md mx-auto leading-relaxed">
            Thank you for registering with <strong className="text-[#0F172A]">Bhawa Hospitality DMC</strong>. Our dedicated B2B trade desk in Lucknow will review your credentials and email confidential net tariff sheets and white-label itineraries within <strong>2 business hours</strong>.
          </p>
          <div className="pt-4 text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
            100% Brand Confidentiality Guaranteed Since 2016
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-[#0F172A]/5 border-l-4 border-[#C89B3C] p-3.5 rounded-r-lg flex items-center justify-between text-xs text-[#334155]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>We operate <strong>100% white-label</strong>. Your brand identity is protected at every touchpoint.</span>
            </div>
            <span className="font-bold text-[#F97316] uppercase whitespace-nowrap">Trade Only</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Partner Type */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#F97316]" /> Partner Business Type *
                </label>
                <select 
                  {...register("partnerType", { required: true })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                >
                  <option value="Travel Agency / Tour Operator">Travel Agency / Tour Operator</option>
                  <option value="Wholesaler / Consolidator">Wholesaler / Consolidator</option>
                  <option value="Corporate Travel Planner / MICE">Corporate Travel Planner / MICE</option>
                  <option value="International Tour Operator (NRI/Inbound)">International Tour Operator (NRI/Inbound)</option>
                  <option value="Freelance Tour Coordinator">Freelance Tour Coordinator</option>
                </select>
              </div>

              {/* Agency Name */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#F97316]" /> Agency / Company Name *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Vedic Heritage Tours Pvt. Ltd."
                  {...register("agencyName", { required: "Agency Name is required" })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
                {errors.agencyName && <span className="text-red-500 text-xs mt-0.5">{errors.agencyName.message}</span>}
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#F97316]" /> Contact Person Name & Designation *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Mr. Rajesh Sharma (Director)"
                  {...register("contactPerson", { required: "Contact Person is required" })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
                {errors.contactPerson && <span className="text-red-500 text-xs mt-0.5">{errors.contactPerson.message}</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#F97316]" /> Official Email Address *
                </label>
                <input 
                  type="email" 
                  placeholder="e.g. rajesh@vedictours.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
                {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email.message}</span>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#F97316]" /> Phone / WhatsApp Number *
                </label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  {...register("phone", { required: "Phone number is required" })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
                {errors.phone && <span className="text-red-500 text-xs mt-0.5">{errors.phone.message}</span>}
              </div>

              {/* Country / City */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#F97316]" /> Agency Base Location (City, Country) *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. New Delhi, India or London, UK"
                  {...register("country", { required: "Location is required" })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
              </div>

              {/* Destination Required */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" /> Destination / Circuit Required *
                </label>
                <select 
                  {...register("destinationRequired")}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                >
                  <option value="Uttar Pradesh (Kashi, Ayodhya, Prayagraj)">Uttar Pradesh (Kashi, Ayodhya, Prayagraj)</option>
                  <option value="Bihar (Gaya Ancestral & Buddhist Circuit)">Bihar (Gaya Ancestral & Buddhist Circuit)</option>
                  <option value="Tamil Nadu (Madurai, Rameshwaram, Kanyakumari)">Tamil Nadu (Madurai, Rameshwaram, Kanyakumari)</option>
                  <option value="Telangana (Mallikarjun Srisailam & Tirupati)">Telangana (Mallikarjun Srisailam & Tirupati)</option>
                  <option value="Multi-State Custom Pan-India Circuit">Multi-State Custom Pan-India Circuit</option>
                  <option value="General B2B Partner Onboarding Only">General B2B Partner Onboarding Only</option>
                </select>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F97316]" /> Estimated Travel Date (Optional)
                </label>
                <input 
                  type="date" 
                  {...register("travelDate")}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                />
              </div>

              {/* Passengers */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#F97316]" /> Estimated Passengers / Group Size
                </label>
                <select 
                  {...register("passengers")}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                >
                  <option value="FIT (2 - 6 Passengers)">FIT (2 - 6 Passengers)</option>
                  <option value="Small Group (7 - 14 Passengers)">Small Group (7 - 14 Passengers)</option>
                  <option value="GIT Medium Group (15 - 35 Passengers)">GIT Medium Group (15 - 35 Passengers)</option>
                  <option value="GIT Large Coach Group (36 - 55+ Passengers)">GIT Large Coach Group (36 - 55+ Passengers)</option>
                  <option value="Corporate MICE / Custom Charter (100+)">Corporate MICE / Custom Charter (100+)</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                  Additional Notes / Specific Requirements (Hotel category, VIP Darshan, etc.)
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Describe your itinerary requirements or general partnership inquiry..."
                  {...register("message")}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                ></textarea>
              </div>

            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#F97316] hover:to-[#C89B3C] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C89B3C]" />
                <span>Submit B2B Partner Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default PartnerModal;
