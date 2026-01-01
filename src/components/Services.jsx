import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    icon: "🌐",
    size: "large"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
    size: "medium"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that convert",
    icon: "🎨",
    size: "medium"
  },
  {
    title: "Branding",
    description: "Complete brand identity and visual systems",
    icon: "✨",
    size: "small"
  },
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that drive results",
    icon: "📊",
    size: "small"
  },
  {
    title: "E-Commerce",
    description: "Powerful online stores that scale",
    icon: "🛍️",
    size: "large"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-dark mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl font-source text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const sizeClasses = {
              large: 'md:col-span-2 md:row-span-2',
              medium: 'md:col-span-2',
              small: 'md:col-span-2'
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${sizeClasses[service.size]} glassmorphism bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all cursor-pointer group border border-gray-200`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-source text-lg">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
