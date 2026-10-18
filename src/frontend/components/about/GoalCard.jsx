import { useEffect, useState } from "react";

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

  const item = goal.items[index];

  return (
    <div
      className="goal-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div>
        <p className="goal-card-label">{goal.label}</p>
        <p className="display goal-card-item" key={item.text}>
          {item.text} {item.emoji}
        </p>
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
