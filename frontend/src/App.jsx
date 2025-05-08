import "./App.css";
import { Courses } from "./Components/Pages/Courses";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Home } from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup";
import { Navbar } from "./Components/Navbar";
function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup ? <LoginPopup setShowPopup={setShowPopup} /> : <></>}
      <div className="dark:bg-slate-900 dark:text-white">
        <ToastContainer />
        <Navbar setShowPopup={setShowPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
