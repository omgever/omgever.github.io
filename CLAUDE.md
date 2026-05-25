# CLAUDE.md — omgever.github.io

Statische marketing-website voor **Omgever** (AI-analyse voor omgevingsrecht). Wordt gehost op **GitHub Pages** vanuit de `docs/` map op `main`. Vanilla HTML/CSS + een mini Node build script, geen frameworks, geen dependencies.

## Build

`npm run build` (of `node build.js`) — assembleert pagina's en kopieert assets naar `docs/`. Geen watch, geen bundling.

Stappen:
1. Leest `src/pages/*.html`, vervangt `{{include:naam}}` door `src/includes/<naam>.html`, schrijft resultaat naar `docs/`.
2. Kopieert `src/css/*` → `docs/css/`.
3. Kopieert `src/images/*` → `docs/images/`.
4. Kopieert `src/root/*` → `docs/` (favicons, CNAME, robots.txt, sitemap.xml, manifest).

Include-syntax: `{{include:header}}`, `{{include:footer}}`, `{{include:head-common}}`. Nesting niet ondersteund.

**`docs/` is build output — niet met de hand bewerken.** Wijzig altijd `src/` en draai daarna `npm run build`.

## Repo-indeling

```
build.js                  Build script (Node, zero deps)
src/
  pages/*.html            Bron-pagina's (index, faq, over-ons, contact, voorwaarden,
                          privacy, gegevensbeveiliging, gebruiksvoorwaarden, voorbeeld,
                          contact-bedankt, zienswijzen, en de product-pagina's:
                          instructieregelanalyse, stikstofonderzoek, soortenonderzoek,
                          geluidonderzoek, parkeeronderzoek, laddermotivering,
                          mer-beoordelingsplicht)
  includes/               header.html, footer.html, head-common.html
  css/styles.css          Single shared stylesheet
  images/                 Logo en andere afbeeldingen
  root/                   Static files die naar docs/ root gaan (favicons, CNAME,
                          robots.txt, sitemap.xml, site.webmanifest)
  drafts/                 Losse markdown/PDF-content (concept-mails, voorbeeld-
                          onderzoeksverslagen, checklists) — NIET gebouwd, niet
                          gepubliceerd. Bron voor downloads of communicatie.
docs/                     Build output (gepubliceerd via GitHub Pages)
mockups/                  Losse HTML-mockups (bv. trial-emails) — niet gebouwd
.github/copilot-instructions.md   Oudere instructies (gedeeltelijk verouderd; gebruik dit bestand)
```

## Conventies

- **Alle links relatief** (`css/styles.css`, `over-ons.html`, `images/logo.png`) — moet zowel lokaal via `file://` als op GitHub Pages werken.
- **Geen "Prijzen" pagina** — bewust weggelaten, niet terugzetten.
- **Contact**: voor mail-CTA's `mailto:info@omgever.nl`; daarnaast is er een aparte `contact.html` + `contact-bedankt.html`.
- **Social links** in footer zijn placeholders (`href="#"`).
- **Product-pagina's** volgen een vast patroon: compacte hero → `.content-section` met `.content-inner` → CTA-banner → footer.
- **Content/juridische pagina's** (voorwaarden, privacy, gegevensbeveiliging, gebruiksvoorwaarden) gebruiken dezelfde `.content-section`-opmaak zonder CTA-banner.
- De homepage-tagline pill (`hero-tagline`) staat alleen op `index.html`.

## Nieuwe pagina toevoegen

1. Maak `src/pages/mijn-pagina.html` met `{{include:head-common}}` in de `<head>`, `{{include:header}}` bovenaan de `<body>` en `{{include:footer}}` onderaan.
2. Voeg eventueel nav-links toe in `src/includes/header.html` en/of `footer.html`.
3. `npm run build`.
4. Pagina staat in `docs/mijn-pagina.html`.

## Design tokens (in `src/css/styles.css`)

| Token | Waarde | Gebruik |
|-------|--------|---------|
| `--navy` | `#1e3a5f` | Primair merkblauw, header bg |
| `--cyan` | `#7dd3e8` | Accent, knoppen, highlights |
| `--cyan-pale` | `#e8f7fb` | Hero-achtergrond, icon-achtergronden |
| `--blue` | `#2d6a9f` | Links |
| `--gray-800` | `#1f2937` | Body-tekst |
| `--gray-500` | `#6b7280` | Gedempte tekst |

## Workflow

- Pas `src/` aan, draai `npm run build`, controleer de pagina lokaal door `docs/<pagina>.html` in de browser te openen.
- Commit zowel de `src/`-wijziging als de bijbehorende `docs/`-output (GitHub Pages serveert vanuit `docs/`).
