import React from "react";
import { Link } from "react-router";
import LottieError from "../assets/lottie/lottieError/LottieError";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen 
                    text-center bg-gradient-to-b from-purple-100 
                    via-pink-50 to-yellow-100 dark:from-slate-900 
                    dark:via-slate-800 dark:to-slate-900 transition">

      {/* Lottie Animation */}
      <LottieError />

      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md text-lg">
        Sorry, the page you're looking for doesn't exist or was moved.
      </p>

      <Link
        to="/"
        className="bg-purple-500 hover:bg-purple-600 text-white 
                   font-semibold rounded-full px-8 py-3 shadow-md 
                   transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
