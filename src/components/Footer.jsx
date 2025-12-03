// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-wrap gap-6 justify-between items-start">
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-slate-900 font-extrabold shadow-sm">
                TT
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-wide">
                 <img src="/logo.gif" alt="" />
                </span>
                <span className="text-[11px] text-slate-300">
                  Thoughtfully curated toys for modern families.
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              ToyTopia connects parents with safe, engaging and age-appropriate
              toys that turn everyday moments into learning experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-sm font-semibold mb-3">Navigate</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/" className="hover:text-primary-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-items" className="hover:text-primary-300">
                    All Items
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/support" className="hover:text-primary-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="hover:text-primary-300">
                    Shipping & returns
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-primary-300">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary-300">
                    Terms of use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Connect</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@toytopia.com"
                    className="hover:text-primary-300"
                  >
                    support@toytopia.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 flex flex-wrap justify-between gap-3 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} ToyTopia. All rights reserved.</span>
          <span>Designed for mobile, tablet and desktop experiences.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
