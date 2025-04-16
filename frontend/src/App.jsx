import "./App.css";
import { Courses } from "./Components/Pages/Courses";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Home } from "./Components/Home/Home";
import { SignUp } from "./Components/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
