import React from 'react';
import { motion } from 'framer-motion';
import { Library, Microscope, Palette, Music, Trophy, Monitor, Bus, Utensils } from 'lucide-react';

const Facilities = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing modern amenities to support holistic development for every child
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Library */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="School library" src="https://images.unsplash.com/photo-1683143791282-425eb5ba041b" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Library className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Library</h3>
              <p className="text-gray-600">Extensive collection of books and stories.</p>
            </div>
          </motion.div>

          {/* Science Lab */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Science lab" src="https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Microscope className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Science Labs</h3>
              <p className="text-gray-600">Equipped for safe and fun experiments.</p>
            </div>
          </motion.div>

          {/* Computer Lab */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Computer lab" src="https://images.unsplash.com/photo-1694532408893-40aed9011673" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Monitor className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Computer Lab</h3>
              <p className="text-gray-600">Digital literacy for the modern age.</p>
            </div>
          </motion.div>

          {/* Sports */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Sports field" src="https://images.unsplash.com/photo-1438635187616-a64ab0eaf1c3" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Trophy className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Facilities</h3>
              <p className="text-gray-600">Large playground for Cricket, Football & Kho-Kho.</p>
            </div>
          </motion.div>

          {/* Art Studio */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Art class" src="https://images.unsplash.com/photo-1588072432836-e10032774350" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Palette className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Art Studio</h3>
              <p className="text-gray-600">Creative space for painting and crafts.</p>
            </div>
          </motion.div>

          {/* Music Room */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Music room" src="https://images.unsplash.com/photo-1699015693027-ef041fd04ae0" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Music className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Music Room</h3>
              <p className="text-gray-600">Classical and modern music training.</p>
            </div>
          </motion.div>

          {/* Transport */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="School bus" src="https://images.unsplash.com/photo-1582626157630-ee8f7afb925e" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Bus className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transport</h3>
              <p className="text-gray-600">Safe bus service across the city.</p>
            </div>
          </motion.div>

          {/* Cafeteria */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                <img className="w-full h-full object-cover" alt="Cafeteria" src="https://images.unsplash.com/photo-1697185125092-fedc94dc65c7" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Utensils className="absolute bottom-4 right-4 w-8 h-8 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cafeteria</h3>
              <p className="text-gray-600">Clean dining area for healthy meals.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;