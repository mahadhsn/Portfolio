import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound"
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Logbook from './pages/Logbook';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Intro from './pages/logs/Intro'
import Internship from './pages/logs/Internship';
import SceloCare from './pages/logs/sclerocare';

export default function App() {
  if (window.location.hash.startsWith("#/")) {
    const path = window.location.hash.slice(1);
    window.history.replaceState(null, "", path);
  }
  return (
    <div className="bg-bglight dark:bg-bgdark">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/logbook" element={<Logbook />} />
            <Route path="/logbook/intro" element={<Intro />} />
            <Route path='/logbook/internship' element={<Internship />} />
            <Route path='/logbook/sclerocare' element={<SceloCare />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
