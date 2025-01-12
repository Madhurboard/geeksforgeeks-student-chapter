import React from 'react';
import { FaLightbulb, FaBullseye, FaTasks, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-[#F3F2EC] text-[#1D3E2F] min-h-screen p-6">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">GeeksforGeeks Student Chapter</h1>
        <h2 className="text-2xl mt-2">MIT-ADT UNIVERSITY</h2>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg leading-relaxed">
          Hii, GEEKS!! Welcome to GeeksforGeeks Student Chapter of Anurag University. GeeksforGeeks is a renowned online platform that provides valuable resources, tutorials, and coding challenges for computer science and engineering students. It has emerged as a comprehensive knowledge hub and a reliable source of information for programming enthusiasts worldwide. The establishment of a GeeksforGeeks Student Chapter at Anurag University offers our students a unique opportunity to engage in collaborative learning, share knowledge, and enhance their programming skills. At GFG Student Chapter Anurag University, we believe in community-driven efforts. It is a place where developers, designers, machine learning enthusiasts, and technical content writers come together to learn and grow by reaching out to the community.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-3xl mr-4" />
          <h3 className="text-2xl font-semibold">Vision</h3>
        </div>
        <p className="text-lg leading-relaxed">
          “The GeeksforGeeks Student Chapter at Anurag University envisions creating a vibrant community of passionate programmers and problem solvers who are equipped with the necessary skills to excel in the ever-evolving field of computer science and engineering. We aim to foster a culture of continuous learning and inspire innovation among our members to explore new ways of critical and logical thinking.”
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <FaBullseye className="text-3xl mr-4" />
          <h3 className="text-2xl font-semibold">Mission</h3>
        </div>
        <p className="text-lg leading-relaxed">
          “The GeeksforGeeks Student Chapter at Anurag University aims to provide a conducive environment for students to enhance their programming abilities, promote teamwork, and encourage the application of theoretical knowledge to practical problem-solving. We strive to organize regular events, workshops, tutorials, webinars by industry experts, and competitions that nurture creativity, critical thinking, and technical excellence.”
        </p>
      </section>

      {/* Objectives */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <FaTasks className="text-3xl mr-4" />
          <h3 className="text-2xl font-semibold">Objectives</h3>
        </div>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Knowledge Sharing: Organize regular workshops, seminars, and coding competitions to facilitate the exchange of knowledge and foster a culture of learning among students.</li>
          <li>Skill Development: Provide a platform for students to enhance their programming skills through coding challenges, hackathons, and practice sessions.</li>
          <li>Industry Interaction: Invite industry experts and professionals to deliver talks, mentorship sessions, and share insights.</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <FaHeart className="text-3xl mr-4" />
          <h3 className="text-2xl font-semibold">Advantages of Joining</h3>
        </div>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Get an internship at GeeksforGeeks.</li>
          <li>Learn to build effective and optimized solutions for local businesses and the community as per the latest technology trends.</li>
          <li>Great learning and networking experience.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
