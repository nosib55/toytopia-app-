import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const Offer = () => {
  const { user } = useContext(AuthContext);

  // Redirect if user is not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Example offers
  const offers = [
    { id: 1, name: "Lego Classic Set", discount: "20%", price: 39.99 },
    { id: 2, name: "Toy Car Collection", discount: "15%", price: 24.99 },
    { id: 3, name: "Puzzle Game", discount: "30%", price: 14.99 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-8">
        Exclusive Offers for You!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((toy) => (
          <div
            key={toy.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-2">{toy.name}</h2>
              <p className="text-gray-600 mb-1">Price: ${toy.price}</p>
              <p className="text-red-500 font-bold">Discount: {toy.discount}</p>
            </div>
            <button className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-all">
              Grab Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
