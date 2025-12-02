import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaBoxOpen, FaUserFriends, FaStar, FaTags } from "react-icons/fa";

const State = () => {
  const [stats, setStats] = useState({
    totalToys: 0,
    totalSellers: 0,
    avgRating: 0,
    categories: 0,
  });

  const [chartData, setChartData] = useState([]);

  // Fake data fetch simulation (you can replace with real data or JSON)
  useEffect(() => {
    // Simulated stats
    setStats({
      totalToys: 120,
      totalSellers: 24,
      avgRating: 4.6,
      categories: 5,
    });

    // Simulated chart data
    setChartData([
      { name: "Building Blocks", toys: 30 },
      { name: "Vehicles", toys: 25 },
      { name: "Puzzles", toys: 20 },
      { name: "Stuffed Animals", toys: 25 },
      { name: "Arts & Crafts", toys: 20 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🧸 Toy Store Statistics
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white shadow-md p-6 rounded-2xl text-center">
            <FaBoxOpen className="text-pink-500 text-4xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold">{stats.totalToys}</h2>
            <p className="text-gray-500">Total Toys</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-2xl text-center">
            <FaUserFriends className="text-blue-500 text-4xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold">{stats.totalSellers}</h2>
            <p className="text-gray-500">Total Sellers</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-2xl text-center">
            <FaStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold">{stats.avgRating}</h2>
            <p className="text-gray-500">Average Rating</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-2xl text-center">
            <FaTags className="text-green-500 text-4xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold">{stats.categories}</h2>
            <p className="text-gray-500">Categories</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Category-Wise Toy Count
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="toys" fill="#f472b6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default State;
