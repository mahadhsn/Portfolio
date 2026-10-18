import { useRef } from "react";

// Horizontal swipe detection for touch devices. Spread the returned handlers
// onto an element; vertical scrolling is left alone.
const useSwipe = ({ onSwipeLeft, onSwipeRight, threshold = 40 }) => {
  const start = useRef(null);
  const swiped = useRef(false);

  return {
    handlers: {
      onTouchStart: (e) => {
        const t = e.touches[0];
        start.current = { x: t.clientX, y: t.clientY };
        swiped.current = false;
      },
      onTouchEnd: (e) => {
        if (!start.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - start.current.x;
        const dy = t.clientY - start.current.y;
        start.current = null;
        if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.5) {
          return;
        }
        swiped.current = true;
        (dx < 0 ? onSwipeLeft : onSwipeRight)();
      },
    },
    // True right after a swipe, so a card's click handler can ignore it.
    consumeSwipe: () => {
      const was = swiped.current;
      swiped.current = false;
      return was;
    },
  };
};

export default useSwipe;
