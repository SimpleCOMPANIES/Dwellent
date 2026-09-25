import Link from "next/link";

const columns = [
  {
    title: "Renters",
    links: ["Apply Now", "How It Works", "Pricing", "FAQ"],
  },
  {
    title: "Landlords",
    links: ["Sign In / Enroll a Property", "Property Managers", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Carrier Partners", "Contact"],
  },
];

const legal = [
  "Privacy Policy",
  "Terms",
  "Licensing",
  "Notice of Collection",
  "Communications Consent",
  "AI Disclosure",
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-serif text-2xl text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue via-brand-yellow to-brand-green text-xs font-bold text-white">
                D
              </span>
              Dwellent
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Insure your rent. Replace the deposit. Lease guaranty and
              deposit-replacement insurance, built for how people rent today.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/40">Legal</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {legal.map((l) => (
                <li key={l}>
                  <Link href="#" className="transition-colors hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed text-white/40">
          Dwellent LLC operates as a licensed insurance producer/MGA. Products
          are underwritten by unaffiliated, authorized insurance carriers;
          Dwellent does not itself hold insurance risk. State licensing and
          NPN information, and producer compensation disclosures, are listed
          on our Licensing page per jurisdiction.
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dwellent LLC. All rights reserved.</span>
          <span>dwellent.com</span>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none pb-4 text-center font-serif font-bold leading-none text-transparent"
        style={{
          fontSize: "min(18vw, 220px)",
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
      >
        DWELLENT
      </div>
    </footer>
  );
}
