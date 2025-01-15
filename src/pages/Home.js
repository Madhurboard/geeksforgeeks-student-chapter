import React from 'react';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { ReactComponent as Icon } from '../assets/icons/icon.svg'; // Import SVG as a component
import { ReactComponent as EventIcon } from '../assets/icons/5+eventsicon.svg';
import { ReactComponent as Members } from '../assets/icons/membericon.svg';
import { ReactComponent as ContestIcon } from '../assets/icons/regularcontests.svg';
import { ReactComponent as Build } from '../assets/icons/Build.svg';
import { ReactComponent as Connect } from '../assets/icons/Connect.svg';
import { ReactComponent as Learn } from '../assets/icons/Learn.svg';
import { FaArrowRight } from 'react-icons/fa'; // For icons


import './Home.css';
import LandingScroll from '../components/landing-scroll'; // Import LandingScroll component

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};


const Home = () => {
  useEffect(() => {
    window.onload = () => window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <motion.div
      className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-bl from-hover-gray via-green-50 to-gfgsc-green-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-start ml-4 sm:ml-10 md:ml-20 space-y-4 sm:space-y-6"
        variants={containerVariants}
      >
        {/* Icon and Subtitle */}
        <motion.div className="flex items-center space-x-2" variants={childVariants}>
          <Icon className="text-gfgsc-green w-8 h-8 sm:w-10 sm:h-10" />
          <span className="hero-text text-xs sm:text-md md:text-lg font-semibold text-gfgsc-green">
            Student Chapter MIT ADT
          </span>
        </motion.div>

        {/* New Heading */}
        <motion.h1
          className="hero-text text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold md:font-bold text-gray-800 leading-tight"
          variants={childVariants}
        >
          Where Code Meets <span className="text-gfgsc-green">Community</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-text sm:text-sm md:text-lg text-gray-600 py-2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
          variants={childVariants}
        >
          Join MIT ADT's premier coding community. Learn, grow, and build together with fellow tech
          enthusiasts guided by GeeksforGeeks.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-text flex flex-wrap gap-2 sm:gap-4"
          variants={childVariants}
        >
          <motion.a
            href="https://forms.gle/A9suayWQENsF9QLn9"
            target="_blank"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gfgsc-green text-white rounded-lg font-semibold shadow-lg hover:bg-opacity-95 transform hover:scale-105 transition-all text-sm sm:text-base no-underline"
            whileHover={buttonHover}
          >
            Join Chapter
          </motion.a>
          <motion.button
            className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gfgsc-green text-gfgsc-green rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all text-sm sm:text-base"
            whileHover={buttonHover}
          >
            Learn More
          </motion.button>
        </motion.div>


        {/* Info Section */}

<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 pt-4">
  {[
    {
      icon: (
        <Members
    className="text-gfgsc-green w-4 h-4 sm:w-5 sm:h-5"
    height="1em"
    width="1em"
  />
      ),
      text: "40+ Members",
    },
    {
      icon: (
        <EventIcon
    className="text-gfgsc-green w-4 h-4 sm:w-5 sm:h-5"
    height="1em"
    width="1em"
  />
      ),
      text: "5+ Events",
    },
    {
      icon: (
        <ContestIcon
    className="text-gfgsc-green w-4 h-4 sm:w-5 sm:h-5"
    height="1em"
    width="1em"
  />
      ),
      text: "Regular Contests",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="flex items-center space-x-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      {item.icon}
      <span className="hero-text text-xs sm:text-sm font-medium text-gray-600">
        {item.text}
      </span>
    </motion.div>
  ))}
</div>

      </motion.div>

      {/* Right Side (Animated Gradients) */}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2">
        <div 
          className="absolute -top-20 -left-30 sm:-top-30 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gradientBefore">
        </div>
        <div 
          className="absolute -top-40 -left-30 sm:-top-60  w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gradientAfter">
        </div>
      </div>
    </motion.div>
      
      {/*second Section*/}
    <LandingScroll/>  
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mt-16 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={{ opacity: 1, transform: 'none' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where Knowledge Meets
            <span className="text-gfgsc-green"> Opportunity</span>
          </motion.h2>
          <motion.div
            className="w-20 md:w-32 h-1 md:h-1.5 bg-gfgsc-green mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: '13%' }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            The GeeksforGeeks Student Chapter provides structured opportunities
            for individuals to enhance their skills across various domains,
            fostering professional growth and preparing them for successful
            careers by joining top multinational companies.
          </motion.p>
        </motion.div>
      </motion.div>

     {/* Grid section with cards */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {/* Learn card */}
       <div className="group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden hover:shadow-lg hover:scale-105 hover:border-green-200">
  <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
  <Learn
  className="text-gfgsc-green"
  height="28"
  width="28"
/>
         </div>
         <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn</h3>
         <p className="text-gray-600">Hone your competitive programming skills through contests and solution discussions.</p>
         <div className="absolute bottom-0 left-0 w-full h-1 bg-gfgsc-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-sm"></div>
       </div>

       {/* Build card */}
       <div className="group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden hover:shadow-lg hover:scale-105 hover:border-green-200">
  <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
  <Build
  className="text-gfgsc-green"
  height="28"
  width="28"
/>
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
  <p className="text-gray-600">Work on real-world projects and enhance your development skills.</p>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gfgsc-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-sm"></div>
</div>


       {/* Connect card */}
       <div className="group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden hover:shadow-lg hover:scale-105 hover:border-green-200">
       <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
       <Connect
  className="text-gfgsc-green"
  height="28"
  width="28"
/>
         </div>
         <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect</h3>
         <p className="text-gray-600">Join a community of passionate student developers</p>
         <div className="absolute bottom-0 left-0 w-full h-1 bg-gfgsc-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-sm"></div>
       </div>
     </div>
    </div>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

     <div className="py-6  sm:py-10 w-full flex justify-center px-0 sm:px-6 lg:px-18">
  <div className="flex flex-col lg:flex-row w-full sm:gap-12 rounded-xl border border-gray-100 shadow-lg bg-white overflow-hidden">
  <div className="flex-1 p-8 lg:p-12 flex items-center">
    <div className="max-w-xl space-y-8">
      <div className="space-y-4">
        <div className="text-sm uppercase tracking-widest text-gfgsc-green font-medium">
          The diversity of our club
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          <span className="inline-block">Discover Your </span>
          <div className="relative inline-block">
            <span className="inline-block">
              <span className="text-gfgsc-green ml-2">Tech Path</span>
            </span>
            <div className="absolute -bottom-1 left-0 h-1 bg-green-200 w-full ml-2"></div>
          </div>
        </h2>
      </div>
      <div className="prose prose-lg text-gray-600">
        <p className="leading-relaxed">
          Join a vibrant community where innovation meets learning. Dive into multiple domains, collaborate with peers, and shape your technical journey with hands-on experience.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
      <div className="inline-flex items-center py-3 px-6 text-lg font-medium text-gfgsc-green transition-all duration-300 group border-2 border-gfgsc-green rounded-full cursor-pointer hover:bg-gfgsc-green hover:text-white hover:scale-105">
  Explore Domains
  <FaArrowRight
    className="ml-2 text-xl transform group-hover:translate-x-2  transition-all duration-300 ease-in-out"
    size="1em"
  />
</div>

      </div>
    </div>
  </div>
  <div className="flex-1 p-8 lg:p-12 bg-gray-50">
  <div className="grid gap-6 h-full">
  <div className="p-6 rounded-xl bg-blue-50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-100">
  <div className="flex items-center gap-4 mb-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-2xl text-blue-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path>
          <path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path>
        </svg>
        <h3 className="font-semibold text-lg">Competitive Programming</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">DSA</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">DP</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Problem Solving</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Algorithms</span>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-green-50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-green-100">
    <div className="flex items-center gap-4 mb-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="text-2xl text-green-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z"></path>
        </svg>
        <h3 className="font-semibold text-lg">Web Development</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Frontend</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Backend</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Full Stack</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">DevOps</span>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-purple-50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-purple-100">
    <div className="flex items-center gap-4 mb-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="text-2xl text-purple-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z"></path>
        </svg>
        <h3 className="font-semibold text-lg">Data Analytics</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Statistics</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">SQL</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Tableau</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Data Visualization</span>
      </div>
    </div>

<div className="p-6 rounded-xl bg-orange-50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-orange-100">
  <div className="flex items-center gap-4 mb-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-2xl text-orange-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path>
        </svg>
        <h3 className="font-semibold text-lg">Machine Learning</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Deep Learning</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Neural Networks</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">TensorFlow</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">NLP</span>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-pink-50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-pink-100">
  <div className="flex items-center gap-4 mb-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-2xl text-pink-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
        </svg>
        <h3 className="font-semibold text-lg">Design</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">UI/UX</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Graphic Design</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Figma</span>
        <span className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700">Prototyping</span>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

    

   </>
  );
};

export default Home;
