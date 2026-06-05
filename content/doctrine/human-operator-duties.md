---
section: doctrine
id: doctrine-operator-duties
slug: human-operator-duties
title: Human Operator Duties
subtitle: What humans must review, what they may delegate, and what they can never attribute to the model — because accountability stays with named people
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: Agent Orchestrator Oath
    href: /doctrine/agent-orchestrator-oath
  - label: System Architecture Map
    href: /doctrine/system-architecture-map
  - label: Escalation and Shutdown Playbook
    href: /doctrine/escalation-shutdown
  - label: Release Checklist for New Agents
    href: /doctrine/release-checklist
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
  - label: Code of Ethics
    href: /doctrine/code-of-ethics
---

Every agent in this system has a named human owner. That ownership is not nominal. It means a specific person is responsible for what the agent does — not just for whether it was configured correctly at deployment, but for its ongoing behavior, its impact on users, and its response when something goes wrong. This page defines what that responsibility requires.

## The non-delegable core

Some duties cannot be delegated to agents regardless of capability or efficiency arguments.

**Humans must:**

- Approve every agent deployment and major update (with name and date recorded)
- Review risk tier assignments and confirm they are accurate
- Make decisions when an agent escalates beyond its authorization
- Authorize Level 3 containment and above
- Sign off on incident postmortems
- Decide whether a shutdown agent is safe to redeploy
- Respond to affected users when harm has occurred
- Maintain and update the architecture map as systems change
- Conduct or commission red-team reviews before Tier 3+ deployments
- Own the corrective actions in postmortems

An agent may assist with all of these tasks — drafting, summarizing, flagging, preparing — but a human must make the decision and their name must be recorded against it.

## What operators may delegate

Operators may delegate to agents:

- Task execution within defined scope and constraints
- Routine monitoring and flagging (but not the decision about what to do with a flag)
- First-pass review and summarization of logs (but not the judgment of whether logs reveal a problem)
- Drafting communications for human review and approval
- Data retrieval and synthesis in support of human decisions
- Execution of decisions that have already been made by a human

The principle: agents may do, prepare, and assist. Humans decide, approve, and own.

## What operators may never attribute to "the model"

When harm occurs, the following are never acceptable responses:

- "The model did that, not us"
- "We didn't design it to do that"
- "That's an emergent behavior we couldn't predict"
- "The model refused / agreed / decided on its own"

Agents do not have independent moral agency in this system. They do what they were designed, configured, and deployed to do. If the design produced harmful output, the human who designed it is responsible. If the configuration allowed a constraint to be bypassed, the human who set the configuration is responsible. If the deployment went ahead without adequate testing, the human who approved the deployment is responsible.

This is not a punitive stance. It is a governance requirement. Responsibility that can be deflected to "the model" is responsibility that no one holds — and that means no one learns from it.

## The review cadence

**Ongoing:**
- Monitor escalation alerts and respond within defined SLAs
- Review incident flags as they arise
- Maintain awareness of the agents you own

**Quarterly:**
- Full architecture map review — all agent entries verified current
- Risk tier review — any tier reassignments required?
- Pattern review across incident log — any recurring issues?
- Corrective action status review

**At each deployment:**
- Full release checklist completion
- Sign-off with name and date

**At each major incident:**
- Postmortem completion within 5 business days
- Corrective action ownership

## Operator qualification

Not everyone should be a named agent owner. Agent ownership requires:

- Understanding of the agent's role, constraints, and risk tier
- Familiarity with this doctrine and the checklist requirements
- Authority to authorize escalation decisions up to their tier
- Access to relevant logs and monitoring
- Clear understanding of what escalates to whom above them

A named owner who does not understand what they own is a governance failure. Ownership without accountability is nominal.

## When a named owner is unavailable

Every agent entry in the architecture map includes a named backup owner for situations where the primary owner is unavailable. The backup owner assumes full ownership duties during the primary's absence. "No one was available" is not an acceptable explanation for an unresponded escalation.

## Decisions / Rules

1. Every deployment, major update, and escalation decision has a named human who made or approved it.
2. The phrase "the model did that" is not an acceptable response to a governance question. The human owner is responsible.
3. Non-delegable duties are not delegated under any operational pressure.
4. Named owners must understand what they own. Nominal ownership is a governance failure.
5. Every agent has a named backup owner documented in the architecture map.
6. Quarterly reviews are not optional. They are governance requirements.

## Open questions

- What is the right qualification standard for agent ownership? How do we ensure new operators understand the doctrine before taking ownership?
- At what scale does individual named ownership become impractical? What is the right governance model for large systems with many agents?
- How do we handle ownership continuity when named owners leave the organization?
- What is the appropriate response when a named owner is found to have delegated non-delegable duties? Is this a governance violation requiring formal response?
