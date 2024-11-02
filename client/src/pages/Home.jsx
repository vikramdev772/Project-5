import React from 'react';
import { ChevronRight, Users, Heart, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 min-h-screen w-full overflow-x-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 max-w-full overflow-hidden">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 md:w-72 h-48 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-100">
          <div className="max-w-4xl mx-auto">
            {/* Hero section */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-center text-gray-800 leading-tight">
              Empowering Communities Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Equitable Access
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
              We strive to create a society where everyone has access to education,
              healthcare, justice, and environmental sustainability, empowering each
              individual to thrive with dignity and respect.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                {
                  icon: <Users className="w-8 h-8 text-blue-500" />,
                  title: 'Community First',
                  description: 'Building stronger communities through collaboration and support',
                },
                {
                  icon: <Heart className="w-8 h-8 text-purple-500" />,
                  title: 'Equal Access',
                  description: 'Ensuring resources and opportunities are available to all',
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-500" />,
                  title: 'Global Impact',
                  description: 'Creating positive change on a local and global scale',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="flex flex-col items-center">
              <a
                href="/membership"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Join Our Mission
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-sm text-gray-500 text-center px-2">
                Join over 10,000+ members making a difference
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
