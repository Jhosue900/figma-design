import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

import HeroWeprom from './weprom/HERO';
import TwoSectionBrands from '../market-research/TwoSectionBrands';
import MetaSection from './weprom/MetaSection';
import GoogleSection from './weprom/GoogleSection';
import InfluencerSection from './weprom/InfluencerSection';
import AudiovisualSection from './weprom/AudiovisualSection';
import ProjectResults from '../../../services/ProjectResults';
import SectionFour from './sectionFour';
import ContactMktDigital from './weprom/ContactMktDigital';

const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />

      {/* Hero con logo orbital de WeProm */}
      <HeroWeprom />

      {/* Carrusel de clientes */}
      <ScrollReveal>
        <TwoSectionBrands />
      </ScrollReveal>

      {/* Servicios: Meta Ads */}
      <ScrollReveal>
        <MetaSection />
      </ScrollReveal>

      {/* Servicios: Google Ads */}
      <ScrollReveal>
        <GoogleSection />
      </ScrollReveal>

      {/* Servicios: Influencer / UGC */}
      <ScrollReveal>
        <InfluencerSection />
      </ScrollReveal>

      {/* Servicios: Producción Audiovisual */}
      <ScrollReveal>
        <AudiovisualSection />
      </ScrollReveal>

      {/* Casos de éxito */}
      <ScrollReveal>
        <ProjectResults />
      </ScrollReveal>

      {/* Nuestra metodología */}
      <ScrollReveal>
        <SectionFour />
      </ScrollReveal>

      {/* Formulario de contacto */}
      <ScrollReveal>
        <ContactMktDigital />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default MainMktDigital;
