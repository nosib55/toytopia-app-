import React from "react";
import { Link } from "react-router";

const AllToys = ({ toy }) => {
  const {toyName,toyId,toyPrice,subCategory,rating,availableQuantity}=toy;
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition bg-white">
      <img
        src={toy?.pictureURL}
        alt={toy?.toyName}
        className="w-full h-60 object-cover p-3 rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-3">{toyName}</h2>
      <p className="text-gray-600">Price: {toyPrice}</p>
      <p className="text-sm text-gray-500 mt-1">Category: {subCategory}</p>
      <p className="text-sm text-gray-500 mt-1">{rating}⭐</p>
      <p className="text-sm text-gray-500 mt-1">Available: {availableQuantity}</p>
      <button
       
        className="bg-purple-600 text-white mt-2 font-serif text-sm px-2 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
      >
        <Link to={`/toys/${toyId}`}>VIEW MORE</Link>
      </button>
    </div>
  );
};

export default AllToys;