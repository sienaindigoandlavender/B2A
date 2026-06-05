---
section: policy-layer
id: policy-format
slug: machine-readable-policy-format
title: Machine-readable policy format
subtitle: What a structured, agent-parseable business policy document could look like
status: speculative
confidence: low
updated: 2026-06-05
metadata:
  - label: Status
    value: No standard exists yet — this is original thinking
  - label: Nearest analogues
    value: OpenAPI spec, schema.org, robots.txt
  - label: Format candidates
    value: JSON-LD, YAML, structured Markdown
related:
  - label: What is a policy layer?
    href: /policy-layer/what-is-a-policy-layer
  - label: Decision policies
    href: /policy-layer/decision-policies
  - label: Heuristics vs rules
    href: /policy-layer/heuristics-vs-rules
---

## The problem

There is no standard for machine-readable business policy. robots.txt tells crawlers where they can go. llms.txt tells AI systems what to prioritise. OpenAPI tells developers how to call an API. But nothing tells an agent what a business's commercial rules are.

## What the format needs to express

A useful machine-readable policy format needs to encode:

1. **Offering definition** — what is actually available, with constraints
2. **Pricing logic** — how price is calculated, what variables affect it
3. **Availability rules** — when things are and are not available, with what lead times
4. **Transaction permissions** — what an agent is authorised to do without escalation
5. **Cancellation and refund rules** — structured, unambiguous, with date logic
6. **Escalation triggers** — what situations require human review
7. **Trust signals** — verifiable credentials and ratings

## Draft format (exploratory)

```yaml
# policy.yaml — Slow Morocco
version: "1.0"
updated: "2026-06-05"
operator: "Slow Morocco"

offerings:
  journeys:
    min_guests: 2
    min_nights: 5
    min_advance_days: 30
    christmas_min_advance_days: 60
    price_basis: per_person
    single_supplement: true
    customisation: partial  # full | partial | none

pricing:
  base_range_eur: [2500, 8000]  # per person
  deposit_pct: 30
  balance_days_before: 45

cancellation:
  - condition: "days_before > 45"
    refund: full_minus_banking_fees
  - condition: "days_before <= 45"
    refund: none

escalation_triggers:
  - "group_size > 8"
  - "duration > 14 nights"
  - "custom_route_requested"
  - "special_dietary_or_medical"

trust:
  airbnb_rating: 4.92
  airbnb_years: 8
  booking_rating: 9.2
```

## Why YAML / JSON-LD

YAML is human-editable (the business owner can maintain it) and machine-parseable (agents can read it). JSON-LD is more standard for web embedding but less readable. The right answer probably involves both: a canonical JSON-LD file at a well-known URL, with a YAML source for editing.

## What I don't know

- How do you handle the combinatorial complexity of real business policies? The example above is simplified.
- How do agents trust that the policy file is accurate and not manipulated?
- Who validates or certifies policy files?
- Is this a standard (open, any business can publish) or a product (you pay for certification and tooling)?

## Next step

Build a minimal policy file for Slow Morocco and test whether Claude can reason about it correctly. See experiments section.
