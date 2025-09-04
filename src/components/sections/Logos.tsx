import Image from "next/image";

const logos = [
  { src: "/next.svg", alt: "Next.js" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/globe.svg", alt: "Globe" },
  { src: "/window.svg", alt: "Window" },
  { src: "/file.svg", alt: "File" },
];

export function Logos() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs tracking-widest text-neutral-500 uppercase">
          Vertrauen in Technologie
        </p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="opacity-70 transition hover:opacity-100"
            >
              <Image src={logo.src} alt={logo.alt} width={100} height={28} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
