## Pascas Labs Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui.

### Voraussetzungen

- Node.js 20+
- pnpm (empfohlen) oder npm/yarn

### Installation

```bash
pnpm install
```

### Entwicklung

```bash
pnpm dev
# http://localhost:3000
```

### Build & Export (statisch für IONOS Webhosting)

```bash
pnpm build
pnpm export   # schreibt nach ./out
```

Danach `./out` nach `/public_html` hochladen.

### Linting & Pre-commit

- Prettier + Tailwind Plugin via lint-staged
- Husky pre-commit Hook ist aktiviert

```bash
pnpm lint
```

### Umgebungsvariablen (.env.local)

```
NEXT_PUBLIC_SITE_URL=https://deine-domain.tld
# Plausible (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=deine-domain.tld
# Mailversand (optional für SSR/Route Handler)
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_USER=info@deine-domain.tld
SMTP_PASS=********
SMTP_FROM=info@deine-domain.tld
SMTP_TO=team@deine-domain.tld
```

### Komponenten

- shadcn/ui Komponenten liegen unter `src/components/ui`

### SEO & Analytics

- Default SEO via next-seo: `src/components/seo/DefaultSEO.tsx`
- Sitemap/Robots: `src/app/sitemap.ts`, `src/app/robots.ts`
- Plausible (optional, nur aktiv wenn `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` gesetzt)

### Kontaktformular – Optionen

- Eigene Server-Route: `src/app/api/kontakt/route.ts` (IONOS SMTP)
- Alternativ (Static Hosting): externer Dienst (Web3Forms/Formspree, EU-Region)

### Lizenz

Proprietär – © Pascas Labs
