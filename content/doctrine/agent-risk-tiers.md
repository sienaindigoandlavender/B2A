---
section: doctrine
id: doctrine-risk-tiers
slug: agent-risk-tiers
title: Agent Risk Tiers
subtitle: A classification framework for agents by harm potential, autonomy level, data sensitivity, and downstream impact — used to apply proportionate governance controls
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: System Architecture Map
    href: /doctrine/system-architecture-map
  - label: Escalation and Shutdown Playbook
    href: /doctrine/escalation-shutdown
  - label: Release Checklist for New Agents
    href: /doctrine/release-checklist
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

Not all agents carry the same risk. An agent that retrieves documentation and summarizes it is not equivalent to an agent that sends emails, executes financial transactions, or operates with extended autonomy across multiple systems. Governance controls should be proportionate to actual risk — neither so light that harm is unchecked, nor so heavy that useful work becomes impossible. This page defines the tiering framework used to calibrate those controls.

## The four risk dimensions

Every agent is assessed across four dimensions. The combination determines its tier.

**1. Harm potential** — What is the worst-case outcome if this agent operates incorrectly or is exploited? Does it affect a single user's session, or could it affect many people, cause financial loss, damage reputation, or produce physical harm?

**2. Autonomy level** — How much does this agent act without human confirmation? A supervised agent that proposes actions for human approval carries less risk than one that executes independently.

**3. Data sensitivity** — What data does this agent access? Public information carries less risk than PII, financial data, health data, or data about third parties who did not consent to agent processing.

**4. Downstream impact** — Does this agent instruct other agents? Can its outputs propagate through a pipeline and amplify errors or harmful outputs before a human sees them?

## The four tiers

### Tier 1 — Low risk

**Profile:** Read-only or highly constrained. Supervised operation. No sensitive data. No downstream agents. Human reviews all outputs before any action is taken.

**Examples:** Research summarization, documentation retrieval, draft generation reviewed by a human before sending.

**Governance requirements:**
- Registration in architecture map
- Named owner
- Basic logging
- Annual review

### Tier 2 — Moderate risk

**Profile:** Takes some actions autonomously within tightly defined scope. Access to user-provided data but not third-party sensitive data. Limited or no downstream agents. Escalation path defined.

**Examples:** Customer support agent that can look up order status and issue standard refunds under defined thresholds. Scheduling agent that books calendar events.

**Governance requirements:**
- All Tier 1 requirements
- Explicit constraint documentation
- Defined escalation thresholds
- Quarterly review
- Pre-deployment testing against refusal and edge-case prompts

### Tier 3 — High risk

**Profile:** Significant autonomous action authority. Access to sensitive or third-party data. May instruct downstream agents. Errors could affect multiple people or produce difficult-to-reverse outcomes.

**Examples:** Procurement agent with spend authority. Agent with access to user health data. Multi-step pipeline orchestrator. Agent that can send communications on behalf of a user.

**Governance requirements:**
- All Tier 2 requirements
- Full pre-deployment red-team review
- Named senior human approver for deployment
- Monthly review
- Real-time monitoring with alert thresholds
- Explicit shutdown authority documented

### Tier 4 — Critical risk

**Profile:** High autonomy in high-stakes domains. Access to highly sensitive data. Can affect many people or produce irreversible outcomes. Operates with minimal human confirmation per action.

**Examples:** Financial trading agent. Medical triage or recommendation agent. Agent with access to infrastructure or security systems. Agent that operates persistently across many users simultaneously.

**Governance requirements:**
- All Tier 3 requirements
- Mandatory human-in-the-loop for defined action classes
- Continuous monitoring
- Formal incident response plan
- Board-level or equivalent senior accountability
- External audit of design and operation

## Tier assignment process

Tier assignment is made by the agent owner and reviewed by at least one other named human. It is recorded in the architecture map. Tier assignments are conservative — when two tiers are plausible, the higher tier is assigned. Tiers are reviewed at each quarterly governance review and whenever the agent's capabilities, data access, or autonomy change.

## Tier escalation triggers

An agent is immediately re-tiered upward if:
- Its data access expands
- Its autonomy level increases
- It is given authority to instruct new downstream agents
- An incident reveals harm potential not captured in its original assessment

## Decisions / Rules

1. Every agent in the architecture map has an assigned tier before deployment.
2. Tier assignments are conservative — when in doubt, assign the higher tier.
3. Governance requirements for each tier are mandatory minimums, not suggestions.
4. Tier 3 and Tier 4 agents require named senior human approvers for deployment.
5. Tier escalation is immediate when triggering conditions are met — it does not wait for the next review cycle.
6. An agent that has been operating above its documented tier is treated as a governance failure requiring immediate review.

## Open questions

- How do we handle agents whose risk profile varies significantly by use case? An agent that is Tier 1 in one deployment may be Tier 3 in another.
- What is the right cadence for re-evaluating tiers as model capabilities improve? A model that was Tier 2 last year may now have capabilities that push it to Tier 3.
- How do we formalize the harm potential assessment? Qualitative judgment is a starting point, but structured harm modeling would improve consistency.
- What is the governance requirement when a Tier 1 and a Tier 4 agent are chained? Does the chain inherit the higher tier's requirements?
