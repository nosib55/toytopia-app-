import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useToysData from "../hooks/useToysData";
import { toast } from "react-toastify";
import Loading from "./Loading";

const ToyDetail = () => {
  const { toyId } = useParams();
  const { toys, loading } = useToysData();
  const [toy, setToy] = useState(null);

  const [formData, setFormData] = useState({ name: "", email: "" });

  
  useEffect(() => {
    if (toys && toys.length > 0) {
      const foundToy = toys.find((t) => t.toyId === Number(toyId));
      setToy(foundToy || null);
    }
  }, [toys, toyId]);

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (!toy) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        ❌ Toy not found for ID: {toyId}
      </div>
    );
  }

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy;

  
  const handleBuy = () => {
    toast.success(`You purchased ${toyName}! 🎉`);
  };

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success(`Form submitted! Name: ${formData.name}, Email: ${formData.email}`);
      setFormData({ name: "", email: "" });
    } else {
      toast.error("Please fill in both fields!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* ---- Toy Detail Section ---- */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full md:w-80 h-80 object-cover rounded-lg border"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{toyName}</h1>
            <p className="text-gray-500 mt-2">
              Seller: <span className="font-semibold">{sellerName}</span>
            </p>
            <p className="text-gray-500">Email: {sellerEmail}</p>

            <div className="divider my-4"></div>

            <div className="flex flex-wrap gap-6 text-gray-700">
              <p>💰 Price: ${price}</p>
              <p>⭐ Rating: {rating}</p>
              <p>📦 Quantity: {availableQuantity}</p>
              <p>🧩 Category: {subCategory}</p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleBuy}
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
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Try Now </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;
