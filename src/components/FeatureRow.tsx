import Eyebrow from "./Eyebrow";

type Color = "blue" | "red" | "yellow" | "green";

export default function FeatureRow({
  id,
  eyebrow,
  eyebrowColor = "blue",
  heading,
  body,
  bullets,
  mockup,
  reverse = false,
  panelClassName,
}: {
  id?: string;
  eyebrow: string;
  eyebrowColor?: Color;
  heading: string;
  body: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
  panelClassName: string;
}) {
  return (
    <div id={id} className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16">
      <div className={reverse ? "md:order-2" : ""}>
        <div className={`relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl p-6 ${panelClassName}`}>
          {mockup}
        </div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <Eyebrow color={eyebrowColor} tone="light">
          {eyebrow}
        </Eyebrow>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">{heading}</h3>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{body}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0 text-brand-blue">
                <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
