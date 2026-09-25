export function GuarantyMockup() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Lease Guaranty
        </span>
        <span className="rounded-full bg-brand-green/10 px-2.5 py-1 text-xs font-semibold text-brand-green">
          Active
        </span>
      </div>
      <div className="rounded-xl bg-black/[0.03] p-4">
        <div className="text-xs text-ink-soft">Guarantor</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Dwellent Insurance Co.</div>
        <div className="mt-3 text-xs text-ink-soft">Coverage limit</div>
        <div className="mt-0.5 font-serif text-2xl text-ink">$11,100</div>
        <div className="text-xs text-ink-soft">3× monthly rent, unpaid-rent protection</div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-xs font-medium text-brand-blue">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        No human co-signer required
      </div>
    </div>
  );
}

export function DepositMockup() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-5 shadow-2xl">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Deposit Replacement
      </span>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-black/10 p-4">
          <div className="text-xs text-ink-soft">Cash deposit</div>
          <div className="mt-1 font-serif text-xl text-ink/40 line-through">$7,400</div>
          <div className="mt-1 text-[11px] text-ink-soft">tied up in escrow</div>
        </div>
        <div className="rounded-xl border border-brand-blue bg-brand-blue/5 p-4">
          <div className="text-xs text-brand-blue">Dwellent plan</div>
          <div className="mt-1 font-serif text-xl text-ink">$154/mo</div>
          <div className="mt-1 text-[11px] text-ink-soft">small recurring fee</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-xs font-medium text-ink">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Same landlord protection as cash
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Frees up $7,246 for moving costs
        </li>
      </ul>
    </div>
  );
}

const steps = [
  { label: "Apply in minutes", done: true },
  { label: "Instant decision", done: true },
  { label: "Landlord receives certificate", done: true },
  { label: "Move in", done: false },
];

export function ProcessMockup() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Application — Running
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-brand-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
          Lease Guaranty
        </span>
      </div>
      <ul className="space-y-3">
        {steps.map((s) => (
          <li key={s.label} className="flex items-center gap-3 text-sm">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                s.done ? "bg-ink text-white" : "border border-black/15 bg-white"
              }`}
            >
              {s.done && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className={s.done ? "text-ink" : "text-ink-soft"}>{s.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-xs text-ink-soft">
          <span>Progress</span>
          <span>75%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-3/4 rounded-full bg-brand-blue" />
        </div>
      </div>
    </div>
  );
}
