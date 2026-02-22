import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import SectionOne from '../components/About/sectionOne';


function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <SectionOne/>
      <Footer/>
    </div>
  );
}

export default About;