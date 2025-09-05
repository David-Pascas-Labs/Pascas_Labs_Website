"use client";
import { useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!(payload.name && payload.email && payload.message)) {
      setError("Bitte alle Pflichtfelder ausfüllen.");
      setState("idle");
      return;
    }

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setState("error");
      setError("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    }
  }

  return (
    <main className="mx-auto max-w-2xl py-16">
      <h1 className="font-serif text-3xl text-neutral-100">Kontakt</h1>
      <p className="mt-2 text-neutral-400">
        Schreiben Sie uns. Wir melden uns schnellstmöglich.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
        <div>
          <label className="block text-sm text-neutral-300">Name *</label>
          <input
            name="name"
            className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300">E-Mail *</label>
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300">Betreff</label>
          <input
            name="subject"
            className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300">Nachricht *</label>
          <textarea
            name="message"
            rows={6}
            className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>

        {state === "ok" && (
          <p className="text-sm text-green-400">
            Danke! Ihre Nachricht wurde gesendet.
          </p>
        )}
        {state === "error" && error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-500 disabled:opacity-60"
        >
          {state === "loading" ? "Senden…" : "Nachricht senden"}
        </button>
      </form>
    </main>
  );
}
