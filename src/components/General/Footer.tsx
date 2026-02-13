import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import WepromLogo from '../../images/LOGOLISOBLANCO.png';

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Logo and Address */}
          <div className="mb-8 md:mb-0">
            <img 
              src={WepromLogo}
              alt="Weprom" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm">
              Córdoba 2424-4, Providencia, 44630, Guadalajara, Jalisco.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/weprom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/weprom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://facebook.com/weprom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/weprom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-gray-800">
          {/* Company */}
          <div>
            <h3 className="text-gray-400 text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/nosotros" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalogs" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Catalogs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-400 text-sm mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/servicios#market-research" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Market Research
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios#digital-marketing" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios#branding" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Professional Branding
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios#audiovisual" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Audiovisual Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-400 text-sm mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/documentation" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/api" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Community Forum
                </Link>
              </li>
              <li>
                <Link 
                  to="/faqs" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-400 text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+523334590989" 
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span>(33) 3459 0989</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@weprommexico.com" 
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>info@weprommexico.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Córdoba 2424-4, Providencia, 44630, Guadalajara, Jalisco.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-400">
          <p>© 2025 All Rights Reserved</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              Terms & Condition
            </Link>
            <Link to="/security" className="hover:text-white transition-colors duration-200">
              Security Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;