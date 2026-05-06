import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import HeroMR from './heroMR';
import WhyMR from './whyMR';
import ExperienciaMR from './experienciaMR';
import ContactoMR from './contactMR';
import TestimonialMR from './TestimonialMR';
import ElPoderDeLaInformacion from './QuestionsMR';
import TiposDeEstudios from './Studies';
import OurClients from './OurClients';

export default function MarketResearch() {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <Navbar />
            <HeroMR />
            <WhyMR />
            <ExperienciaMR />
            <TestimonialMR />
            <OurClients/>
            <ElPoderDeLaInformacion />
            <TiposDeEstudios />
            <ContactoMR />
            <Footer />
        </div>
    );
}