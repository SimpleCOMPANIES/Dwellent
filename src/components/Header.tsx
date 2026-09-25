"use client";

import Image from "next/image";
import { useState } from "react";

const primaryLinks = ["Renters", "Landlords", "How It Works", "Pricing"];
const moreLinks = ["Property Managers", "Learn", "FAQ"];

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <Image
            src="/dwellent-lockup.png"
            alt="Dwellent"
            width={520}
            height={110}
            priority
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink lg:flex">
          {primaryLinks.map((l) => (
            <span key={l} className="cursor-default transition-colors hover:text-brand-blue">
              {l}
            </span>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <span className="flex cursor-default items-center gap-1 transition-colors hover:text-brand-blue">
              Company
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-px">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            {moreOpen && (
              <div className="absolute left-0 top-full w-52 rounded-xl border border-black/5 bg-white py-2 shadow-lg">
                {moreLinks.map((l) => (
                  <span
                    key={l}
                    className="block cursor-default px-4 py-2 text-sm text-ink hover:bg-black/[0.03] hover:text-brand-blue"
                  >
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="cursor-default rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-brand-blue">
            Sign In
          </span>
          <span className="cursor-default rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark">
            Get Started
          </span>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="#0b1220" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-ink">
            {[...primaryLinks, ...moreLinks].map((l) => (
              <span key={l}>{l}</span>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-black/5 pt-4">
              <span>Sign In</span>
              <span className="rounded-full bg-brand-blue px-5 py-2.5 text-center font-semibold text-white">
                Get Started
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
