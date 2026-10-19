import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

// Every page but Home loads its code on first visit, so the markdown renderer,
// photo galleries and the rest stay out of the first download.
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Logbook = lazy(() => import("./pages/Logbook"));
const LogEntry = lazy(() => import("./pages/LogEntry"));
const PhotoEntry = lazy(() => import("./pages/PhotoEntry"));
const TripEntry = lazy(() => import("./pages/TripEntry"));
const TripDayEntry = lazy(() => import("./pages/TripDayEntry"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/logbook" element={<Logbook />} />
          <Route path="/logbook/:id" element={<LogEntry />} />

          <Route
            path="/logbook/belfountain-30-6-25"
            element={<PhotoEntry id="belfountain" />}
          />
          <Route
            path="/logbook/killbear-3-8-25"
            element={<PhotoEntry id="killbear" />}
          />
          <Route
            path="/logbook/toronto-27-8-25"
            element={<PhotoEntry id="toronto" />}
          />
          <Route
            path="/logbook/bronte-31-8-25"
            element={<PhotoEntry id="bronte" />}
          />
          <Route
            path="/logbook/stirling-11-10-25"
            element={<PhotoEntry id="stirling" />}
          />
          <Route
            path="/logbook/mdl-18-1-26"
            element={<PhotoEntry id="mdl" />}
          />
          <Route
            path="/logbook/orchard-11-5-26"
            element={<PhotoEntry id="orchard" />}
          />
          <Route
            path="/logbook/restoule-16-5-26"
            element={<PhotoEntry id="restoule" />}
          />

          <Route
            path="/logbook/bronte-4-10-26"
            element={<PhotoEntry id="bronte26" />}
          />

          <Route
            path="/logbook/campbellford-11-10-26"
            element={<TripEntry tripId="campbellford" />}
          />
          <Route
            path="/logbook/campbellford-11-10-26/:day"
            element={<TripDayEntry tripId="campbellford" />}
          />

          <Route
            path="/logbook/banff-27-6-26"
            element={<TripEntry tripId="banff" />}
          />
          <Route
            path="/logbook/banff-27-6-26/:day"
            element={<TripDayEntry tripId="banff" />}
          />

          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
