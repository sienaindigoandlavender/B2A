---
section: implementation
id: impl-mvp
slug: mvp-roadmap
title: MVP roadmap
subtitle: The minimum viable B2A layer for a small business — what to build first and in what order
status: seed
confidence: low
updated: 2026-06-05
related:
  - label: System architecture
    href: /implementation/system-architecture
  - label: EXP-001 — Slow Morocco policy file
    href: /experiments/prototype-01
---

## Guiding principle

The MVP is the smallest thing that gives a competent AI agent enough information to accurately answer questions about your business and route qualified inquiries to a human. It does not need to complete autonomous transactions. It needs to be a reliable information source.

## Phase 0 — Foundation (hours, not days)

- [ ] Write a `policy.yaml` or `policy.json` covering your core rules: offering constraints, pricing structure, cancellation policy, escalation triggers
- [ ] Add `llms.txt` to your domain root pointing to your most accurate and important pages
- [ ] Add Schema.org markup to key pages (`TravelAgency`, `TouristTrip`, `Offer`)

Cost: no new infrastructure. These are files, not systems.

## Phase 1 — Read-only API (days)

- [ ] Expose a public `GET /journeys` endpoint returning your product catalog as structured JSON
- [ ] Expose `GET /journeys/:id/availability?start=&end=&guests=` returning availability
- [ ] Expose `GET /policy` returning your policy file

Cost: expose existing admin routes with public read access. No new engineering.

## Phase 2 — Inquiry intake (days)

- [ ] Add `POST /inquiries` endpoint accepting structured inquiry submissions from agents
- [ ] Connect this to your existing CRM/quote system

Cost: one new API endpoint wired to existing data infrastructure.

## Phase 3 — MCP server (one sprint)

- [ ] Wrap Phase 1 and Phase 2 into an MCP server exposing: `list_journeys`, `check_availability`, `get_policy`, `submit_inquiry`
- [ ] Publish the MCP server endpoint

Cost: 1–2 days of engineering. Reference Stripe's MCP server as the pattern.

## Phase 4 — Agent-ready payments (later)

- [ ] Implement AP2-compatible payment flow for deposit collection
- [ ] Define spending authorisation rules

Cost: significant. Defer until Phase 1–3 is generating agent-driven inquiries.

## Metrics to track

From Phase 1 onward:
- Agent traffic in server logs (user-agent strings: GPTBot, ClaudeBot, axios, curl)
- Referrals from AI platforms (ChatGPT, Perplexity) in analytics
- Inquiry quality: are agent-referred inquiries better qualified than form inquiries?
