import React from "react";

const PrivacyPolicy = ({
  companyName = "Your Toy Store",
  contactEmail = "support@yourtoystore.com",
  effectiveDate = "October 25, 2025",
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          Effective date: <span className="font-medium">{effectiveDate}</span>
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            {companyName} ("we", "us", or "our") respects your privacy and is committed
            to protecting it through our compliance with this policy. This document
            explains what information we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Account information you provide (name, email, address, etc.).</li>
            <li>Order and payment details when you make purchases (note: we do not store full card numbers on our servers).</li>
            <li>Usage data such as pages visited, clicks, and browsing behavior on our site.</li>
            <li>Device and technical information (IP address, browser type, device identifiers).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Process and fulfill orders, and provide customer support.</li>
            <li>Improve, personalize, and secure our website and services.</li>
            <li>Send transactional messages, order confirmations, and important updates.</li>
            <li>Send marketing emails if you opt in (you can unsubscribe at any time).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to operate the website and analyze usage. You can control cookie preferences via your browser settings. Third-party services (analytics, advertising) may also place cookies; please check their privacy policies for details.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Sharing & Third Parties</h2>
          <p className="text-gray-700 leading-relaxed">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Payment processors and delivery partners to fulfill orders.</li>
            <li>Service providers who support our business (analytics, email delivery, hosting).</li>
            <li>When required by law or to protect our rights and users.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Data Retention & Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal information only as long as necessary for the purposes described. We implement reasonable security measures to protect your data, but no system is 100% secure—if a breach occurs we will notify affected users as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not directed to children under 13 (or the minimum age under local law). We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us and we will take steps to delete it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on your jurisdiction, you may have rights including access, correction, deletion, and portability of your personal data. To exercise these rights, contact us at the email below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. International Transfers</h2>
          <p className="text-gray-700 leading-relaxed">
            Your information may be transferred to and processed in countries other than your own. We will take appropriate steps to ensure your data is treated securely and in accordance with this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will post the updated policy with an updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions or requests about this policy, contact us at:
          </p>
          <p className="mt-2 font-medium">{companyName} — <a className="text-blue-600" href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
        </section>

        <p className="text-xs text-gray-400 mt-6">
          Note: This policy is provided for informational purposes and does not constitute legal advice. We recommend consulting a qualified attorney to adapt this policy to your jurisdiction and business needs.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
