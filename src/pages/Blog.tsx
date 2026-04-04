import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import BlogSection from '../components/Blog/BlogMainSection';

function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default Blog;