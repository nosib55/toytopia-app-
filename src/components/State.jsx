import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const State = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/toys`)
      .then((res) => res.json())
      .then((data) => {
        const categoryMap = {};

        // Calculate total stock per category
        data.forEach((toy) => {
          const category = toy.subCategory;
          const stock = toy.availableQuantity || 0;

          if (!categoryMap[category]) {
            categoryMap[category] = 0;
          }

          categoryMap[category] += stock;
        });

        // Convert object → chart usable array
        const chartArray = Object.entries(categoryMap).map(
          ([category, stock]) => ({
            category,
            stock,
          })
        );

        setChartData(chartArray);
      });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 py-12 text-base-content">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          Category-wise Available Stock
        </h1>

        <div className="bg-base-100 border border-base-300 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Total Stock Per Category
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="stock"
                fill="#ec4899"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default State;
