import Eyebrow from "./Eyebrow";

const stats = [
  {
    value: "35%",
    body: "of multifamily operators report renter defaults rising year over year — Dwellent shifts that exposure to a carrier.",
  },
  {
    value: "$0",
    body: "Enrollment is free for landlords and property managers — no software fee, no contract.",
  },
  {
    value: "1 hr",
    body: "Typical time to get a new property certified and ready to accept applications.",
  },
];

export default function LandlordSection() {
  return (
    <section id="landlords" className="bg-[#F7F9FC] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <Eyebrow color="green" tone="light">
            For Landlords &amp; Property Managers
          </Eyebrow>
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          No Cost to Enroll. No Contract.
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Reduce bad-debt exposure and speed up leasing — without changing how you screen tenants today.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value} className="rounded-2xl border border-black/5 bg-white p-7">
            <div className="font-serif text-4xl text-brand-blue">{s.value}</div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
