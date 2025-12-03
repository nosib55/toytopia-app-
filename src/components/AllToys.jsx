import React from "react";
import { Link } from "react-router-dom";

const AllToys = ({ toy }) => {
  const {
    toyName,
    toyId,
    toyPrice,
    rating,
    pictureURL,
  } = toy;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm 
                    hover:shadow-xl transition-all duration-300 
                    overflow-hidden w-full h-30]">

      {/* FULL DARAZ STYLE IMAGE */}
      <div className="w-full overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full p-4 h-50 object-cover" 
        />
      </div>

      {/* CONTENT */}
      <div className="p-3">

        {/* 2-LINE TITLE */}
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white 
                      line-clamp-2 leading-tight">
          {toyName}
        </h3>

        {/* PRICE */}
        <p className="text-[#f85606] text-lg font-bold mt-1">
          ৳{toyPrice}
        </p>

        {/* RATING */}
        <p className="text-yellow-500 text-sm">
          ⭐ {rating}
        </p>

        {/* BUTTON */}
        <Link
          to={`/toys/${toyId}`}
          className="block text-center mt-2 py-1.5 text-sm 
                     bg-pink-500 hover:bg-pink-600 text-white font-semibold
                     rounded-md transition"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default AllToys;
