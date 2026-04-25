import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Nav from "./Nav";
import Footer from "./Footer";
import NowPlaying from "./NowPlaying";
import { Sun, Moon } from "./Icons";

const Layout = () => {
  const { pathname } = useLocation();
  const { mode, setMode } = useTheme();

  return (
    <div className="app">
      <Nav />

      {/* Mobile-only: song floats bottom-left of nav, theme floats bottom-right */}
      <div className="mobile-float">
        <NowPlaying />
        <div className="theme-pill">
          <button
            className={mode === "light" ? "active" : ""}
            onClick={() => setMode("light")}
            aria-label="Light mode"
          >
            <Sun size={13} />
          </button>
          <button
            className={mode === "dark" ? "active" : ""}
            onClick={() => setMode("dark")}
            aria-label="Dark mode"
          >
            <Moon size={13} />
          </button>
        </div>
      </div>

      <div className="page-shell">
        <main key={pathname} className="page page-enter">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
