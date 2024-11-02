import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    { 
      name: "John Doe", 
      position: "Founder & CEO", 
      description: "Passionate about creating equitable opportunities for all.",
      image: "/api/placeholder/200/200" // Using placeholder image
    },
    { 
      name: "Jane Smith", 
      position: "Director of Operations", 
      description: "Oversees projects and ensures smooth implementation.",
      image: "/api/placeholder/200/200"
    },
    { 
      name: "Alice Johnson", 
      position: "Head of Education Programs", 
      description: "Committed to providing inclusive educational services.",
      image: "/api/placeholder/200/200"
    }
  ];

  const milestones = [
    { year: "2010", title: "Foundation", description: "Started with a vision for equality" },
    { year: "2015", title: "Major Growth", description: "Expanded to 5 new regions" },
    { year: "2020", title: "Global Impact", description: "Reached 100,000 beneficiaries" }
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
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our organization is dedicated to fostering an inclusive society where everyone has access to education, healthcare, and justice. Learn more about our journey and the dedicated team behind our mission.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, our organization has been at the forefront of advocating for the rights of marginalized communities. Over the years, we have launched numerous initiatives to provide equitable access to education, healthcare, and justice. Our journey is driven by the belief that every individual deserves dignity, respect, and an equal opportunity to thrive.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <span className="text-4xl font-bold text-blue-600">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + 0.2 * index, duration: 0.6 }}
                className="group bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 relative mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-center mt-16"
        >
          <a 
            href="#join-us"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Join Our Mission
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;