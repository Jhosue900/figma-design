import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

// Componentes internos
import HeroMkt from './HeroMkt';
import SectionTwo from './sectionTwo';



const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      

      <HeroMkt />

      <ScrollReveal>
        <SectionTwo />
      </ScrollReveal>


      <Footer />
    </div>
  );
};

export default MainMktDigital;