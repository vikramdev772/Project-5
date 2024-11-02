import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Membership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    membershipType: 'individual'
  });

  const membershipTypes = [
    {
      type: 'individual',
      title: 'Individual',
      price: '$10',
      period: '/month',
      features: [
        'Access to community events',
        'Monthly newsletter',
        'Voting rights',
        'Member discounts'
      ]
    },
    {
      type: 'family',
      title: 'Family',
      price: '$25',
      period: '/month',
      features: [
        'All Individual benefits',
        'Family event access',
        'Additional member cards',
        'Family support services'
      ]
    },
    {
      type: 'corporate',
      title: 'Corporate',
      price: '$100',
      period: '/month',
      features: [
        'All Family benefits',
        'Corporate recognition',
        'Event sponsorship',
        'Priority support'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 min-h-screen">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Become a Member</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Join us in our mission to foster a society rooted in equality, respect, and dignity. 
            Choose a membership plan that suits your needs and become part of our community.
          </p>
        </motion.div>

        {/* Membership Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {membershipTypes.map((plan, index) => (
            <div 
              key={plan.type}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setFormData({ ...formData, membershipType: plan.type })}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    formData.membershipType === plan.type
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
            
            <div className="relative z-10 space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800"
                  placeholder="Tell us why you want to join..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Complete Application
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </form>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 text-center text-gray-600"
          >
            <p>
              Already a member?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in here
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;