# Design System

The visual identity is a **signal instrument**: a dark instrument panel with one
accent, monospace readouts for anything numeric, and hairline rules instead of
cards. It replaces the previous purple/pink gradient treatment.

The grounding idea is that the strongest thing on this CV is *measurement* —
57% Time to Interactive, 85% test coverage, 30% faster reviews. So the page is
built like a readout, and the one decorative element is a signal waveform.

## Tokens

All tokens live in `src/app/globals.css` under `:root` and are exposed to
Tailwind through `@theme inline`. Never hard-code a colour in a component;
use the utility (`text-signal`, `bg-ink`, `border-line`).

| Token | Value | Role |
|-------|-------|------|
| `--ink` | `#0a0a09` | Page ground. Warm near-black, not pure black. |
| `--surface` | `#121110` | Flat panel. |
| `--raised` | `#191714` | Raised panel (bottom nav). |
| `--paper` | `#ede9e1` | Primary text. Warm off-white. |
| `--dim` | `#a39c90` | Body copy, secondary text. |
| `--faint` | `#6f6a61` | Captions, metric labels, tertiary. |
| `--signal` | `#e9a13b` | **The only accent.** Sodium amber. |
| `--signal-deep` | `#a8671a` | Focus ring. |
| `--line` | `rgba(237,233,225,0.1)` | Hairline divider. |

### The accent budget

`--signal` appears in exactly four places, and adding a fifth needs a reason:

1. The waveform canvas
2. The active bottom-nav pill
3. Primary CTAs (`Work with me`, `Get in touch`, `Download CV`)
4. Section eyebrows and inline links

Everything else is a warm neutral. This is deliberate: the previous design
spent colour everywhere and read as generic.

## Type

Three faces, three jobs. Loaded via `next/font/google` in `src/app/layout.tsx`.

| Face | Variable | Used for |
|------|----------|----------|
| **Archivo** | `font-display` | All headings. Industrial grotesque, tight tracking. Applied automatically to `h1`–`h4`. |
| **Inter** | `font-sans` | Body copy only. |
| **JetBrains Mono** | `font-mono` | Metrics, eyebrows, tags, labels. |

Utilities:

- `.eyebrow` / `.eyebrow-dim` — uppercase mono section label. Always names the
  section it sits above; it is structure, not decoration.
- `.readout` — mono with `tabular-nums`. Use for **every** figure so columns of
  digits align.
- `.panel` / `.panel-raised` — flat surface with a hairline. Replaces the old
  `glass-effect` blur cards.

## The waveform component

`src/components/ui/siri-wave.tsx` — dependency-free raw WebGL1, no three.js,
no react-three-fiber, no Spline.

```tsx
<SiriWave variant="wave" fill color="#e9a13b" />
<SiriWave variant="fluid-dots" size={260} speed={0.85} />
```

| Prop | Default | Notes |
|------|---------|-------|
| `variant` | `'wave'` | `'wave'` = travelling voice waveform with chromatic aberration. `'fluid-dots'` = metaball orb that merges, scatters and gathers. |
| `size` | `360` | CSS pixels. Ignored when `fill` is set. |
| `fill` | `false` | Stretch to the parent box. |
| `color` | `'#e9a13b'` | Accent, as hex. Keep it on `--signal`. |
| `speed` | `1` | Motion rate multiplier. |

Behaviour worth knowing:

- **Reduced motion** — when `prefers-reduced-motion: reduce` is set, it draws a
  single static frame instead of running the animation loop.
- **No WebGL** — falls back to a quiet static ring rather than an empty hole.
- **Cleanup** — cancels its RAF, disconnects its `ResizeObserver`, removes its
  context listeners and deletes the GL objects.
- **Never force context loss.** It must not call
  `WEBGL_lose_context.loseContext()` on unmount. A canvas returns the *same*
  context object from every `getContext` call and a force-lost context never
  recovers, so under React StrictMode's dev-only double mount the second setup
  gets a dead context: every `compileShader` fails and `getShaderInfoLog` returns
  `null`. This shipped once and only reproduced in `next dev`, never in a
  production build — if the wave ever disappears in dev again, check here first.
- **Genuine context loss is handled** — a `webglcontextlost` listener calls
  `preventDefault()` (without it the browser will not attempt restore) and
  `webglcontextrestored` bumps a generation counter to re-run setup.
- `precision highp float` is guarded with `GL_FRAGMENT_PRECISION_HIGH`, since
  `highp` is optional in WebGL1 fragment shaders.

