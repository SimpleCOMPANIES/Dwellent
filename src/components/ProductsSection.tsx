import Eyebrow from "./Eyebrow";
import FeatureRow from "./FeatureRow";
import { GuarantyMockup, DepositMockup, ProcessMockup } from "./mockups";

export default function ProductsSection() {
  return (
    <section id="renters" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <Eyebrow color="blue" tone="light">
            Our Products
          </Eyebrow>
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Two Products, One Application
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Whichever a renter needs — or doesn&apos;t yet know they need — one flow figures it out.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <FeatureRow
          eyebrow="Lease Guaranty"
          eyebrowColor="blue"
          heading="For Renters Who Don't Meet the Bar on Their Own"
          body="An institutional guarantor stands behind the lease, covering unpaid rent up to the policy limit — no human co-signer, no awkward ask."
          bullets={[
            "Institutional guarantor stands behind the lease",
            "No human co-signer required",
            "Covers unpaid rent up to policy limit",
          ]}
          mockup={<GuarantyMockup />}
          panelClassName="bg-gradient-to-br from-brand-blue via-[#0b52b0] to-brand-navy"
        />

        <FeatureRow
          id="deposit-replacement"
          eyebrow="Deposit Replacement"
          eyebrowColor="green"
          heading="For Renters Who Qualify but Don't Want Cash Tied Up"
          body="Trade a one- or two-months'-rent deposit for a small recurring fee — the landlord gets the same protection, and you keep your cash."
          bullets={[
            "Small recurring fee instead of 1–2 months' rent upfront",
            "Same landlord protection as a cash deposit",
            "Frees up renter cash for moving costs",
          ]}
          mockup={<DepositMockup />}
          reverse
          panelClassName="bg-gradient-to-br from-brand-navy via-[#0b2f5c] to-[#081a33]"
        />

        <FeatureRow
          id="how-it-works"
          eyebrow="Application Process"
          eyebrowColor="yellow"
          heading="From Application to Certificate in Minutes"
          body="Identity, income, and credit are verified automatically. Our underwriting engine returns a decision and price immediately for most applicants."
          bullets={[
            "Apply in minutes — no paperwork mailed or faxed",
            "Instant decision for most applicants",
            "Landlord receives certificate the same way as a deposit",
          ]}
          mockup={<ProcessMockup />}
          panelClassName="bg-gradient-to-br from-[#1c1c22] via-[#0f0f14] to-black"
        />
      </div>
    </section>
  );
}
