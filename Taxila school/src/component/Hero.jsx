import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAdmission = () => {
    const element = document.getElementById('admission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Ancient Banyan tree landscape in India"
         src="https://images.unsplash.com/photo-1689767131983-aa3841ff075b" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-blue-50/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-800">Taxila School</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Nurturing young minds in Bihar with traditional values and modern education. Excellence from Nursery to 5th Grade in a safe, green environment.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={scrollToAdmission}
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Apply for Admission
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-800 hover:bg-blue-50 bg-white/50 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                className="w-full h-[500px] object-cover" 
                alt="Happy Indian school students"
               src="https://images.unsplash.com/photo-1697082977973-334ec650783e" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;