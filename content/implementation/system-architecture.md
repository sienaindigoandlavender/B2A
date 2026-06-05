---
section: implementation
id: impl-architecture
slug: system-architecture
title: System architecture
subtitle: The layers of a B2A-ready business and how they connect
status: seed
confidence: low
updated: 2026-06-05
related:
  - label: MCP server
    href: /agent-protocols/mcp-server
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
  - label: MVP roadmap
    href: /implementation/mvp-roadmap
---

## The B2A stack

A B2A-ready business has six layers. Most businesses already have the bottom two. The top four are what needs to be added.

```
┌─────────────────────────────────────┐
│  Agent interface (MCP server)        │  ← Callable by any agent
├─────────────────────────────────────┤
│  Policy layer (policy.yaml / JSON)   │  ← Machine-readable rules
├─────────────────────────────────────┤
│  Discovery layer (llms.txt, schema)  │  ← How agents find you
├─────────────────────────────────────┤
│  API layer (REST / webhooks)         │  ← Programmatic access
├─────────────────────────────────────┤
│  Data layer (product catalog, CRM)   │  ← Existing business data
├─────────────────────────────────────┤
│  Human interface (website, app)      │  ← Existing customer surface
└─────────────────────────────────────┘
```

## What each layer does

**Human interface** — the existing website, booking form, customer communication. Unchanged. Still needed for human customers.

**Data layer** — your product catalog, pricing, availability, booking records. For Slow Morocco this is Supabase. The data layer is the source of truth that everything above depends on.

**API layer** — programmatic access to your data layer. A REST API that agents (and developers) can query. Minimum: GET journeys, GET availability, GET pricing, POST inquiry.

**Discovery layer** — how agents find out you exist and what you offer. `llms.txt` at the domain root. Schema.org markup on product pages. Accurate, consistent product descriptions optimised for machine comprehension.

**Policy layer** — your business rules in machine-readable form. Separate from the API because policies are conditional logic, not just data retrieval. `policy.yaml` at a well-known URL, or served via the API at `/api/policy`.

**Agent interface (MCP server)** — wraps the API and policy layers in an MCP-compatible tool set. The agent calls `check_availability` and gets a structured response; it does not need to know the REST API shape underneath.

## Build order

Build bottom-up. You cannot have an MCP server without an API. You cannot have an accurate policy layer without a reliable data layer.

1. Audit your existing data layer — is it complete and accurate?
2. Build or expose a minimal API
3. Write the policy file
4. Add `llms.txt` and schema.org markup
5. Build the MCP server last, wrapping everything above it

## For Slow Morocco specifically

The data layer (Supabase) and human interface (Next.js app) already exist. The API layer partially exists (admin-only routes). The work is: expose the admin API routes publicly (with appropriate auth), write the policy file, add `llms.txt`, and build a minimal read-only MCP server.
