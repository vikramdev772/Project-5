// Membership.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Membership = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-extrabold mb-6 text-center text-white"
        >
          Become a Member
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="text-lg text-gray-300 text-center max-w-xl mx-auto mb-12"
        >
          Join us in our mission to foster a society rooted in equality, respect, and dignity. Fill out the form below to become a valued member of our community.
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
              placeholder="John Doe"
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
            <label className="block text-gray-300 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="123-456-7890"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Message (Optional)</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tell us why you want to join..."
              rows="4"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Submit Application
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Membership;
