const TimelineBlock = ({ title, items }) => {
  return (
    <div className="rounded-2xl border p-6 border-borderlight dark:border-borderdark">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="text-base md:text-lg font-semibold">{title}</div>

        <div className="h-1 w-10 rounded-full bg-accentlight dark:bg-accentdark" />
      </div>

      {/* Items */}
      <ul className="mt-4 space-y-4">
        {items.map((item, idx) => (
          <li key={idx}>
            <div className="leading-relaxed">{item.content}</div>

            {item.date && (
              <div className="mt-2 md:flex md:justify-end">
                <span
                  className="inline-block px-3 py-1 text-xs rounded-full border
                    border-borderlight dark:border-borderdark
                    text-textlight/70 dark:text-textdark/70"
                >
                  {item.date.replace("@ ", "")}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineBlock;
