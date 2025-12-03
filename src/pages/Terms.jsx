import React from "react";
import {
  FaCheckCircle,
  FaGavel,
  FaInfoCircle,
  FaShippingFast,
  FaUndo,
  FaShieldAlt,
  FaCopyright,
  FaExclamationTriangle,
  FaEnvelope,
} from "react-icons/fa";

const Terms = ({
  companyName = "ToyTopia",
  contactEmail = "support@toytopia.com",
  effectiveDate = "January 01, 2025",
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-14 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mt-2">
            Effective Date: <span className="font-semibold">{effectiveDate}</span>
          </p>
        </div>

        {/* SECTIONS */}
        <Section
          icon={<FaCheckCircle className="text-purple-600 text-2xl" />}
          title="1. Acceptance of Terms"
          content={`${companyName} provides services to you subject to these Terms. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree, you must discontinue using the platform.`}
        />

        <Section
          icon={<FaInfoCircle className="text-blue-600 text-2xl" />}
          title="2. Use of Website"
          content={`You agree to use our website responsibly and lawfully. You must not engage in activities that may harm, disrupt, or interfere with our services or the experience of other users.`}
        />

        <Section
          icon={<FaCheckCircle className="text-green-600 text-2xl" />}
          title="3. Product Information"
          content={`We strive to ensure that all product details, pricing, and availability are accurate. However, mistakes may occur. ${companyName} reserves the right to correct errors and cancel orders affected by inaccuracies.`}
        />

        <Section
          icon={<FaShieldAlt className="text-indigo-600 text-2xl" />}
          title="4. Purchases & Payments"
          content={`All orders are subject to availability and price confirmation. Payments must be completed via approved methods. Sensitive payment data is not stored on our servers.`}
        />

        <Section
          icon={<FaShippingFast className="text-yellow-600 text-2xl" />}
          title="5. Shipping & Delivery"
          content={`${companyName} aims to deliver all products on time, but delays may occur due to external factors such as carrier issues or weather conditions. Delivery dates are estimates, not guarantees.`}
        />

        <Section
          icon={<FaUndo className="text-pink-600 text-2xl" />}
          title="6. Returns & Refunds"
          content={`Returns and refunds follow the guidelines detailed in our Return Policy. Eligibility for refunds depends on product condition, return time frame, and proof of purchase.`}
        />

        <Section
          icon={<FaCopyright className="text-red-600 text-2xl" />}
          title="7. Intellectual Property"
          content={`All content on this website—including images, descriptions, graphics, trademarks, and branding—is the exclusive property of ${companyName} and protected by copyright laws. Unauthorized use is prohibited.`}
        />

        <Section
          icon={<FaExclamationTriangle className="text-orange-500 text-2xl" />}
          title="8. Limitation of Liability"
          content={`${companyName} is not liable for damages resulting from misuse of the website, delays, incorrect product information, or third-party issues. Your use of our platform is at your own risk.`}
        />

        <Section
          icon={<FaGavel className="text-purple-700 text-2xl" />}
          title="9. Governing Law"
          content={`These Terms are governed by the laws of the country where ${companyName} operates. Any disputes will be resolved exclusively in local courts.`}
        />

        <Section
          icon={<FaEnvelope className="text-green-600 text-2xl" />}
          title="10. Contact Information"
          content={
            <p className="text-gray-700">
              Questions about these Terms? Contact us at:{" "}
              <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">
                {contactEmail}
              </a>
            </p>
          }
        />

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-400 mt-10 text-center">
          This document is informational and not legal advice. Consult an attorney to ensure compliance with local laws.
        </p>
      </div>
    </div>
  );
};

const Section = ({ icon, title, content }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>

    <div className="pl-9 text-gray-700 leading-relaxed">{content}</div>

    <hr className="mt-6 border-gray-200" />
  </div>
);

export default Terms;
