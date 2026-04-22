/* Shared components: Nav, Footer, NowPlaying, etc. */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ---------- Router (very small) ---------- */
const RouterCtx = React.createContext({ path: "/", navigate: () => {} });

function useRouter() {
  return React.useContext(RouterCtx);
}

function RouterProvider({ children }) {
  const [path, setPath] = useState(() => {
    const stored = localStorage.getItem("mh-path");
    return stored || "/";
  });
  const navigate = useCallback(
    (to) => {
      if (to === path) return;
      setPath(to);
      localStorage.setItem("mh-path", to);
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [path],
  );

  return (
    <RouterCtx.Provider value={{ path, navigate }}>
      {children}
    </RouterCtx.Provider>
  );
}

/* ---------- Theme ---------- */
const ThemeCtx = React.createContext({});

function ThemeProvider({ children, initial, onChange }) {
  const [theme, setTheme] = useState(initial.theme);
  const [mode, setMode] = useState(initial.mode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-mode", mode);
    onChange && onChange({ theme, mode });
  }, [theme, mode]);
  return (
    <ThemeCtx.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeCtx.Provider>
  );
}
function useTheme() {
  return React.useContext(ThemeCtx);
}

/* ---------- Nav ---------- */
function Nav() {
  const { path, navigate } = useRouter();
  const { mode, setMode } = useTheme();

  return (
    <aside className="nav">
      <a
        className="nav-brand"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <span className="nav-brand-mark">M</span>
        <span>mahad.</span>
      </a>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => {
          const active =
            path === item.path ||
            (item.path !== "/" && path.startsWith(item.path));
          return (
            <li className="nav-item" key={item.id}>
              <a
                href="#"
                className={`nav-link ${active ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
              >
                <span className="nav-link-idx">{item.idx}</span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="nav-footer">
        <NowPlaying compact />
        <div className="theme-pill" role="group" aria-label="Theme mode">
          <button
            className={mode === "light" ? "active" : ""}
            onClick={() => setMode("light")}
            title="Light"
          >
            <Icon.sun />
          </button>
          <button
            className={mode === "dark" ? "active" : ""}
            onClick={() => setMode("dark")}
            title="Dark"
          >
            <Icon.moon />
          </button>
        </div>
        <div className="nav-foot-row">
          <span className="dot" />
          <span>Available — Fall '26</span>
        </div>
      </div>
    </aside>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="foot">
      <div>© 2026 Mahad Hassan</div>
      <div className="foot-center">
        <span style={{ opacity: 0.7 }}>Designed + built in Hamilton, ON</span>
      </div>
      <div className="foot-right">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>
    </footer>
  );
}

/* ---------- Now playing ---------- */
function NowPlaying() {
  return (
    <div className="now-playing" title="Currently playing">
      <div className="np-cover">
        <Icon.note />
      </div>
      <div className="np-text">
        <span className="np-title">Aria Math</span>
        <span className="np-artist">C418</span>
      </div>
      <div className="np-wave">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/* ---------- Button ---------- */
function Button({ variant = "default", onClick, children, icon = true }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      <span>{children}</span>
      {icon && (
        <span className="arrow">
          <Icon.arrow />
        </span>
      )}
    </button>
  );
}

Object.assign(window, {
  RouterProvider,
  useRouter,
  ThemeProvider,
  useTheme,
  Nav,
  Footer,
  NowPlaying,
  Button,
});