The public API intentionally mirrors the
[21st.dev `siri-wave`](https://21st.dev/@40973894/components/siri-wave/fluid-dots)
component so that registry version can be dropped in later without touching
call sites. The shaders here are our own — the registry source is not published
on the page and is only installable through their CLI — and they take an
explicit accent colour so the canvas stays inside this palette.

### Tuning notes

If the wave ever looks like a faint blob in the middle of its box, the cause is
almost always **double tapering**: an `envelope()` inside `field()` plus a
second vignette on the output colour. Keep one shaping pass, and keep the
`band()` thickness values generous — thin bands read as dark because the glow
falls off before it covers a pixel.

## Content

`src/config/portfolio.ts` is the single source of truth. Sections import from
it; do not hard-code copy in components.

### Positioning rule (read before editing any copy)

Arturo is a **senior full stack engineer (frontend-focused) whose recent focus is
building AI into production software.** Both halves of that sentence are load
bearing, and this site has shipped both failure modes already:

- **v1 read like an AI engineer's portfolio.** Overclaim. Rejected.
- **v2 buried AI in a trailing clause** — last skill category, last service, a
  "recent, going deeper" hedge. Under-claim. Also rejected, and for a concrete
  reason: shipping AI features is now expected of senior engineers who are *not*
  AI engineers, so hiding the work costs screens.

The calibration to hold (v3, current):

1. **Identity is senior full stack engineer.** That is the hero role line, the
   page title, and the first clause of the summary: React/Next.js/TypeScript
   depth plus end-to-end ownership. Do not put "AI" in the role line.
2. **AI is a headline capability, second in order.** Second skill category,
   second service, its own sentence in the hero summary, an early bolded bullet
   in the Xertiflow entry. Name the providers and the mechanics — SSE-streamed
   chat, conversation history, context handling, three providers — because the
   specifics are what make it credible rather than buzzwordy.
3. **Integration, never modelling.** Claude, Google ADK, Gemini, streaming
   interfaces, agentic product surfaces: fine. Model training, fine-tuning,
   embeddings pipelines, evaluation harnesses, MLOps, Python/PyTorch: not his
   experience, never imply it. This boundary does not move regardless of emphasis.
4. **No self-deprecating qualifiers in public copy.** Do not write "first
   production LLM work" or "still learning" on the site or the CV. True, useful
   in an interview, wrong on an outward-facing document.

Only figures in `skills.metrics` / `skills.highlights` are verified. Do not
invent or round them.

The canonical wording lives in the job-search repo at `cv/arturo-lopez-cv.md`.
Keep this site and that CV saying the same thing.

### The CV file

The CV is self-hosted at `public/cv/Arturo-Lopez-CV-2026.pdf`, and
`personalInfo.resumeUrl` must match that filename **exactly** or both links 404.
Note the year in the name: a re-export as `...-2027.pdf` needs this line edited,
so a year-less filename would be less brittle.

Nothing else belongs in `public/cv/` — everything under `public/` is served, so
notes kept there get published (this section used to be a `README.md` sitting
next to the PDF, reachable at `/cv/README.md`).

Self-hosted rather than a Google Drive link because: it is versioned with the
site so the CV and page copy cannot drift apart the way they already did once;
there is no sign-in wall or "request access" dead end for a recruiter; and it
survives the Drive file being moved or re-shared.

**No PDF renderer component, deliberately.** The site links the file and lets the
browser render it — a `download` button plus a "View in browser" link. Shipping
`pdf.js` / `react-pdf` would add a few hundred KB to reimplement what every
browser does natively, and embedded viewers are unreliable on mobile (iOS Safari
renders a single page in an `<iframe>` and will not scroll it).

To update: replace the PDF, keep the filename, no code change.

### The Xertiflow demo link

`projects[0].liveUrl` points at `https://gptdev.xerti.com/urosario`. **Arturo
decided to link it (2026-08-17)** so visitors can actually see the product; the
earlier guidance here said not to. It is linked, but it is not a normal live-site
link, and the three safeguards around it are deliberate — keep them:

| Field | Value | Why |
|---|---|---|
| `liveLabel` | `View live demo` | Sets the expectation that this is a demo, not the customer's production system. |
| `liveNote` | `Test environment — please don't submit real data` | It is a real-looking auth page for a real university. Visitors must not type real credentials or personal data into a test system. |
| `liveNoFollow` | `true` | Renders `rel="nofollow"` so the portfolio does not pass ranking signal to, or help index, a client staging host. |

Why it needs the care: `gptdev.` is a **staging environment**, not production.
It is not ours, it can change or disappear without notice, and its landing page
is a working login screen for Universidad del Rosario. Linking it from a public
page invites strangers and crawlers into a client's test system.

If a public production URL, a recorded walkthrough, or a client-approved case
study ever exists, prefer that and drop this link. If the staging host goes away,
set `liveUrl` back to `null` — the entry falls back to "Private / enterprise"
automatically.

**Named clients.** Arturo confirmed that **Universidad del Rosario** and
**Universidad de los Andes** may be named as Xertiflow clients, and the copy
does so. Do not add further client names without checking with him first — that
approval covered these two.

### Globant is one job, not two

Arturo was at Globant **January 2024 - January 2026 continuously**, promoted
from Semi-Senior Advanced on the Ernst & Young account to Senior on the NFL+
account. The two entries in `projects` are two client engagements inside one
tenure, which is why:

- `company` reads `Globant · Ernst & Young account` / `Globant · NFL+ account`
- the Work section intro states the continuity explicitly
- `experience` models it as a single `Role` with two `engagements`, not two roles

Never restructure this into two separate employers. Adjacent short entries at
the same company invite a job-hopping read that the actual history does not
support, and the promotion is a selling point.

## Tailwind source scanning

`globals.css` uses `@import 'tailwindcss' source(none)` plus an explicit
`@source '../../src'`. Automatic detection also reads the markdown files in the
repo root, which quote the old purple classes and leaked dead `from-purple-*`
utilities into the stylesheet. Keep the explicit source unless you want the
docs scanned.

## Known stale docs

`README.md`, `QUICKSTART.md`, `CUSTOMIZATION.md`, `COMPONENT_GUIDE.md`,
`PROJECT_SUMMARY.md`, `SKILLS_SECTION_UPDATE.md` and
`CV_INTEGRATION_COMPLETE.md` still describe the purple-gradient design and the
Spline robot. They are documentation only and do not affect the build. Rewrite
or delete them when convenient.

## Verification

```bash
pnpm typecheck   # tsc --noEmit
pnpm lint
pnpm build       # static export to out/
```
