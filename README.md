# B2A Wiki

Personal knowledge base on Business-to-Agent (B2A) commerce and the agent economy.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub → Vercel → import repo → deploy. No environment variables needed.

## Structure

```
content/
  overview/          — Front door, working thesis, anti-goals
  concepts/          — Core ideas: B2A, A2A, A2C, agent economy, decision layer
  market-signals/    — Evidence: Google, payments, search shift, platforms
  business-models/   — Monetisation: selling to agents, catalogs, moats
  agent-protocols/   — MCP server, authentication, A2A, AP2
  policy-layer/      — Machine-readable rules: format, decision policies, guardrails
  implementation/    — Architecture, MCP building, MVP roadmap
  use-cases/         — Travel, regional intelligence, ecommerce
  theses/            — Original thinking: core theses, moat, policy argument
  experiments/       — Lab notebook: experiment log, prototypes, open questions
  glossary/          — Terms: MCP, A2A, AP2, policy layer, AEO, etc.
  resources/         — Articles, companies, tools
```

## Page frontmatter

Every content page uses this frontmatter:

```yaml
---
section: concepts          # Which section this belongs to
id: concept-b2a            # Unique identifier
slug: b2a                  # URL slug
title: B2A                 # Display title
subtitle: ...              # Optional subtitle
status: seed | active | strong-signal | speculative | dead-end
confidence: low | medium | high
updated: 2026-06-05
metadata:                  # Optional right-sidebar key facts
  - label: ...
    value: ...
related:                   # Optional related pages
  - label: ...
    href: /section/slug
---
```

## Adding content

Create a `.md` file in the appropriate `content/` subdirectory. It will automatically appear in the section index. No code changes needed.

## Adding a section

1. Create `content/new-section/` directory with at least one `.md` file
2. Add `app/new-section/page.tsx` and `app/new-section/[slug]/page.tsx` (copy any existing section)
3. Add to nav in `components/layout/Header.tsx`
