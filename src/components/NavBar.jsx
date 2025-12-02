import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setMenuOpen(false);
        toast.info("You have been logged out!");
        console.log("👋 User logged out successfully.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 shadow-md px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white rounded-box w-52 space-y-2"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/toys">All Toys</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/offer">Offers</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
        >
          TOY-TOPIA
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "hover:text-purple-500 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "hover:text-purple-500 transition-colors"
              }
            >
              All Toys
            </NavLink>
          </li>

      
          {user && (
            <li>
              <NavLink
                to="/offer"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-500 transition-colors"
                }
              >
                Offers
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "hover:text-purple-500 transition-colors"
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3 relative">
        {user ? (
          <>
            {/* 🧍 User Avatar */}
            <div className="relative">
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co.com/TMQzV95y/vecteezy-sleep-vector-icon-19594930-1.jpg"
                }
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-purple-400 cursor-pointer hover:scale-105 transition-transform"
                title={user.displayName || "User"}
                onClick={() => setMenuOpen(!menuOpen)}
              />

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border border-gray-100 z-50 animate-fade-in">
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          //  Login Button
          <Link
            to="/login"
            className="btn bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-6 py-2 shadow-md transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
