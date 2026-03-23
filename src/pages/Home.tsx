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
import Testimonials from '../components/Home/Testimonial'


function App({ isLoading }: { isLoading: boolean }) {  
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero isLoading={isLoading} />
      <BackedBy />
      <Services />
      <ProjectResults />
      <CompanySection />
      
      <Testimonials/>
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;