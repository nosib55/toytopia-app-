import React from "react";
import { motion } from "framer-motion";

const colors = ["bg-pink-500", "bg-yellow-400", "bg-blue-400", "bg-green-400"];

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 flex flex-col justify-center items-center z-50">
      <div className="flex space-x-4">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={`w-8 h-8 ${color} rounded-full`}
            animate={{ y: [0, -20, 0] }} // bounce up and down
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.2, // staggered bounce
            }}
          />
        ))}
      </div>
      <p className="mt-6 text-gray-700 text-lg font-semibold">Loading ToyTopia...</p>
    </div>
  );
};

export default Loading;
