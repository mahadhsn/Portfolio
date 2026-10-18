import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "../Icons";
import { PROJECTS } from "../../../data/consts";

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

  useEffect(() => {
    if (paused || leaving) return;
    const t = setTimeout(() => goTo((index + 1) % CYCLE.length), HOLD_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, leaving]);

  const open = () =>
    project.url.startsWith("/")
      ? navigate(project.url)
      : window.open(project.url, "_blank", "noopener,noreferrer");

  return (
    <div
      className="featured"
      onClick={open}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`featured-body${leaving ? " leaving" : ""}`}>
        <p className="featured-eyebrow">{eyebrow(project)}</p>
        <h2 className="featured-title">{project.title}</h2>
        <p className="featured-sub">{project.desc}</p>
      </div>
      <div className="featured-side">
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
        <div className={`featured-cta${leaving ? " leaving" : ""}`}>
          {cta(project)} <ArrowUpRight size={13} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCycle;
