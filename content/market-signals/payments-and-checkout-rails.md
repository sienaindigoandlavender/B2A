---
section: market-signals
id: signal-payments
slug: payments-and-checkout-rails
title: Payments and checkout rails
subtitle: How the financial infrastructure for autonomous agent transactions is being built
status: strong-signal
confidence: high
updated: 2026-06-05
metadata:
  - label: Stripe agent startups
    value: 700+ built on Stripe toolkit (2025)
  - label: OpenAI + Stripe launch
    value: September 2025
  - label: Key unsolved problem
    value: Delegated authorisation at scale
related:
  - label: Google agentic commerce
    href: /market-signals/google-agentic-commerce
  - label: AP2 glossary
    href: /glossary/ap2
  - label: Payments and authorisation
    href: /agent-protocols/payments-and-authorization
---

## The infrastructure being built

The payment rails for agentic commerce are moving fast. Key developments in 2025:

| Company | Product | What it enables |
|---|---|---|
| Stripe | Agent Toolkit + MCP server | Any AI agent can invoke Stripe's full payments API via one command |
| Google | Agent Payments Protocol (AP2) | Open standard for agent-initiated, delegated payments |
| Visa | Agent Commerce APIs | Credential delegation and per-agent spending controls |
| Mastercard | Agent-ready payment APIs | Autonomous transaction authorisation |
| PayPal | Agentic authorisation APIs | Delegated payment for agents |
| OpenAI | In-conversation checkout (with Stripe) | Humans buy inside ChatGPT, September 2025 |

## The core technical problem

Traditional payment systems require a human at the moment of confirmation: the card details, the click, the 3D Secure challenge. Agents operate asynchronously — the human cannot be present for every transaction.

The solution being standardised across AP2, Visa, and Mastercard is **delegated authorisation**: the human pre-authorises the agent to spend within defined constraints (amount ceiling, merchant category, time window, frequency). Each transaction is cryptographically anchored to the original consent event.

## What this means for businesses

For a business to accept agent-initiated payments reliably, it needs:
- AP2-compatible payment processing (Stripe is the easiest path)
- Defined agent authorisation policies (what agents can buy, at what amounts, with what confirmation requirements)
- Clear liability assignment in merchant agreements

## Open questions

- At what transaction size does delegated authorisation need a confirmation step? The threshold will likely vary by category and consumer trust level.
- How do chargebacks work when an agent makes an erroneous purchase?
- What happens to fraud rates in agent-initiated commerce?
