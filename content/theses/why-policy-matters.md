---
section: theses
id: thesis-policy
slug: why-policy-matters
title: Why policy matters
subtitle: The argument that machine-readable policy is the most underbuilt layer in the agent economy
status: active
confidence: medium
updated: 2026-06-05
related:
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
  - label: Machine-readable policy format
    href: /policy-layer/machine-readable-policy-format
  - label: My core theses
    href: /theses/my-core-theses
---

## The argument

Agents need three things to transact with a business: discovery (can I find it?), legibility (can I understand what it offers?), and policy (can I know the rules?).

Discovery is being solved by llms.txt and structured data. Legibility is being solved by schema.org, OpenAPI specs, and well-structured product catalogs. Policy is almost entirely unsolved.

Policy is more complex than discovery or legibility because it involves conditional logic: "if X, then Y; except when Z." A business's cancellation policy is not a fact — it is a decision tree. A business's pricing is not a number — it is a function of multiple inputs. An agent that cannot reliably parse these decision trees will either make errors or refuse to transact.

## The current workaround

Current agents handle this by: summarising human-readable terms and conditions (error-prone, inconsistent), asking the human to confirm (breaks autonomy), or refusing transactions that involve policy questions (loses value). None of these are acceptable at scale.

## The opportunity

The business that builds standardised tooling for publishing machine-readable policy layers — YAML templates, JSON-LD schemas, validation tools — and establishes adoption in even one vertical (travel, hospitality, professional services) will sit at a structurally important junction in the agent economy.

This is not necessarily a consumer-facing product. It might be B2B infrastructure: tools that operators and platforms use to publish their policies in agent-readable form.

## The counter-argument

Agents will get better at parsing human-readable text. Eventually, a well-written terms and conditions page will be sufficiently parseable that a structured policy format adds no additional value. If LLMs reach the point where they can reliably interpret legal prose with zero ambiguity, the policy layer becomes unnecessary.

My response: even if parsing improves, structured policy is faster, cheaper to process, and more reliable to audit. The cost of a structured format remains worth it even in a world of very good unstructured parsing.
