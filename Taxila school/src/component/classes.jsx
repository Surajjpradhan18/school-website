import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Smile, BookOpen, Users, Star, GraduationCap } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      icon: Baby,
      name: 'Nursery',
      age: '3-4 years',
      description: 'Introduction to learning through play-based activities and basic skills development',
      subjects: ['Pre-Reading', 'Pre-Math', 'Arts & Crafts', 'Music & Movement'],
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Smile,
      name: 'Kindergarten',
      age: '4-5 years',
      description: 'Building foundational skills in a fun and engaging learning environment',
      subjects: ['Phonics', 'Numbers', 'Creative Arts', 'Physical Education'],
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: BookOpen,
      name: 'Class 1st',
      age: '5-6 years',
      description: 'Formal education begins with focus on reading, writing, and basic mathematics',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      name: 'Class 2nd',
      age: '6-7 years',
      description: 'Expanding knowledge and developing critical thinking skills',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'Art'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Star,
      name: 'Class 3rd',
      age: '7-8 years',
      description: 'Advanced learning with emphasis on comprehension and analytical skills',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'General Knowledge'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: GraduationCap,
      name: 'Class 4th & 5th',
      age: '8-10 years',
      description: 'Comprehensive curriculum preparing students for higher education',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'Environmental Studies'],
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Classes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning programs from Nursery to 5th Grade, designed to nurture every child's potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classInfo, index) => (
            <motion.div
              key={classInfo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${classInfo.color} p-6 text-white`}>
                <classInfo.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-1">{classInfo.name}</h3>
                <p className="text-white/90">Age: {classInfo.age}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{classInfo.description}</p>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Subjects Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {classInfo.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;