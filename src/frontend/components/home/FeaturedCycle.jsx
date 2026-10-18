import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "../Icons";
import { PROJECTS } from "../../../data/consts";
import useSwipe from "../../hooks/useSwipe";

const HOLD_MS = 3500;
const FADE_MS = 250;

// Award winners lead; the rest keep their data order.
const CYCLE = [...PROJECTS].sort(
  (a, b) => Boolean(b.featured) - Boolean(a.featured),
);

const eyebrow = (p) =>
  p.award ? `★ FEATURED · ${p.award}` : `${p.tags.join(" · ")} · ${p.year}`;

const cta = (p) =>
  p.url.startsWith("/")
    ? "Read the story"
    : p.url.includes("github.com")
      ? "View code"
      : "Try it out";

const FeaturedCycle = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [paused, setPaused] = useState(false);
  const project = CYCLE[index];

  // Fade out, swap, fade in.
  const goTo = (next) => {
    if (leaving || next === index) return;
    setLeaving(true);
    setTimeout(() => {
      setIndex(next);
      setLeaving(false);
    }, FADE_MS);
  };

  const swipe = useSwipe({
    onSwipeLeft: () => goTo((index + 1) % CYCLE.length),
    onSwipeRight: () => goTo((index - 1 + CYCLE.length) % CYCLE.length),
  });

  useEffect(() => {
    if (paused || leaving) return;
    const t = setTimeout(() => goTo((index + 1) % CYCLE.length), HOLD_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, leaving]);

  const open = () => {
    if (swipe.consumeSwipe()) return;
    if (project.url.startsWith("/")) navigate(project.url);
    else window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="featured"
      onClick={open}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipe.handlers}
    >
      {/* Every slide shares one grid cell, so the card is always as tall as
          the tallest project and never changes shape while cycling. */}
      <div className="featured-slides">
        {CYCLE.map((p, i) => (
          <div
            key={p.id}
            className={`featured-slide${i === index && !leaving ? " active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="featured-body">
              <p className="featured-eyebrow">{eyebrow(p)}</p>
              <h2 className="featured-title">{p.title}</h2>
              <p className="featured-sub">{p.desc}</p>
            </div>
            <div className="featured-cta">
              {cta(p)} <ArrowUpRight size={13} />
            </div>
          </div>
        ))}
      </div>
      <div className="featured-dots" onClick={(e) => e.stopPropagation()}>
        {CYCLE.map((p, i) => (
          <button
            key={p.id}
            className={`featured-dot${i === index ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Show ${p.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCycle;
