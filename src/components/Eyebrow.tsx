const colorMap = {
  blue: "bg-brand-blue",
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
} as const;

export default function Eyebrow({
  children,
  color = "blue",
  tone = "dark",
}: {
  children: React.ReactNode;
  color?: keyof typeof colorMap;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
        tone === "dark" ? "text-white/70" : "text-ink-soft"
      }`}
    >
      <span className={`h-2.5 w-2.5 rounded-sm ${colorMap[color]}`} />
      {children}
    </div>
  );
}
