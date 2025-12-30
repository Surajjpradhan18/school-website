import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Curriculum enriched with Indian values and modern academic standards.'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Dedicated teachers from Bihar committed to every child\'s growth.'
    },
    {
      icon: Award,
      title: 'Excellence Awards',
      description: 'Recognized for outstanding academic achievements in the district.'
    },
    {
      icon: Heart,
      title: 'Caring Environment',
      description: 'A second home where every student is treated like family.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Taxila School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deeply rooted in our culture, Taxila School provides a blend of traditional wisdom and modern knowledge to shape the future leaders of Bihar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              className="w-full h-[400px] object-cover" 
              alt="Classroom session in Bihar"
             src="https://images.unsplash.com/photo-1573894998033-c0cef4ed722b" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Environment</h3>
            <p className="text-gray-600 mb-4 text-lg">
              Our campus is designed to be a sanctuary of learning. Surrounded by nature, we offer an atmosphere that encourages focus, creativity, and peace of mind.
            </p>
            <p className="text-gray-600 text-lg">
              We believe that a connection to our roots is essential. Our school celebrates local festivals, arts, and culture alongside a rigorous academic curriculum, ensuring our students grow up to be well-rounded individuals who are proud of their heritage.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow border border-orange-200"
            >
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;