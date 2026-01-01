import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Contact = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl font-source text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Office Location
                  </h3>
                  <p className="text-lg font-source text-gray-300">
                    Office 179A Bahria Town LHR
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:03014734113"
                    className="text-lg font-source text-gray-300 hover:text-primary transition-colors"
                  >
                    03014734113
                  </a>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">✉️</div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@3staragency.com"
                    className="text-lg font-source text-gray-300 hover:text-primary transition-colors"
                  >
                    info@3staragency.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white font-montserrat font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-montserrat font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-montserrat font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <MagneticButton className="w-full">
                Send Message
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
