import Eyebrow from "./Eyebrow";

const cards = [
  {
    tab: "Renters",
    color: "blue" as const,
    headline: "Soft pull only, never impacts your credit score.",
    body: "We verify identity, income, and credit automatically — with a soft pull that never shows up on your report and never lowers your score.",
  },
  {
    tab: "Landlords",
    color: "green" as const,
    headline: "$0 to enroll, decision in about an hour.",
    body: "No software fee, no contract. Certify a property in about an hour and start accepting Dwellent-backed applications the same day.",
  },
  {
    tab: "Property Managers",
    color: "yellow" as const,
    headline: "One integration, every property certified.",
    body: "Connect Dwellent once across your portfolio — every unit gets the same automated screening, guaranty, and claims workflow.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <Eyebrow color="blue">Why Dwellent</Eyebrow>
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
          Built for Renters, Landlords, and the People In Between
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.tab} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <Eyebrow color={c.color}>{c.tab}</Eyebrow>
            <h3 className="mt-4 text-lg font-medium leading-snug text-white">{c.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
