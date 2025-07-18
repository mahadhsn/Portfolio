import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-textlight dark:text-textdark transition-all duration-300 ease-in-out"
    >
      {isDark ? "moon" : "sun"}
    </button>
  );
};

export default ThemeToggle;
