import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Registration from "./components/pages/registration";

function App() {

  return (
    <div className="bg-customPurple-darker">
    <div className="max-w-[1380px] mx-auto text-white min-h-screen">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </Router>
      </div>
    </div>
  )
}

export default App
