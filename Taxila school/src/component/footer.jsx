import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Taxila School</span>
            </div>
            <p className="text-gray-400 mb-4">
              Committed to excellence in education, nurturing young minds from Nursery to 5th Grade with quality learning and holistic development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-bold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-blue-400 transition-colors">Facilities</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-blue-400 transition-colors">Classes</a></li>
              <li><a href="#admission" className="text-gray-400 hover:text-blue-400 transition-colors">Admission</a></li>
            </ul>
          </motion.div>

          {/* Classes Offered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-bold mb-4 block">Classes Offered</span>
            <ul className="space-y-2">
              <li className="text-gray-400">Nursery (3-4 years)</li>
              <li className="text-gray-400">Kindergarten (4-5 years)</li>
              <li className="text-gray-400">Class 1st to 3rd</li>
              <li className="text-gray-400">Class 4th & 5th</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-lg font-bold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, School District, City - 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+91 123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@taxilaschool.edu</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Taxila School. All rights reserved. | Designed with excellence in education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;