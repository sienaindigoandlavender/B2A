---
section: glossary
id: glossary-policy-layer
slug: policy-layer
title: Policy layer
subtitle: Commerce strategy
updated: 2026-06-05
---

The structured, machine-readable set of rules, constraints, and decision logic that governs how a business interacts with autonomous AI agents. It defines what can be purchased and under what conditions, what the cancellation and refund rules are, what the escalation path is for exceptions, and what an agent is and is not authorised to do.

The policy layer is currently the most underbuilt component of agent-ready business infrastructure. Most business policies exist only as human-readable text (terms and conditions, FAQs) that AI agents cannot reliably parse and act on.

Without a structured policy layer, agents either hallucinate constraints, fail gracefully by escalating to a human, or refuse ambiguous transactions entirely. All three outcomes are costly.

The policy layer is distinct from the API layer (what you *can* do) — it defines what you *should* do under which conditions. See: machine-readable policy format for a draft specification.
