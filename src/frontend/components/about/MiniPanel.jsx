const MiniPanel = ({ title, children }) => (
  <div className="rounded-2xl border p-5 border-borderlight dark:border-borderdark">
    <div className="text-sm font-bold">{title}</div>
    <div className="mt-3 text-sm md:text-base">{children}</div>
  </div>
);

export default MiniPanel;
