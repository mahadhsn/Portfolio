# Handoff: Portfolio Redesign (mahadhssn)

## Overview

A full redesign of Mahad Hassan's personal portfolio (6 main pages + 2 sub-page types). Light-first with refined dark mode, side-nav preserved, multi-page routing, expressive-but-subtle motion. Three interchangeable theme directions (Signature / Precise / Mono) live behind a Tweaks panel.

## About the Design Files

The files bundled here — `Portfolio.html`, `styles.css`, and the `src/*.jsx` modules — are **design references created in plain HTML + inline-Babel React**. They are not production code to copy line-for-line. The task is to **recreate the design in your existing codebase** (looks like the current site uses React + Tailwind) using your established patterns, routing, state, and build pipeline. Lift design tokens, layouts, copy, and interaction specifics from these references; translate the JSX into your real component tree.

## Fidelity

**High-fidelity.** All colors, spacing, typography, and motion are final unless you disagree with something. The prototype is pixel-targeted at ~1440px viewport with a responsive collapse at ≤960px.

---

## Global Shell

### Layout

- CSS grid: `var(--nav-w) 1fr` → `240px 1fr`.
- Side nav is `position: sticky; top: 0; height: 100vh;` — stays put as the right column scrolls.
- Page container: `padding: 40px 56px 120px`, `max-width: calc(1100px + 112px)`.
- Below 960px the nav collapses into a horizontal row above the content.

### Side Nav (persistent across all pages)

- Brand (top): 32px accent-filled circle with "M", plus wordmark "mahad.". Circle rotates 360° on hover (0.6s).
- Nav list: 6 items. Each row = monospaced 2-digit index (`01…06`) + label.
- Active row: bolder weight + a 3px accent bar extruded to the left of the row (`::before`, animates in with `nav-indicator 0.4s`).
- Hover: background `var(--bg-sunk)`, color `var(--ink)`.
- Nav footer (bottom, stuck with `margin-top: auto`) contains, in order:
  1. Now Playing pill (circular spinning cover, track/artist, audio-wave animation)
  2. Theme-mode pill (light/dark sun/moon buttons)
  3. A "● Available — Fall '26" row with a pulsing green dot
- `border-right: 1px solid var(--line)` separates nav from content.

### Footer (persistent across all pages)

- `margin-top: 80px`, `border-top: 1px solid var(--line)`, `padding: 40px 0 24px`.
- 3-column grid: `© 2026 Mahad Hassan` · centered tagline · GitHub/LinkedIn/Email links (right).
- 11px monospace, muted.

---

## Screens

### 1. Home (`/`)

- **Purpose**: landing + quick orientation.
- **Hero** (min-height 72vh):
  - Eyebrow row: `◼─── PORTFOLIO / 2026` (monospace, 12px, muted, with a 36×1px bar).
  - Name: two-line display. Line 1 `Hey, I'm` (small, soft-ink). Line 2 `Mahad.` where the final `.` is accent + italic. Characters animate in with `char-in` keyframe (opacity + translateY(20%), 0.5s, staggered by 0.07s per char, first line staggered by 0.03s).
  - Tagline paragraph: 18px ink-soft, max 540px. Inline `<em>` styled with the display font in italic ink color.
  - CTA row: primary "See projects", ghost "View résumé", ghost "Get in touch".
- **Grid section** (two cards, 1.2fr / 1fr):
  - "01 · ABOUT" card with heading `A quick snapshot.` and a 4-item bulleted list (accent dots).
  - "02 · NOW" card with heading `What I'm focused on.` and a 3-item list + a mono-caps "Read more →" link. Has a subtle gradient background (`linear-gradient(135deg, var(--bg-raised), var(--accent-soft))`).
- **Stats strip**: 4-column `10+ · 5+ · 2 · 7` in display font, labels in mono. Single 1px grid gap, bordered container, rounded lg.
- **Featured block**: full-width inverted (dark-ink background) card with a soft accent radial-gradient glow. Heading "PrepPal" 48px display, subline, and a "Try it out ↗" cue in the bottom-right.
- **Quote block**: 32px display italic on `var(--accent-soft)`, 40px padding, rounded xl. Attribution in mono caps.

### 2. About (`/about`)

