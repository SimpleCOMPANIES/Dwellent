import DwellentMark from "./DwellentMark";

const queue = [
  { name: "Jordan Blake", id: "DWL-2026-100214A", addr: "482 Lexington Ave, 4B", rent: "$3,700", mult: "42.1×", status: "Under review", tone: "blue" },
  { name: "Sam Rivera", id: "DWL-2026-100211A", addr: "118 W 72nd St, 9F", rent: "$4,150", mult: "38.4×", status: "Pre-approved", tone: "green" },
  { name: "Priya Shah", id: "DWL-2026-100207A", addr: "77 Clinton St, 3A", rent: "$2,950", mult: "51.0×", status: "Needs docs", tone: "amber" },
  { name: "Marcus Lee", id: "DWL-2026-100203A", addr: "31 Grove St, 2R", rent: "$3,300", mult: "36.7×", status: "Approved", tone: "green" },
  { name: "Elena Ortiz", id: "DWL-2026-100198A", addr: "240 E 86th St, 12C", rent: "$5,200", mult: "40.2×", status: "Under review", tone: "blue" },
] as const;

const toneClass = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
};

function MiniBrand({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-white">
        <DwellentMark className="h-2.5 w-2.5" />
      </span>
      <span className={`text-[7px] font-bold ${dark ? "text-white" : "text-slate-900"}`}>Dwellent</span>
    </div>
  );
}

