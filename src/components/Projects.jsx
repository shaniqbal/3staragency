import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    category: "Web Development",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive financial management",
    category: "Mobile App",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity for tech startup",
    category: "Branding",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform for business insights",
    category: "UI/UX Design",
    color: "from-green-500 to-teal-500"
  }
];

const ProjectCard = ({ project }) => {
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
      style={{ y, scale, opacity }}
      className="sticky top-20 mb-8"
    >
      <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between shadow-2xl`}>
        <div>
          <motion.span
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-rajdhani font-semibold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.span>
          <motion.h3
            className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-xl text-white/90 font-source"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>
        </div>
        <motion.button
          className="mt-8 px-8 py-4 bg-white text-gray-900 font-montserrat font-bold rounded-full self-start hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl font-source text-gray-400 max-w-2xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
