import React from "react";
import { Link } from "react-router-dom";

const AllToys = ({ toy }) => {
  const {
    toyName,
    toyPrice,
    rating,
    pictureURL,
    _id    // MongoDB ID
  } = toy;

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm 
                 hover:shadow-xl transition-all duration-300 
                 overflow-hidden w-full"
    >
      {/* IMAGE (Daraz Style Full Fit) */}
      <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden flex justify-center items-center bg-gray-100">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1.5">

        {/* TITLE (Clamp 2) */}
        <h3
          className="text-sm font-semibold text-slate-900 dark:text-white 
                     line-clamp-2"
        >
          {toyName}
        </h3>

        {/* PRICE */}
        <p className="text-[#f85606] text-lg font-bold">${toyPrice}</p>

        {/* RATING */}
        <p className="text-yellow-500 text-sm">⭐ {rating}</p>

        {/* VIEW BUTTON */}
        <Link
          to={`/toys/${_id}`}
          className="block mt-2 py-1.5 text-sm text-center
                     bg-pink-500 hover:bg-pink-600 text-white 
                     font-semibold rounded-md transition"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default AllToys;
