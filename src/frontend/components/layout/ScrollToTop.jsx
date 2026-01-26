import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    // Force top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Some browsers ignore "instant"; fallback:
    // window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
