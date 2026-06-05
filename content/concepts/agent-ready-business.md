---
section: concepts
id: concept-agent-ready-business
slug: agent-ready-business
title: Agent-ready business
subtitle: What it means for a business to be accessible, legible, and trustworthy to autonomous AI agents
status: active
confidence: medium
updated: 2026-06-05
related:
  - label: Agent Experience
    href: /agent-protocols
  - label: Policy layer
    href: /policy-layer
  - label: Selling to agents
    href: /business-models/selling-to-agents
---

## Summary

An agent-ready business is one that an AI agent can discover, evaluate, and transact with reliably and without human mediation. It is the B2A equivalent of a mobile-optimised website or a cloud-native architecture: a structural property, not just a feature.

## The five properties

**1. Discoverable.** The business appears in the contexts agents use for research — LLM training data, `llms.txt` catalogs, MCP tool registries, structured search results.

**2. Legible.** The business's offerings, pricing, availability, and constraints are expressed in machine-readable formats that agents can parse without ambiguity — schema.org markup, OpenAPI specs, structured product catalogs.

**3. Callable.** The business exposes an API or MCP server that agents can invoke directly to check availability, get pricing, or initiate a transaction.

**4. Trustworthy.** The business's representations are accurate and consistent. Agents learn to trust (or distrust) businesses based on whether their structured data matches reality.

**5. Policy-clear.** The business's rules — cancellation policies, refund terms, constraints, escalation paths — are expressed in a format agents can reason about, not buried in human-readable terms and conditions.

## Most businesses today

Most businesses have none of these properties by default. They have websites (discoverable to humans, not to agents), human-readable descriptions (legible to people, not to machines), checkout flows (callable by humans, not by APIs), and PDF terms and conditions (not machine-readable policy).

## Relevance to my work

Slow Morocco is a luxury tour operator. An agent-ready version of Slow Morocco would have: a structured journey catalog with machine-readable attributes (duration, price, route, included services, physical difficulty), a real-time inquiry API, a machine-readable policy document (minimum spend, customisation constraints, payment terms, cancellation rules), and an MCP server or webhook interface. None of this exists today.
