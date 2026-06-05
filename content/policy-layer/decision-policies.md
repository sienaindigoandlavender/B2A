---
section: policy-layer
id: policy-decision
slug: decision-policies
title: Decision policies
subtitle: The conditional logic rules that govern what an agent can and cannot do on a business's behalf
status: seed
confidence: low
updated: 2026-06-05
related:
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
  - label: Heuristics vs rules
    href: /policy-layer/heuristics-vs-rules
  - label: Guardrail (glossary)
    href: /glossary/guardrail
---

## Summary

Decision policies are the IF/THEN rules in a business's policy layer. They are distinct from static facts (price = €5,500/person) because they encode conditional logic: IF cancellation is more than 45 days before departure, THEN full refund applies. IF group size exceeds 8, THEN route to human review.

## Why they are hard to encode

Decision policies are harder to make machine-readable than static facts because:

- They are conditional (depend on context)
- They can conflict (one rule overrides another in certain conditions)
- They can have exceptions (Christmas bookings have different cancellation rules)
- They can involve fuzzy criteria (what counts as a "reasonable" customisation request?)

The structured policy format needs to handle all of these — which is why YAML alone may be insufficient for complex cases. A decision tree format or a small rules engine may be needed for sophisticated policy encoding.

## Open questions

- What is the right data structure for conditional business logic that is both human-maintainable and machine-parseable?
- How do you handle policy conflicts and precedence in a structured format?
- How does an agent escalate gracefully when a policy rule is ambiguous or missing?
