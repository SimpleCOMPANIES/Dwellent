import Eyebrow from "./Eyebrow";

const guides = [
  {
    tag: "Renter Guide",
    title: "How to rent an apartment with limited credit history",
    body: "What landlords actually look for, and how a guaranty changes the math.",
    gradient: "from-brand-blue to-brand-navy",
  },
  {
    tag: "Landlord Guide",
    title: "Reducing bad debt without turning away good tenants",
    body: "A practical look at deposit alternatives and guaranty coverage.",
    gradient: "from-brand-navy to-[#081a33]",
  },
  {
    tag: "State Guide",
    title: "New York renter eligibility & deposit rules",
    body: "What NY law requires, and where Dwellent coverage fits in.",
    gradient: "from-[#0b2f5c] to-brand-blue",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <Eyebrow color="blue" tone="light">
            Learn
          </Eyebrow>
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Resources for Renters &amp; Landlords
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Long-form guides, separate from our FAQ — written to actually answer the question, not just rank for it.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {guides.map((g) => (
          <a key={g.title} href="#" className="group block overflow-hidden rounded-2xl border border-black/5">
            <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${g.gradient}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 2h9l5 5v15H6z M15 2v5h5"
                  stroke="white"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{g.tag}</span>
              <h3 className="mt-2 text-lg font-medium leading-snug text-ink group-hover:text-brand-blue">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{g.body}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
