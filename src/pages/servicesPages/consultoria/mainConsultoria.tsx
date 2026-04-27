import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ConsultoriaHero from './HeroConsultoria';
import ServiciosSection from './impulsoEstrategico';
import WhyUs from './WhyUs';
import SuccessStories from './SuccessStories';
import ContactConsultoria from './ContactConsultoria';


const ConsultoriaDeMarketing = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
        <ConsultoriaHero />
        <ServiciosSection />
        <WhyUs />
        <SuccessStories />
        <ContactConsultoria />
      <Footer />
    </div>
  );
};

export default ConsultoriaDeMarketing;