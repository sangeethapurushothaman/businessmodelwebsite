import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Logic to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: "Home", href: "#top" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="relative z-[110]" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold text-lg">
                A
              </div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                Apex<span className="text-blue-600">Corp</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-md shadow-blue-100">
              Get a Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative z-[110]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-[90]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl md:hidden z-[100] pt-20 flex flex-col"
            >
              <nav className="flex flex-col px-6 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-base font-bold text-gray-800 border-b border-gray-50 flex items-center justify-between group"
                  >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity">→</span>
                  </a>
                ))}
                <div className="pt-6">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 active:scale-95 transition-transform">
                    Get a Quote
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;