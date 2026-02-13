import Navbar from '../components/General/Navbar';
import Hero from '../components/Home/Hero';
import BackedBy from '../components/Home/BackedBy';
import Services from '../services/Services';
import AboutUs from '../services/AboutUs';
import ProjectResults from '../services/ProjectResults';
import Footer from '../components/General/Footer';
import CallToAction from '../components/Home/callToAction';
import CompanySection from '../components/Home/CompanySection';
import BlogSection from '../components/Home/BlogSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <BackedBy />
      <Services />
      <AboutUs />
      <ProjectResults />
      <CompanySection />
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;