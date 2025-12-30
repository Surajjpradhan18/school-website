import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'Home',
    section: 'home'
  }, {
    label: 'About',
    section: 'about'
  }, {
    label: 'Facilities',
    section: 'facilities'
  }, {
    label: 'Classes',
    section: 'classes'
  }, {
    label: 'Admission',
    section: 'admission'
  }];
  return <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Taxila School, Bareo (Nawada)</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => <motion.button key={item.section} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => scrollToSection(item.section)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.label}
              </motion.button>)}
            <Button onClick={() => scrollToSection('admission')} className="bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden mt-4 pb-4">
            {navItems.map(item => <button key={item.section} onClick={() => scrollToSection(item.section)} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection('admission')} className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
          </motion.div>}
      </nav>
    </header>;
};
export default Header;