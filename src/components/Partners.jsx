import { motion } from 'framer-motion';

const partners = [
  "Tech Corp", "Digital Solutions", "Innovation Labs", "Smart Systems",
  "Future Tech", "Cloud Services", "Data Analytics", "AI Partners",
  "Web Masters", "Mobile First", "Design Studio", "Brand Agency"
];

const Partners = () => {
  return (
    <section className="py-16 bg-offwhite overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-2">
          Trusted <span className="text-gradient">Partners</span>
        </h2>
        <p className="text-lg font-source text-gray-600">
          Collaborating with industry leaders
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-offwhite to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-offwhite to-transparent z-10"></div>

        {/* Marquee container */}
        <div className="flex">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glassmorphism bg-white/80 backdrop-blur-sm px-12 py-6 rounded-2xl whitespace-nowrap border border-gray-200 hover:border-primary transition-colors"
              >
                <span className="text-2xl font-rajdhani font-bold text-dark">
                  {partner}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`dup-${index}`}
                className="glassmorphism bg-white/80 backdrop-blur-sm px-12 py-6 rounded-2xl whitespace-nowrap border border-gray-200 hover:border-primary transition-colors"
              >
                <span className="text-2xl font-rajdhani font-bold text-dark">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
