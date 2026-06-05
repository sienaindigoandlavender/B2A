---
section: concepts
id: concept-a2a
slug: a2a
title: A2A — Agent-to-Agent commerce
subtitle: Fully autonomous commerce between two AI agents, with no human in the loop on either side
status: seed
confidence: low
updated: 2026-06-05
related:
  - label: B2A concept
    href: /concepts/b2a
  - label: A2C concept
    href: /concepts/a2c
  - label: A2A protocol
    href: /agent-protocols
---

## Summary

A2A commerce is the most radical form of agentic commerce: both the buyer and the seller are represented by autonomous AI agents that negotiate, transact, and confirm without human confirmation on either side. It is currently emerging in B2B procurement and supply chain contexts.

## Why it matters

In A2A, the last vestiges of human-facing interface design become irrelevant. The only things that matter are price, specification, availability, API reliability, and policy compliance. A2A is the logical endpoint of the B2A trajectory.

## Key mechanics

- Buyer agent receives goal + constraints from human principal
- Seller agent receives offerings + policies from business
- Agents negotiate via A2A protocol (task delegation, offer/counter-offer)
- AP2 handles payment authorisation
- Both agents log to their respective principals

## Implications

- Policy layer becomes the primary competitive differentiator (agents can compare policies programmatically)
- Brand and aesthetic value approach zero
- Speed and reliability become the dominant quality signals

## Open questions

- What are the failure modes? Who is liable when two agents make an error together?
- How do fraud and manipulation work in an A2A world?
- Does A2A require a new class of identity and verification infrastructure?
