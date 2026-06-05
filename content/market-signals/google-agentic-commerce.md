---
section: market-signals
id: signal-google
slug: google-agentic-commerce
title: Google's agentic commerce moves
subtitle: Google's investments in AP2, Gemini checkout, and A2A as signals of where the market is heading
status: strong-signal
confidence: high
updated: 2026-06-05
metadata:
  - label: AP2 announced
    value: September 2025
  - label: A2A v1.0
    value: April 2026
  - label: Gemini checkout
    value: Piloting (add to cart + pay without confirmation)
related:
  - label: Payments and checkout rails
    href: /market-signals/payments-and-checkout-rails
  - label: AP2 glossary
    href: /glossary/ap2
  - label: A2A protocol
    href: /agent-protocols
---

## What Google has done

Google has made the most comprehensive infrastructure investments in agentic commerce of any major platform as of mid-2026:

**Agent Payments Protocol (AP2)** — announced September 2025, developed in partnership with Visa, Mastercard, PayPal, Stripe, and others. An open protocol for agent-initiated payments extending MCP and A2A. Payment-method-agnostic; designed to handle delegated authorisation, transaction anchoring, and liability attribution.

**Agent-to-Agent Protocol (A2A)** — co-developed with IBM (whose ACP merged into A2A in August 2025); v1.0 released April 2026. Now governed by the Linux Foundation AAIF. Defines how agents communicate with each other for task delegation and coordination.

**Gemini agentic checkout** — piloting a flow where Gemini can add items to a cart and complete payment, sometimes without user confirmation. This is the consumer-facing proof of concept for everything below it.

## Why this matters

Google's moves are significant not just for their own products but for the ecosystem. When Google co-develops AP2 with the major payment networks, it establishes the standard. Businesses that want to be accessible to Google's agents (and by extension, any agent using AP2) need to implement AP2 compatibility.

This is how infrastructure standards get set: a major platform commits, the payment networks follow, and the ecosystem normalises around the standard within 12–18 months.

## Signal strength

**Strong.** These are not announcements or roadmap items — they are shipping products and formal protocol releases with version numbers. The Linux Foundation governance of A2A means it is no longer a Google project; it is a community standard.

## Implications for businesses

Any business that wants to be reachable by Gemini-powered agents needs AP2-compatible payment infrastructure. The path of least resistance is Stripe (which already supports the ecosystem) or direct AP2 implementation. Waiting for clarity is expensive: early adopters will be the default options in agent consideration sets.
