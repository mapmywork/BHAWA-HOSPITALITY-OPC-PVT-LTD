import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Verified Trade Partners</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            What Travel Agents <span className="text-gradient-saffron">Say About Us</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal">
            We judge our success by the growth of our partner agencies. Discover how our white-label ground handling delivers seamless experiences and repeat business.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="h-full bg-white rounded-2xl p-7 shadow-xl border border-gray-200/80 hover:border-[#C89B3C] transition-all duration-300 flex flex-col justify-between relative group">
                  
                  {/* Top Quote & Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center font-bold">
                        <Quote className="w-5 h-5 rotate-180" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                    </div>

                    {/* Circuit Tag */}
                    <div className="inline-block bg-[#0F172A]/5 text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                      Circuit: {t.circuit}
                    </div>

                    {/* Quote Text */}
                    <p className="text-[#334155] text-sm leading-relaxed italic mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-5 border-t border-gray-100 flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C89B3C] shadow-sm"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-playfair font-bold text-base text-[#0F172A] truncate">
                        {t.name}
                      </h4>
                      <div className="text-xs font-semibold text-[#F97316] flex items-center gap-1 truncate">
                        <Building2 className="w-3 h-3 shrink-0" />
                        <span className="truncate">{t.agency}</span>
                      </div>
                      <div className="text-[11px] text-gray-400 truncate">{t.location}</div>
                    </div>
                  </div>

                  {/* Top Right White Label SLA Badge */}
                  <div className="absolute -top-3 right-6 bg-[#16A34A] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>White-Label Verified</span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom SLA Assurance */}
        <div className="text-center bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-playfair text-lg font-bold text-[#C89B3C]">Join 300+ Satisfied Travel Agency Partners</h4>
            <p className="text-xs text-gray-300">We sign strict non-disclosure and brand protection agreements with all trade partners.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#16A34A] bg-white/10 px-4 py-2 rounded-xl shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Client Solicitation</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
