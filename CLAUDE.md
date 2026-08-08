# Prompt: Build My Web Resume (GitHub Pages)

Paste this into Claude Code (or any coding assistant). Fill in the bracketed
placeholders with your real details before running it.

---

Build a single-page professional web resume site, static (HTML/CSS/vanilla
JS only, no build step), designed to be deployed directly on GitHub Pages
from the repo root.

## Requirements

**Tech constraints**
- Plain HTML/CSS/JS — no React, no bundler, no npm install step required
  to view it. Must work by just opening index.html or via GitHub Pages.
- Fully responsive (mobile-first), fast-loading, no external JS frameworks.
- Semantic HTML for accessibility and SEO (proper heading hierarchy,
  alt text, aria labels where relevant).
- Include a favicon and open-graph meta tags for link previews.

**Design**
- Clean, modern, professional — avoid generic Bootstrap-template look.
  Use a distinctive but subdued color palette (not default blue/white).
  Suggest 2-3 palette options and pick one, or ask me.
- Good typography: pair a strong sans-serif for headings with a readable
  body font, both loaded via system fonts or Google Fonts.
- Subtle use of whitespace and a card/section layout — not cluttered.
- Optional: light/dark mode toggle (nice-to-have, not required).
- Print-friendly CSS (@media print) so it renders cleanly as a PDF too.

**Content sections**
1. Header: name, title, one-line value proposition, contact links
   (email, LinkedIn, GitHub), location.
2. Summary: 2-3 sentence professional summary.
3. Experience: reverse-chronological roles, company, dates, 3-5 bullet
   achievements per role (impact-focused, not just duties).
4. Skills: grouped by category (e.g. Languages/Tools, Data & Analytics,
   Infrastructure, Certifications) rather than one long list.
5. Projects (optional section): 2-4 notable projects with a one-line
   description and links if public.
6. Certifications/Education.
7. Footer: contact CTA + last-updated date.

**My details to use**
- Name: [YOUR NAME]
- Title: Senior Technical Operations and Data Analyst
- Employer: Blooming Health Inc.
- Location: Philippines
- Contact: [YOUR PREFERRED CONTACT EMAIL], [LinkedIn URL], [GitHub URL]
- Summary: [1-2 sentences — what you do and what you're known for]
- Core skills/tools: Twilio infrastructure & A2P 10DLC compliance,
  Python (Google Colab automation), SQL (BigQuery, Snowflake,
  PostgreSQL), Google Sheets automation via Apps Script
- Certifications: DataCamp Associate Data Engineer
- Experience bullets: [PASTE YOUR ACTUAL ROLE HISTORY / ACHIEVEMENTS HERE
  — be specific with metrics where possible, e.g. "reduced X by Y%"]
- Projects to feature (if any): [LIST OR SKIP]

## Deployment
- Structure the repo so it deploys straight from GitHub Pages
  (root `index.html`, or a `/docs` folder — tell me which and set it up
  accordingly).
- Include a short README with:
  - How to run locally
  - How to enable GitHub Pages for this repo (Settings → Pages → source
    branch/folder)
  - How to update content (point me to the one file/section to edit)

## Output
- Give me the full file tree and every file's contents.
- Keep content editing dead simple — ideally all copy lives in one
  clearly-commented section of the HTML (or a small JSON/data file) so
  I can update it later without touching layout/CSS.
