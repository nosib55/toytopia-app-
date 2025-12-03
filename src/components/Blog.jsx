import React from "react";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">

      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          ToyTopia Blog
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore stories, ideas, and insights from the world of toys.  
          ToyTopia connects families with fun, creativity, and local toy makers.
        </p>
      </div>

      {/* BLOG SECTIONS */}
      <div className="space-y-12">
        
        {/* Section 1 */}
        <div className="group bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl border border-purple-200 p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
            🌈 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ToyTopia was created to support local toy sellers and bring families
            closer to high-quality, creative, and safe products. We believe every
            child should have access to toys that inspire imagination and joy.
            Our mission is to make discovering great toys easier — while helping
            small toy businesses grow.
          </p>
        </div>

        {/* Section 2 */}
        <div className="group bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl border border-pink-200 p-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
            🧸 What You Can Do on ToyTopia
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Browse toys by category, price, or type.</li>
            <li>See full details like rating, description, and availability.</li>
            <li>Create an account and keep your profile updated.</li>
            <li>Save your purchases and track your toy interests.</li>
            <li>Support small toy makers in your local community.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="group bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl border border-yellow-200 p-8">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
            💻 How ToyTopia Works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ToyTopia is a fully responsive React-based web application.  
            Secure login is powered by Firebase Authentication. Dynamic routing
            ensures smooth navigation, while MongoDB is used for toy storage 
            and purchase tracking. Everything is built to deliver a seamless 
            online shopping experience for families.
          </p>
        </div>

        {/* Section 4 */}
        <div className="group bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            🚀 Future Plans
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We're working on expanding ToyTopia into a complete e-commerce
            solution. Soon, users will be able to place orders, track delivery,
            enjoy personalized toy suggestions, and access exclusive offers.  
            Big features like reviews, coupons, seller dashboards, and more are
            on the way.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-14">
        <p className="text-gray-600">
          💡 Stay tuned for more updates from{" "}
          <span className="font-bold text-purple-600">ToyTopia</span>!
        </p>
      </div>

    </div>
  );
};

export default Blog;
