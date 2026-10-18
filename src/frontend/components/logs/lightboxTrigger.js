// Props that make a non-button element (a photo tile) open the lightbox from
// mouse, Enter, or Space.
const lightboxTrigger = (onOpen, label) => ({
  role: "button",
  tabIndex: 0,
  "aria-label": label,
  onClick: onOpen,
  onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  },
});

export default lightboxTrigger;
