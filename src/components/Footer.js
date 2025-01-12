import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaDiscord, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <footer className="bg-[#1D3E2F] text-[#E5F2D2] py-8 mt-12">
      <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-2">
        {/* Title and Address Section */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">GeeksforGeeks Student Chapter</h2>
          <div className="mt-4">
            <p>MIT ADT - School of Computing</p>
            <p>MIT ADT UNIVERSITY</p>
            <p>Rajbaug, Loni-Kalbhor</p>
            <p>Pune</p>
          </div>
          <div className="lg:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/gfg_mitadt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-3xl text-white hover:text-[#E5F2D2] transition-all" />
            </a>
            <a href="http://www.linkedin.com/in/gfgmitadt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl text-white hover:text-[#E5F2D2] transition-all" />
            </a>
            <a href="https://chat.whatsapp.com/HkHoCm9Rfv6Cxgt4MOtm5K" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-3xl text-white hover:text-[#E5F2D2] transition-all" />
            </a>
            <a href="https://discord.gg/JCyKBXsh" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord className="text-3xl text-white hover:text-[#E5F2D2] transition-all" />
            </a>
            <a href="https://github.com/GeeksforGeeks-MITADT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-3xl text-white hover:text-[#E5F2D2] transition-all" />
            </a>
          </div>
        </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 bg-[#E5F2D2] p-3 rounded-lg text-[#1D3E2F] shadow-lg lg:ml-auto lg:w-2/3"
        >
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-[#1D3E2F] focus:outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-[#1D3E2F] focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-3 rounded-md border border-[#1D3E2F] focus:outline-none h-15"
            required
          />
          <button
            type="submit"
            className="bg-[#1D3E2F] text-[#E5F2D2] py-2 px-6 rounded-md hover:bg-[#E5F2D2] hover:text-[#1D3E2F] transition-all font-semibold"
          >
            Send
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>

        {/* Social Media Links */}
        

        {/* Footer Bottom */}
        <div className="lg:col-span-2 text-sm text-center mt-6">
          <p>
            Contact us at: <a href="mailto:gfg.mitadt@gmail.com" className="text-[#E5F2D2]">gfg.mitadt@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
