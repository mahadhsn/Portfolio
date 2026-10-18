import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Close } from "../Icons";
import useSwipe from "../../hooks/useSwipe";

// Full-screen photo viewer. Arrow keys / buttons / swipe to move, Esc or a
// click on the backdrop to close.
const Lightbox = ({ images, index, alt, onClose, onChange }) => {
  const count = images.length;
  const closeRef = useRef(null);

  const prev = useCallback(
    () => onChange((index - 1 + count) % count),
    [index, count, onChange],
  );
  const next = useCallback(
    () => onChange((index + 1) % count),
    [index, count, onChange],
  );
  const swipe = useSwipe({ onSwipeLeft: next, onSwipeRight: prev });

  // Lock page scroll and restore focus to whatever opened the viewer.
  useEffect(() => {
    const opener = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Warm the cache for the neighbours so stepping through feels instant.
  useEffect(() => {
    [images[(index + 1) % count], images[(index - 1 + count) % count]].forEach(
      (src) => {
        new Image().src = src;
      },
    );
  }, [images, index, count]);

  const stop = (fn) => (e) => {
    e.stopPropagation();
    fn();
  };

  // The <img> fills a fixed box and letterboxes the photo inside it
  // (object-fit: contain), so a click in the empty letterbox area should still
  // count as a click outside the photo.
  const onImageClick = (e) => {
    e.stopPropagation();
    const el = e.currentTarget;
    const box = el.getBoundingClientRect();
    const scale = Math.min(
      box.width / el.naturalWidth,
      box.height / el.naturalHeight,
    );
    const w = el.naturalWidth * scale;
    const h = el.naturalHeight * scale;
    const left = box.left + (box.width - w) / 2;
    const top = box.top + (box.height - h) / 2;
    const inside =
      e.clientX >= left &&
      e.clientX <= left + w &&
      e.clientY >= top &&
      e.clientY <= top + h;
    if (!inside) onClose();
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photo viewer`}
      onClick={onClose}
      {...swipe.handlers}
    >
      <button
        ref={closeRef}
        className="lightbox-btn lightbox-close"
        onClick={stop(onClose)}
        aria-label="Close"
      >
        <Close size={16} />
      </button>

      {count > 1 && (
        <button
          className="lightbox-btn lightbox-nav lightbox-prev"
          onClick={stop(prev)}
          aria-label="Previous photo"
        >
          <ArrowLeft size={18} />
        </button>
      )}

      <img
        key={index}
        className="lightbox-img"
        src={images[index]}
        alt={`${alt} ${index + 1} of ${count}`}
        onClick={onImageClick}
        draggable={false}
      />

      {count > 1 && (
        <button
          className="lightbox-btn lightbox-nav lightbox-next"
          onClick={stop(next)}
          aria-label="Next photo"
        >
          <ArrowRight size={18} />
        </button>
      )}

      <div className="lightbox-count">
        {index + 1} / {count}
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
