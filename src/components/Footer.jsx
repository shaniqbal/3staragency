import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Massive Typography Footer */}
      <div className="relative py-20 border-t border-white/10">
        {/* Massive Agency Text */}
        <div className="relative overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-montserrat font-black text-white/5 text-center leading-none select-none"
          >
            3 STAR AGENCY
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-montserrat font-black text-white mb-6"
              >
                3<span className="text-primary">★</span>Agency
              </motion.h3>
              <p className="text-gray-400 font-source text-lg leading-relaxed mb-6">
                Your trusted partner in luxury real estate. Delivering excellence across Lahore&apos;s premier developments since 2009.
              </p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {['facebook', 'instagram', 'linkedin', 'twitter'].map((social, index) => (
                  <motion.a
                    key={index}
                    href={`#${social}`}
                    className="w-12 h-12 rounded-full glassmorphism bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary flex items-center justify-center transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white group-hover:text-primary transition-colors text-xl">
                      {social[0].toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'Societies', 'Contact'].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition-colors font-source flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4 text-gray-400 font-source">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-primary mr-2 mt-1">📍</span>
                  <span>Office 179A Bahria Town LHR</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href="tel:03014734113"
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <span className="text-primary mr-2">📞</span>
                    03014734113
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="mailto:info@3staragency.com"
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <span className="text-primary mr-2">✉️</span>
                    info@3staragency.com
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 font-source text-sm md:text-base">
              © {new Date().getFullYear()} 3 Star Agency. All rights reserved.
            </p>
            
            {/* Designer Credit with hover animation */}
            <motion.p
              className="text-gray-400 font-source text-sm md:text-base relative group"
            >
              Designed by{' '}
              <a
                href="#designer"
                className="text-primary font-semibold relative inline-block"
              >
                Shan Iqbal
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
