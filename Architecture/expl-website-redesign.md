# Exploration: Omgever Website Redesign

**Date started:** February 5, 2026  
**Status:** In Progress

## Problem Statement

Create a professional marketing website for the Omgever app (legal AI analysis for environmental law in the Netherlands). The website needs to:
- Present the product professionally to advisors and government officials
- Be consistent with (but not identical to) the app's design language
- Be SEO-friendly, mobile-friendly, and use vanilla HTML/CSS/JS only

## Context Gathered

### Source Materials

1. **Prototype website** (`website_v4_combined 2.html`)
   - Dutch language
   - Sections: Hero, Features (3 items), Products (4 items), USPs (3 items), CTA, Footer with disclaimer
   - Current colors: Blue (#2563eb) as primary accent, light backgrounds
   - Target audience: "adviseurs en overheden" (advisors and governments)

2. **App Design Reference** (`omgever-platform/Architecture/design-reference.md`)
   - Color palette derived from logo:
     - Navy: `#1e3a5f` (header, primary buttons)
     - Blue: `#2d6a9f` (accents, links)
     - Cyan: `#7dd3e8` (highlights, hover states)
     - Cyan Pale: `#e8f7fb` (subtle backgrounds)
   - Design principles: Clean and calm, Professional, Focused
   - Typography: System fonts, no custom fonts

### Content to Preserve

From prototype:
- **Hero tagline**: "Voor adviseurs en overheden"
- **Hero headline**: "Juridische AI-analyse voor omgevingsrecht"
- **Hero description**: Document upload → AI analysis → legal compliance checking
- **3 Hero features**: Document analysis, Quick results, Recommendations
- **4 Products**: Instructieregelanalyse, Stikstofonderzoek, Soortenonderzoek, Geluidonderzoek
- **3 USPs**: High-quality analyses, For professionals, Reliable & secure
- **Footer disclaimer**: AI disclaimer (important legal content)
- **Links**: app.omgever.nl, youtube.com/@omgever

### Placeholders Identified

- Footer links (Over ons, Algemene Voorwaarden, Privacyverklaring, Contact) - lead to `#`

## Key Decisions Needed

### 1. Single Page vs. Multi-Page Architecture

**Options:**
| Option | Pros | Cons |
|--------|------|------|
| **Single Page** | Consistency, simpler maintenance, good for small content, smooth scrolling UX | Less SEO flexibility per topic, longer initial load |
| **Multi-Page** | Better SEO per topic, cleaner URLs, can grow over time | More maintenance, navigation complexity, consistency challenges |

**Question for you**: The current prototype is single-page with ~5 sections. Given the scope (4 products, USPs, legal pages), do you anticipate adding more content like blog posts, case studies, or detailed product pages?

### 2. Color Strategy

**App palette (Navy-based):**
- Navy `#1e3a5f` - dark, authoritative
- Cyan `#7dd3e8` - fresh, distinctive

**Prototype palette:**
- Blue `#2563eb` - more vibrant, commercial
- Light gradients

**Options:**
- A) Adopt app's navy/cyan palette directly
- B) Keep prototype's blue palette (divergent)
- C) Hybrid: Use navy for headers/key elements, keep lighter tones for commercial appeal

**Question**: The app has a professional/calm vibe. The prototype is brighter/more commercial. Which direction feels right for your target audience?

### 3. Visual Assets

The prototype uses emoji icons (📑 ⚡ ✅ 📋 🌿 🦎 🔊). Options:
- A) Keep emojis (quick, universal)
- B) Use SVG icons (professional, consistent)
- C) Illustrations (highest impact, requires assets)

### 4. Responsive Strategy

Current prototype has basic responsive breakpoints. Key decisions:
- Mobile navigation: Hamburger menu? Simplified header?
- Hero layout on mobile: Stack or simplify?

## Risks Identified

1. **SEO without meta tags**: Prototype lacks structured data, og:tags, proper meta descriptions
2. **Accessibility**: Current prototype may lack proper ARIA labels, alt texts
3. **Performance**: Inline CSS is convenient but not ideal for caching
4. **Content gaps**: Some links point to `#` (legal pages, contact)

## Questions for Discussion

1. Single page or multi-page?
2. Color direction?
3. Icon style?
4. Any specific SEO keywords or phrases to prioritize?
5. Will there be a need for a Dutch/English toggle in the future?

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Architecture | **Multi-page** | Future content growth (blog, case studies, product detail pages). Better SEO per topic. |
| Color palette | **TBD** - 3 prototypes created | Partner review needed |
| Icons | **SVG icons** (Heroicons style) | Professional, consistent, lightweight |
| Component reuse | **JavaScript includes** | Simple, works on GitHub Pages, no build tools needed |

## Prototypes Created

Six variations in `prototypes/` folder:

| File | Theme | Concepts |
|------|-------|-------------|
| [option-a-navy.html](../prototypes/option-a-navy.html) | **Navy** (App Style) | Safe, corporate, consistent with app. Heavy use of brand color. |
| [option-b-blue.html](../prototypes/option-b-blue.html) | **Blue** (Original) | Friendly, bright, commercial. High energy but maybe less "official". |
| [option-c-hybrid.html](../prototypes/option-c-hybrid.html) | **Hybrid** | Balanced. Navy "frame" with lighter content areas. |
| [option-d-minimal.html](../prototypes/option-d-minimal.html) | **SaaS Minimal** | Airy, lots of whitespace, rounded corners. Floating nav. Very modern/tech startup feel. |
| [option-e-editorial.html](../prototypes/option-e-editorial.html) | **Editorial** | Serif fonts, "Legal Firm" aesthetic. Beige tones. Emphasizes text hierarchy and trust. |
| [option-f-dark.html](../prototypes/option-f-dark.html) | **Dark AI** | Full dark mode. Neon accents. Feels like powerful/advanced software. High contrast. |

### Improvements over original prototype:
- ✅ Proper SEO meta tags (title, description, OpenGraph)
- ✅ SVG icons instead of emoji
- ✅ Mobile-friendly responsive design with hamburger menu
- ✅ Navigation header with menu
- ✅ Structured footer with link groups
- ✅ CSS variables for easy theming

## Component Reuse Strategy

For multi-page architecture, header/footer will be loaded via JavaScript:

```
/components/
  header.html    ← Shared header
  footer.html    ← Shared footer
/js/
  components.js  ← Loader script
```

Each page includes:
```html
<div id="header-placeholder"></div>
<!-- page content -->
<div id="footer-placeholder"></div>
<script src="/js/components.js"></script>
```

**Benefits:**
- Single source of truth for header/footer
- Easy to update navigation across all pages
- Works on GitHub Pages (static hosting)
- No flash with proper loading state

## Open Questions

1. **Which color theme?** → Review prototypes with partner
2. **Future pages needed?** Pricing, Contact, About, Legal pages - create stubs?
3. **Do you have an actual logo** to replace the globe SVG?

## Next Steps

When exploration is complete:
- Use `/plan` to create implementation plan
