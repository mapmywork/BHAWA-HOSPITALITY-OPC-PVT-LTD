import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  MapPin, Phone, Mail, MessageCircle, Send, Building2, User, Globe, 
  Calendar, Users, ShieldCheck, CheckCircle2, Clock, Award 
} from 'lucide-react';
import { BRAND } from '../../constants/colors';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      partnerType: 'Travel Agency / Tour Operator',
      destinationRequired: 'Uttar Pradesh (Kashi, Ayodhya, Prayagraj)',
      passengers: '15 - 30 (GIT Group)',
      country: 'India'
    }
  });

  const onSubmit = (data) => {
    console.log("Contact Section B2B Inquiry:", data);
    
    let messageText = "*New B2B Inquiry*\n";
    if (data.agencyName) messageText += `*Agency Name:* ${data.agencyName}\n`;
    if (data.contactPerson) messageText += `*Contact Person:* ${data.contactPerson}\n`;
    if (data.email) messageText += `*Email:* ${data.email}\n`;
    if (data.phone) messageText += `*Phone:* ${data.phone}\n`;
    if (data.country) messageText += `*Country/City:* ${data.country}\n`;
    if (data.partnerType) messageText += `*Partner Type:* ${data.partnerType}\n`;
    if (data.destinationRequired) messageText += `*Destination:* ${data.destinationRequired}\n`;
    if (data.travelDate) messageText += `*Travel Date:* ${data.travelDate}\n`;
    if (data.passengers) messageText += `*Passengers:* ${data.passengers}\n`;
    if (data.message) messageText += `*Message:* ${data.message}\n`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/919161765406?text=${encodedMessage}`, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            <Building2 className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Dedicated B2B Trade Desk</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Connect With <span className="text-gradient-saffron">Our Operations Hub</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal">
            Whether you need net tariff sheets, custom group departure quotes, or VIP protocol support, our team is at your service 24x7.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business & Branch Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-[#0F172A] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#C89B3C]/40 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/20 text-[#C89B3C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Established Since 2016</span>
              </div>
              <h3 className="font-playfair text-3xl font-extrabold text-white">
                {BRAND.name}
              </h3>
              <p className="text-sm text-[#C89B3C] font-semibold uppercase tracking-widest">
                Destination Management Company (DMC)
              </p>
              <p className="text-xs text-[#FAFAF8]/80 leading-relaxed">
                Specializing in Pilgrimage Tours, Corporate Travel Solutions, and Ground Handling across Indian Spiritual Circuits.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-3 pt-4 border-t border-white/15 relative z-10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Corporate Headquarters</h4>
                  <p className="text-sm text-white font-medium mt-1 leading-relaxed">
                    {BRAND.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="space-y-3 pt-4 border-t border-white/15 relative z-10">
              <h4 className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Operational Branches</h4>
              <div className="grid grid-cols-3 gap-2">
                {BRAND.branches.map((br) => (
                  <div key={br} className="bg-white/10 border border-white/15 p-2.5 rounded-xl text-center">
                    <span className="text-xs font-bold text-white block">{br}</span>
                    <span className="text-[10px] text-[#C89B3C]">Active Hub</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-4 border-t border-white/15 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase">24x7 WhatsApp Helpdesk</h4>
                  <a href={`https://wa.me/919161765406`} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-white hover:text-[#C89B3C] transition-colors">
                    +91 91617 65406
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase">Official Trade Email</h4>
                  <a href={`mailto:${BRAND.email}`} className="text-sm sm:text-base font-bold text-white hover:text-[#C89B3C] transition-colors underline">
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 relative z-10">
              <ShieldCheck className="w-6 h-6 text-[#16A34A] shrink-0" />
              <span className="text-xs text-white/90">
                <strong>100% White-Label Commitment:</strong> We never solicit or market directly to your agency's clients.
              </span>
            </div>

          </div>

          {/* Right Column: Modern Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200/80">
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-6">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#0F172A]">
                  B2B Trade Inquiry & Rate Request
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Complete the details below to receive confidential net tariffs within 2 business hours.
                </p>
              </div>
              <span className="bg-[#F97316]/10 text-[#F97316] font-bold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider shrink-0">
                Trade Only
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#16A34A]/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-playfair text-2xl font-bold text-[#0F172A]">
                  Inquiry Successfully Sent!
                </h4>
                <p className="text-[#64748B] text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to <strong className="text-[#0F172A]">Bhawa Hospitality DMC</strong>. Our operations desk in Lucknow is reviewing your requirements and will contact you via email/WhatsApp shortly.
                </p>
                <div className="pt-4 text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                  2-Hour SLA Turnaround Guaranteed
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
                      placeholder="e.g. Vedic Travel Partners"
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
                      placeholder="e.g. Mr. Alok Kumar"
                      {...register("contactPerson", { required: "Contact Person is required" })}
                      className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                    />
                    {errors.contactPerson && <span className="text-red-500 text-xs mt-0.5">{errors.contactPerson.message}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#F97316]" /> Official Email *
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. alok@vedictravel.com"
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
                      <option value="International Operator (NRI/Inbound)">International Operator (NRI/Inbound)</option>
                      <option value="Freelance Tour Coordinator">Freelance Tour Coordinator</option>
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
                      Message / Itinerary Requirements
                    </label>
                    <textarea 
                      rows="3" 
                      placeholder="Specify hotel categories, vehicle preferences, or VIP darshan requirements..."
                      {...register("message")}
                      className="w-full bg-[#FAFAF8] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#F97316] focus:border-transparent focus:bg-white transition-all"
                    ></textarea>
                  </div>

                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#F97316] hover:to-[#C89B3C] text-white font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Send className="w-5 h-5 text-[#C89B3C] group-hover:text-[#0F172A] transition-colors" />
                    <span>Submit B2B Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
