import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const LegalPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen">
      {/* Simple Navigation for Legal Page */}
      <nav className="border-b bg-gray-50 py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">ApexCorp Legal</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service & Privacy</h1>
        <p className="text-gray-500 mb-12 italic">Last Modified: March 10, 2026</p>

        {/* Section 1: Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Use of Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing the ApexCorp platform, you agree to comply with all applicable local, state, 
            and international laws. You are prohibited from using this site for any fraudulent 
            activity or attempting to breach our security protocols.
          </p>
        </section>

        {/* Section 2: Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property Rights</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-700">
              <strong>© {currentYear} ApexCorp. All rights reserved.</strong> All custom code, 
              graphics, and branding elements are the exclusive property of ApexCorp. 
              Unauthorized reproduction is strictly prohibited under federal copyright law.
            </p>
          </div>
        </section>

        {/* Section 3: Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            We value your privacy. ApexCorp does not sell user data to third parties. We collect 
            information purely to improve your user experience and provide technical support. 
            All sensitive data is encrypted using industry-standard SSL protocols.
          </p>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="mb-12 text-sm text-gray-500 bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold uppercase mb-2">Disclaimer</h3>
          <p>
            THE SERVICES ARE PROVIDED "AS IS." APEXCORP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, 
            INCLUDING THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          </p>
        </section>
      </main>

      <footer className="bg-gray-50 py-10 text-center border-t border-gray-200">
        <p className="text-gray-400 text-sm">
          Questions regarding these terms? Contact <span className="text-blue-600">legal@apexcorp.com</span>
        </p>
      </footer>
    </div>




  );
};

export default LegalPage;
