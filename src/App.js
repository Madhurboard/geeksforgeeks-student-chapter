import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Members from './pages/Members';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
