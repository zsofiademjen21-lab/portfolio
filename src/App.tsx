import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
