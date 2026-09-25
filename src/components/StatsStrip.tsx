const stats = [
  { value: "<10 min", label: "Avg. application time" },
  { value: "Instant", label: "Decision for most files" },
  { value: "Soft pull", label: "No credit score impact" },
  { value: "24 hrs", label: "Target guaranty issuance" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-2xl text-ink sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
