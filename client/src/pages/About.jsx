// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    { name: "John Doe", position: "Founder & CEO", description: "Passionate about creating equitable opportunities for all." },
    { name: "Jane Smith", position: "Director of Operations", description: "Oversees projects and ensures smooth implementation." },
    { name: "Alice Johnson", position: "Head of Education Programs", description: "Committed to providing inclusive educational services." },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-extrabold mb-10 text-center text-white"
        >
          About Us
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Our organization is dedicated to fostering an inclusive society where everyone has access to education, healthcare, and justice. Learn more about our journey and the dedicated team behind our mission.
        </motion.p>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-2xl font-bold mb-6 text-white"
          >
            Our History
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-gray-400 leading-relaxed"
          >
            Founded in 2010, our organization has been at the forefront of advocating for the rights of marginalized communities. Over the years, we have launched numerous initiatives to provide equitable access to education, healthcare, and justice. Our journey is driven by the belief that every individual deserves dignity, respect, and an equal opportunity to thrive.
          </motion.p>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-2xl font-bold mb-8 text-white"
          >
            Meet Our Team
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + 0.2 * index, duration: 0.6 }}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg p-6 text-center"
              >
                <h4 className="text-xl font-semibold text-red-400 mb-2">{member.name}</h4>
                <p className="text-gray-400 font-medium mb-4">{member.position}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
