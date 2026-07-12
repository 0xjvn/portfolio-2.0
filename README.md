# portfolio.jeevansid.tech

Personal site of Jeevan Siddharth R — Ethereum Core contributor & backend engineer.

Vite + React + TypeScript. Fully static, deployed to Cloudflare Pages at
`portfolio.jeevansid.tech` (base path `/`).

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
```

## Build

```sh
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Content

All copy, links, and PR data live in [src/data/site.ts](src/data/site.ts).
The PQ-Eth2 book URL is the placeholder `<PQ_ETH2_BOOK_URL>` in that file —
swap it when the book is hosted. Resume PDFs are in `public/`.

## Deploy (Cloudflare Pages)

Option A — Git integration (recommended): push the repo to GitHub, then in the
Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to
Git**, pick the repo, and set:

- Build command: `npm run build`
- Build output directory: `dist`

Every push to `main` then deploys automatically.

Option B — direct upload from the CLI:

```sh
npm run build
npx wrangler pages deploy dist --project-name portfolio
```

Custom domain: in the Pages project → **Custom domains → Set up a domain** →
`portfolio.jeevansid.tech`. Since the zone is on Cloudflare, the CNAME record
and certificate are created automatically.
