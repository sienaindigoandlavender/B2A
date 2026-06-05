---
section: concepts
id: concept-b2a
slug: b2a
title: B2A — Business-to-Agent
subtitle: The commercial model in which the customer is an autonomous AI agent acting on behalf of a human
status: strong-signal
confidence: high
updated: 2026-06-05
metadata:
  - label: Coined by
    value: Y Combinator (2024)
  - label: Predecessor models
    value: B2C, B2B
  - label: Key distinction
    value: Decision-maker is software, not human
related:
  - label: A2A concept
    href: /concepts/a2a
  - label: A2C concept
    href: /concepts/a2c
  - label: Agentic commerce
    href: /concepts/agentic-commerce
  - label: Agent-ready business
    href: /concepts/agent-ready-business
---

## Definition

Business-to-Agent (B2A) is a commercial model in which a business structures its products, pricing, policies, and APIs so that autonomous AI agents can discover, evaluate, and purchase from it — acting on behalf of human principals without requiring the human to be present at the moment of transaction.

## Why it matters

B2C and B2B share one foundational assumption: a human makes the purchasing decision. In B2A, that assumption breaks. The buyer is software. It does not browse; it parses. It does not feel brand affinity; it evaluates criteria. A beautiful website with no structured data is invisible to an agent. A plain API with complete, accurate schema is highly legible.

## The spectrum of autonomy

| Level | Description | Example |
|---|---|---|
| Assisted | Agent suggests; human approves each action | Copilot recommends a hotel; human books |
| Semi-autonomous | Agent acts within pre-set rules; human reviews exceptions | Agent books flights under €500, flags above |
| Fully autonomous | Agent acts without confirmation | Agent replenishes household staples on schedule |

## Comparison with B2C and B2B

| Dimension | B2C | B2B | B2A |
|---|---|---|---|
| Decision-maker | Individual human | Human committee | AI agent |
| Discovery | Search, social, ads | Sales relationships | API calls, MCP tools |
| Evaluation | Browsing, reviews | Demos, proposals | Structured data |
| Purchase trigger | Intent + emotion | Procurement approval | Programmatic, rule-based |
| UI importance | Critical | High | Low — agents prefer APIs |
| Speed | Minutes–days | Weeks–months | Milliseconds–seconds |

## Implications

- **Interface strategy reversal.** Investment shifts from UX (human-facing) to AX (agent-facing): APIs, structured data, machine-readable policies.
- **Brand equity question.** If agents choose between options, prior brand equity may not transfer — or may transfer differently (via training data inclusion, not aesthetics).
- **First-mover dynamics.** Early agent visibility may compound like SEO did in the 2000s, creating durable structural advantages.

## Open questions

- How does trust work in B2A? Agents need to trust that a business's structured data is accurate. What are the mechanisms?
- Does B2A create winner-take-all dynamics per category, or is it more fragmented?
- How does agent preference (what gets recommended) interact with business agency (what businesses want agents to recommend)?
