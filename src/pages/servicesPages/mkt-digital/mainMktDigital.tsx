import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

// Componentes internos
import HeroMkt from './HeroMkt';
import SectionTwo from './sectionTwo';
import SectionTres from './sectionTres';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';


const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      

      <HeroMkt />

      <ScrollReveal>
        <SectionTwo />
      </ScrollReveal>

      <ScrollReveal>
        <SectionTres />
      </ScrollReveal>

      <ScrollReveal>
        <SectionFour />
      </ScrollReveal>

      <ScrollReveal>
        <SectionFive />
      </ScrollReveal>


      <Footer />
    </div>
  );
};

export default MainMktDigital;