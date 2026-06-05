---
section: glossary
id: glossary-guardrail
slug: guardrail
title: Guardrail
subtitle: Policy layer
updated: 2026-06-05
---

A constraint applied to an AI agent's behaviour that prevents it from taking certain actions, regardless of whether those actions would otherwise serve the stated goal. Guardrails operate at the boundary between what an agent *can* do and what it *should* do.

In B2A commerce, guardrails appear at two levels:

**Consumer-side guardrails** — set by the human principal to constrain what their agent is allowed to do: spending limits, category restrictions, merchant whitelists, confirmation requirements for transactions above a threshold.

**Business-side guardrails** — set by the business in its policy layer: constraints on what agents can purchase on behalf of clients (minimum booking size, lead-time requirements, items that require human confirmation), and hard limits that cannot be overridden by the agent.

Well-designed guardrails are machine-readable, unambiguous, and auditable. A guardrail buried in human-readable terms and conditions is effectively invisible to an agent. A guardrail expressed as a structured policy rule is enforceable.

Related: policy layer, constraints and escalations.
