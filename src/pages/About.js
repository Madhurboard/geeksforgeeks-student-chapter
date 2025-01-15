import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBrain, FaHandshake, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* Hero Section with Page Title and Introduction */}
      <motion.div
        className="w-full bg-green-100 pt-40 pb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gfgsc-green mb-4">
            GeeksforGeeks Student Chapter
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
            MIT ADT UNIVERSITY
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to the GeeksforGeeks Student Chapter at MIT ADT University! A community-driven platform for learning, growing, and excelling in the world of computer science and engineering.
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-semibold text-gfgsc-green mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Vision
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            “The GeeksforGeeks Student Chapter at MIT ADT University envisions creating a vibrant community of passionate programmers and problem solvers who are equipped with the necessary skills to excel in the ever-evolving field of computer science and engineering. We aim to foster a culture of continuous learning and inspire innovation among our members to explore new ways of critical and logical thinking.”
          </motion.p>
        </div>
      </div>

      {/* Mission Section with Infographics */}
      <div className="w-full bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-semibold text-gfgsc-green mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            “The GeeksforGeeks Student Chapter at MIT ADT University aims to provide a conducive environment for students to enhance their programming abilities, promote teamwork, and encourage the application of theoretical knowledge to practical problem-solving.”
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <FaChalkboardTeacher className="text-4xl text-gfgsc-green mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Knowledge Sharing</h3>
              <p className="text-gray-600">Workshops, seminars, and coding competitions for knowledge exchange.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <FaBrain className="text-4xl text-gfgsc-green mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Skill Development</h3>
              <p className="text-gray-600">Enhance your programming skills through hackathons and coding challenges.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <FaHandshake className="text-4xl text-gfgsc-green mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Industry Interaction</h3>
              <p className="text-gray-600">Connect with industry experts through talks, mentorship sessions, and workshops.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <FaTools className="text-4xl text-gfgsc-green mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Hands-on Projects</h3>
              <p className="text-gray-600">Work on real-world projects to build optimized solutions for local businesses.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-semibold text-gfgsc-green mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Objectives
          </motion.h2>
          <motion.ul
            className="text-lg text-gray-700 list-disc pl-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <li>Organize workshops, seminars, and coding competitions for knowledge sharing.</li>
            <li>Provide a platform to enhance programming skills through hackathons and practice sessions.</li>
            <li>Invite industry experts to deliver talks, mentorship sessions, and share insights.</li>
          </motion.ul>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="w-full bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-semibold text-gfgsc-green mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Advantages of Joining
          </motion.h2>
          <motion.ul
            className="text-lg text-gray-700 list-decimal pl-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <li>Get an internship at GeeksforGeeks.</li>
            <li>Learn to build effective and optimized solutions for local businesses.</li>
            <li>Gain great learning and networking experience with like-minded individuals.</li>
          </motion.ul>
        </div>
      </div>

    
    </>
  );
};

export default About;
