import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">AI for Climate Action</h3>
            <p className="text-sm mb-4">
              Leveraging artificial intelligence to combat climate change and support the goals of SDG 13 through innovative solutions for energy optimization, weather prediction, and renewable energy management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About SDG 13</a></li>
              <li><a href="#energy" className="hover:text-accent transition-colors">Energy Optimization</a></li>
              <li><a href="#weather" className="hover:text-accent transition-colors">Weather Prediction</a></li>
              <li><a href="#renewable" className="hover:text-accent transition-colors">Renewable Energy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#resources" className="hover:text-accent transition-colors">Research Papers</a></li>
              <li><a href="#resources" className="hover:text-accent transition-colors">Tools & Technologies</a></li>
              <li><a href="#resources" className="hover:text-accent transition-colors">Organizations</a></li>
              <li><a href="#resources" className="hover:text-accent transition-colors">Educational Materials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@aiforclimateaction.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Climate Street, Earth</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} AI for Climate Action. All rights reserved.</p>
          <p className="text-sm mt-2">
            Supporting Sustainable Development Goal 13: Climate Action
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

