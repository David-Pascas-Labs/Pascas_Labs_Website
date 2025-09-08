export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl py-16">
      <h1 className="font-serif text-3xl text-neutral-100">
        Über uns – Pascas Labs
      </h1>
      <p className="mt-4 text-neutral-300">
        Bei Pascas Labs vereinen wir unsere Leidenschaft für Künstliche
        Intelligenz, Software-Entwicklung, Kreativität und Systemarchitektur.
        Unser interdisziplinäres Team entwickelt maßgeschneiderte Lösungen, die
        Technologie und Kreativität verbinden.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-neutral-100">Mission</h2>
      <ul className="mt-2 list-disc pl-5 text-neutral-300">
        <li>
          Innovative, nachhaltige Technologielösungen für messbaren Mehrwert
        </li>
        <li>Partnerschaftliche Zusammenarbeit auf Augenhöhe</li>
        <li>Qualität, Sicherheit und Datenschutz als Standard</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-neutral-100">
        Kennzahlen
      </h2>
      <ul className="mt-2 list-disc pl-5 text-neutral-300">
        <li>Projekte: 100+</li>
        <li>Jahre Erfahrung: 5+</li>
        <li>Support: 24/7</li>
        <li>Qualität: 100%</li>
      </ul>

      <div className="mt-8 flex gap-4">
        <a
          href="/kontakt"
          className="rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-500"
        >
          Kontakt
        </a>
        <a
          href="/produkte"
          className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
        >
          Produkte
        </a>
      </div>
    </main>
  );
}
