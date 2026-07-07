import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import DestinationGrid from '../components/home/DestinationGrid';
import InteractiveMap from '../components/home/InteractiveMap';
import Process from '../components/home/Process';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';

const Home = ({ onOpenPartnerModal, onOpenDestinationModal }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Bhawa Hospitality | B2B Destination Management Company | Pilgrimage Tours India</title>
        <meta name="description" content="Bhawa Hospitality is a leading B2B Destination Management Company (DMC) specializing in pilgrimage tours across Uttar Pradesh, Bihar, Tamil Nadu, and Telangana. Trusted by travel agents since 2016." />
        <meta name="keywords" content="Destination Management Company India, B2B DMC India, Pilgrimage Tour Operator, Travel Agent Partner India, Kashi Tour DMC, Ayodhya Tour Operator, Rameshwaram Tour, Tirupati Tour, Mallikarjun Jyotirlinga Tour, Religious Tour India, Corporate Travel DMC, Temple Tour Packages, Bhawa Hospitality." />
      </Helmet>

      <main>
        <Hero onOpenPartnerModal={onOpenPartnerModal} />
        <About onOpenPartnerModal={onOpenPartnerModal} />
        <WhyChooseUs />
        <Services onOpenPartnerModal={onOpenPartnerModal} />
        <DestinationGrid 
          onOpenDestinationModal={onOpenDestinationModal} 
          onOpenPartnerModal={onOpenPartnerModal} 
        />
        <InteractiveMap onOpenPartnerModal={onOpenPartnerModal} />
        <Process onOpenPartnerModal={onOpenPartnerModal} />
        <Statistics />
        <Testimonials />
        <CTA onOpenPartnerModal={onOpenPartnerModal} />
        <Contact />
      </main>
    </>
  );
};

export default Home;
