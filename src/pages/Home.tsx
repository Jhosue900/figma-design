import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BackedBy from '../components/BackedBy';
import Services from '../services/Services';
import AboutUs from '../services/AboutUs';
import ProjectResults from '../services/ProjectResults';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <BackedBy />
      <Services />
      <AboutUs />
      <ProjectResults />
    </div>
  );
}

export default App;