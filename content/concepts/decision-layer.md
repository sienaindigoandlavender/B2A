---
section: concepts
id: concept-decision-layer
slug: decision-layer
title: Decision layer
subtitle: The component of an agentic system that evaluates options and selects actions according to defined rules and goals
status: seed
confidence: low
updated: 2026-06-05
---

## Summary

The decision layer is what separates an agent from a script. A script executes predefined actions. An agent's decision layer evaluates context, weighs options against goals and constraints, and selects an action — even in situations that were not explicitly anticipated.

## Why it matters

In B2A, the decision layer is where the business's policy gets interpreted. An agent is given a goal (book the best hotel for this trip) and a set of constraints (under €200/night, near the medina, free cancellation). The decision layer evaluates available options against these constraints and selects.

The quality of the decision depends on: the quality of the data the agent has access to (are all relevant options visible?), the clarity of the constraints (are they unambiguous?), and the policy rules of the businesses being evaluated (are they machine-readable and accurate?).

## Open questions

- How does the decision layer handle conflict between user goals and business constraints?
- What are the failure modes — where does agent decision-making go wrong in commercial contexts?
- How do you audit a decision layer's choices?
