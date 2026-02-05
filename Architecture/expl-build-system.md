# Exploration: Simple Build System for HTML Templates

## Problem Statement
Looking for a simple build system that:
- Uses server-side templates for reuse
- Outputs vanilla HTML/CSS/JS (no runtime dependencies)
- Manual build step is acceptable
- Simplicity is key

## Current State
- Existing component files in `prototypes/components/` (header.html, footer.html)
- Currently using `components.js` for client-side includes
- Static site hosted on GitHub Pages (implied by repo name)

## Questions to Clarify
- [ ] Pain point with current client-side approach?
- [ ] Number of pages to manage?
- [ ] Types of reuse needed (partials, layouts, data-driven)?
- [ ] Tooling comfort level (bash, Node, Python, other)?
- [ ] Any data-driven content requirements?

## Options Spectrum
1. **Zero tooling** — SSI, PHP includes
2. **Minimal scripting** — Bash/PowerShell concatenation
3. **Lightweight templating** — mustache, pandoc, envsubst
4. **Simple SSGs** — 11ty, Hugo, Jekyll

## Discussion Notes
*(To be updated as exploration continues)*

## Decision
*(Pending exploration)*

## Risks & Trade-offs
*(To be identified)*
