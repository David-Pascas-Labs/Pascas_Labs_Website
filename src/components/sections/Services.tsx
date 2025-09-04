import { Brain, Code2, Palette } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Künstliche Intelligenz",
    text: "Maßgeschneiderte KI-Lösungen für Automatisierung, Datenanalyse und intelligente Entscheidungsfindung.",
  },
  {
    icon: Code2,
    title: "Software-Entwicklung",
    text: "Moderne Web- und Mobile-Anwendungen mit neuesten Technologien und Best Practices.",
  },
  {
    icon: Palette,
    title: "Kreative Lösungen",
    text: "Innovative UI/UX-Designs und kreative digitale Erlebnisse für Ihre Zielgruppe.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-10 sm:py-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl text-neutral-100 sm:text-4xl">
          Unsere Services
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-400">
          Innovative Technologielösungen für die digitale Transformation
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800 transition hover:ring-neutral-700"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-900/20">
              <Icon className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
