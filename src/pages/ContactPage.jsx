import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { 
  MapPin, Phone, Mail, MessageCircle, Send, Building2, User, Globe, 
  Calendar, Users, ShieldCheck, CheckCircle2, Award, Clock 
} from 'lucide-react';
import { BRAND } from '../constants/colors';

const branchDetails = {
  Lucknow: {
    title: 'Corporate Headquarters & UP Operations Hub',
    address: '205, Sector 4, Jankipuram Vistar, Lucknow, Uttar Pradesh - 226021',
    phone: '+91 91617 65406',
    email: 'info@bhawahospitality.in',
    circuits: 'Kashi Vishwanath, Ayodhya Ram Mandir, Prayagraj Triveni Sangam, Gaya Ancestral Circuit',
    mapQuery: 'Jankipuram Vistar Lucknow Uttar Pradesh'
  },
  Haridwar: {
    title: 'Northern Spiritual & Char Dham Operations Hub',
    address: 'Near Shivalik Nagar, Haridwar, Uttarakhand - 249403',
    phone: '+91 91617 65406',
    email: 'haridwar@bhawahospitality.in',
    circuits: 'Haridwar Ganga Aarti, Rishikesh, Char Dham Ground Handling (Badrinath, Kedarnath, Gangotri, Yamunotri)',
    mapQuery: 'Haridwar Uttarakhand'
  },
  Trivandrum: {
    title: 'Southern Dravidian & Coastal Operations Hub',
    address: 'Vazhuthacaud, Thiruvananthapuram, Kerala / TN Border - 695014',
    phone: '+91 91617 65406',
    email: 'south@bhawahospitality.in',
    circuits: 'Meenakshi Temple Madurai, Rameshwaram Char Dham, Kanyakumari, Mallikarjun Jyotirlinga, Tirupati',
    mapQuery: 'Thiruvananthapuram Kerala'
  }
};

