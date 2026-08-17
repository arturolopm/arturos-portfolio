# CV

Drop the exported CV here as:

```
public/cv/arturo-lopez-cv.pdf
```

That exact filename is what `personalInfo.resumeUrl` in
`src/config/portfolio.ts` points at. **Until the file exists, the "Download CV"
and "View in browser" links in the About section will 404.**

## Why self-hosted instead of a Google Drive link

The previous version linked a Drive file. Self-hosting is better here:

- It is versioned with the site, so the CV and the copy on the page cannot drift
  apart the way they already did once.
- No Google sign-in wall, no "request access" dead end for a recruiter.
- It survives the Drive file being moved, renamed, or re-shared.
- `download` works properly, and the browser's own PDF viewer handles preview.

## Why there is no PDF renderer component

The site links the file directly and lets the browser render it. Shipping
`pdf.js` / `react-pdf` would add a few hundred KB to a static portfolio to
reimplement something every browser already does natively, and embedded PDF
viewers are unreliable on mobile — iOS Safari in particular renders a single
page in an `<iframe>` and refuses to scroll it. Two plain links beat that.

## Updating

Replace the PDF, keeping the filename. No code change needed.

Source content lives in the job-search repo at `cv/arturo-lopez-cv.md`
(and `cv/main_example.tex` for the LaTeX version). Keep the positioning
consistent with `DESIGN.md`: engineering-first, AI as recent integration work.
