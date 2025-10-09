Arni Sanchez — Portfolio

Quick start

Install and run locally:

```bash
# from repo root (path with spaces quoted on macOS/zsh)
cd "/Users/ninifox/Library/CloudStorage/OneDrive-EnsignCollege/CS 220/portfolio"
npm install
npm run dev
# open http://localhost:3000
```

Build for production locally:

```bash
npm run build
npm run start
```

Deploying to Vercel

This project is a Next.js app and is ready for Vercel. Basic steps:

1. Push your repository to GitHub (or GitLab/Bitbucket).
2. Create a new project on Vercel and connect the repo.
3. Vercel will detect Next.js and use the `npm run build` command automatically. Ensure the project uses Node >= 18.
4. The repo already contains `vercel.json` which sets NEXT_TELEMETRY_DISABLED during builds.

Notes & small visual tweaks applied

- Tightened hero spacing and responsive typography in `src/app/page.tsx`:
  - reduced top padding and max width of the hero container (now `max-w-3xl`)
  - converted H1 content into a flex row with controlled gaps to perfectly balance "Hi, I'm Arni Sanchez"
  - tightened subheading and paragraph sizes and CTA padding for improved visual balance on small screens
- Animated dark-mode background and gradient text remain unchanged except spacing adjustments.

If you'd like, I can:
- Connect and configure a GitHub → Vercel deployment (you'll need to grant access or push the repo to your GitHub account).
- Add a GitHub Action or Vercel configuration for preview deployments.
- Further refine spacing (e.g., tweak letter-spacing, exact pixel gaps) after you review a live preview.

Contact

If you want me to proceed with deploying to Vercel, tell me where the repo is (GitHub URL) and whether you'd like me to create the Vercel project config or instructions for you to follow.
