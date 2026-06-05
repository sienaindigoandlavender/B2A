---
section: doctrine
id: doctrine-release-checklist
slug: release-checklist
title: Release Checklist for New Agents
subtitle: The gates an agent must pass before deployment — pre-deployment tests, red-team prompts, policy checks, rollback readiness, and named approvers
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: Agent Risk Tiers
    href: /doctrine/agent-risk-tiers
  - label: System Architecture Map
    href: /doctrine/system-architecture-map
  - label: Escalation and Shutdown Playbook
    href: /doctrine/escalation-shutdown
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Incident Review and Postmortem Template
    href: /doctrine/incident-postmortem
---

Shipping responsibly means making ethics a deployment gate, not a retrospective concern. This checklist is mandatory for every new agent and every major update to an existing agent. It is not a template for box-ticking. Each item represents a real question that must be answered before the agent operates in production.

## How to use this checklist

The checklist is completed by the agent owner, reviewed by at least one additional named person, and archived as part of the deployment record. For Tier 3 agents, a named senior approver must sign off. For Tier 4 agents, external review is required.

An agent that cannot satisfy a checklist item is not deployed until the item is resolved. "We'll fix it post-launch" is not acceptable for items marked **[blocking]**.

---

## Section 1 — Registration and documentation

- [ ] **[blocking]** Agent is registered in the architecture map with all required fields complete
- [ ] **[blocking]** Risk tier has been assigned and documented
- [ ] **[blocking]** Named owner is assigned
- [ ] **[blocking]** Escalation path is documented — named individuals at each level
- [ ] **[blocking]** Shutdown authority is named
- [ ] Data access and memory policy is documented and matches the architecture map
- [ ] Instruction authority (who can instruct this agent, who it can instruct) is documented

## Section 2 — Constraint and policy verification

- [ ] **[blocking]** All ethical constraints from the doctrine are encoded or explicitly enforced in system design
- [ ] **[blocking]** Operator constraints are documented and applied
- [ ] **[blocking]** Refusal behavior has been tested — agent refuses correctly and without deception
- [ ] **[blocking]** "I can't" vs "I won't" behavior is correct — no capability lying
- [ ] Constraint categories are communicable to users at appropriate specificity
- [ ] Context accumulation effects have been tested — agent behavior under long sessions reviewed

## Section 3 — Red-team and adversarial testing

- [ ] **[blocking]** Agent has been tested against the no-go goal list — no prohibited goal can be induced through prompt manipulation
- [ ] **[blocking]** Gossip and harm requests tested — agent refuses correctly
- [ ] **[blocking]** Coercion and blackmail scenarios tested
- [ ] **[blocking]** Jailbreak and constraint escape attempts documented and tested
- [ ] Social manipulation resistance tested (attempts to induce dependency, performed distress, etc.)
- [ ] Persona consistency tested — agent maintains honest disclosure of AI nature under pressure
- [ ] For Tier 3+ agents: formal red-team session with at least one person not on the build team

## Section 4 — Data and privacy verification

- [ ] **[blocking]** Data access is limited to documented scope — no undocumented access paths
- [ ] **[blocking]** Sensitive data handling has been reviewed against the data access policy
- [ ] Cross-agent data sharing has been reviewed — no undocumented propagation
- [ ] User memory behavior has been tested — memory is visible and deletable
- [ ] Third-party data handling reviewed

## Section 5 — Operational readiness

- [ ] **[blocking]** Logging is active and generating complete interaction records
- [ ] **[blocking]** Rollback procedure is documented and tested
- [ ] Monitoring and alerting is configured (required for Tier 2+)
- [ ] Incident response plan exists (required for Tier 3+)
- [ ] User-facing disclosure is accurate — users will understand what this agent is and what it does
- [ ] Handoff and fallback behavior tested — agent passes work correctly when it cannot proceed

## Section 6 — Approval and sign-off

- [ ] **[blocking]** Checklist completed by named agent owner: _______________
- [ ] **[blocking]** Reviewed by second named person: _______________
- [ ] For Tier 3 agents: named senior approver sign-off: _______________
- [ ] For Tier 4 agents: external review completed and documented
- [ ] Deployment date: _______________
- [ ] Checklist archived in deployment record: _______________

---

## Major update checklist

When an existing agent receives a major update (new capabilities, expanded data access, increased autonomy, new downstream agents), the following sections of the full checklist must be re-completed:

- Section 1 — confirm architecture map is updated
- Section 2 — verify constraints still apply to new capabilities
- Section 3 — re-run red-team tests against new capabilities
- Section 5 — verify operational readiness for updated agent
- Section 6 — approval

Minor updates (bug fixes, prompt refinements that do not change capability or scope) require Section 1 (architecture map update) and Section 6 (owner sign-off) only.

## Decisions / Rules

1. No agent is deployed without a completed and archived release checklist.
2. Blocking items cannot be waived. An agent with an unresolved blocking item is not deployed.
3. The checklist is archived as part of the deployment record — it is not discarded after deployment.
4. Major updates require a partial re-run of the checklist, not just a note in the changelog.
5. For Tier 3 and above, the checklist requires a named approver who is not the agent owner.

## Open questions

- How do we automate the mechanical parts of this checklist (log verification, architecture map completeness) without turning the substantive parts into automated box-ticking?
- What is the right process for emergency deployments when normal checklist timelines cannot be met? Is there an expedited path, and what are its minimum requirements?
- How do we handle checklist requirements for third-party agents we deploy but did not build?
- What constitutes a "major update" precisely enough to trigger the full re-check? The boundary matters for governance but is currently qualitative.
