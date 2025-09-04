import Link from "next/link";

const products = [
  {
    slug: "cropcommander",
    title: "CropCommander",
    tagline: "Automatisiertes Hydroponik-Monitoring & -Steuerung",
    pill: "Neu",
  },
];

export default function ProductsPage() {
  return (
    <main className="py-16">
      <header className="mb-10 text-center">
        <h1 className="font-serif text-4xl text-neutral-100">
          Unsere Produkte
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-neutral-400">
          Entdecken Sie Marken und Lösungen von Pascas Labs.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/produkte/${p.slug}`}
            className="group rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800 transition hover:ring-neutral-700"
          >
            <div className="mb-3 inline-flex rounded-full border border-red-700/40 bg-red-900/20 px-2 py-0.5 text-xs text-red-400">
              {p.pill}
            </div>
            <h2 className="text-lg font-semibold text-neutral-100">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-400">{p.tagline}</p>
            <span className="mt-4 inline-block text-sm text-red-400 group-hover:text-red-300">
              Mehr erfahren →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
