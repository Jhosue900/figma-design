import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import ContactSection from '../components/Contact/main';


// Importa el nuevo wrapper
import ScrollReveal from '../components/General/ScrollReveal';

function Contact() {  
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      


      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      
      <Footer />

    </div>
  );
}

export default Contact;