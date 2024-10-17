import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Registration from "./components/pages/registration";

function App() {

  return (
    <>
    <div className="bg-customPurple-darker text-white min-h-screen">
      <Navbar />
        <div className=" max-w-[1812px] mx-auto">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </Router>
          
        </div>
      </div>
    </>
  )
}

export default App
