/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl py-24 text-center">
      <h1 className="font-serif text-4xl text-neutral-100">
        Seite nicht gefunden
      </h1>
      <p className="mt-3 text-neutral-400">
        Die angeforderte Seite existiert nicht.
      </p>
      <a
        href="/"
        className="mt-8 inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-500"
      >
        Zur Startseite
      </a>
    </main>
  );
}
