import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Get your favorite toys delivered quickly with our trusted delivery partners.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "⭐",
      title: "Best Quality Toys",
      desc: "We ensure top-quality toys made from safe and durable materials for your child.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: "🛡️",
      title: "Secure Purchase",
      desc: "Shop confidently with secure payment options and strong privacy protection.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "🎧",
      title: "24/7 Customer Support",
      desc: "Our support team is available around the clock to assist with any concerns.",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-slate-800">
        Why Choose <span className="text-pink-500">ToyTopia?</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white text-center border-t-4 ${item.color}`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
