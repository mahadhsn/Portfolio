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
            <div className="flex items-start gap-3">
              {/* red bullet */}
              <span className="mt-[7px] h-2 w-2 rounded-full bg-accentdark dark:bg-accentdark" />

              {/* content */}
              <div className="flex-1">
                <div className="leading-relaxed">{item.content}</div>

                {/* date under content */}
                {item.date && (
                  <span
                    className="mt-2 inline-block px-3 py-1 text-xs rounded-full border
                border-borderlight dark:border-borderdark
                text-textlight/70 dark:text-textdark/70"
                  >
                    {item.date.replace("@ ", "")}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineBlock;
