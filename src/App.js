import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Social from "./components/Social/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Social />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
