---
section: theses
id: thesis-not-native
slug: why-most-ai-businesses-are-not-native
title: Why most AI businesses are not agent-native
subtitle: The distinction between adding AI to an existing product and designing for the agent economy from the ground up
status: speculative
confidence: low
updated: 2026-06-05
related:
  - label: My core theses
    href: /theses/my-core-theses
  - label: Agent-ready business
    href: /concepts/agent-ready-business
---

## The observation

Most businesses currently describing themselves as "AI businesses" have added an LLM layer to an existing product. The underlying product architecture was designed for human interaction: a database, a UI, a checkout flow. The AI layer sits on top and mediates the human's interaction with it.

This is not the same as being agent-native.

## What agent-native means

An agent-native business is designed from the ground up on the assumption that the primary customer interaction will be mediated by software, not by a human browsing a website. This has specific architectural implications:

- **API-first, not UI-first.** The API is the primary product surface. The UI is secondary — a convenience for humans.
- **Policy-first, not copy-first.** Business rules are expressed as structured, machine-readable logic before they are expressed as marketing prose.
- **Data-structured, not data-embedded.** Product attributes are explicit fields, not embedded in description text.
- **Callable, not readable.** Value is accessed via tool calls, not web browsing.

## Why the distinction matters

A business that adds a chatbot to its existing website has not become agent-native. Its product catalog is still encoded in marketing prose on product pages. Its policies are still in PDF terms and conditions. An agent that wants to buy from it still has to parse human-designed content.

An agent-native business has inverted the architecture: humans use the API (via a UI that wraps it), not the other way around.

## The opportunity

Most of the businesses that will be important in the B2A era do not yet exist as agent-native companies. They are domain experts — in travel, in professional services, in specialised retail — who will build agent-native infrastructure on top of their domain knowledge. The domain knowledge is the moat; the agent-native architecture is the delivery mechanism.

This is why I think the opportunity is not in building better agents. It is in building the infrastructure that makes specific domains agent-accessible.

## The counter-argument

The distinction between "AI wrapper" and "agent-native" may collapse as tools improve. If MCP servers can be auto-generated from existing websites, or if agents become good enough at parsing human-designed content, the need for architectural redesign may diminish. The optimisation path (add a policy file, add an MCP server) may be sufficient without a full ground-up rebuild.

I think this is partially right — the optimisation path is worth doing now — but the businesses that design natively for agents from the start will still have structural advantages in reliability, speed, and policy clarity.
