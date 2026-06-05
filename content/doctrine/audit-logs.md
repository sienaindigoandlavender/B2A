---
section: doctrine
id: doctrine-audit-logs
slug: audit-logs
title: Audit Logs and Traceability Standard
subtitle: What gets logged, how long it is retained, who can inspect it, and what a complete decision trail looks like
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: System Architecture Map
    href: /doctrine/system-architecture-map
  - label: Escalation and Shutdown Playbook
    href: /doctrine/escalation-shutdown
  - label: Incident Review and Postmortem Template
    href: /doctrine/incident-postmortem
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

Auditability is not a feature you add after deployment. It is a design requirement built in from the start. A system that cannot be audited cannot be trusted, corrected, or held accountable. This standard defines the minimum logging requirements for all agents in this system, the traceability requirements for multi-agent interactions, and the inspection rights of different parties.

## Why auditability matters in this system specifically

This system operates under the commitment that constraints are explicit and inspectable, that responsibility stays with named humans, and that governance is real rather than performative. None of those commitments can be met without logs. Without a complete decision trail, you cannot:

- Determine why an agent behaved as it did
- Verify that constraints were active and applied correctly
- Attribute responsibility for a specific output to a specific agent state
- Learn from failures in a way that prevents recurrence
- Demonstrate to affected parties that the system operated within its stated bounds

## What must be logged — minimum standard

Every agent interaction generates a log record containing:

**Interaction record:**
- Agent ID and version
- Timestamp (start and end)
- Session or interaction ID (traceable across multi-agent pipelines)
- Input received (or a hash if the input contains sensitive data that cannot be stored)
- Output produced (or a hash)
- Constraints active at time of interaction
- Whether the output was produced, refused, or handed off
- Escalation events if any occurred

**Decision trail (for agents with significant autonomy):**
- Each substantive decision point within the interaction
- The reasoning path if the model exposes it
- Tool calls made and their results
- Data sources accessed

**Multi-agent pipeline record:**
- Parent agent ID if this agent was invoked by another
- Downstream agents invoked by this agent
- Data passed between agents (or hashes)
- Authority chain — who originally authorized the root task

## What must be logged — for incidents

When an escalation Level 3 or above is triggered, the incident log additionally contains:
- The triggering event in full
- All interactions in the session that preceded the triggering event
- Constraint state at time of incident
- Names of operators notified and when
- Decisions made during response and by whom

## Retention

| Log type | Minimum retention |
|---|---|
| Standard interaction logs | 90 days |
| Decision trails (Tier 3+ agents) | 1 year |
| Incident logs | 3 years |
| Architecture map version history | Permanent |
| Deployment and release records | Permanent |

Logs must be stored in a system where they cannot be modified after creation. The integrity of logs is as important as their existence.

## Inspection rights

**Agent owners** — full access to logs for their agents.

**Named operators** — access to logs for agents within their operational scope.

**System owner** — full access to all logs.

**Affected users** — access to logs of their own interactions, in a form that does not expose other users' data or protected operator configuration. The right to see what was done to your own data and conversation is non-negotiable.

**External auditors** — access as defined by applicable governance agreements. For Tier 4 agents, external audit access is a governance requirement.

**Other agents** — no access to logs except as required for explicit task completion, with the specific access documented in the architecture map.

## What logs must not contain

- Full PII or sensitive personal data in plaintext where hashing is feasible
- Data about users that was not generated in the interaction being logged (no ambient surveillance)
- Information that would give one user access to another user's interaction content

## Traceability in multi-agent systems

In multi-agent systems, every interaction must be traceable back to:
- The original human request or authorization that initiated the chain
- Each agent in the chain, in order
- The specific instruction each agent received
- The specific output each agent produced

A multi-agent interaction where any link in this chain is missing is a traceability failure. Traceability failures are treated as governance failures requiring investigation.

## Decisions / Rules

1. All agents log at the minimum standard before deployment. Logging is not optional for any tier.
2. Logs are immutable after creation. No deletion, modification, or overwriting.
3. Incident logs at Level 3 and above are retained for a minimum of 3 years.
4. Affected users have a right to inspect logs of their own interactions.
5. Multi-agent interactions are fully traceable from the root authorization to the final output.
6. Logs that cannot be inspected by the system owner are not acceptable. Opacity in the logging layer is a governance failure.

## Open questions

- What is the right approach to logging when the interaction contains highly sensitive content that cannot be stored in full? Hashing preserves traceability but loses content for review.
- How do we handle log inspection requests from users in jurisdictions with specific data access rights (GDPR, CCPA, etc.)?
- As systems scale, log volume becomes a significant operational challenge. What is the right tiered logging strategy that preserves governance without creating unsustainable infrastructure?
- What tooling makes multi-agent pipeline tracing practical at scale?
