import React from "react";
import { Link } from "react-router-dom"; // fixed import
import {motion} from "framer-motion";
import toyBanner from "../assets/canba-bg.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">

        {/* Left Side (Text) */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Welcome to <span className="text-pink-500">ToyTopia!</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Explore a world full of fun, colorful, and creative toys that bring smiles to every child!
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
            >
              <Link to="/toys">Shop Now</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              <Link to="/blog">Learn More</Link>
            </motion.button>
          </div>
        </motion.div>

        
        <motion.div
          className="flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={toyBanner}
            alt="Toy Store Banner"
            className="w-[1000px] md:w-[400px] drop-shadow-xl rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
