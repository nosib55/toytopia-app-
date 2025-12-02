import React from "react";
import { Link } from "react-router";

const ErrorPage = ({ status = 404, message = "Page Not Found" }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
      <h1 className="text-7xl font-extrabold text-purple-600 mb-4">{status}</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! {message}
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you're looking for doesn't exist or was moved.
      </p>

      <Link
        to="/"
        className="btn bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-8 py-3 shadow-md transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
