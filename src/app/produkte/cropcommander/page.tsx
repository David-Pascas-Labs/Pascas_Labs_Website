"use client";

export default function CropCommanderPage() {
  return (
    <main className="prose prose-invert mx-auto max-w-3xl py-16">
      <h1>CropCommander – Hydroponik Monitoring &amp; Steuerung</h1>
      <p>
        <strong>Automatisiertes Hydroponik-Monitoring &amp; -Steuerung</strong>{" "}
        – Steigern Sie Ertrag und Effizienz mit intelligenter Sensorik,
        Automatisierung und Analytics – entwickelt von Pascas Labs.
      </p>

      <h2>Kernfunktionen</h2>
      <ul>
        <li>
          ✓ Sensorik: EC, pH, Wassertemperatur, Luftfeuchte, Lichtintensität
        </li>
        <li>
          ✓ Regelung: Nährlösung, pH‑Korrektur, Pumpen-/Ventilsteuerung,
          Beleuchtung
        </li>
        <li>✓ Automatisierung: Zeitpläne, Trigger, Zustandsmaschinen</li>
        <li>
          ✓ Alarmierung: Schwellenwerte, Ausfälle, Benachrichtigungen
          (E‑Mail/Slack)
        </li>
        <li>✓ Dashboards &amp; Historie: Trends, Kennzahlen, Export</li>
        <li>✓ Empfehlungen (KI): Nährstoffprofile, Optimierungsvorschläge</li>
      </ul>

      <h2>Vorteile</h2>
      <ul>
        <li>Höherer Ertrag &amp; Qualität</li>
        <li>Geringerer Ressourcenverbrauch (Wasser/Energie/Dünger)</li>
        <li>Nachvollziehbarkeit &amp; Compliance</li>
      </ul>

      <h2>Architektur (High‑Level)</h2>
      <p>
        <strong>Edge‑Device</strong> (Sensoren/Aktoren) ⇄ <strong>Cloud</strong>{" "}
        (API, Datenhaltung, Automationsengine) ⇄ <strong>Web‑App</strong> (UI,
        Dashboards)
      </p>
      <p>
        <em>
          Genaue Komponenten und Protokolle nach Hydroponik‑Projektplan
          ergänzen.
        </em>
      </p>

      <h2>Editionen &amp; Preise (Beispiel)</h2>
      <ul>
        <li>
          <strong>Starter:</strong> Basis‑Sensorik, Grundautomatisierung,
          E‑Mail‑Alerts
        </li>
        <li>
          <strong>Pro:</strong> Erweiterte Regelung, Integrationen, Team‑Rollen
        </li>
        <li>
          <strong>Enterprise:</strong> On‑Prem/Private Cloud, SSO, Audit &amp;
          Support SLA
        </li>
      </ul>

      <hr className="my-8 border-neutral-800" />
      <p>
        <strong>CTA:</strong> <a href="/kontakt">Demo anfragen</a> ·{" "}
        <a href="/produkte">Zur Übersicht</a>
      </p>
    </main>
  );
}
