import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Assuming logo.svg is in the assets folder
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon in "Join Us"

const Navbar = () => {
  const handleLinkClick = (link) => {
    console.log(`${link} clicked`);
  };

  const handleJoinClick = () => {
    console.log("Join Us clicked");
    // You can add navigation or modal logic here
  };

  return (
    <nav className="fixed top-6 left-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-[160rem] -translate-x-1/2 mx-auto px-6 md:px-10 py-3 bg-white/70 backdrop-blur-md rounded-[2.4rem] shadow-lg hover:shadow-xl transition-shadow duration-500 z-50">
      <div className="flex items-center justify-between">
        
        {/* Left - Logo, clickable to home */}
        <div className="flex items-center">
          <Link to="/" className="text-inherit no-underline">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>

        {/* Center - Navigation Links */}
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

        {/* Right - GFG POTD and Join Us */}
        <div className="flex items-center space-x-4">
        <Link 
  to="https://www.geeksforgeeks.org/problem-of-the-day" // External URL
  className="text-green-600 hover:underline hover:text-green-600 hover:bg-gray-200 hover:rounded-full px-3 py-1  flex items-center space-x-2 px-3 py-1 transition-all duration-200 no-underline"
>
  <span>GFG POTD</span>
  <FaArrowRight className="text-green-600" />
</Link>

       

   

</div>

      </div>
    </nav>
  );
};

export default Navbar;
