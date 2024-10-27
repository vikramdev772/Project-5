// Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: "Education", description: "Inclusive educational programs fostering critical thinking and life skills for community empowerment." },
    { title: "Healthcare", description: "Accessible healthcare initiatives focusing on holistic well-being and preventive care for all." },
    { title: "Justice", description: "Advocacy for human rights, fair representation, and a just legal framework for all communities." },
    { title: "Environmental Sustainability", description: "Promoting sustainable practices that protect and preserve our natural resources." },
    { title: "Equality and Inclusivity", description: "Striving for a society where everyone is treated with respect, fairness, and dignity." },
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
          Our Services
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          We offer a range of services and programs to support our mission. Explore our initiatives designed to promote education, health, justice, and sustainability.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
