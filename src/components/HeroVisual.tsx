import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.5rem] shadow-2xl">
      <Image
        src="/hero-showcase.png"
        alt="Dwellent renters insurance dashboard on laptop and phone"
        width={1672}
        height={941}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
