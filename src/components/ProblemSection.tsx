import Eyebrow from "./Eyebrow";

const problems = [
  {
    title: "Cash Locked in Escrow",
    body: "Renters tie up one to two months' rent in a security deposit they may not see again for years — cash that could go toward moving costs or savings.",
    icon: (
      <path
        d="M6 11V8a6 6 0 1112 0v3M4 11h16v9H4z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Co-Signers Slow Everything Down",
    body: "Finding a qualified co-signer means chasing a relative's pay stubs and credit report — or losing the unit to a faster applicant.",
    icon: (
      <path
        d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6zM2 20v-1a5 5 0 015-5h2M15 20v-1a5 5 0 015-5h0"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Manual Screening, Rising Defaults",
    body: "35% of multifamily operators report renter defaults rising year over year, yet certificate issuance across the industry is still largely manual.",
    icon: (
      <path
        d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow color="red">The Problem</Eyebrow>
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            The Old Renting System Runs on Cash Deposits,
            Co-Signers, and Paperwork.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              style={{ minHeight: 230 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {p.icon}
              </svg>
              <div>
                <h3 className="mt-8 text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
