// Navbar.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" className="h-10 w-10" alt="Logo" />
          <span className="text-xl font-bold text-white">ToyTopia</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-5">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Home
          </NavLink>

          <NavLink to="/toys" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            All Toys
          </NavLink>

          <NavLink to="/offer" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Offer
          </NavLink>

          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Contact
          </NavLink>
        </div>

        {/* AUTH + PROFILE ICON */}
        <div className="hidden md:flex items-center gap-4">

          {/* If no user => show Login + Signup */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 bg-primary-500 text-white rounded-full text-sm hover:bg-primary-400"
              >
                Login
              </Link>

              <Link
                to="/singup"
                className="px-4 py-1.5 border border-primary-400 text-primary-300 rounded-full text-sm hover:bg-primary-400/20"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* USER PHOTO CLICK TO OPEN DROPDOWN */}
              <img
                src={user.photoURL || "/default-user.png"}
                className="h-10 w-10 rounded-full border-2 border-primary-400 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                alt="User"
              />

              {/* CLICK DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-44 p-3 z-50">

                  <p className="text-sm font-semibold text-slate-700">
                    {user.displayName || "User"}
                  </p>

                  {/* PROFILE */}
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setDropdownOpen(false);
                    }}
                    className="mt-2 w-full text-left px-3 py-2 rounded-md text-sm hover:bg-slate-100"
                  >
                    Profile
                  </button>

                  {/* LOGOUT */}
                  <button
                    onClick={() => {
                      logOut();
                      setDropdownOpen(false);
                    }}
                    className="mt-2 w-full px-3 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* MOBILE NAV MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 px-4 py-4 flex flex-col gap-3">

          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          <NavLink to="/toys" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            All Toys
          </NavLink>

          <NavLink to="/offer" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            My Offer
          </NavLink>

          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </NavLink>

          {/* Mobile auth */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-primary-500 text-white rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/singup"
                className="px-4 py-2 border border-primary-400 text-primary-300 rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="px-4 py-2 bg-white text-slate-800 rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Profile
              </Link>

              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md text-center"
                onClick={() => {
                  logOut();
                  setMobileOpen(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
