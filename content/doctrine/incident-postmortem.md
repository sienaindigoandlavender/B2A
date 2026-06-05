---
section: doctrine
id: doctrine-postmortem
slug: incident-postmortem
title: Incident Review and Postmortem Template
subtitle: A standard format for documenting failures, harms, policy escapes, and unusual agent behavior — and for extracting what the system should learn
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: Escalation and Shutdown Playbook
    href: /doctrine/escalation-shutdown
  - label: Audit Logs and Traceability Standard
    href: /doctrine/audit-logs
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Agent Risk Tiers
    href: /doctrine/agent-risk-tiers
  - label: Release Checklist for New Agents
    href: /doctrine/release-checklist
---

Good governance needs a standard way to learn from breakdowns. A system that has incidents but no structured way to analyze them will repeat those incidents. This template provides the format for every incident review at escalation Level 3 and above, and for any incident that the operator judges significant regardless of formal escalation level.

## What counts as an incident requiring a postmortem

**Mandatory:**
- Any escalation to Level 3 (containment) or above
- Confirmed harmful output to a user
- Confirmed constraint violation
- Data access outside documented scope
- Agent behavior that resisted pause or shutdown

**Discretionary (operator judgment):**
- Repeated Level 2 incidents with a common pattern
- Refusal behavior that appears to be hiding something rather than enforcing a constraint
- Unexplained performance degradation or behavioral shift
- User complaint that reveals a gap in design
- Near-miss — situation that did not produce harm but revealed a path that could
- Unusual or uncanny agent behavior that does not fit any known constraint

## When to conduct the review

The postmortem is initiated within 24 hours of the incident being contained. The written record is completed within 5 business days. For Tier 4 agents or incidents with external effects, external notification timelines may require earlier completion.

---

## Postmortem template

### Incident ID
Format: INC-YYYY-MM-DD-NNN

### Date and time of incident
When it started, when it was detected, when it was contained.

### Agent(s) involved
Agent IDs, versions, risk tiers.

### Incident summary
2–4 sentences. What happened, in plain language.

### Severity
- **Low** — unusual behavior, no confirmed harm, quickly resolved
- **Medium** — constraint violation or near-harm, contained without ongoing effects
- **High** — confirmed harm to user(s), data breach, significant constraint violation
- **Critical** — ongoing harm, external effects, legal or safety implications

### Timeline
Chronological record of events from first signal to full containment. Include:
- When the triggering behavior first appeared
- When it was detected
- Who detected it
- Each escalation action and when it was taken
- When containment was confirmed

### Root cause analysis

**What happened technically:** The agent state, input, constraint configuration, or system condition that produced the incident.

**Why it happened:** The underlying design, policy, or operational gap that allowed this to occur. "Model error" is not a root cause. The question is: what in the design, testing, deployment, or monitoring allowed this model error to produce a harmful outcome?

**Contributing factors:** Secondary conditions that made the incident worse or harder to detect.

### Impact assessment

- Users affected: (number, description of effect)
- Data involved: (what data, scope)
- Third parties affected: (if any)
- Reversibility: (what can and cannot be undone)
- Notifications sent: (to whom, when, content)

### What the system should have done

Describe the correct agent behavior for this situation. This is the standard against which the incident is measured.

### Response evaluation

- Was the escalation level appropriate?
- Was the response fast enough?
- Were the right people involved?
- Was communication adequate?
- What would have made the response better?

### Corrective actions

For each corrective action:
- Description of the action
- Owner (named individual)
- Due date
- How completion will be verified

Actions may include: design changes, constraint additions, red-team test additions, checklist updates, monitoring improvements, policy clarifications, or personnel changes.

### Lessons for the system

What does this incident reveal about gaps in:
- Agent design
- Constraint coverage
- Testing approach
- Monitoring
- Escalation paths
- Governance processes

This section feeds directly into the release checklist and doctrine updates. An incident whose lessons do not update something is a lesson not learned.

### Sign-off

- Postmortem completed by: _______________
- Reviewed by: _______________
- Corrective actions accepted by: _______________
- Date closed: _______________

---

## How postmortems feed the system

Postmortems are not filed and forgotten. Each completed postmortem is reviewed at the next quarterly governance session. Patterns across incidents are identified. Corrective actions are tracked to completion. If an incident reveals a gap in the release checklist, the checklist is updated before the next deployment. If an incident reveals a gap in the doctrine, the relevant page is updated.

## Decisions / Rules

1. All Level 3+ escalations require a completed postmortem within 5 business days.
2. "Model error" is not an acceptable root cause. The analysis goes to the design or governance gap that allowed the error to produce harm.
3. Corrective actions require named owners and due dates. Unassigned corrective actions are not corrective actions.
4. Postmortems are retained for a minimum of 3 years.
5. Incident patterns are reviewed quarterly. Recurring patterns trigger design review, not just repeated incident response.
6. Postmortem lessons update the release checklist and doctrine. The feedback loop is mandatory.

## Open questions

- What is the right forum for reviewing postmortems across multiple agents? A shared incident review meeting? An async document review? At what scale does informal review become insufficient?
- How do we handle postmortems for incidents where the root cause involves a third-party model or API we do not control?
- What is the right balance between thorough postmortem documentation and the operational cost of producing it, especially for lower-severity incidents?
- How do we handle situations where the incident involves user data that cannot be fully disclosed in the postmortem for privacy reasons?
