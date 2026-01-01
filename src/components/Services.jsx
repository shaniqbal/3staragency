import { motion } from 'framer-motion';

const services = [
  {
    title: "Buying & Selling",
    description: "Expert guidance for property transactions with market-leading insights and seamless execution",
    icon: "🏡",
    size: "large",
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
  },
  {
    title: "Construction",
    description: "Premium construction services delivering architectural excellence",
    icon: "🏗️",
    size: "tall",
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop"
  },
  {
    title: "Digital Marketing",
    description: "Strategic property marketing that drives results",
    icon: "📱",
    size: "medium"
  },
  {
    title: "Legal Advisory",
    description: "Complete legal support for property transactions",
    icon: "⚖️",
    size: "medium"
  },
  {
    title: "Property Management",
    description: "Comprehensive management solutions for your investments",
    icon: "🔑",
    size: "medium"
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-32 bg-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-dark mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl md:text-2xl font-source text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[280px] gap-6"
        >
          {services.map((service, index) => {
            const sizeClasses = {
              large: 'md:col-span-3 md:row-span-2',
              tall: 'md:col-span-3 md:row-span-2',
              medium: 'md:col-span-2 md:row-span-1',
              small: 'md:col-span-2 md:row-span-1'
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${sizeClasses[service.size]} relative glassmorphism bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all cursor-pointer group border border-gray-200 overflow-hidden`}
              >
                {/* Background Image (if exists) */}
                {service.bgImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                )}
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-source text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Learn More Arrow */}
                  <motion.div
                    className="flex items-center text-primary font-montserrat font-semibold text-sm mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
