import NetworkImage  from '../images/NetworkDiagram.png'

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border border-black"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border border-black"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border border-black"></div>
              <div className="w-6 h-6 bg-gray-700 rounded-full border border-black flex items-center justify-center text-xs">+</div>
            </div>
            <span className="text-xs text-gray-400 ml-2">User review based on <span className="font-medium text-white">Google</span></span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Unleashing the Power of top Brands
        </h1>

        <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-md">
          We develop online and offline marketing strategies to elevate your brand, product, or service, helping you outshine the competition.
        </p>

        <div className="flex gap-4">
          <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-600 transition text-sm">
            Get Started
          </button>
          <button className="bg-transparent text-white px-8 py-3 rounded-full font-medium border border-gray-600 hover:border-gray-400 transition text-sm">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <img 
          src={NetworkImage}
          alt="Network of top brands" 
          className="w-full h-auto max-w-md"
        />
      </div>
    </section>
  );
}

export default Hero;