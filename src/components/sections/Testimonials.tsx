export function Testimonials() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl text-neutral-100 sm:text-4xl">
          Kundenstimmen
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-400">
          Was unsere Kunden über Pascas Labs sagen
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <blockquote className="rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
          <p className="text-neutral-300">
            „Die Zusammenarbeit war effizient und unkompliziert. Die Lösung
            liefert echten Mehrwert.“
          </p>
          <footer className="mt-4 text-sm text-neutral-500">
            — CTO, Agritech Startup
          </footer>
        </blockquote>
        <blockquote className="rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
          <p className="text-neutral-300">
            „Hohe Qualität, verlässlich und schnell – klare Empfehlung.“
          </p>
          <footer className="mt-4 text-sm text-neutral-500">
            — Leiter Produktion
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
