import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent! We will get back to you soon.", {
      autoClose: 1500,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-5 text-base-content">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {/* Card */}
        <div className="bg-base-100 shadow-md rounded-xl p-8 grid md:grid-cols-2 gap-10 border border-base-300">

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>

            <p className="opacity-80 mb-3">
              If you have questions, feedback, or partnership inquiries, feel free to reach out.
            </p>

            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> support@toytopia.com</p>
              <p><strong>Phone:</strong> +880 9696-560361</p>
              <p><strong>Location:</strong> Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full mt-1"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full mt-1"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full mt-1"
                rows={4}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full bg-pink-500 text-white hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
