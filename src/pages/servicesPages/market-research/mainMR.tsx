import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import HeroMR from './heroMR';
import WhyMR from './whyMR';
import ExperienciaMR from './experienciaMR';
import ContactoMR from './contactMR';

export default function MarketResearch() {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <Navbar />
            <HeroMR />
            <WhyMR />
            <ExperienciaMR />
            <ContactoMR />
            <Footer />
        </div>
    );
}