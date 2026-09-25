import Eyebrow from "./Eyebrow";

const rows = [
  {
    category: "Carrier panel",
    existing: "Single-carrier concentration risk in some incumbents",
    dwellent: "Multi-carrier panel from day one",
  },
  {
    category: "Claims design",
    existing: "Requires eviction or judgment before paying, in some models",
    dwellent: "Rewards fast landlord action; caps payout to actual documented loss",
  },
  {
    category: "Automation",
    existing: "Manual underwriting still common in this category",
    dwellent: "AI-driven underwriting and claims support, automation-first by design",
  },
  {
    category: "Building enrollment",
    existing: "Varies by provider",
    dwellent: "Any property can be enrolled and certified in about an hour",
  },
];

const tags = [
  "Verify identity",
  "Score credit risk",
  "Issue certificate",
  "Enroll property",
  "Process claims",
  "Detect fraud",
  "Automate renewals",
  "Notify landlords",
  "Route to underwriting",
  "Generate lease docs",
  "Calculate coverage",
  "Sync with property systems",
];

export default function ComparisonSection() {
  const loop = [...tags, ...tags];

  return (
    <section className="overflow-hidden bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow color="yellow">Category</Eyebrow>
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Built Differently From Legacy Deposit Insurance
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Existing Players</th>
                <th className="px-6 py-4 font-medium text-brand-blue">Dwellent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.category} className="border-b border-white/5 last:border-none">
                  <td className="px-6 py-5 font-medium text-white">{r.category}</td>
                  <td className="px-6 py-5 text-white/50">{r.existing}</td>
                  <td className="px-6 py-5 text-white">{r.dwellent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative mt-16 flex select-none overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-3 pr-3">
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-3 pr-3" aria-hidden>
          {loop.map((t, i) => (
            <span
              key={`dup-${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
