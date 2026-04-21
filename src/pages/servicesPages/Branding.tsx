import React from 'react';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import Hero from '../../components/Services/Branding/Hero';
import SectionTwo from '../../components/Services/Branding/SectionTwo';
import CampaignDesign from '../../components/Services/Branding/CampaignDesign';
import OurProcess from '../../components/Services/Branding/OurProcess';
import ScrollReveal from '../../components/General/ScrollReveal';

const Branding = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* La sección Hero suele ir sin ScrollReveal para carga inmediata o con un delay suave */}
      <Hero />

      <ScrollReveal>
        <SectionTwo />
      </ScrollReveal>

      {/* Nueva Sección */}
      <ScrollReveal>
        <CampaignDesign />
      </ScrollReveal>

      <ScrollReveal>
        <OurProcess />
      </ScrollReveal>

      

      <Footer />
    </main>
  );
};

export default Branding;