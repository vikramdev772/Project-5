// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Complaint from './pages/Complaint';
import Membership from './pages/Membership';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Add your navigation component here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
        {/* Add your footer component here */}
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;