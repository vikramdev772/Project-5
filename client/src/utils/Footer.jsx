// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 backdrop-blur-lg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              className="h-12 w-auto mb-4"
              src="/logo-white.svg"
              alt="Logo"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering communities through equitable access to education, health, justice, and sustainability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  About
                </a>
              </li>
              <li>
                <a href="/complaint" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Complaint
                </a>
              </li>
              <li>
                <a href="/membership" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FaFacebook className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FaTwitter className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FaInstagram className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FaYoutube className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FaLinkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Project 5 Organisation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
