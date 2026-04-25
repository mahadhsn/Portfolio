This site is my personal portfolio — the one you're looking at right now. It's gone through several iterations. The current version is the result of a full redesign focused on speed, simplicity, and an editorial aesthetic.

## Stack

Built with React 18, Vite, and Tailwind CSS. Deployed on Vercel with serverless API routes for the contact form (via Nodemailer/Gmail SMTP) and a random quote endpoint. PostHog handles analytics.

The logbook uses a custom setup: markdown files live in the source tree and get auto-discovered via `import.meta.glob`, with metadata (title, date, read time, tag) parsed from each file's header. Content loads lazily so edits show up immediately in development without a full HMR cycle.

## Design decisions

The design leans editorial — display typeface, tight spacing, ink-on-paper color palette. Dark mode is toggled via a CSS class rather than system preference, which keeps the implementation simple and the behaviour predictable.

Custom CSS variables handle light/dark token switching. The character-by-character hero animation is pure CSS keyframes with staggered delays — no animation library.

## What's ongoing

The portfolio is a living project. I use it to try out ideas, document what I'm building, and share things I've learned. The logbook is where most of that happens.
