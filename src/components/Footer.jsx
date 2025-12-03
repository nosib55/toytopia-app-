// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <img src="/logo.gif" className="w-28" alt="ToyTopia Logo" />

            <p className="text-sm leading-relaxed text-slate-400">
              ToyTopia brings joy to children with creative, safe, and 
              high-quality toys. Explore a world where imagination meets fun!
            </p>

            <div className="flex gap-4 mt-3 text-xl">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
            
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
            
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm text-slate-400">📍 Dhaka, Bangladesh</p>
            <p className="text-sm text-slate-400">📞 +880 9696560361</p>
            <p className="text-sm text-slate-400">
              ✉ support@toytopia.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
          <p>Designed with ❤️ for kids and families.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
