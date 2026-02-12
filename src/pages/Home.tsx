import Navbar from '../components/General/Navbar';
import Hero from '../components/Home/Hero';
import BackedBy from '../components/Home/BackedBy';
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