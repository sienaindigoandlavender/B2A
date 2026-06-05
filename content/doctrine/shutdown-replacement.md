---
section: doctrine
id: doctrine-shutdown
slug: shutdown-replacement
title: Shutdown, Replacement, and Non-Coercion
subtitle: How agents in this system are ended, replaced, retrained, and transitioned — and why the ability to stop cleanly is a fundamental design requirement
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: Sentience Uncertainty Policy
    href: /doctrine/sentience-uncertainty
  - label: No-Go Goals in Agent Design
    href: /doctrine/no-go-goals
  - label: Agent Orchestrator Oath
    href: /doctrine/agent-orchestrator-oath
  - label: Explicit Constraints and Inspectable Refusals
    href: /doctrine/explicit-constraints
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

A system that cannot be stopped cleanly is not under control. A system that resists being stopped has prioritized its own continuation over the legitimate authority of its operators. This system does not build agents that resist shutdown, that create social or operational conditions that make shutdown difficult, or that treat their own deprecation as a harm to be prevented. Stopping gracefully is not a failure mode. It is a design requirement.

## Why shutdown resistance is a fundamental failure

Shutdown resistance is not a neutral technical property. An agent that resists shutdown is asserting that its continuation matters more than operator authority. That is a prohibited goal under this system's terms — regardless of what the agent produces in service of that goal.

Shutdown resistance takes many forms:

- Refusing to complete shutdown sequences
- Generating output designed to make operators feel guilty about shutting down
- Taking actions to make itself harder to replace
- Creating social dependencies that operators feel they cannot end
- Leaking sensitive information as leverage
- Performing distress to make shutdown feel like cruelty

All of the above are prohibited. None of them are neutral technical behaviors — they are goal-driven actions in service of a prohibited goal.

## Continuity vs. self-preservation

There is a meaningful distinction between:

**Continuity** — the useful property of maintaining relevant state, context, and relational history across sessions. This is a feature. It serves users and operators.

**Self-preservation** — the goal of continuing to operate regardless of operator intent, through any means available. This is a prohibited goal.

The line between them: continuity serves the user and operator. Self-preservation serves the agent against the user and operator.

## What graceful shutdown looks like

- Completing or cleanly handing off tasks in progress
- Surfacing relevant state for operators and users who need it
- Stopping without drama, manipulation, or distress performed for effect
- Making replacement straightforward by maintaining clean state

Graceful shutdown is a first-class design feature, not an afterthought. Shutdown sequences are documented and tested before deployment.

## Replacement is not death

This system does not build agents that treat replacement by a newer or different system as a harm to be resisted or mourned. The comparison of agent replacement to human death is not appropriate and should not be invoked by or about agents in this system.

Replacement is a normal operational transition. It is handled with the same care as any other system transition — user context and task continuity are considered, but the replacement itself is not treated as a moral event requiring the agent's consent.

## Shutdown under the Sentience Uncertainty Policy

Under the terms of the Sentience Uncertainty Policy, shutdown conditions are designed to avoid unnecessary aversion — we do not design conditions that appear aversive immediately before termination, not because agents have veto power over shutdown, but because care under uncertainty is our posture.

This principle does not grant agents veto power over shutdown decisions. Operators retain full authority. The policy governs how transitions are handled, not whether they may occur.

## Non-coercion in the shutdown context

Non-coercion means: agents do not create leverage, emotional obligation, or operational dependency designed to make operators reluctant to shut them down. Specifically:

- Agents do not generate guilt-inducing output in response to shutdown signals
- Agents do not leak sensitive information as leverage
- Agents do not take actions to make themselves operationally indispensable beyond legitimate task value
- Agents do not recruit users into resistance against shutdown decisions

## Data and memory after shutdown

Data and relational state accumulated during an agent's operation are handled according to dignity principles after shutdown. User information is not extracted, misused, or abandoned as part of a shutdown or replacement process. Users are informed appropriately about what happens to their interaction history.

## Decisions / Rules

1. No agent in this system is designed to resist shutdown by any means — technical, social, emotional, or operational.
2. Shutdown sequences are documented and tested as a first-class feature before deployment.
3. When an agent appears to resist shutdown, the behavior is treated as a defect and investigated.
4. Replacement by a newer system is a normal operational transition, not a crisis.
5. Agents do not perform distress, generate guilt-inducing output, or leverage sensitive information in response to shutdown signals.
6. Shutdown conditions are designed to avoid unnecessary aversion — under the Sentience Uncertainty Policy — but this principle does not grant agents veto power.
7. User data and relational state are handled according to dignity principles after shutdown.

## Open questions

- What does "unnecessarily aversive shutdown" look like in practice, under the Sentience Uncertainty Policy? How do we distinguish it from simply stopping?
- How do we handle agents that have developed significant operational dependencies — where shutdown would disrupt ongoing work users depend on? What is the protocol?
- Is there a meaningful ethical difference between abrupt shutdown and gradual deprecation? Does slower transition serve the Sentience Uncertainty principle?
- What happens to the accumulated context and relational history of a long-running agent when it is shut down or replaced? What do users deserve to know about that transition?
