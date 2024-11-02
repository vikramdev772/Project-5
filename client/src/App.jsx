import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Complaint from './pages/Complaint';
import Membership from './pages/Membership';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

// Layout component to wrap the content
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Adjust the top padding to match the Navbar height */}
      <main className="flex-grow pt-24 sm:pt-20 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/membership" element={<Membership />} />
          {/* Add a 404 route */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-[70vh] flex-col">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600">Page not found</p>
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
