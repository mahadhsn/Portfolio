import { lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

// Every page but Home loads its code on first visit, so the markdown renderer,
// photo galleries and the rest stay out of the first download. Once the site is
// idle they are all fetched in the background (see App), so switching pages
// doesn't wait on the network and flash an empty page.
const pageLoaders = {
  NotFound: () => import("./pages/NotFound"),
  About: () => import("./pages/About"),
  Experience: () => import("./pages/Experience"),
  Projects: () => import("./pages/Projects"),
  Logbook: () => import("./pages/Logbook"),
  LogEntry: () => import("./pages/LogEntry"),
  PhotoEntry: () => import("./pages/PhotoEntry"),
  TripEntry: () => import("./pages/TripEntry"),
  TripDayEntry: () => import("./pages/TripDayEntry"),
  Resume: () => import("./pages/Resume"),
  Contact: () => import("./pages/Contact"),
};

const NotFound = lazy(pageLoaders.NotFound);
const About = lazy(pageLoaders.About);
const Experience = lazy(pageLoaders.Experience);
const Projects = lazy(pageLoaders.Projects);
const Logbook = lazy(pageLoaders.Logbook);
const LogEntry = lazy(pageLoaders.LogEntry);
const PhotoEntry = lazy(pageLoaders.PhotoEntry);
const TripEntry = lazy(pageLoaders.TripEntry);
const TripDayEntry = lazy(pageLoaders.TripDayEntry);
const Resume = lazy(pageLoaders.Resume);
const Contact = lazy(pageLoaders.Contact);

const prefetchPages = () => {
  Object.values(pageLoaders).forEach((load) => load().catch(() => {}));
};

export default function App() {
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetchPages, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(prefetchPages, 1500);
    return () => clearTimeout(id);
  }, []);

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
