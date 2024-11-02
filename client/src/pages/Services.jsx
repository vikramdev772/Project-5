import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Education",
      description: "Inclusive educational programs fostering critical thinking and life skills for community empowerment.",
      icon: "📚"
    },
    {
      title: "Healthcare",
      description: "Accessible healthcare initiatives focusing on holistic well-being and preventive care for all.",
      icon: "🏥"
    },
    {
      title: "Justice",
      description: "Advocacy for human rights, fair representation, and a just legal framework for all communities.",
      icon: "⚖️"
    },
    {
      title: "Environmental Sustainability",
      description: "Promoting sustainable practices that protect and preserve our natural resources.",
      icon: "🌱"
    },
    {
      title: "Equality and Inclusivity",
      description: "Striving for a society where everyone is treated with respect, fairness, and dignity.",
      icon: "🤝"
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 min-h-screen">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer a range of services and programs to support our mission. Explore our initiatives designed to promote education, health, justice, and sustainability.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                
                {/* Learn More Link */}
                <div className="mt-6 flex items-center">
                  <a 
                    href={`#${service.title.toLowerCase()}`} 
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Learn more 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get Started
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;