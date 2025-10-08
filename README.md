# Arni Sanchez — Portfolio

This repository contains a small personal portfolio built with Next.js, TypeScript and Tailwind CSS.

Features
- Light/dark theme toggle (persisted to localStorage)
- Projects and About pages
- Simple, responsive UI using Tailwind

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

Notes
- This repo includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs lint and build on pushes.
- The site uses an Open Graph image at `/og-image.svg` for social previews.

Contact
- Email: (replace with your email) — include a visible email address on the Contact page.

## Deploying to Vercel

When building on Vercel you may see a non-interactive prompt from Next.js about anonymous telemetry. To prevent the build from stalling, this repo includes a `vercel.json` that sets the environment variable `NEXT_TELEMETRY_DISABLED=1` during the build.

Two ways to ensure builds don't prompt:

- Recommended: keep `vercel.json` (already added) in the repo. No further changes needed.
- Alternate: set `NEXT_TELEMETRY_DISABLED=1` in your Vercel Project settings (Project → Settings → Environment Variables) for the Production and Preview environments.

After you push the `vercel.json` file, Vercel should build non-interactively. If you want to test locally, run these commands on your machine (requires Node.js and npm installed):

```bash
# from the project root
npm install
npm run build
```

If you prefer to remove `vercel.json` later, you can instead set the environment variable in the Vercel dashboard.
