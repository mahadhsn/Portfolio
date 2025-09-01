import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Logbook from "./pages/Logbook";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Intro from "./pages/logs/Intro";
import Internship from "./pages/logs/Internship";
import SceloCare from "./pages/logs/sclerocare";
import Belfountain30625 from "./pages/pics/Belfountain30625";
import KillBear3825 from "./pages/pics/KillBear3825";
import Toronto27825 from "./pages/pics/Toronto27825";
import Bronte31825 from "./pages/pics/Bronte31825";

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
            <Route path="/logbook/internship" element={<Internship />} />
            <Route path="/logbook/sclerocare" element={<SceloCare />} />
            <Route
              path="/logbook/belfountain-30-6-25"
              element={<Belfountain30625 />}
            />
            <Route path="/logbook/killbear-3-8-25" element={<KillBear3825 />} />
            <Route
              path={"/logbook/toronto-27-8-25"}
              element={<Toronto27825 />}
            />
            <Route 
            path={"/logbook/bronte-31-8-25"}
            element={<Bronte31825 />}
            />

            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
