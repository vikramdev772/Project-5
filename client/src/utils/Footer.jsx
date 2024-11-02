import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-800">Your<span className="text-blue-600">Logo</span></span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Empowering communities through equitable access to education, health, justice, and sustainability. Together, we can make a difference.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Complaint', path: '/complaint' },
                { name: 'Membership', path: '/membership' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-600' },
                { icon: FaTwitter, label: 'Twitter', color: 'hover:text-blue-400' },
                { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-600' },
                { icon: FaYoutube, label: 'YouTube', color: 'hover:text-red-600' },
                { icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-700' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-gray-500 ${social.color} transition duration-300 ease-in-out transform hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Project 5 Organisation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;