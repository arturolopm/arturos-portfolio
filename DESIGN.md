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
- **Cleanup** — cancels its RAF, disconnects its `ResizeObserver`, deletes GL
  objects and calls `WEBGL_lose_context` on unmount.
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

Arturo is a **senior software engineer whose core strength is frontend
architecture and end-to-end product ownership**, who *additionally* has recent
hands-on production experience integrating LLMs and agent frameworks. He is not
an AI engineer, and copy that reads that way is wrong — this was a real
regression the first version of this site shipped with.

Three concrete rules:

1. **Order encodes emphasis.** React/Next.js/TypeScript architecture, ownership,
   multi-tenancy and performance come first. AI comes last — last skill
   category, last service. Do not promote it because it sounds impressive.
2. **Qualify the AI work as recent.** "Over the past year", "my newest area".
   The `SkillCategory.note` field exists for exactly this.
3. **Integration, never modelling.** Claude, Google ADK, Gemini, SSE streaming,
   agentic product surfaces: fine. Model training, fine-tuning, embeddings
   pipelines, evaluation harnesses, MLOps: not his experience, do not imply it.

Only figures in `skills.metrics` / `skills.highlights` are verified. Do not
invent or round them.

### Do not link the Xertiflow deployment

The only reachable Xertiflow URL is a **client staging environment**
(`gptdev.xerti.com/<tenant>`), which is why `projects[0].liveUrl` is `null`.
Do not put it on the site: it is not ours to publicise, it will change or
disappear without notice, and it should not be indexed. If a public production
URL or a client-approved case study appears later, link that instead.

The tenant visible on that staging landing is a real university client. The
copy here says "enterprise and university clients" rather than naming them,
because client-naming permission has not been confirmed.

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
