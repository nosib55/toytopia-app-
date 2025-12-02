import React from "react";

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
        Welcome to the ToyTopia Blog 🎠
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-700 text-lg mb-12">
        ToyTopia is a local kids’ toy store platform — a fun and creative space 
        where families can discover, explore, and support local toy sellers. 
        Our mission is to make finding quality, imaginative toys easy and enjoyable 
        for every parent and child.
      </p>

      <div className="space-y-10">
        {/* Section 1 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-purple-400 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">
            🌈 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At ToyTopia, we believe that every child deserves access to safe, 
            creative, and high-quality toys. Our mission is to connect families 
            with local toy makers and shops, helping small businesses grow while 
            inspiring endless fun for children.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-pink-400 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-pink-600 mb-3">
            🧸 What You Can Do on ToyTopia
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Browse a wide range of local toys by category and price.</li>
            <li>View detailed information, images, and ratings for each toy.</li>
            <li>Login or Register securely with Firebase Authentication.</li>
            <li>Leave feedback and ratings for your favorite toys.</li>
            <li>Access your personal profile to update name or photo.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-yellow-400 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-yellow-600 mb-3">
            💻 How ToyTopia Works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ToyTopia is built as a modern single-page React application. 
            It integrates Firebase for secure user authentication and uses 
            dynamic routes to ensure a smooth user experience.  
            JSON-based data is used to display toy details, and protected routes 
            ensure privacy for logged-in users.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-400 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            🚀 Future Plans
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our future goal is to expand ToyTopia into a full e-commerce platform 
            where families can directly purchase toys online, track orders, and 
            enjoy personalized toy recommendations based on their child’s interests.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          💡 Stay tuned for more updates and stories from{" "}
          <span className="font-semibold text-purple-600">ToyTopia!</span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
