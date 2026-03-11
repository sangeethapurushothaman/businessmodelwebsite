import React from "react";
// 1. IMPORT LINK HERE
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-[#1f2a37] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold text-lg">
                A
              </div>
              <h2 className="text-xl font-semibold text-white">
                Apex<span className="text-blue-500">Corp</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Delivering excellence in professional services since 2005.
              We help businesses grow with innovative solutions and
              dedicated support.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href={isHome ? "#home" : "/#home"} className="hover:text-blue-500 transition">Home</a></li>
              <li><a href={isHome ? "#about" : "/#about"} className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href={isHome ? "#services" : "/#services"} className="hover:text-blue-500 transition">Services</a></li>
              <li><a href={isHome ? "#why-us" : "/#why-us"} className="hover:text-blue-500 transition">Why Choose Us</a></li>
              <li><a href={isHome ? "#testimonials" : "/#testimonials"} className="hover:text-blue-500 transition">Testimonials</a></li>
              <li><a href={isHome ? "#contact" : "/#contact"} className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-1" />
                <p>123 Business Avenue, Suite 100 <br /> New York, NY 10001</p>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone />
                <p>+1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail />
                <p>info@company.com</p>
              </div>
            </div>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright Link */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-sm">
          <Link
            to="/legalpage"
            className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer inline-block"
          >
            © 2026 <span className="font-semibold text-gray-300 hover:text-blue-500">ApexCorp</span>. All rights reserved.
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;