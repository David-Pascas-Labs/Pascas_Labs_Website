export function About() {
  return (
    <section className="py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-neutral-100 sm:text-4xl">
            Innovation durch{" "}
            <span className="text-red-600">Leidenschaft &amp; Expertise</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            Bei Pascas Labs vereinen wir unsere Leidenschaft für Künstliche
            Intelligenz, Software-Entwicklung, Kreativität und
            Systemarchitektur. Unser interdisziplinäres Team entwickelt
            maßgeschneiderte Lösungen, die Technologie und Kreativität perfekt
            verbinden.
          </p>
          <p className="mt-4 text-neutral-300">
            Von der ersten Idee bis zur finalen Implementierung begleiten wir
            Sie auf Ihrem Weg zur digitalen Transformation mit innovativen und
            nachhaltigen Technologielösungen.
          </p>
          <a
            href="/ueber-uns"
            className="mt-6 inline-block rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
          >
            Mehr über uns erfahren
          </a>
        </div>

        <div className="rounded-2xl bg-neutral-900/60 p-8 ring-1 ring-neutral-800">
          <dl className="grid grid-cols-2 gap-8">
            <div>
              <dt className="text-sm text-neutral-400">Projekte</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-500">100+</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Jahre Erfahrung</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-500">5+</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Support</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-500">24/7</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Qualität</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-500">100%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
