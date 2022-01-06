import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Nav from "./Nav";

const linkList = [
  "home", "projects", "about", "contact"
];

const App = () => {
  return (
    <>
      <Nav linkList={linkList} />
        <Routes>
          <Route path="/" element={<Home linkList={linkList} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
