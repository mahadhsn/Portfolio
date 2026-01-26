const SectionHeader = ({ title, subtitle }) => (
  <div>
    <div className="text-sm font-bold">{title}</div>
    <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mt-2 mb-4" />
    {subtitle && (
      <div className="text-xl md:text-2xl font-semibold">{subtitle}</div>
    )}
  </div>
);

export default SectionHeader;
