import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setModeState] = useState(() => {
    return localStorage.getItem("mh-mode") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "editorial");
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem("mh-mode", mode);
  }, [mode]);

  const setMode = (newMode) => setModeState(newMode);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
