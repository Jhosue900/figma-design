import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog'
import { Routes, Route } from 'react-router-dom';

function App() {
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