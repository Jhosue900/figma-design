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
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <GroupSection/>
      <TeamSection/>
      <AboutBackedBy/>
      <CallToAction/> 
      <Footer/>
    </div>
  );
}

export default About;