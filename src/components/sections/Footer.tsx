import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex gap-3">
          <Image
            src="/logo.png"
            alt="Pascas Labs"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <p className="font-semibold text-neutral-100">Pascas Labs</p>
            <p className="mt-1 text-sm text-neutral-400">
              Innovative KI-, Software- und Systemlösungen für eine digitale
              Zukunft.
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-neutral-100">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>Grow Monitoring</li>
            <li>Software-Entwicklung</li>
            <li>Kreative Lösungen</li>
            <li>System-Integration</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-neutral-100">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>
              <a
                href="mailto:info@pascas-labs.com"
                className="hover:text-neutral-200"
              >
                info@pascas-labs.com
              </a>
            </li>
            <li>
              <a href="tel:+49123456789" className="hover:text-neutral-200">
                +49 (0) 123 456 789
              </a>
            </li>
            <li>Hamburg, Deutschland</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Pascas Labs. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
