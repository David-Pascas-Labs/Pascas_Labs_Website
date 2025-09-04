import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Sensorik & Monitoring",
    text: "EC, pH, Temperatur, Luftfeuchte, Licht – in Echtzeit visualisiert.",
  },
  {
    title: "Regelung & Automatisierung",
    text: "Nährlösung, pH-Korrektur, Pumpen/Beleuchtung per Zeitplänen & Triggern.",
  },
  {
    title: "Alarmierung",
    text: "Benachrichtigungen bei Schwellenwerten und Ausfällen.",
  },
  {
    title: "Analytics & Empfehlungen",
    text: "Trends, Kennzahlen und KI-gestützte Optimierungsvorschläge.",
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl text-neutral-100 sm:text-4xl">
          Funktionen
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-400">
          Kernfunktionen von CropCommander – skalierbar und sicher
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800 transition hover:ring-neutral-700"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-900/20">
              <CheckCircle2 className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-100">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
