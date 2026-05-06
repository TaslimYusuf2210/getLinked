import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Registration from "./components/pages/registration";
import Footer from "./components/footer";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <div className="bg-customPurple-darker max-w-[1380px] mx-auto">
      <div className=" text-white min-h-screen pt-24 md:pt-0">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
            <Footer />
          </Router>
      </div>
      <Toaster />
    </div>
  )
}

export default App
