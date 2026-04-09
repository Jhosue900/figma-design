import Navbar from '../components/General/Navbar';
import Hero from '../components/Home/Hero';
import BackedBy from '../components/Home/BackedBy';
import Services from '../services/Services';
import ProjectResults from '../services/ProjectResults';
import Footer from '../components/General/Footer';
import CallToAction from '../components/Home/callToAction';
import CompanySection from '../components/Home/CompanySection';
import BlogSection from '../components/Home/BlogSection';
import Testimonials from '../components/Home/Testimonial';

import WhoWeAre from '../components/Home/WhoWeAre';

import AboutIntro from '../components/Home/AboutIntro';

// Importa el nuevo wrapper
import ScrollReveal from '../components/General/ScrollReveal';

function Home({ isLoading }: { isLoading: boolean }) {  
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      
      {/* El Hero suele no llevar scroll reveal para no retrasar el LCP, 
          pero puedes usar el prop isLoading que ya tienes */}
      <Hero isLoading={isLoading} />

      <ScrollReveal>
        <BackedBy />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectResults />
      </ScrollReveal>

      <ScrollReveal>
        <AboutIntro />
      </ScrollReveal>

      <WhoWeAre />

      {/*<ScrollReveal>
        <CompanySection />
      </ScrollReveal>*/}
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>

      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>

      
      <Footer />

    </div>
  );
}

export default Home;