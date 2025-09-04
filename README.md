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
```

### Komponenten

- shadcn/ui Komponenten liegen unter `src/components/ui`

### Lizenz

Proprietär – © Pascas Labs
