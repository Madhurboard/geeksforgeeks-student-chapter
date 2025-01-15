import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Assuming logo.svg is in the assets folder
import { FaArrowRight } from 'react-icons/fa'; // For icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-6 left-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-[160rem] -translate-x-1/2 mx-auto px-6 md:px-10 py-3 bg-white/70 backdrop-blur-md rounded-[2.4rem] shadow-lg hover:shadow-xl transition-shadow duration-500 z-50">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-inherit no-underline">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>

        {/* Center - Navigation Links (Hidden in Small Devices) */}
        <div className="hidden md:flex space-x-6 text-gray-800">
          <Link
            to="/events"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            Events
          </Link>
          <Link
            to="/members"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            Members
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            About
          </Link>
        </div>

        {/* Right - Hamburger Menu for Small Devices */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-gray-800 hover:text-green-600 transition-all duration-200 focus:outline-none relative"
            onClick={toggleMenu}
          >
            {/* Top Line */}
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-500 absolute transform ${
                isMenuOpen ? 'rotate-45 top-0' : '-top-1.5'
              }`}
            ></div>

            {/* Middle Line */}
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-500 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>

            {/* Bottom Line */}
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-500 absolute transform ${
                isMenuOpen ? '-rotate-45 bottom-0' : 'top-1.5'
              }`}
            ></div>
          </button>
        </div>

        {/* Right - GFG POTD (Visible in Medium and Larger Devices) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="https://www.geeksforgeeks.org/problem-of-the-day"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline hover:bg-green-600 hover:text-white hover:rounded-full px-3 py-1 flex items-center space-x-2 transition-all duration-200 no-underline"
          >
            <span>GFG POTD</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Small Devices */}
      <div
        className={`${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-1000 md:hidden`}
      >
        <div className="flex flex-col space-y-4 mt-4 text-gray-800 font-poppins">
          <Link
            to="/events"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            Events
          </Link>
          <Link
            to="/members"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            Members
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-200 hover:rounded-full px-3 py-1 transition-all duration-200 text-inherit no-underline"
          >
            About
          </Link>
          <Link
            to="https://www.geeksforgeeks.org/problem-of-the-day"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline hover:bg-green-600 hover:text-white hover:rounded-full px-3 py-1 flex items-center space-x-2 transition-all duration-200 no-underline"
          >
            <span>GFG POTD</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
