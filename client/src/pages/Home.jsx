// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-lg p-8 shadow-xl"
        >
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-extrabold mb-4 text-center text-white leading-tight"
          >
            Empowering Communities Through <span className="text-red-500">Equitable Access</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
          >
            We strive to create a society where everyone has access to education, healthcare, justice, and environmental sustainability, empowering each individual to thrive with dignity and respect.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <a 
              href="/membership"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200"
            >
              Join Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
