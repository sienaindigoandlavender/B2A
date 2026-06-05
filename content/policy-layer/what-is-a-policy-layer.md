---
section: policy-layer
id: policy-what
slug: what-is-a-policy-layer
title: What is a policy layer?
subtitle: The structured, machine-readable rules that tell an AI agent what a business will and will not do
status: active
confidence: medium
updated: 2026-06-05
metadata:
  - label: Current state
    value: Almost entirely absent — unstructured, human-readable only
  - label: Analogous to
    value: robots.txt (access policy), schema.org (data policy), terms of service (legal policy)
  - label: My thesis relevance
    value: High — this is the core opportunity
related:
  - label: Machine-readable policy format
    href: /policy-layer/machine-readable-policy-format
  - label: Decision policies
    href: /policy-layer/decision-policies
  - label: Why policy matters (thesis)
    href: /theses/why-policy-matters
---

## Definition

A policy layer is the structured set of rules, constraints, and decision logic that governs how a business interacts with autonomous agents. It defines: what can be purchased (and what cannot), at what prices and under what conditions, what the cancellation and refund rules are, what the escalation path is for exceptions, and what the agent is and is not authorised to do on behalf of the customer.

## The current gap

Today, business policies exist in two places: embedded in code (your booking system enforces rules programmatically) and written in human-readable documents (terms and conditions, FAQs, policy pages). Neither is reliably accessible to an AI agent.

An agent trying to evaluate whether a luxury tour operator can accommodate a request for a 5-day private itinerary starting December 23rd needs to know: minimum booking lead time, Christmas booking constraints, minimum group size, pricing structure, and what customisation is possible. All of this exists in someone's head, in scattered FAQ answers, and in buried terms and conditions — but not in a format an agent can reason about.

## Why it matters

The policy layer is the missing interface between businesses and agents. When it is absent, agents either: hallucinate constraints (make up rules), fail gracefully (say "I can't determine this, please contact the business directly"), or over-approximate (refuse any transaction that isn't explicitly permitted).

All three outcomes are bad for the business. The solution is a structured, machine-readable policy layer.

## What a policy layer contains

| Category | Example |
|---|---|
| Offering constraints | "Minimum booking: 2 guests, 5 nights" |
| Pricing rules | "Price is per person; single supplement applies" |
| Availability | "No Christmas bookings with less than 60 days notice" |
| Customisation limits | "Itinerary can be modified; accommodation substitutions available" |
| Cancellation | "Full refund >45 days; no refund <45 days" |
| Payment | "30% deposit to confirm; balance 45 days before departure" |
| Escalation | "Requests outside standard parameters → human review required" |
| Trust signals | "Licensed operator; 4.92 Airbnb rating; 8 years operation" |

## Relevance to my work

Slow Morocco has all of these policies. None are machine-readable. An agent trying to book a Slow Morocco journey today would fail at the first step — it would find a website with rich prose content but no structured policy it could act on. Building the policy layer for a business like Slow Morocco is a concrete, near-term project.
