// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900 bg-opacity-40 backdrop-blur-lg shadow-lg border-b border-gray-700 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-auto" src="/logo-white.svg" alt="Logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-4 py-3 rounded-md text-base font-medium uppercase tracking-wider transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </Link>
            {["Services", "About", "Complaint", "Membership"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="text-white hover:bg-gray-700 px-4 py-3 rounded-md text-base font-medium uppercase tracking-wider transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Donate Button (Desktop Only) */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-80 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Home
            </Link>
            {["Services", "About", "Complaint", "Membership"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2 space-y-1">
              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
