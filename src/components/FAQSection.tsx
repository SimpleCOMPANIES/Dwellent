"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";

const faqs = {
  Renter: [
    {
      q: "Does this affect my credit score?",
      a: "No — we perform a soft credit pull only, which never impacts your credit score.",
    },
    {
      q: "How fast is the decision?",
      a: "Our underwriting engine returns a decision and price instantly for most applicants — no waiting days for a manual review.",
    },
    {
      q: "What if I don't have a US credit history?",
      a: "You can still apply. We weigh income and identity verification alongside whatever credit data is available.",
    },
    {
      q: "Can I use this instead of a security deposit?",
      a: "Yes — our Deposit Replacement product gives your landlord the same protection as a cash deposit, for a small recurring fee instead.",
    },
  ],
  Landlord: [
    {
      q: "Does it cost anything to enroll my property?",
      a: "No — enrollment is free for landlords and property managers, with no software fee and no contract.",
    },
    {
      q: "How do claims work?",
      a: "Claims are capped to actual documented loss and rewarded for fast landlord action, rather than requiring eviction or judgment first.",
    },
    {
      q: "How long does it take to certify a property?",
      a: "Most properties are certified and ready to accept Dwellent-backed applications in about an hour.",
    },
    {
      q: "Does this change how I screen tenants?",
      a: "No — Dwellent works alongside your existing screening process; it doesn't replace it.",
    },
  ],
};

export default function FAQSection() {
  const [tab, setTab] = useState<"Renter" | "Landlord">("Renter");
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.4fr]">
        <div>
          <Eyebrow color="blue" tone="light">
            FAQs
          </Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink">
            Have questions?
            <br />
            Find answers.
          </h2>
          <p className="mt-6 text-sm text-ink-soft">Have more questions?</p>
          <p className="text-sm text-ink-soft">Reach out to our friendly support team.</p>

          <div className="mt-6 inline-flex rounded-full border border-black/10 p-1">
            {(["Renter", "Landlord"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setOpen(0);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {t} FAQ
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-black/10 border-t border-black/10">
          {faqs[tab].map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-base font-medium text-ink">{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/15 text-ink">
                    {isOpen ? (
                      <svg width="10" height="2" viewBox="0 0 10 2">
                        <rect width="10" height="1.5" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <rect y="4.25" width="10" height="1.5" fill="currentColor" />
                        <rect x="4.25" width="1.5" height="10" fill="currentColor" />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && <p className="pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
