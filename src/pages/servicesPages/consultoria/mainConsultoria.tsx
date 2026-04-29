import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ConsultoriaHero from './HeroConsultoria';
import ServiciosSection from './impulsoEstrategico';
import WhyUs from './WhyUs';
import SuccessStories from './SuccessStories';
import PublicoObjetivo from './PublicoObjetivo';
import ContactConsultoria from './ContactConsultoria';
import FrameworkIntervention from './FrameworkIntervention';


const ConsultoriaDeMarketing = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
        <ConsultoriaHero />
        <ServiciosSection />
        <WhyUs />
        <SuccessStories />
        <PublicoObjetivo />
        <FrameworkIntervention/>
        <ContactConsultoria />
      <Footer />
    </div>
  );
};

export default ConsultoriaDeMarketing;