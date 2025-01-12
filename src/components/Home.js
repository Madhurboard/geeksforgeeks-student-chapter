import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import HeroImage from '../assets/Hero.jpg';
import Logo2 from '../assets/Logo2.png'; // Import the logo
import '../assets/fonts.css';
import LandingScroll from '../components/landing-scroll'; // Import LandingScroll component

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen bg-cover bg-center " 
        style={{ backgroundImage: `url(${HeroImage})` }}  // Use the imported image here
      >
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-[#E5F2D2]">
          {/* Add motion here for the text */}
          <motion.p 
            className="nav-text text-xl sm:text-2xl mb-2"  // Adjusted font size for small screens
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 1 }}
          >
            Connecting Programmers
          </motion.p>

          <motion.h1 
            className="hero-text text-4xl sm:text-6xl lg:text-8xl font-bold mb-1"  // Adjusted font sizes for different breakpoints
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 1, delay: 0.2 }} // Adding a delay for stagger effect
          >
            GeeksforGeeks
          </motion.h1>

          <motion.p 
            className="hero-text text-4xl sm:text-6xl lg:text-8xl font-bold mb-2"  // Adjusted font sizes for different breakpoints
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 1, delay: 0.4 }} // Adding a delay for stagger effect
          >
            Student Chapter
          </motion.p>

          <motion.p 
            className="hero-text text-2xl sm:text-3xl lg:text-3xl font-bold"  // Adjusted font sizes for different breakpoints
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 1, delay: 0.6 }} // Adding a delay for stagger effect
          >
            MIT-ADT
          </motion.p>
        </div>
      </section>

      {/* New Section with Text and Logo */}
      <section className="flex flex-col sm:flex-row items-center justify-between px-6 py-20 bg-[#1D3E2F] text-[#E5F2D2]">
        {/* Left Side - Text */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <h2 className="hero-text sm:text-6xl font-bold mb-4 ml-7">One for All, All for One</h2>
          <p className="text-lg sm:text-xl ml-7">
            We are a group of enthusiasts trying to spread the idea of One for All and All for One. We inspire students to practice coding, get acquainted with algorithms and enjoy the concepts in a full fledged way. We are putting immense efforts in increasing the standards of our society by proposing new ideas for the benefit of our fellow mates and for our growth as well.
          </p>
        </div>

        {/* Right Side - Logo */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
          <img src={Logo2} alt="Logo" className="max-w-xs sm:max-w-md mx-auto sm:ml-4" />
        </div>
      </section>

      {/* Landing Scroll Component */}
      <LandingScroll />
    </>
  );
};

export default HeroSection;