- Eyebrow `02 — ABOUT`, page title `A curious human first.` (curious in italic accent).
- **Hero row**: left = title + intro paragraph; right = 4:5 photo frame (currently placeholder diagonal-stripe texture — swap for concert photo).
- **Tab pill** (4 tabs): Intro / Now / Before / Wins. Mono caps labels, 4px inset padding, active tab has a raised light card.
- **Timeline** (used by Now + Before): single column with rows of `date (120px) · title · meta`. On hover, row shifts right 12px and a 3px accent bar scales in on the left.
- **Wins** tab: 2-column grid of small cards. Each has icon, title, meta. Lift -3px on hover + accent border.

### 3. Projects (`/projects`)

- Title `Things I've built lately.` + intro paragraph with GitHub link (accent underline offset 4px).
- **Featured project card** (only when filter = all): 2-column grid (text / image). Left side has eyebrow "★ FEATURED · MacEngComp '25", title "PrepPal" 56px, description, two buttons. Right side is gradient placeholder (swap for real screenshot). Rounded xl, bordered, border turns accent on hover.
- **Filter chips**: `all / web / mobile / ml / systems`. Mono caps, active = inverted pill (ink background).
- **Project list**: rows of `idx (40px) · title · description · tag·year (140px) · arrow`. Title uses display font 32px. On hover: row shifts right 12px, a raised card background fades in, arrow slides right and turns accent.

### 4. Logbook (`/logbook`)

- Title `Logbook.` with tagline and 5 tag chips (all/life/school/career/build). Active chip = accent-soft background.
- **Writing section**: heading "Writing — N entries" (display + mono count). Table-like list: `date (120px) · title · read-time·tag`. Same hover treatment as project list.
- **Photography section**: 3-column grid of photo tiles. Tiles vary in aspect ratio (4/5, 1/1, 3/4, 4/5, 1/1 repeating) for visual rhythm. Each tile has a gradient placeholder (see below) with a dark overlay that fades in on hover revealing title + date in bottom-left.
- Small mono disclaimer at the bottom.

#### 4a. Log entry (`/logbook/:id`)

- **Rendered from plain markdown strings** (`LOG_MD` object in `src/pages-log-entry.jsx`). Supports `#`, `##`, `###`, paragraphs, `-` and `1.` lists, `> ` blockquotes, inline `**bold**`, `*italic*`, `` `code` ``.
- Layout: max-width 680px centered column, back link (mono caps "← Back to logbook") at top.
- Headings use display font, paragraphs/lists use body font 17px line-height 1.7.
- Blockquotes: 3px accent left border, italic.
- Meta (date · read time) should live as an italic line right under the `#` heading; CSS targets `h1 + p` to style it as mono caps with bottom border.
- Footer "NEXT IN THE LOGBOOK →" lockup above the global footer.

#### 4b. Photo entry (`/logbook/photo/:id`)

- Back link, display-font title, 3:2 hero image with caption baked into bottom-left (mono caps).
- 4-col metadata strip (LOCATION / DATE / CAMERA / FRAMES).
- Short italic display-font blurb.
- 2-col gallery of related frames.

### 5. Resume (`/resume`)

- Currently renders a styled HTML résumé page inside a "paper" frame (`aspect-ratio: 8.5/11`, big padding, subtle drop shadow).
- **Important for the real site**: this is the page where Mahad's LaTeX-compiled PDF should be **embedded** via `<object data="/resume.pdf" type="application/pdf">` — the current HTML content is placeholder data. Keep the "Download PDF" + "Open in new tab" buttons at the top; wire them to the same `resume.pdf`. Maintain the paper-frame styling for the embed.

### 6. Contact (`/contact`)

- 2-column grid.
- Left: huge `Let's talk.` heading (accent italic "talk"), short paragraph, then a list of channels (Email / LinkedIn / GitHub / Location). Each row slides right on hover and turns accent.
- Right: form in raised card. Fields use bottom-border-only inputs; label = mono caps; focus state = accent underline. Submit button is accent-filled pill. On submit shows a display-font "Thanks!" state.

---

## Design Tokens

### Themes (all swappable via `data-theme` on `<html>`)

