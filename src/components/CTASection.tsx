import Link from "next/link";

export default function CTASection() {
  return (
    <section id="pricing" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
          Ready to Skip
          <br />
          the Deposit?
        </h2>
        <div className="md:text-right">
          <p className="text-base text-white/60">
            Most applicants get a decision in minutes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:justify-end">
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              Start Your Application →
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
