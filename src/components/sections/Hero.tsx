"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <header className="py-8 sm:py-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Pascas Labs"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-serif text-lg font-semibold tracking-tight text-neutral-100">
            Pascas Labs
          </span>
        </div>
        <ul className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <li>
            <Link href="#services" className="hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/ueber-uns" className="hover:text-white">
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt
            </Link>
          </li>
        </ul>
        <Link
          href="/kontakt"
          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
        >
          Jetzt starten
        </Link>
      </nav>

      <div className="mx-auto max-w-4xl pt-16 pb-16 text-center">
        <h1 className="font-serif text-4xl leading-tight text-neutral-100 sm:text-5xl md:text-6xl">
          Passion for AI, Software,
          <br />
          <span className="text-red-600">Creativity &amp; Systems</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300">
          Wir entwickeln innovative KI-Lösungen, kreative Software und
          intelligente Systeme, die Ihr Unternehmen in die Zukunft führen.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-500"
          >
            Entdecken Sie unsere Marken und Produkte
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#services"
            className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </header>
  );
}
