---
section: use-cases
id: uc-travel
slug: travel-and-hospitality
title: Travel and hospitality
subtitle: Why travel is the ideal early vertical for B2A — and what agent-ready travel looks like
status: active
confidence: medium
updated: 2026-06-05
metadata:
  - label: Relevance to my work
    value: Direct — Slow Morocco and Riad di Siena
  - label: Agent comfort level (current)
    value: Medium — research and recommendation; booking emerging
  - label: Key challenge
    value: High-stakes, aspirational purchases with complex constraints
related:
  - label: Selling to agents
    href: /business-models/selling-to-agents
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
  - label: EXP-001 — Slow Morocco policy file
    href: /experiments/prototype-01
---

## Why travel is a good B2A vertical

Travel has properties that make it well-suited for early B2A development:

- **High value transactions.** The commission economics justify investment in agent-accessible infrastructure.
- **Structured criteria.** Dates, guests, route, budget, accommodation type — all expressible as machine-readable attributes.
- **Time-consuming research.** Humans delegate research tasks they find burdensome. Comparison shopping across 20 hotels is exactly the kind of task people want to delegate.
- **Existing API infrastructure.** GDS systems, OTA APIs, and hotel APIs already exist. The plumbing is already partially built.
- **Already partially automated.** Price comparison, flight search, and recommendation engines are established. The move to full agent-mediation is incremental, not revolutionary.

## What agent-ready travel looks like

For a travel operator to be agent-ready, it needs:

| Layer | What it means for travel |
|---|---|
| Discovery | llms.txt, schema.org TravelAgency / TouristTrip markup |
| Legibility | Structured journey catalog: route, duration, price, included services, difficulty, season |
| Callability | API or MCP server with availability query and price calculation |
| Policy | Machine-readable cancellation, payment, customisation constraints |
| Trust | Verified ratings, licensed operator status, insurance |

## The Slow Morocco case

Slow Morocco is a luxury tour operator — exactly the kind of business where B2A could create significant value. A high-net-worth traveller with an AI agent could delegate the Morocco itinerary research and initial booking steps entirely. But for this to work, Slow Morocco needs:

- A structured journey catalog (partially exists in the app's Supabase database)
- A policy file (does not exist in machine-readable form)
- An inquiry/quote API (exists as internal admin; not exposed externally)
- An llms.txt (does not exist)

The gap between current state and agent-ready state is not enormous technically. The question is whether the demand justifies the investment now.

## The complexity of luxury

Luxury travel is also the hardest category for agents because:

- The value proposition is experiential and emotional, not purely criteria-based
- High-stakes transactions create strong consumer preference for human confirmation
- Customisation is central — the offering is not standardised
- Relationships matter — returning clients and personal curation are part of the product

These factors suggest that full autonomous booking of luxury travel is a few years away. But agent-assisted research and recommendation — where the agent does the research and shortlisting, and the human confirms — is plausible now.

## Relevance to my work

Both my businesses are in travel and hospitality. This is not a theoretical vertical for me. The experiments section tracks concrete work on making Slow Morocco more agent-accessible.
