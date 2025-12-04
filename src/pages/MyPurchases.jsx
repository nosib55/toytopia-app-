import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const MyPurchases = () => {
  const { user } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!user?.email) return;

    fetch(`${API}/purchases?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPurchases(sorted);
      });
  }, [user, API]);

  // Delete confirmation
  const handleDelete = (id) => {
    toast.warn(
      <div>
        <p className="font-semibold text-base-content">Delete this purchase?</p>
        <div className="mt-2 flex gap-3 justify-center">
          <button
            onClick={() => confirmDelete(id)}
            className="px-3 py-1 bg-red-600 text-white rounded-md"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-base-300 text-base-content rounded-md"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        position: "top-center",
      }
    );
  };

  // Confirm delete
  const confirmDelete = async (id) => {
    toast.dismiss();

    try {
      const res = await fetch(`${API}/purchases/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (result.deletedCount > 0) {
        toast.success("Purchase deleted!");

        setPurchases((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete!");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-center">My Purchases</h1>

      {purchases.length === 0 ? (
        <p className="text-base-content text-center opacity-70">No purchases yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg border border-base-300 bg-base-100 dark:bg-base-200">
          <table className="table w-full text-base-content">
            <thead className="bg-pink-500 text-white text-lg">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {purchases.map((item, index) => (
                <tr key={item._id} className="hover:bg-base-300 transition">
                  <td className="font-semibold">{index + 1}</td>

                  <td>
                    <img
                      src={item.pictureURL}
                      alt={item.toyName}
                      className="w-16 h-16 rounded-lg object-cover border border-base-300"
                    />
                  </td>

                  <td className="font-semibold text-base-content">{item.toyName}</td>

                  <td className="text-pink-600 font-bold">${item.toyPrice}</td>

                  <td className="text-base-content">{item.quantity}</td>

                  <td className="opacity-80">
                    {new Date(item.date).toLocaleString()}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Purchase"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default MyPurchases;
