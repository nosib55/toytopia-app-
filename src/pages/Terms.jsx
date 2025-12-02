import React from "react";

const Terms = ({
  companyName = "Your Toy Store",
  contactEmail = "support@yourtoystore.com",
  effectiveDate = "October 25, 2025",
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">
          Effective date: <span className="font-medium">{effectiveDate}</span>
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the {companyName} website, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, you must not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use of the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We make every effort to ensure product details, pricing, and availability are accurate. However, errors or omissions may occur. We reserve the right to correct them and to refuse orders where necessary.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Purchases and Payments</h2>
          <p className="text-gray-700 leading-relaxed">
            All purchases are subject to availability and confirmation of the order price. Payment must be made through our authorized payment gateways. We do not store full card numbers on our servers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Shipping and Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Delivery times are estimates and not guaranteed. {companyName} is not responsible for delays caused by carriers, weather, or unforeseen events.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Returns and Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Please refer to our Returns Policy for details. Returns and refunds are handled in accordance with the policy in place at the time of purchase.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, images, graphics, logos, and software, is the property of {companyName} or its licensors and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            {companyName} shall not be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with your use of the website or products purchased.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by the laws of the country where {companyName} operates. Disputes shall be resolved in the appropriate courts of that jurisdiction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns regarding these Terms, please contact us at:
          </p>
          <p className="mt-2 font-medium">
            {companyName} — <a className="text-blue-600" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </section>

        <p className="text-xs text-gray-400 mt-6">
          Note: This document is for informational purposes and does not constitute legal advice. Consult a qualified attorney to ensure compliance with local laws.
        </p>
      </div>
    </div>
  );
};

export default Terms;
