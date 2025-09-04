import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16">
      <div className="rounded-2xl bg-neutral-900/60 p-8 text-center ring-1 ring-neutral-800">
        <h2 className="font-serif text-3xl text-neutral-100 sm:text-4xl">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-400">
          Sprechen wir darüber, wie wir Ihr Projekt gemeinsam voranbringen.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-500"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
