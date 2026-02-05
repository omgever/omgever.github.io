# Copilot Instructions — omgever.nl marketing site

## What this repo is

Static marketing website for **Omgever** (AI-analyse voor omgevingsrecht).
Hosted on **GitHub Pages** from the `docs/` folder on `main`.
No frameworks, no dependencies — just vanilla HTML, CSS and a tiny Node build script.

## Repo structure

```
build.js                  ← Build script (Node, zero deps)
package.json              ← npm run build
src/
  includes/
    header.html           ← Shared header (injected into every page)
    footer.html           ← Shared footer + mobile menu JS
  pages/
    index.html            ← Home page
    instructieregelanalyse.html
    stikstofonderzoek.html
    soortenonderzoek.html
    geluidonderzoek.html
    over-ons.html
    voorwaarden.html
    privacy.html
  css/
    styles.css            ← Single shared stylesheet
  images/
    logo.png              ← Logo
docs/                     ← BUILD OUTPUT — do not edit by hand
  *.html                  ← Assembled pages (includes resolved)
  css/styles.css
  images/logo.png
Architecture/             ← Decision docs & implementation plans
prototypes/               ← Design prototypes (reference only)
```

## Build system

Run `npm run build` (or `node build.js`). It does three things:

1. **Assemble pages** — reads every `src/pages/*.html`, replaces `{{include:name}}` tags with the contents of `src/includes/<name>.html`, writes the result to `docs/`.
2. **Copy CSS** — copies `src/css/*` → `docs/css/`.
3. **Copy images** — copies `src/images/*` → `docs/images/`.

There are no other steps, no watch mode, no bundling. The output in `docs/` is plain static HTML ready to serve.

### Include syntax

```html
{{include:header}}   →  injects src/includes/header.html
{{include:footer}}   →  injects src/includes/footer.html
```

Include names are the filename without `.html`. Nesting is not supported.

## Conventions

- **All links are relative** (`css/styles.css`, `over-ons.html`, `images/logo.png`) so the site works locally via `file://` as well as on GitHub Pages.
- **No "Prijzen" page** — deliberately removed; do not re-add.
- **Contact** links to `mailto:info@omgever.nl` — there is no contact page.
- **Social links** in the footer use `href="#"` (placeholders).
- **Product pages** follow a shared pattern: compact hero → `.content-section` with `.content-inner` → CTA banner → footer.
- **Content/legal pages** (voorwaarden, privacy) use the same `.content-section` layout without a CTA banner.
- The homepage tagline pill (`hero-tagline`) is only used on `index.html`, not on sub-pages.

## How to add a new page

1. Create `src/pages/my-page.html` with `{{include:header}}` at the top and `{{include:footer}}` at the bottom.
2. Link the stylesheet with `<link rel="stylesheet" href="css/styles.css">`.
3. Add navigation links to `src/includes/header.html` and/or `src/includes/footer.html` as needed.
4. Run `npm run build`.
5. The page appears at `docs/my-page.html`.

## Design tokens

Defined as CSS custom properties in `src/css/styles.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#1e3a5f` | Primary brand, header bg |
| `--cyan` | `#7dd3e8` | Accent, buttons, highlights |
| `--cyan-pale` | `#e8f7fb` | Hero background, icon backgrounds |
| `--blue` | `#2d6a9f` | Links |
| `--gray-800` | `#1f2937` | Body text |
| `--gray-500` | `#6b7280` | Muted text |
