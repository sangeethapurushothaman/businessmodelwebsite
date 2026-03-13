import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Glass Navbar */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-lg shadow-blue-200">
                A
              </div>

              <h1 className="text-lg font-semibold text-gray-800">
                Apex<span className="text-blue-600 font-bold">Corp</span>
              </h1>
            </motion.div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6">

            {links.map((link) => (
              <motion.a
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-gray-600 font-medium hover:text-blue-600 transition"
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}

          </nav>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition"
          >
            Get Quote
            <ArrowRight size={18} />
          </motion.button>

        </div>

      </div>
    </header>
  );
};

export default Header;