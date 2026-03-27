import { motion } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import SectionOne from '../components/About/sectionOne';
import SectionTwo from '../components/About/sectionTwoWhoWeAre';
import CallToAction from '../components/Home/callToAction';
import AboutBackedBy from '../components/About/aboutBackedBy';
import TeamSection from '../components/About/team';
import GroupSection from '../components/About/groupSection';

function About() {
  return (
    // Usamos un div normal con un sub-wrapper de motion para evitar conflictos de altura
    <div className="bg-black text-white w-full overflow-x-hidden">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionOne />
        <SectionTwo />
        <GroupSection />
        <TeamSection />
        <AboutBackedBy />
        <CallToAction />
      </motion.main>
      <Footer />
    </div>
  );
}

export default About;