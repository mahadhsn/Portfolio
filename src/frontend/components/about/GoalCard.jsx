import { useEffect, useState } from "react";
import useSwipe from "../../hooks/useSwipe";

const CYCLE_MS = 3500;

const GoalCard = ({ goal, offset = 0 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(offset === 0);

  // Stagger cards so they don't change in lockstep.
  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => setStarted(true), offset);
    return () => clearTimeout(t);
  }, [started, offset]);

  useEffect(() => {
    if (paused || !started) return;
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % goal.items.length),
      CYCLE_MS,
    );
    return () => clearTimeout(t);
  }, [index, paused, started, goal.items.length]);

  const count = goal.items.length;
  const swipe = useSwipe({
    onSwipeLeft: () => setIndex((i) => (i + 1) % count),
    onSwipeRight: () => setIndex((i) => (i - 1 + count) % count),
  });

  return (
    <div
      className="goal-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipe.handlers}
    >
      <div>
        <p className="goal-card-label">{goal.label}</p>
        {/* Items share one grid cell so the card keeps its height as it cycles. */}
        <div className="goal-card-items">
          {goal.items.map((it, i) => (
            <p
              key={it.text}
              className={`display goal-card-item${i === index ? " active" : ""}`}
              aria-hidden={i !== index}
            >
              {it.text} {it.emoji}
            </p>
          ))}
        </div>
      </div>
      <div className="goal-card-dots">
        {goal.items.map((it, i) => (
          <button
            key={it.text}
            className={`goal-card-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show goal: ${it.text}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalCard;
