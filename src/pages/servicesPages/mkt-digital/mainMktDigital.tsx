import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

// Componentes internos que crearás a continuación
import HeroMkt from './HeroMkt';


const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      

      <HeroMkt />


      <Footer />
    </div>
  );
};

export default MainMktDigital;