import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const links = [
    { name: "Home", href: "#top", active: true },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-lg shadow-blue-200">
              A
            </div>

            <h1 className="text-xl font-semibold text-gray-800">
              Apex<span className="text-blue-600 font-bold">Corp</span>
            </h1>
          </motion.div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
              variants={itemVariants}
              whileHover={{ y: -2, color: "#2563eb" }}
              className={`transition-colors duration-200 ${link.active
                ? "px-4 py-2 rounded-lg bg-blue-100 text-blue-600"
                : ""
                }`}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-shadow duration-300 shadow-md hover:shadow-blue-200"
          >
            Get a Quote
          </motion.button>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;