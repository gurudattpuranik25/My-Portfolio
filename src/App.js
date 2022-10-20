import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Social from "./components/Social/Social";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Social />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
