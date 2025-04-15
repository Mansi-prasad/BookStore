import "./App.css";
import { Courses } from "./Components/Pages/Courses";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Home } from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Home />
      <Courses /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