function Laptop() {
  return (
    <div className="relative mx-auto w-[78%]">
      <div className="rounded-t-xl border-[5px] border-b-0 border-slate-900 bg-slate-900 shadow-2xl">
        <div className="flex aspect-[16/10] overflow-hidden rounded-t-md bg-white text-left">
          <aside className="w-[20%] space-y-1 bg-[#0b1f4d] p-2 text-[5px] text-white/60">
            <MiniBrand dark />
            <p className="pt-2 tracking-widest">UNDERWRITING</p>
            <p className="rounded bg-white/15 px-1 py-0.5 font-semibold text-white">Application Queue</p>
            <p className="px-1">Tasks</p>
            <p className="pt-1 tracking-widest">BOOK</p>
            <p className="px-1">Bound Policies</p>
            <p className="px-1">Claims</p>
            <p className="px-1">Renewals</p>
          </aside>
          <div className="flex-1 bg-slate-50 p-2">
            <div className="h-2.5 w-1/3 rounded bg-white ring-1 ring-slate-200" />
            <div className="mt-2 flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold text-slate-900">Application Queue</p>
                <p className="text-[4.5px] text-slate-500">Auto-decisioned files and anything waiting on underwriting</p>
              </div>
              <span className="rounded bg-[#0b1f4d] px-1.5 py-0.5 text-[4.5px] font-semibold text-white">+ New Application</span>
            </div>
            <div className="mt-1.5 grid grid-cols-4 gap-1">
              {[
                ["Awaiting decision", "14"],
                ["Approved (30d)", "62"],
                ["Avg. decision time", "4.2h"],
                ["Premium bound (MTD)", "$48.6K"],
              ].map(([k, v]) => (
                <div key={k} className="rounded border-b-2 border-blue-500 bg-white p-1 ring-1 ring-slate-200">
                  <p className="text-[4px] text-slate-500">{k}</p>
                  <p className="text-[8px] font-bold text-slate-900">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-1.5 rounded bg-white ring-1 ring-slate-200">
              <p className="border-b border-slate-100 px-1.5 py-1 text-[5px] font-bold text-slate-900">Awaiting decision</p>
              {queue.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-[1.2fr_1.4fr_0.6fr_0.6fr_0.9fr] items-center gap-1 border-b border-slate-100 px-1.5 py-[3px] text-[4.5px] text-slate-700 last:border-0"
                >
                  <span>
                    <span className="block font-semibold text-slate-900">{r.name}</span>
                    <span className="text-[3.5px] text-slate-400">{r.id}</span>
                  </span>
                  <span>{r.addr}</span>
                  <span>{r.rent}</span>
                  <span>{r.mult}</span>
                  <span className={`justify-self-start rounded-full px-1 py-px text-[4px] font-semibold ${toneClass[r.tone]}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[-6%] h-2.5 rounded-b-xl bg-linear-to-b from-slate-300 to-slate-400 shadow-xl" />
    </div>
  );
}

function Tablet() {
  return (
    <div className="w-full rounded-2xl border-[5px] border-slate-900 bg-slate-900 shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white text-left">
        <div className="flex items-center justify-between bg-[#0b1f4d] px-2 py-1.5">
          <MiniBrand dark />
          <span className="text-[4.5px] text-white/60">Skyline Property Mgmt</span>
        </div>
        <div className="p-2">
          <p className="text-[7px] font-bold text-slate-900">Portfolio overview</p>
          <div className="mt-1.5 grid grid-cols-2 gap-1">
            {[
              ["Active policies", "96"],
              ["Coverage in force", "$1.14M"],
              ["Pending applicants", "7"],
              ["Open claims", "1"],
            ].map(([k, v]) => (
              <div key={k} className="rounded border-b-2 border-blue-500 p-1 ring-1 ring-slate-200">
                <p className="text-[4px] text-slate-500">{k}</p>
                <p className="text-[7px] font-bold text-slate-900">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[5px] font-bold text-slate-900">Application tracker</p>
          {[
            ["Jordan Blake · 4B", "70%"],
            ["Sam Rivera · 9F", "90%"],
            ["Priya Shah · 3A", "40%"],
          ].map(([n, w]) => (
            <div key={n} className="mt-1">
              <p className="text-[4.5px] text-slate-700">{n}</p>
              <div className="mt-0.5 h-[3px] rounded bg-slate-100">
                <div className="h-full rounded bg-blue-600" style={{ width: w }} />
              </div>
            </div>
          ))}
          <p className="mt-2 text-[5px] font-bold text-slate-900">Leases renewing soon</p>
          {["108 W 72nd St, 5D", "77 Clinton St, 1B", "31 Grove St, 4F"].map((a) => (
            <div key={a} className="flex justify-between border-b border-slate-100 py-[3px] text-[4.5px] text-slate-700">
              <span>{a}</span>
              <span className="rounded-full bg-blue-50 px-1 text-[4px] text-blue-700">Renew</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="w-full rounded-[1.4rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.1rem] bg-slate-50 text-left">
        <div className="absolute left-1/2 top-1 h-2 w-8 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className="px-2 pt-4">
          <MiniBrand />
          <div className="mt-1.5 rounded-lg bg-[#0b1f4d] p-2 text-white">
            <p className="text-[4px] tracking-widest text-white/60">YOU&apos;RE PRE-APPROVED</p>
            <p className="mt-0.5 text-[7px] font-bold leading-tight">482 Lexington Ave, Unit 4B</p>
            <p className="text-[4px] text-white/60">Lease guaranty · up to $11,100 coverage</p>
            <div className="mt-1.5 flex items-end justify-between">
              <p className="text-[9px] font-bold">
                $1,850<span className="text-[4px] font-normal text-white/60">/yr</span>
              </p>
              <span className="shrink-0 whitespace-nowrap rounded bg-white px-1 py-0.5 text-[4.5px] font-semibold text-[#0b1f4d]">Pay &amp; bind</span>
            </div>
          </div>
          <p className="mt-2 text-[5px] font-bold text-slate-900">Your checklist</p>
          {[
            ["Identity verified", "Done"],
            ["Income & assets", "Done"],
            ["Soft credit check", "Done"],
            ["Sign & pay", "Next"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-slate-200 py-[3px] text-[4.5px] text-slate-700">
              <span>{k}</span>
              <span
                className={`rounded-full px-1 text-[4px] font-semibold ${
                  v === "Done" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
                }`}
              >
                {v}
              </span>
            </div>
          ))}
          <div className="mt-2 rounded bg-white p-1 ring-1 ring-slate-200">
            <p className="text-[4px] text-slate-500">Reference</p>
            <p className="text-[5px] font-bold text-slate-900">DWL-2026-100214A</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pb-[8%] pt-2" aria-hidden>
      <Laptop />
      <div className="absolute bottom-0 left-0 w-[25%]">
        <Tablet />
      </div>
      <div className="absolute bottom-[2%] right-0 w-[17%]">
        <Phone />
      </div>
    </div>
  );
}
