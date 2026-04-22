import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import NowPlaying from "./NowPlaying";
import { Sun, Moon } from "./Icons";
import { NAV_ITEMS } from "../../data/consts";

const Nav = () => {
  const { pathname } = useLocation();
  const { mode, setMode } = useTheme();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <div className="nav-brand-mark">
          <img src="/images/hero.jpeg" alt="Mahad" />
        </div>
        <span className="nav-brand-text">mahad.</span>
      </Link>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link${isActive(item.path) ? " active" : ""}`}
            >
              <span className="nav-link-idx">{item.idx}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop sidebar footer only */}
      <div className="nav-footer">
        <NowPlaying />
        <div className="theme-pill">
          <button className={mode === "light" ? "active" : ""} onClick={() => setMode("light")} aria-label="Light mode">
            <Sun size={13} />
          </button>
          <button className={mode === "dark" ? "active" : ""} onClick={() => setMode("dark")} aria-label="Dark mode">
            <Moon size={13} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
