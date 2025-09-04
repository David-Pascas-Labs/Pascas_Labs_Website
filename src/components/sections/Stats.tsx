export function Stats() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-neutral-900/60 p-8 ring-1 ring-neutral-800 sm:grid-cols-4">
        <div>
          <p className="text-sm text-neutral-400">Projekte</p>
          <p className="mt-1 text-3xl font-semibold text-red-500">100+</p>
        </div>
        <div>
          <p className="text-sm text-neutral-400">Jahre Erfahrung</p>
          <p className="mt-1 text-3xl font-semibold text-red-500">5+</p>
        </div>
        <div>
          <p className="text-sm text-neutral-400">Support</p>
          <p className="mt-1 text-3xl font-semibold text-red-500">24/7</p>
        </div>
        <div>
          <p className="text-sm text-neutral-400">Qualität</p>
          <p className="mt-1 text-3xl font-semibold text-red-500">100%</p>
        </div>
      </div>
    </section>
  );
}
