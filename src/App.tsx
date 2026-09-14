import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
