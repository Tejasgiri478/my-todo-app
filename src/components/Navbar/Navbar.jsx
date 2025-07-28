import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-colors" 
              to="/"
            >
              Task Manager
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              All Tasks
            </Link>
            <Link 
              to="/active" 
              className="text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Active
            </Link>
            <Link 
              to="/completed" 
              className="text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Completed
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-md"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6 text-yellow-300" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6 text-yellow-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full top-16 left-0 z-20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-blue-50 to-purple-50 shadow-inner">
          <Link
            to="/"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-1 shadow-md mb-2"
            onClick={toggleMenu}
          >
            All Tasks
          </Link>
          <Link
            to="/active"
            className="text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-1 shadow-md mb-2"
            onClick={toggleMenu}
          >
            Active
          </Link>
          <Link
            to="/completed"
            className="text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-1 shadow-md"
            onClick={toggleMenu}
          >
            Completed
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
