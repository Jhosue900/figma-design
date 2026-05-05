import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import AudiovisualHero from './HeroAudiovisual';
import SolucionesAudiovisuales from './solucionesAudiovisuales';
import VideosInstitucionales from './VideosInstitucionales';
import VideosPublicitarios from './VideosPublicitarios';
import SocialMedia from './SocialMedia';
import NuestroProceso from './nuestroProceso';
import PorQueNosotros from './whyUs';
import NuestrosClientes from './nuestrosClientes';
import ContactSection from './contactSection';

const Audiovisual = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      <AudiovisualHero />
      <SolucionesAudiovisuales />
      <VideosInstitucionales/>
      <VideosPublicitarios/>
      <SocialMedia/>
      <NuestroProceso/>
      <PorQueNosotros/>
      <NuestrosClientes/>
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Audiovisual;