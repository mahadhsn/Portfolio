const AboutRail = ({ sections, active, onSelect, image, chips = [] }) => {
  return (
    <aside className="lg:col-span-4 lg:sticky lg:top-10 h-fit">
      <div className="rounded-3xl border p-6 border-borderlight dark:border-borderdark">
        <div className="text-sm font-bold">
          <span className="text-xl">A</span>BOUT
        </div>
        <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mt-2 mb-5" />

        <div className="flex justify-center lg:justify-start">{image}</div>

        <div className="mt-6 space-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`w-full text-left px-4 py-3 rounded-2xl border transition
                border-borderlight dark:border-borderdark
                ${
                  active === s.id
                    ? "bg-[rgb(var(--secondarybglight))] dark:bg-[rgb(var(--secondarybgdark))]"
                    : "hover:border-accentlight dark:hover:border-accentdark"
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{s.label}</span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    active === s.id
                      ? "bg-accentlight dark:bg-accentdark"
                      : "bg-borderlight/60 dark:bg-borderdark/60"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full border text-xs
                border-borderlight dark:border-borderdark"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AboutRail;
