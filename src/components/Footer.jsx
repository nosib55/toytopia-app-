import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <img src="/logo.gif" className="w-28" alt="ToyTopia Logo" />

            <p className="text-sm leading-relaxed text-gray-400">
              ToyTopia brings joy to children with creative, safe, and premium toys.
              Discover a world where imagination meets fun!
            </p>

            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://www.facebook.com/lm.nosib" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/lalmahmud" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm text-gray-400">📍 Dhaka, Bangladesh</p>
            <p className="text-sm text-gray-400">📞 +880 9696560361</p>
            <p className="text-sm text-gray-400">✉ support@toytopia.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed with ❤️ for kids & families.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
