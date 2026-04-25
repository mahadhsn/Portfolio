import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    const shell = document.querySelector(".page-shell");
    if (shell) {
      shell.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
