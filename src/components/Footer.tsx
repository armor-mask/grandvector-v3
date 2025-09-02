import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      'AI Voice Callers',
      'Appointment Setting',
      'Customer Support AI',
      'Lead Generation',
      'Custom Development'
    ],
    Company: [
      'About Us',
      'Case Studies',
      'Careers',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Integration Guides',
      'Support Center',
      'Status Page'
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/logo_vector-v3.svg" 
                alt="Grand Vector Logo" 
                className="w-8 h-8"
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Grand Vector
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with AI automation that scales customer engagement, 
              generates infinite leads, and integrates seamlessly across all channels.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@grandvector.ai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Grand Vector. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;