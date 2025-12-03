import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useToysData from "../hooks/useToysData";
import { toast } from "react-toastify";
import Loading from "./Loading";

const ToyDetail = () => {
  const { toyId } = useParams();
  const { toys, loading } = useToysData();
  const [toy, setToy] = useState(null);

  // Modal State
  const [openModal, setOpenModal] = useState(false);

  // Quantity local state so UI updates
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    if (toys && toys.length > 0) {
      const foundToy = toys.find((t) => t._id === toyId);
      setToy(foundToy || null);

      if (foundToy) {
        setQuantity(foundToy.availableQuantity);
      }
    }
  }, [toys, toyId]);

  if (loading) return <Loading />;

  if (!toy) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        ❌ Toy not found for ID: {toyId}
      </div>
    );
  }

  const {
    toyName,
    toyPrice,
    rating,
    fullDescription,
    pictureURL,
    subCategory,
  } = toy;

  // ==============================
  // ⭐ Confirm Purchase Function
  // ==============================
  const handleConfirmPurchase = async () => {
    if (quantity <= 0) {
      toast.error("Out of stock ❌");
      return;
    }

    const updatedQuantity = quantity - 1;

    // Update UI Immediately
    setQuantity(updatedQuantity);

    // Update DATABASE
    try {
      const res = await fetch(`http://localhost:5000/toys/${toyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ availableQuantity: updatedQuantity }),
      });

      const data = await res.json();

      if (data.modifiedCount > 0 || data.acknowledged) {
        toast.success(`You purchased ${toyName}! 🎉`);
      } else {
        toast.error("Failed to update stock ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }

    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* --- Toy Detail Layout --- */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full md:w-80 h-80 object-cover rounded-lg border"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{toyName}</h1>

            <div className="divider my-4"></div>

            <div className="flex flex-wrap gap-6 text-gray-700">
              <p>💰 Price: ${toyPrice}</p>
              <p>⭐ Rating: {rating}</p>
              <p>📦 Quantity: {quantity}</p>
              <p>🧩 Category: {subCategory}</p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setOpenModal(true)}
                className="btn bg-pink-500 text-white hover:bg-pink-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div>
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-600 leading-relaxed">{fullDescription}</p>
        </div>
      </div>

      {/* ===================== MODAL ===================== */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">

            <h2 className="text-xl font-semibold text-center mb-4">
              Confirm Purchase
            </h2>

            <div className="space-y-2 text-gray-700 mb-4">
              <p><strong>Product:</strong> {toyName}</p>
              <p><strong>Price:</strong> ${toyPrice}</p>
              <p><strong>Available Now:</strong> {quantity}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setOpenModal(false)}
                className="btn bg-gray-300 hover:bg-gray-400 text-black"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmPurchase}
                className="btn bg-pink-500 hover:bg-pink-600 text-white"
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      )}
      {/* ===================== END MODAL ===================== */}
    </div>
  );
};

export default ToyDetail;
