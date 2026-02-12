import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Loader from './components/General/Loader';
import Blog from './pages/Blog'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>

  );
}



export default App;