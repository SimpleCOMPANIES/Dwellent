import Eyebrow from "./Eyebrow";

const badges = ["NY DFS", "Licensed MGA", "Authorized Carriers"];

const columns = [
  {
    title: "Soft Credit Pull Only",
    body: "Identity and credit checks never trigger a hard inquiry and never impact a renter's credit score.",
    icon: (
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Licensed Insurance Producer",
    body: "Dwellent operates as a licensed insurance producer and MGA — we don't hold insurance risk ourselves.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Authorized Carrier Panel",
    body: "Products are underwritten by unaffiliated, authorized insurance carriers across a multi-carrier panel.",
    icon: (
      <path d="M4 21V9l8-6 8 6v12M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export default function ComplianceSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <Eyebrow color="blue" tone="light">
              Compliance
            </Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink">
              Regulatory Standards, Built In
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex h-16 items-center justify-center rounded-full border border-black/10 bg-[#F7F9FC] px-5 text-xs font-semibold text-ink-soft"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.03] text-ink">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
