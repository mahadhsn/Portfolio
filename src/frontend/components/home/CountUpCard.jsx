import { useEffect, useRef, useState } from "react";

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const CountUpCard = ({ value, suffix = "", label, duration = 1800 }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let rafId = 0;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeInOutCubic(progress);

      setCount(Math.floor(value * eased));

      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [started, value, duration]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border px-5 py-4
        border-borderlight dark:border-borderdark"
    >
      <div className="text-2xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-xs mt-1">{label}</div>
    </div>
  );
};

export default CountUpCard;