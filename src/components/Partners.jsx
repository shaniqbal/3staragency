import { motion } from 'framer-motion';

const societies = [
  "DHA Lahore", "Bahria Town", "Soul City", "Lake City", 
  "Eden City", "Green City", "State Life Housing", "Paragon City",
  "Wapda Town", "Park View City", "Capital Smart City", "Taj Residencia"
];

const Partners = () => {
  return (
    <section id="societies" className="py-24 bg-offwhite overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-dark mb-4">
          We Are <span className="text-gradient">Dealing In</span>
        </h2>
        <p className="text-lg md:text-xl font-source text-gray-600">
          Trusted partners in Lahore&apos;s premier developments
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-offwhite to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-offwhite to-transparent z-10"></div>

        {/* Infinite Marquee */}
        <div className="flex">
          <motion.div
            className="flex gap-6 md:gap-8 pr-6 md:pr-8"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {societies.map((society, index) => (
              <motion.div
                key={index}
                className="glassmorphism bg-white/90 backdrop-blur-sm px-8 md:px-14 py-6 md:py-8 rounded-2xl whitespace-nowrap border border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-xl md:text-3xl font-rajdhani font-bold text-dark group-hover:text-primary transition-colors">
                  {society}
                </span>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {societies.map((society, index) => (
              <motion.div
                key={`dup-${index}`}
                className="glassmorphism bg-white/90 backdrop-blur-sm px-8 md:px-14 py-6 md:py-8 rounded-2xl whitespace-nowrap border border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-xl md:text-3xl font-rajdhani font-bold text-dark group-hover:text-primary transition-colors">
                  {society}
                </span>
              </motion.div>
            ))}
            {/* Third set for even smoother loop */}
            {societies.map((society, index) => (
              <motion.div
                key={`dup2-${index}`}
                className="glassmorphism bg-white/90 backdrop-blur-sm px-8 md:px-14 py-6 md:py-8 rounded-2xl whitespace-nowrap border border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-xl md:text-3xl font-rajdhani font-bold text-dark group-hover:text-primary transition-colors">
                  {society}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Counting Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Team Members" },
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Properties Sold" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 glassmorphism bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary transition-all group"
            >
              <motion.h3
                className="text-4xl md:text-5xl lg:text-6xl font-rajdhani font-bold text-primary mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-source font-semibold text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
