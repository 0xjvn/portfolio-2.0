# portfolio.jeevansid.tech

Personal site of Jeevan Siddharth R. A general landing page that acts as an
entry gate into three tracks:

- `/blockchain` - Ethereum core & protocol work
- `/software` - backend & distributed systems
- `/fde` - forward deployed engineering (in progress)

Vite + React + TypeScript, client-side routing with react-router. Fully static,
deployed to Cloudflare Pages at `portfolio.jeevansid.tech` (base path `/`). Deep
links work via the SPA fallback configured in `wrangler.jsonc`.

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

Copy and data are split by track under [src/data/](src/data/):

- [site.ts](src/data/site.ts) - shared identity, the three track definitions
  (landing rows), and all blockchain content (PRs, experience, PQ-Eth2).
- [software.ts](src/data/software.ts) - SWE-resume-framed content.
- [fde.ts](src/data/fde.ts) - the forward-deployed-engineering thesis and
  roadmap.

Pages live in [src/pages/](src/pages/); shared header/footer chrome is in
[src/components/Chrome.tsx](src/components/Chrome.tsx). Each track carries its
own accent color via a `data-track` attribute (see the top of
[src/index.css](src/index.css)). Resume PDFs are in `public/`.

## Deploy (Cloudflare Pages)

Option A - Git integration (recommended): push the repo to GitHub, then in the
Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to
Git**, pick the repo, and set:

- Build command: `npm run build`
- Build output directory: `dist`

Every push to `main` then deploys automatically.

Option B - direct upload from the CLI:

```sh
npm run build
npx wrangler pages deploy dist --project-name portfolio
```

Custom domain: in the Pages project → **Custom domains → Set up a domain** →
`portfolio.jeevansid.tech`. Since the zone is on Cloudflare, the CNAME record
and certificate are created automatically.
