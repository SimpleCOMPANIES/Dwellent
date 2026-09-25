const stats = [
  { label: "US renter households", value: "45.3M" },
  { label: "Locked in deposits nationwide", value: "$44–45B" },
  { label: "Avg. application time", value: "<10 min" },
  { label: "Licensing", value: "NY DFS MGA" },
];

export default function TickerBar() {
  return (
    <div className="overflow-x-auto whitespace-nowrap border-b border-white/10 bg-[#0a0a0f] px-6 py-2 text-[11px] text-white/70">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        <span className="shrink-0 font-semibold uppercase tracking-[0.14em] text-white/40">
          Today&apos;s Program Snapshot
        </span>
        {stats.map((s) => (
          <span key={s.label} className="shrink-0">
            {s.label} <span className="font-semibold text-brand-blue">{s.value}</span>
          </span>
        ))}
        <span className="ml-auto hidden shrink-0 text-white/30 sm:inline">
          Program figures — see FAQ for current terms
        </span>
      </div>
    </div>
  );
}
