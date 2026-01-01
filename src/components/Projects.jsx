import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Urban City Lahore",
    description: "Modern residential community with world-class amenities and infrastructure",
    location: "Lahore, Pakistan",
    type: "Residential Development",
    color: "from-blue-600 to-cyan-500",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop"
  },
  {
    title: "DHA Phase 9 Prism",
    description: "Luxurious apartments with premium finishes in the heart of DHA",
    location: "DHA Lahore",
    type: "Luxury Apartments",
    color: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop"
  },
  {
    title: "Bahria Orchard",
    description: "Serene residential plots in a gated community with lush greenery",
    location: "Bahria Town Lahore",
    type: "Residential Plots",
    color: "from-green-600 to-teal-500",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop"
  },
  {
    title: "Soul City",
    description: "Premium commercial and residential hub with modern architecture",
    location: "Raiwind Road, Lahore",
    type: "Mixed Development",
    color: "from-orange-600 to-red-500",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity, top: `${80 + index * 20}px` }}
      className="sticky mb-8"
    >
      <div className={`relative bg-gradient-to-br ${project.color} rounded-3xl overflow-hidden min-h-[500px] shadow-2xl group`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between min-h-[500px]">
          <div>
            <motion.span
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-rajdhani font-semibold mb-6 border border-white/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.type}
            </motion.span>
            
            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 font-source mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              className="flex items-center text-white/80 font-source text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              {project.location}
            </motion.div>
          </div>
          
          <motion.button
            className="px-8 py-4 bg-white text-gray-900 font-montserrat font-bold rounded-full self-start hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            View Details
            <svg className="inline-block w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl font-source text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of premium developments across Lahore
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
