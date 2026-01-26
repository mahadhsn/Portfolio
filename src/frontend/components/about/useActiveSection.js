import { useEffect, useRef, useState } from "react";

/**
 * Keeps a left-rail section nav in sync with scroll position.
 * Also supports "click lock" so smooth scroll doesn't immediately select a neighbor section.
 */
const useActiveSection = (sections, refs, opts = {}) => {
  const {
    activationRatio = 0.32, // where in the viewport we "measure" closeness
    yOffset = -12, // scroll offset when clicking nav
    clickLockMs = 550, // how long to ignore scroll-based updates after click
  } = opts;

  const [active, setActive] = useState(sections?.[0]?.id ?? "");
  const clickLockRef = useRef(false);
  const clickTimerRef = useRef(null);

  useEffect(() => {
    const ids = sections.map((s) => s.id);

    const onScroll = () => {
      if (clickLockRef.current) return;

      const activationY = window.innerHeight * activationRatio;

      let bestId = ids[0];
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of ids) {
        const el = refs.current[id];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - activationY);

        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      setActive(bestId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections, refs, activationRatio]);

  const scrollTo = (id) => {
    const el = refs.current[id];
    if (!el) return;

    // set immediately so nav reflects the click
    setActive(id);

    // lock scroll updates briefly while smooth scrolling settles
    clickLockRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    clickTimerRef.current = setTimeout(() => {
      clickLockRef.current = false;
    }, clickLockMs);
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  return { active, scrollTo };
};

export default useActiveSection;
