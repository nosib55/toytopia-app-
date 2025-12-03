import React from "react";
import { FaShieldAlt, FaUserShield, FaCookieBite, FaEnvelope } from "react-icons/fa";

const PrivacyPolicy = ({
  companyName = "ToyTopia",
  contactEmail = "support@toytopia.com",
  effectiveDate = "January 01, 2025",
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-14 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-2">
            Effective Date: <span className="font-semibold text-gray-700">{effectiveDate}</span>
          </p>
        </div>

        {/* Section Template */}
        <Section
          icon={<FaUserShield className="text-purple-600 text-2xl" />}
          title="1. Introduction"
          content={`${companyName} ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your data.`}
        />

        <Section
          icon={<FaShieldAlt className="text-pink-600 text-2xl" />}
          title="2. Information We Collect"
          content={
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Personal details such as name, email, and delivery address.</li>
              <li>Purchase history, payment details (no full card info stored).</li>
              <li>Browsing behavior, device information, and interaction tracking.</li>
              <li>Technical information such as IP address and browser type.</li>
            </ul>
          }
        />

        <Section
          icon={<FaShieldAlt className="text-indigo-600 text-2xl" />}
          title="3. How We Use Your Information"
          content={
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>To process orders and provide customer service.</li>
              <li>To improve website functionality and user experience.</li>
              <li>To send important updates or promotional content (optional).</li>
              <li>To ensure security and fraud prevention.</li>
            </ul>
          }
        />

        <Section
          icon={<FaCookieBite className="text-yellow-500 text-2xl" />}
          title="4. Cookies & Tracking Technologies"
          content={`We use cookies and analytics tools to improve service quality, analyze usage, and personalize the browsing experience. You may disable cookies through your browser settings.`}
        />

        <Section
          icon={<FaShieldAlt className="text-green-600 text-2xl" />}
          title="5. Sharing Your Information"
          content={
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Logistics and delivery partners.</li>
              <li>Payment service providers.</li>
              <li>Analytics platforms and website hosting providers.</li>
              <li>Legal authorities if required by law.</li>
            </ul>
          }
        />

        <Section
          icon={<FaUserShield className="text-blue-500 text-2xl" />}
          title="6. Data Security & Retention"
          content={`We store personal data only for as long as necessary. We use modern security practices to safeguard your information; however, no system is completely secure. In case of a security incident, we will notify affected users promptly.`}
        />

        <Section
          icon={<FaUserShield className="text-red-500 text-2xl" />}
          title="7. Children's Privacy"
          content={`Our services are not intended for children under the age of 13. We do not knowingly collect personal data from minors. If you believe a child has provided information, please contact us immediately.`}
        />

        <Section
          icon={<FaShieldAlt className="text-purple-500 text-2xl" />}
          title="8. Your Rights"
          content={`Depending on your region, you may request to access, correct, delete, or restrict your data. Reach out to us via email to exercise these rights.`}
        />

        <Section
          icon={<FaShieldAlt className="text-pink-500 text-2xl" />}
          title="9. International Data Transfers"
          content={`Your data may be transferred to locations outside your country. We take steps to ensure data protections meet legal requirements.`}
        />

        <Section
          icon={<FaShieldAlt className="text-indigo-500 text-2xl" />}
          title="10. Updates to This Policy"
          content={`We may periodically update this Privacy Policy. Any changes will be reflected on this page with an updated effective date.`}
        />

        <Section
          icon={<FaEnvelope className="text-green-600 text-2xl" />}
          title="11. Contact Us"
          content={
            <p className="text-gray-700">
              For questions or requests, email us at:{" "}
              <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">
                {contactEmail}
              </a>
            </p>
          }
        />

        <p className="text-xs text-gray-400 mt-10 text-center">
          This policy is for informational purposes only and is not legal advice.
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

export default PrivacyPolicy;
