import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Logbook from "./pages/Logbook";
import LogEntry from "./pages/LogEntry";
import PhotoEntry from "./pages/PhotoEntry";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/logbook" element={<Logbook />} />
          <Route path="/logbook/intro" element={<LogEntry id="intro" />} />
          <Route path="/logbook/internship" element={<LogEntry id="internship" />} />
          <Route path="/logbook/sclerocare" element={<LogEntry id="sclerocare" />} />

          <Route path="/logbook/belfountain-30-6-25" element={<PhotoEntry id="belfountain" />} />
          <Route path="/logbook/killbear-3-8-25" element={<PhotoEntry id="killbear" />} />
          <Route path="/logbook/toronto-27-8-25" element={<PhotoEntry id="toronto" />} />
          <Route path="/logbook/bronte-31-8-25" element={<PhotoEntry id="bronte" />} />
          <Route path="/logbook/stirling-11-10-25" element={<PhotoEntry id="stirling" />} />
          <Route path="/logbook/mdl-18-1-26" element={<PhotoEntry id="mdl" />} />

          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
