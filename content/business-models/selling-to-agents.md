---
section: business-models
id: bm-selling-to-agents
slug: selling-to-agents
title: Selling to agents
subtitle: How to structure your product, pricing, and interface so that AI agents can discover, evaluate, and purchase from you
status: active
confidence: medium
updated: 2026-06-05
related:
  - label: Agent-ready business (concept)
    href: /concepts/agent-ready-business
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
---

## Summary

Selling to agents is not a feature you add — it is a redesign of your product surface. The human-facing website remains, but it is no longer the primary interface. The primary interface is your API, your structured data, and your policy layer.

## The five things you need

**1. A structured product catalog.** Every offering expressed as machine-readable attributes, not marketing prose. Duration, price, availability, constraints, included and excluded services — all as structured data.

**2. A real-time API.** Agents need to query current availability and pricing. Static pages are insufficient. Even a simple webhook endpoint that returns availability for a given date range is better than nothing.

**3. An MCP server or equivalent.** An MCP server exposes your offerings as callable tools. An agent that has loaded your MCP server can ask "is the 8-night Gnawa Road itinerary available for December 20–28 for 4 guests?" and get a structured answer.

**4. A machine-readable policy file.** Your cancellation policy, pricing logic, constraints, and escalation rules in a format an agent can reason about.

**5. An llms.txt file.** A curated map of your most important agent-accessible content at `/llms.txt`.

## What you do NOT need

You do not need to rebuild your entire business. You do not need to replace your website. You do not need to become an AI company. You need to add a structured, machine-readable layer on top of what you already have.

## Implications

- The conversation with agents is logic-driven, not emotional. Price, availability, reliability, and clear policies win.
- Errors are costly: if your structured data is wrong, agents will make incorrect transactions and trust will erode.
- Maintenance matters: structured data that is not kept current becomes a liability.
