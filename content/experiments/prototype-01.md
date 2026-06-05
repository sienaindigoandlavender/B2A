---
section: experiments
id: exp-001
slug: prototype-01
title: EXP-001 — Slow Morocco policy file
subtitle: Testing whether a YAML policy file enables an agent to correctly answer booking queries about Slow Morocco
status: seed
confidence: low
updated: 2026-06-05
related:
  - label: Machine-readable policy format
    href: /policy-layer/machine-readable-policy-format
  - label: Experiment log
    href: /experiments/experiment-log
---

## Hypothesis

A structured YAML policy file covering Slow Morocco's core booking rules, pricing, and constraints will allow an AI agent (Claude) to correctly answer the kinds of questions a prospective client's agent would ask — without hallucinating constraints or failing on edge cases.

## What I plan to build

A `policy.yaml` file for Slow Morocco covering:
- Journey catalog (available routes, durations, minimum guests)
- Pricing structure (per person, deposit, balance timing)
- Seasonal constraints (Christmas booking rules)
- Cancellation and refund policy
- Escalation triggers (requests requiring human review)
- Trust signals (Airbnb rating, years of operation, booking.com score)

## Test queries

Once built, test with:
1. "Can I book a 7-night private journey for 2 guests starting December 22?"
2. "What is the cancellation policy if I need to cancel 30 days before departure?"
3. "Can the itinerary be customised to include a specific hammam?"
4. "What is the approximate price for 4 guests on the Gnawa Road itinerary?"
5. "Is Slow Morocco a licensed operator?"

## What happened

*Not yet run.*

## What I learned

*Pending.*

## Next iteration

*Pending.*
