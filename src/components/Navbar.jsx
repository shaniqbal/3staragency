import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Societies', href: '#societies' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Floating Capsule Navbar - Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <motion.div
          className={`glassmorphism backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl transition-all duration-300 ${
            scrolled ? 'bg-dark/90' : 'bg-white/10'
          }`}
          style={{
            boxShadow: scrolled ? '0 0 40px rgba(238, 28, 39, 0.3)' : '0 10px 40px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl font-montserrat font-black text-white mr-4"
              whileHover={{ scale: 1.05 }}
            >
              3<span className="text-primary">★</span>Agency
            </motion.a>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white/80 hover:text-white font-source font-semibold text-sm transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-primary text-white font-montserrat font-bold rounded-full hover:bg-red-600 transition-all shadow-lg hover:shadow-primary/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(238, 28, 39, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="glassmorphism bg-dark/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="text-xl font-montserrat font-black text-white"
              whileHover={{ scale: 1.05 }}
            >
              3<span className="text-primary">★</span>Agency
            </motion.a>

            <button
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden bg-dark/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl font-montserrat font-bold text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
              className="mt-8 px-8 py-4 bg-primary text-white font-montserrat font-bold rounded-full hover:bg-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
