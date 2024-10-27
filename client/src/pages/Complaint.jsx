// Complaint.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Complaint = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-extrabold mb-6 text-center text-white"
        >
          Register a Complaint
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="text-lg text-gray-300 text-center max-w-xl mx-auto mb-12"
        >
          We value your feedback and are committed to addressing any issues you face. Please fill out the form below to register your complaint.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-8 max-w-lg mx-auto"
        >
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Complaint Details</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Describe your complaint in detail"
              rows="5"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Submit Complaint
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Complaint;
