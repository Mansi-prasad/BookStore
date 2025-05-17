import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup ? <LoginPopup setShowPopup={setShowPopup} /> : <></>}
      <div className="dark:bg-slate-900 dark:text-white">
        <ToastContainer />
        <Navbar setShowPopup={setShowPopup} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default App;