const ContactPage = ({ onOpenPartnerModal }) => {
  const [activeBranch, setActiveBranch] = useState('Lucknow');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      partnerType: 'Travel Agency / Tour Operator',
      destinationRequired: 'Uttar Pradesh (Kashi, Ayodhya, Prayagraj)',
      passengers: '15 - 30 (GIT Group)',
      country: 'India'
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    console.log("Dedicated Contact Page Submission:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  const branch = branchDetails[activeBranch];

  return (
    <>
      <Helmet>
        <title>Contact B2B Trade Desk | Bhawa Hospitality DMC</title>
        <meta name="description" content="Get in touch with Bhawa Hospitality DMC. Visit our branches in Lucknow, Haridwar, or Trivandrum. 24x7 B2B partner support for pilgrimage tours." />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 border-b-4 border-[#C89B3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>24x7 B2B Trade Command Center</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Connect With <span className="text-gradient-gold">Bhawa Hospitality</span>
          </h1>
          <p className="text-[#FAFAF8]/80 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            Reach our operational command center in Lucknow or our regional hubs in Haridwar and Trivandrum. We are ready to assist with custom quotes and VIP protocol.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Branch Selector Tabs */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Our Operational Hubs & Branches
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Select a branch location below to view local contact numbers and active circuits handled.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {Object.keys(branchDetails).map((brName) => (
                <button
                  key={brName}
                  onClick={() => setActiveBranch(brName)}
                  className={`flex-1 min-w-[140px] py-3.5 px-6 rounded-2xl text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                    activeBranch === brName
                      ? 'bg-[#0F172A] text-[#C89B3C] shadow-xl scale-105 border-2 border-[#C89B3C]'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-sm'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${activeBranch === brName ? 'text-[#F97316]' : 'text-gray-400'}`} />
                  <span>{brName} Branch</span>
                </button>
              ))}
            </div>

            {/* Active Branch Display Box */}
            <div className="mt-8 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200/80 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Active Regional Hub
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {branch.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-bold text-[#0F172A]">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
                    <Phone className="w-4 h-4 text-[#F97316]" />
                    <span>{branch.phone}</span>
                  </a>
                  <a href={`mailto:${branch.email}`} className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors underline">
                    <Mail className="w-4 h-4 text-[#C89B3C]" />
                    <span>{branch.email}</span>
                  </a>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <strong className="text-[#0F172A] block mb-1">Key Circuits Managed from {activeBranch}:</strong>
                  {branch.circuits}
                </div>
              </div>

              <div className="md:col-span-5 h-64 rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100 relative">
                {/* Responsive Google Maps Embed iframe */}
                <iframe
                  title={`Google Maps ${activeBranch}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-10">
            
            {/* Left Side: Direct Channel Cards (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0F172A] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-[#C89B3C]/30">
                <h3 className="font-playfair text-2xl font-bold text-white">
                  24x7 Helpdesk Channels
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  For immediate assistance with VIP Break Darshan passes, emergency on-ground transport changes, or net tariff inquiries.
                </p>

                <div className="space-y-4 pt-2">
                  <a 
                    href={`https://wa.me/919161765406`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#16A34A] hover:bg-[#15803d] p-4 rounded-2xl flex items-center gap-3 transition-colors text-white shadow-md block"
                  >
                    <MessageCircle className="w-7 h-7 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase block text-white/80">Instant WhatsApp Support</span>
                      <span className="text-sm sm:text-base font-extrabold">+91 91617 65406</span>
                    </div>
                  </a>

                  <a 
                    href={`tel:${BRAND.phone}`}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-2xl flex items-center gap-3 transition-colors text-white block"
                  >
                    <Phone className="w-6 h-6 text-[#C89B3C] shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase block text-gray-300">Direct Phone Helpdesk</span>
                      <span className="text-sm font-extrabold">+91 {BRAND.phone}</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#16A34A] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Confidential Trade Only</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F97316]/10 to-[#C89B3C]/20 border border-[#C89B3C]/40 p-6 rounded-3xl space-y-2 text-center">
                <Clock className="w-8 h-8 text-[#0F172A] mx-auto" />
                <h4 className="font-playfair font-bold text-lg text-[#0F172A]">Turnaround SLA Commitment</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All custom itinerary quotes submitted via this form are processed by our senior account managers within <strong>2 business hours</strong>.
                </p>
              </div>
            </div>

            {/* Right Side: Form (8 cols) */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200">
              <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-[#0F172A]">
                    Submit B2B Agency Inquiry
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We represent your agency with zero direct client marketing. Let's start partnering.
                  </p>
                </div>
                <span className="bg-[#0F172A] text-[#C89B3C] font-bold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider shrink-0">
                  Trade Portal
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#16A34A]/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-[#0F172A]">
                    Inquiry Received by Trade Desk!
                  </h4>
                  <p className="text-[#64748B] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Our Lucknow operations hub is preparing your customized net tariff proposal and white-label itinerary. We will contact you via email shortly.
                  </p>
                  <div className="pt-4 text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                    Est. 2016 • Trusted B2B DMC
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Agency Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#F97316]" /> Agency Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Vedic Holidays Pvt. Ltd."
                        {...register("agencyName", { required: "Agency Name is required" })}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                      {errors.agencyName && <span className="text-red-500 text-xs mt-0.5">{errors.agencyName.message}</span>}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#F97316]" /> Contact Person *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Mr. Rajesh Sharma"
                        {...register("contactPerson", { required: "Contact Person is required" })}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                      {errors.contactPerson && <span className="text-red-500 text-xs mt-0.5">{errors.contactPerson.message}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#F97316]" /> Email Address *
                      </label>
                      <input 
                        type="email" 
                        placeholder="e.g. rajesh@vedicholidays.com"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                        })}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email.message}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#F97316]" /> Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        {...register("phone", { required: "Phone is required" })}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-0.5">{errors.phone.message}</span>}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-[#F97316]" /> Country / City *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. India / UK / USA"
                        {...register("country", { required: "Country is required" })}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                    </div>

                    {/* Partner Type */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#F97316]" /> Partner Type *
                      </label>
                      <select 
                        {...register("partnerType")}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      >
                        <option value="Travel Agency / Tour Operator">Travel Agency / Tour Operator</option>
                        <option value="Wholesaler / Consolidator">Wholesaler / Consolidator</option>
                        <option value="Corporate Travel Planner / MICE">Corporate Travel Planner / MICE</option>
                        <option value="International Tour Operator">International Tour Operator</option>
                      </select>
                    </div>

                    {/* Destination Required */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F97316]" /> Destination Required *
                      </label>
                      <select 
                        {...register("destinationRequired")}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      >
                        <option value="Uttar Pradesh (Kashi, Ayodhya, Prayagraj)">Uttar Pradesh (Kashi, Ayodhya, Prayagraj)</option>
                        <option value="Bihar (Gaya Ancestral & Buddhist Circuit)">Bihar (Gaya Ancestral & Buddhist Circuit)</option>
                        <option value="Tamil Nadu (Madurai, Rameshwaram, Kanyakumari)">Tamil Nadu (Madurai, Rameshwaram, Kanyakumari)</option>
                        <option value="Telangana (Mallikarjun Srisailam & Tirupati)">Telangana (Mallikarjun Srisailam & Tirupati)</option>
                        <option value="Multi-State Custom Pan-India Circuit">Multi-State Custom Pan-India Circuit</option>
                      </select>
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F97316]" /> Travel Date (Estimated)
                      </label>
                      <input 
                        type="date" 
                        {...register("travelDate")}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      />
                    </div>

                    {/* Passengers */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#F97316]" /> Passengers / Group Size
                      </label>
                      <select 
                        {...register("passengers")}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      >
                        <option value="FIT (2 - 6 Passengers)">FIT (2 - 6 Passengers)</option>
                        <option value="Small Group (7 - 14 Passengers)">Small Group (7 - 14 Passengers)</option>
                        <option value="GIT Medium Group (15 - 35 Passengers)">GIT Medium Group (15 - 35 Passengers)</option>
                        <option value="GIT Large Coach Group (36 - 55+ Passengers)">GIT Large Coach Group (36 - 55+ Passengers)</option>
                        <option value="Corporate Charter (100+ Passengers)">Corporate Charter (100+ Passengers)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                        Message / Itinerary Notes
                      </label>
                      <textarea 
                        rows="4" 
                        placeholder="Provide details about required hotel star category, vehicle transport needs, or VIP darshan requests..."
                        {...register("message")}
                        className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                      ></textarea>
                    </div>

                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#F97316] hover:to-[#C89B3C] text-white font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <Send className="w-5 h-5 text-[#C89B3C] group-hover:text-[#0F172A] transition-colors" />
                      <span>Submit Inquiry to Trade Desk</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
