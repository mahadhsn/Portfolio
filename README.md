![landing](https://github.com/mahadhsn/Portfolio/blob/main/public/landing.png)

# Mahad Hassan's Portfolio

Personal portfolio and logbook: projects, writing, photography, and a resume, with a light/dark theme and a contact form.

## Stack

- **Frontend:** React 18, Vite, React Router, Tailwind CSS
- **API:** Vercel serverless functions (Node.js) in `api/`
- **Integrations:** Last.fm (now playing), PostHog (analytics), Nodemailer with Gmail SMTP (contact form)
- **Hosting:** Vercel

## Getting started

```bash
npm install
vercel dev
```

`vercel dev` runs the Vite dev server and the `api/` routes together on `http://localhost:3000`. `npm run dev` starts only the frontend (Vite proxies `/api` to `localhost:3000`, so the contact form and quotes need the API running).

### Environment variables

Create `.env.local` in the repo root:

| Variable                                              | Used for                        |
| ----------------------------------------------------- | ------------------------------- |
| `VITE_LASTFM_API`, `VITE_LASTFM_USERNAME`             | Now playing widget              |
| `VITE_PUBLIC_POSTHOG_KEY`, `VITE_PUBLIC_POSTHOG_HOST` | PostHog analytics               |
| `EMAIL_USER`, `EMAIL_PASS`                            | Contact form email (Gmail SMTP) |

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Vite dev server (frontend only)     |
| `npm run build`        | Production build to `dist/`         |
| `npm run preview`      | Preview the production build        |
| `npm run lint`         | ESLint                              |
| `npm run lint:fix`     | ESLint fix and Prettier             |
| `npm run format`       | Prettier format                     |
| `npm run format:check` | Check formatting (run in CI on PRs) |

## Project structure

```
api/                 Vercel serverless functions (contact form, random quote)
public/              Static assets, resume PDFs, quotes.json
scripts/             Image optimization scripts
src/
  data/              All static content (consts.js, logbook entries, project writeups)
  frontend/
    pages/           Route-level pages
    components/      Reusable UI, grouped by page
    context/         Theme (light/dark) state
```

Content lives in `src/data/consts.js` (projects, photo rolls, trips, and other static data) and `src/data/logs/*.md` (written logbook entries), so most updates don't touch components.

## Logbook photos

Raw camera exports live in `raw/` (gitignored). Two scripts optimize them to 1600px WebP into `src/assets/` (they need [`sharp-cli`](https://www.npmjs.com/package/sharp-cli): `npm install -g sharp-cli`):

```bash
./scripts/image.sh                          # single-day rolls: raw/canon/<slug>/
./scripts/image-trip.sh <camera> <trip-slug> # multi-day trips: raw/<camera>/<trip-slug>/<date>/
```

## Deployment and CI

- Vercel builds with `vite build` and serves `dist/`. `/api/*` routes to the serverless functions and all other paths fall back to the SPA.
- GitHub Actions runs `format:check` on pull requests to `main`, and auto-commits `public/last-updated.json` on pushes to `main`.
