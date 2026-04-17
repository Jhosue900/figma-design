import React from 'react';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import Hero from '../../components/Services/Branding/Hero';
import ScrollReveal from '../../components/General/ScrollReveal';

const Branding = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* La sección Hero suele ir sin ScrollReveal para carga inmediata o con un delay suave */}
      <Hero />

      {/* Contenedor para las siguientes secciones */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
                 Identidades que trascienden
               </h2>
               <p className="text-xl text-gray-400 leading-relaxed">
                 No solo diseñamos logotipos; creamos ecosistemas visuales completos que comunican 
                 los valores y la esencia de tu negocio en cada punto de contacto.
               </p>
            </div>
            {/* Aquí podrías poner una imagen estática o un video */}
            <div className="aspect-video bg-white/5 rounded-[40px] border border-white/10" />
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
};

export default Branding;