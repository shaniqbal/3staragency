const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-montserrat font-black text-white mb-4">
              3<span className="text-primary">★</span>Agency
            </h3>
            <p className="text-gray-400 font-source">
              Crafting neo-luxury digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Services', 'Projects', 'Partners', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors font-source"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 font-source">
              <li>Office 179A Bahria Town LHR</li>
              <li>
                <a href="tel:03014734113" className="hover:text-primary transition-colors">
                  03014734113
                </a>
              </li>
              <li>
                <a href="mailto:info@3staragency.com" className="hover:text-primary transition-colors">
                  info@3staragency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 font-source">
            © {new Date().getFullYear()} 3 Star Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
