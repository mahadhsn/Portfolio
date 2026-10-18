import { useEffect, useRef, useState } from "react";

const DURATION_MS = 2800;

// Splits "~99%" into prefix "~", number 99, suffix "%".
const parseStat = (num) => {
  const [, prefix = "", digits = "0", suffix = ""] =
    String(num).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/) ?? [];
  const decimals = digits.split(".")[1]?.length ?? 0;
  return { prefix, target: parseFloat(digits), decimals, suffix };
};

const AnimatedStat = ({ stat }) => {
  const { prefix, target, decimals, suffix } = parseStat(stat.num);
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        setValue(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Count up once, when the stat first scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div ref={ref} className="stat">
      <div className="stat-num">
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
        {stat.plus && <span className="plus">+</span>}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

export default AnimatedStat;
