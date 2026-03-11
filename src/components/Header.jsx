import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-[100] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO - stays on the left */}
          <div className="flex items-center space-x-2 z-[110]">
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
              A
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Apex<span className="text-blue-600">Corp</span>
            </h1>
          </div>

          {/* DESKTOP NAV - hidden on mobile, shows on md screens (768px+) */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
            {/* This is the desktop version of the button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md">
              Get a Quote
            </button>
          </nav>

          {/* MOBILE TOGGLE - hidden on desktop, shows on mobile */}
          <button 
            className="md:hidden p-2 text-gray-600 z-[110] relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden"
            />
            
            {/* The Actual Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[100] shadow-2xl md:hidden pt-24 px-8"
            >
              <div className="flex flex-col space-y-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-3"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* MOBILE "GET A QUOTE" - Inside the Drawer */}
                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
                    Get a Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;