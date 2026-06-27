# ADR-0002: Static HTML/CSS/JavaScript First Version

## Status

Accepted

## Context

13king needs a small landing page with business information, pricing, Instagram contact links, and photos that will be added later. There is no current requirement for CMS editing, routing, authentication, or dynamic data.

## Decision

Build the first version with dependency-free HTML, CSS, and JavaScript.

## Consequences

- The page can be opened directly in a browser.
- Hosting remains simple and low-cost.
- Real store photos can be added later under `assets/images/`.
- If the site later needs frequent updates, a CMS, or multiple pages, the project can move to Astro or Next.js.

