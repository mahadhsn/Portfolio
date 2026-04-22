/* Root app — router + theme + tweaks */

/*EDITMODE-BEGIN*/
const TWEAKS_DEFAULTS = {
  "theme": "editorial",
  "mode": "light"
};
/*EDITMODE-END*/

function App() {
  const stored = {
    theme: localStorage.getItem('mh-theme') || TWEAKS_DEFAULTS.theme,
    mode:  localStorage.getItem('mh-mode')  || TWEAKS_DEFAULTS.mode,
  };
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <RouterProvider>
      <ThemeProvider
        initial={stored}
        onChange={({ theme, mode }) => {
          localStorage.setItem('mh-theme', theme);
          localStorage.setItem('mh-mode', mode);
        }}
      >
        <Shell tweaksOpen={tweaksOpen} />
      </ThemeProvider>
    </RouterProvider>
  );
}

function Shell({ tweaksOpen }) {
  const { path } = useRouter();
  const { theme, mode, setTheme, setMode } = useTheme();

  let page;
  if (path === '/') page = <PageHome />;
  else if (path === '/about') page = <PageAbout />;
  else if (path === '/projects') page = <PageProjects />;
  else if (path === '/logbook') page = <PageLogbook />;
  else if (path === '/resume') page = <PageResume />;
  else if (path === '/contact') page = <PageContact />;
  else if (path.startsWith('/logbook/photo/')) page = <PagePhoto id={path.split('/').pop()} />;
  else if (path.startsWith('/logbook/')) page = <PageLogEntry id={path.split('/').pop()} />;
  else page = <PageHome />;

  return (
    <div className="app">
      <Nav />
      <div className="page-shell" key={path}>
        {page}
      </div>
      {tweaksOpen && (
        <TweaksPanel
          theme={theme}
          mode={mode}
          onThemeChange={setTheme}
          onModeChange={setMode}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
