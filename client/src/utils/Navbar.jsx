import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md shadow-md fixed top-0 w-full z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src="/src/assets/logo.png"
                alt="logo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 ml-auto">
            <Link
              to="/"
              className={`cursor-pointer text-gray-700 px-4 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition duration-300 ease-in-out
                ${isActive('/')
                  ? 'text-blue-600 bg-blue-50'
                  : 'hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Home
            </Link>
            {['Services', 'About', 'Complaint', 'Membership'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className={`cursor-pointer text-gray-700 px-4 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition duration-300 ease-in-out
                  ${isActive(`/${item.toLowerCase()}`)
                    ? 'text-blue-600 bg-blue-50'
                    : 'hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out
                ${isActive('/')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Home
            </Link>
            {['Services', 'About', 'Complaint', 'Membership'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out
                  ${isActive(`/${item.toLowerCase()}`)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
