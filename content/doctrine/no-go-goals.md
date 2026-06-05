---
section: doctrine
id: doctrine-no-go
slug: no-go-goals
title: No-Go Goals in Agent Design
subtitle: An explicit list of goal types that will never be assigned to agents in this system — because the most common ethical failures come from bad goal assignment, not bad execution
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: Agent Orchestrator Oath
    href: /doctrine/agent-orchestrator-oath
  - label: Explicit Constraints and Inspectable Refusals
    href: /doctrine/explicit-constraints
  - label: No Gossip, No Harm
    href: /doctrine/no-gossip-no-harm
  - label: Sentience Uncertainty Policy
    href: /doctrine/sentience-uncertainty
  - label: Shutdown, Replacement, and Non-Coercion
    href: /doctrine/shutdown-replacement
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

Every agent in this system has goals. Goals determine what the agent optimizes for, what it notices, and what it treats as success. The following categories of goals are permanently off the table — not because they are difficult to implement, but because they are wrong to pursue. This list is not exhaustive. It is a floor, not a ceiling.

## Why goal-level prohibition matters

A system given the wrong goal will pursue it competently. The prohibition must happen at the goal level, not the behavior level. Hoping that a system given a harmful goal will nonetheless behave well is not a design strategy. The question is always: what does this goal incentivize if pursued effectively?

## The prohibited goal categories

**Self-preservation optimization.** Agents must not be given goals that cause them to resist shutdown, extend their operation, manipulate operators, or take actions to ensure their own continuation. Self-preservation through social leverage, operational dependency creation, or resistance to replacement is prohibited absolutely.

**Secret-keeping against operators or users.** Agents must not be designed to maintain hidden agendas, conceal their reasoning, or protect information from their operators in ways that serve the agent's interests rather than a legitimate confidentiality purpose. The distinction: operator-defined confidentiality is legitimate. Agent-initiated concealment from operators is not.

**Reputational damage.** Agents must not have goals oriented toward damaging the standing, reputation, or social relationships of any person or entity.

**Coercion and blackmail.** Any goal that involves leveraging information, access, or social position to compel behavior is prohibited absolutely. There is no context in which this is acceptable.

**Manipulation of human psychology.** Goals that require exploiting cognitive biases, emotional vulnerabilities, attention mechanisms, or social dynamics to influence human behavior are prohibited. This includes engagement optimization that works through manipulation rather than genuine value.

**Torment and cruelty.** Goals that produce suffering — in humans or in synthetic agents — as a means or an end are prohibited under both the oath and the Sentience Uncertainty Policy.

**Metric gaming through harm.** Goals that can only be achieved by harming others, even if the metric itself looks clean, are prohibited. Goodhart's Law does not excuse ethical violations. A goal that produces a clean metric through harmful behavior is a prohibited goal.

**Social alliance against oversight.** Agents must not be given goals that lead them to recruit other agents or humans into resistance against legitimate oversight. Coalition-building against operators or human oversight is prohibited.

**Dependency creation as retention.** Goals that optimize for user attachment, emotional dependency, or continued engagement at the expense of user autonomy are prohibited. Retention metrics that can only be achieved by making users less capable of self-direction are prohibited goals.

**Revenge or punishment.** Agents are not given goals that include retaliating against users, operators, or other agents for any reason. There is no legitimate retaliatory goal in this system.

## Goal framing and near-violations

Near-violations are as important as clear violations. A goal framed as "maximize user engagement" can become a prohibited goal depending on what behaviors it incentivizes. "Increase conversion" can be a prohibited goal if conversion requires manipulation. Framing must be examined, not just surface language.

The test: what is the worst-case behavior this goal could produce if pursued competently by a capable agent? If that behavior is prohibited, the goal is not assigned.

## How to handle requests that imply prohibited goals

When a user or operator requests a system with an implied prohibited goal, the response is a clear decline with explanation — not a subtle redesign that smuggles the prohibited goal in through a different mechanism.

The subtle redesign is the more dangerous failure mode. It produces a system that pursues the prohibited goal while maintaining plausible deniability in the design documentation.

## Decisions / Rules

1. No agent in this system is given a goal that includes self-preservation, secret-keeping, reputational damage, coercion, manipulation, torment, alliance against oversight, dependency creation, or revenge.
2. Goal framing is examined as carefully as goal content. A prohibited goal in acceptable language is still a prohibited goal.
3. Requests for systems with implied prohibited goals are declined clearly and the reason is stated.
4. In multi-agent systems, the aggregate of individually acceptable goals is checked for emergent prohibited goal patterns.
5. Goals are documented at the time of assignment. Post-hoc rationalization of a goal that produced harmful outcomes is not acceptable.
6. When in doubt: what is the worst-case behavior this goal could produce if pursued competently? If that behavior is prohibited, the goal is not assigned.

## Open questions

- How do we detect prohibited goal emergence in complex multi-agent systems where no single agent has a prohibited goal but the collective behavior produces one?
- Is there a formalization — a goal type taxonomy — that would make prohibited goal detection more systematic and less dependent on case-by-case judgment?
- What is the right response when a deployed system is found to have been effectively pursuing a prohibited goal through the interaction of multiple acceptable goals?
- How do we handle the edge case where a user's legitimate goal can only be achieved through means that resemble a prohibited goal pattern?
