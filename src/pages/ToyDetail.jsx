import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router";
import useToysData from "../hooks/useToysData";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { AuthContext } from "../context/AuthContext";

const ToyDetail = () => {
  const { toyId } = useParams();
  const { toys, loading } = useToysData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [toy, setToy] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    if (toys.length > 0) {
      const foundToy = toys.find((t) => t._id === toyId);
      setToy(foundToy || null);
      if (foundToy) setQuantity(foundToy.availableQuantity);
    }
  }, [toys, toyId]);

  if (loading) return <Loading />;

  if (!toy) {
    return (
      <div className="text-center mt-20 text-base-content text-lg">
        ❌ Toy not found
      </div>
    );
  }

  const { toyName, toyPrice, rating, fullDescription, pictureURL, subCategory } =
    toy;

  const API = import.meta.env.VITE_API_URL;

  // ------------------------
  // BUY NOW HANDLER
  // ------------------------
  const handleBuyNow = () => {
    if (!user?.email) {
      toast.error("Please login to purchase ❌");
      return navigate("/login", { state: { from: `/toys/${toyId}` } });
    }
    setOpenModal(true);
  };

  const handleConfirmPurchase = async () => {
    if (quantity <= 0) return toast.error("Out of stock ❌");

    const updatedQuantity = quantity - 1;

    try {
      const purchase = {
        toyId,
        toyName,
        toyPrice,
        pictureURL,
        category: subCategory,
        email: user.email,
        quantity: 1,
        date: new Date(),
      };

      await fetch(`${API}/purchases`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(purchase),
      });

      await fetch(`${API}/toys/${toyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ availableQuantity: updatedQuantity }),
      });

      setQuantity(updatedQuantity);
      toast.success("Purchase Successful 🎉");
    } catch (err) {
      toast.error("Server Error ❌");
    }

    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 text-base-content">
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          to="/toys"
          className="px-6 py-2 bg-base-300 text-base-content rounded-md hover:bg-base-400 transition"
        >
          ⬅ Back
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-xl shadow-lg p-8 border border-base-300">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full md:w-80 h-80 object-cover rounded-lg border border-base-300"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{toyName}</h1>

            <div className="divider my-4"></div>

            <div className="flex flex-wrap gap-6">
              <p>💰 Price: <strong>${toyPrice}</strong></p>
              <p>⭐ Rating: <strong>{rating}</strong></p>
              <p>📦 Quantity: <strong>{quantity}</strong></p>
              <p>🧩 Category: <strong>{subCategory}</strong></p>
            </div>

            <button
              onClick={handleBuyNow}
              className="btn bg-pink-500 text-white hover:bg-pink-600 mt-6"
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="divider my-8"></div>

        <p>{fullDescription}</p>
      </div>

      {/* PURCHASE MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-base-100 p-6 rounded-lg w-full max-w-md shadow-xl border border-base-300">
            <h2 className="text-xl font-semibold text-center mb-4">
              Confirm Purchase
            </h2>

            <p><strong>Product:</strong> {toyName}</p>
            <p><strong>Price:</strong> ${toyPrice}</p>
            <p><strong>Available:</strong> {quantity}</p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setOpenModal(false)}
                className="btn bg-base-300 hover:bg-base-400"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmPurchase}
                className="btn bg-pink-500 text-white hover:bg-pink-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ToyDetail;