Default is **Signature** (`data-theme="editorial"` in source — keep the value, it's just internal).

**Signature · Light**

```
--bg: #f4f3ee     --bg-raised: #fbfaf7   --bg-sunk: #e8e6df
--ink: #15171c    --ink-soft: #4d5461    --ink-muted: #858a94
--line: #dbd9d2   --line-strong: #b5b3ab
--accent: #2d4cc8 --accent-soft: #dfe4f7 --accent-ink: #132270
```

**Signature · Dark**

```
--bg: #0f0f12     --bg-raised: #18181c   --bg-sunk: #08080a
--ink: #ededf0    --ink-soft: #a8a8b0    --ink-muted: #6a6a72
--line: #25252b   --line-strong: #38383f
--accent: #e84a5f --accent-soft: #2a1418 --accent-ink: #ffc4cc
```

Two alt themes (`data-theme="precise"` / `data-theme="brutal"`) live in `styles.css`; copy if you want to keep them.

### Mode

`data-mode="light" | "dark"` on `<html>`. Persisted to localStorage.

### Typography

- Display: **Fraunces** (variable axes, weight 400, optical 9–144). Fallback `Instrument Serif`, serif.
- Body: **Inter** 300–700. Fallback `system-ui`.
- Mono: **Geist Mono** 400/500.
- Display tracking: `-0.035em`. Body tracking: default.

### Spacing / Radius

```
--r-xs: 4   --r-sm: 8   --r-md: 12   --r-lg: 20   --r-xl: 28   --r-full: 999
```

Page padding: `40px 56px 120px`. Card padding: 28–36px.

### Motion

```
--ease-out:  cubic-bezier(.2,.7,.1,1)
--ease-soft: cubic-bezier(.4, 0, .2, 1)
```

- Page enter: 0.35s fade + 6px rise.
- Card stagger: `.stagger > *` sequentially delayed 0.05s → 0.6s.
- Nav active indicator: 0.4s grow-from-center.
- Row-shift hover: padding-left transition 0.3–0.4s.
- **No page transition curtain** — we removed it intentionally.

---

## Interactions

- **Router**: single-page, internal — a simple context stores `path`, `navigate(to)`, and persists the current path to `localStorage` under `mh-path`. Replace with React Router / Next.js App Router / your framework's equivalent.
- **Theme**: a context provides `{theme, mode, setTheme, setMode}`. On change it sets `data-theme` + `data-mode` on `<html>` and writes to localStorage (`mh-theme`, `mh-mode`).
- **About tabs**: local `useState`, crossfade via re-mount + `.about-section` enter animation.
- **Project filter**: local `useState` with a map of predicate functions per filter.
- **Now Playing**: static mock in the prototype. Wire to Spotify's "Currently Playing" API in the real build (same as the original site).

---

## Assets to Provide in the Real Build

- Real photos for the logbook photography grid (replace gradient placeholders)
- Concert photo for the About hero
- PrepPal screenshot for the featured block on Home + Projects
- Compiled `resume.pdf` from LaTeX → serve at `/resume.pdf`
- Favicon / OG image

---

## Files in this Bundle

- `Portfolio.html` — the inlined, self-contained prototype (open directly in a browser)
- `styles.css` — all tokens, themes, component styles
- `src/app.jsx` — root + router wiring
- `src/components.jsx` — RouterProvider, ThemeProvider, Nav, Footer, NowPlaying, Button
- `src/data.jsx` — NAV_ITEMS, PROJECTS, LOGS, PHOTOS, ABOUT_SECTIONS (content source)
- `src/icons.jsx` — inline SVG icon set
- `src/pages-home.jsx` / `pages-about.jsx` / `pages-projects.jsx` / `pages-logbook.jsx` / `pages-resume-contact.jsx` / `pages-log-entry.jsx` / `pages-photo.jsx`
- `src/tweaks.jsx` — dev-only theme picker (drop in the real build)

---

## Suggested Build Order

1. Port design tokens to your Tailwind config (extend `theme.colors`, `fontFamily`, `borderRadius`, `transitionTimingFunction`). Wire `data-theme`/`data-mode` to a dark-mode + CSS-vars setup.
2. Build `<Layout>` with the sticky Nav + content + Footer.
3. Port pages in this order: Home → Projects → Logbook → Log entry → About → Contact → Resume.
4. Replace `LOG_MD` with your markdown source (filesystem `.md` files parsed at build time, or a CMS). Reuse `renderMd` or swap for `react-markdown` + custom renderers that inherit the same CSS classes.
5. Replace placeholders with real images.
6. Drop `resume.pdf` in and embed it.

Contact me (Mahad) if any spec is ambiguous — the HTML prototype is the source of truth.
