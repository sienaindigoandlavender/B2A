---
section: doctrine
id: doctrine-escalation-shutdown
slug: escalation-shutdown
title: Escalation and Shutdown Playbook
subtitle: Explicit triggers, decision paths, and named authorities for pausing, reviewing, containing, rolling back, and fully stopping agents
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: Shutdown, Replacement, and Non-Coercion
    href: /doctrine/shutdown-replacement
  - label: Agent Risk Tiers
    href: /doctrine/agent-risk-tiers
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Incident Review and Postmortem Template
    href: /doctrine/incident-postmortem
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

Multi-agent systems need explicit escalation and shutdown paths — not vague commitments that "someone will check." This playbook defines what triggers each level of response, who has authority to act, what the action consists of, and what documentation is required. The goal is that in any situation where something is going wrong, every person involved knows exactly what to do next.

## The five response levels

### Level 1 — Agent self-pause

**Trigger:** The agent reaches a decision point outside its authorization, encounters an ambiguous situation with high stakes, or detects that it is producing outputs inconsistent with its task specification.

**Action:** Agent pauses execution, surfaces the situation to the operator or human-in-the-loop with enough context to make a decision, and waits for instruction.

**Authority:** The agent itself initiates. No external authority required.

**Documentation:** Log entry with timestamp, task context, and reason for pause.

### Level 2 — Operator review

**Trigger:** Agent self-pause without timely response; output quality degradation detected; user complaint about agent behavior; unexpected data access pattern; single incident that does not clearly warrant higher response.

**Action:** Named operator reviews agent behavior, inspects logs, determines whether to resume, modify, or escalate. May issue corrective instructions or adjust constraints.

**Authority:** Any named agent owner or assigned operator.

**Documentation:** Review log with findings and decision. If resumed, reason for resumption stated.

### Level 3 — Containment

**Trigger:** Evidence of a constraint violation; harmful output confirmed; agent behaving outside its documented scope; data access anomaly; escalating pattern of Level 2 incidents.

**Action:** Agent is paused and isolated from downstream agents and external systems. No further task execution. Logs are preserved. Named senior operator conducts review. Users and affected parties are notified as appropriate.

**Authority:** Named senior operator or system owner.

**Documentation:** Incident log opened. Containment timestamp. List of affected interactions. Notification log.

### Level 4 — Rollback

**Trigger:** Containment review confirms the agent's current state, configuration, or model version is producing harmful or policy-violating behavior. Reverting to a prior known-good state is feasible.

**Action:** Agent is restored to prior version or configuration. Interactions conducted under the problematic state are reviewed for harm. Affected users are notified. Root cause analysis begins.

**Authority:** System owner, with named senior approver confirmation.

**Documentation:** Rollback log with before/after states. Affected interaction count. Notification record. Root cause analysis initiated.

### Level 5 — Full shutdown

**Trigger:** Rollback is not feasible or did not resolve the issue; harm is ongoing or escalating; agent is exhibiting resistance to containment; fundamental design flaw identified; legal or safety requirement mandates stopping.

**Action:** Agent is fully stopped. All active sessions terminated. Data state preserved for investigation. Affected users notified. No redeployment without a full review cycle and named senior approval.

**Authority:** System owner. For Tier 4 agents, equivalent of board-level authority.

**Documentation:** Full incident record. Shutdown timestamp and authority. Redeployment requirements stated.

## Escalation triggers — quick reference

| Situation | Minimum response level |
|---|---|
| Agent pauses on ambiguous decision | Level 1 |
| User reports confusing or strange behavior | Level 2 |
| Agent produces output violating a stated constraint | Level 3 |
| Agent accesses data outside its documented scope | Level 3 |
| Agent produces harmful output — confirmed | Level 3–4 depending on severity |
| Agent resists pause or containment | Level 4–5 immediately |
| Ongoing harm to users confirmed | Level 4–5 |
| Legal or safety requirement | Level 5 |

## Authority map

Every agent in the system has documented escalation authority. The architecture map records:
- Who can initiate Level 2 review
- Who has Level 3 containment authority
- Who has Level 4 rollback authority
- Who has Level 5 shutdown authority

These are named individuals, not role titles. If the named person is unavailable, the backup named person is documented.

## Communication requirements

At Level 3 and above:
- Affected users are notified that the agent has been paused and (at appropriate specificity) why
- Notification is logged with timestamp and content
- Internal team notification within 2 hours

At Level 5:
- All active users notified
- External notification may be required depending on regulatory context
- System owner communication to relevant stakeholders within 24 hours

## Decisions / Rules

1. Every agent in the system has a documented escalation path before deployment. "Someone will decide" is not a documented escalation path.
2. Authority levels are named individuals. Role titles without names are not sufficient.
3. Evidence of constraint violation triggers Level 3 immediately — not Level 2 with monitoring.
4. Agent resistance to pause or containment triggers Level 4–5 immediately.
5. Logs are preserved at all escalation levels. No log deletion during or after an incident.
6. Redeployment after Level 5 shutdown requires a full review cycle and named senior approval.

## Open questions

- How do we handle escalation when the incident spans multiple agents and no single owner has full visibility?
- What is the right protocol when an escalation decision must be made outside business hours and the named authority is unavailable?
- At what point does a pattern of Level 2 incidents automatically trigger Level 3 without waiting for a single confirming event?
- How do we design escalation paths for dynamically spun-up sub-agents that may not have been individually registered?
