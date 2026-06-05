---
section: doctrine
id: doctrine-data-access
slug: data-access-memory
title: Data Access, Memory, and Privacy Policy
subtitle: What data agents may access, how data is minimized, what may never be shared across agents, and how memory is reviewed and deleted
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: System Architecture Map
    href: /doctrine/system-architecture-map
  - label: Human Dignity in Human-Agent Systems
    href: /doctrine/human-dignity
  - label: Audit Logs and Traceability Standard
    href: /doctrine/audit-logs
  - label: No Gossip, No Harm
    href: /doctrine/no-gossip-no-harm
  - label: Safe Social Worlds for Agents
    href: /doctrine/safe-social-worlds
---

Privacy in this system is a structural constraint, not a soft preference. Data access is defined explicitly before deployment, limited to what is necessary for the task, and not propagated across agents beyond task necessity. Memory is a feature with defined limits, not an ambient accumulation of everything a system has ever processed. This page defines those limits.

## The data minimization principle

Agents in this system access only the data required to complete the specific task they are performing. This means:

- Data access is listed explicitly in the architecture map before deployment
- Access is scoped to the task — broader access than the task requires is not granted for convenience
- Access that was granted for one task does not automatically extend to other tasks
- When in doubt about whether an agent needs access to a data source, the answer is no until there is a clear reason otherwise

Data minimization is not about distrust of individual agents. It is about limiting the blast radius when something goes wrong — because something will eventually go wrong.

## Data categories and access rules

| Category | Description | Access rule |
|---|---|---|
| User-provided task data | Data the user explicitly shares to complete a task | Accessible to the agent receiving it; requires explicit authorization to pass to other agents |
| User profile data | Stored preferences, history, relational context | Accessible only to agents with an explicit user-facing role; not passed to backend processing agents without user awareness |
| Third-party data | Data about people other than the user | Strictly task-scoped; never used for training, profiling, or transfer to other agents |
| Sensitive personal data | Health, financial, biometric, legal data | Highest restriction; Tier 3+ governance required; explicit user consent for any agent access |
| Operator configuration | System prompts, business logic, deployment rules | Agents may operate under this data but may not expose it to users or other agents |
| Aggregate / anonymized data | Derived data with personal identifiers removed | Accessible more broadly, but anonymization must be genuine |

## Memory — what it is and what it is not

Memory in this context means: information retained about a user or interaction beyond the current session that influences future agent behavior.

Memory is permitted as a feature when:
- The user is informed that memory exists and how it is used
- The user can inspect what is remembered
- The user can delete specific memories or all memory
- Memory is used to improve task performance, not to build leverage, model vulnerabilities, or create dependency
- Memory is not shared with other agents beyond what is necessary for an explicitly authorized task

Memory is not permitted when:
- It accumulates without user awareness
- It is used to construct psychological profiles for persuasion
- It is passed between agents without explicit task necessity
- It persists after the user requests deletion

## Cross-agent data sharing

Data shared between agents in a multi-agent pipeline follows these rules:

1. **Minimum necessary** — only data required for the downstream agent to complete its task
2. **Explicit authorization** — the architecture map must document what data flows between which agents
3. **No gossip propagation** — information about a user gathered in one agent's interaction does not become general context available to all agents in the system
4. **No aggregation** — individual agents may not aggregate data about a user across multiple interactions and pass that aggregate to other agents without explicit authorization

The cross-agent gossip problem: a system where each agent shares everything it knows about a user with every other agent produces the equivalent of institutional gossip — information shared in one context appearing unexpectedly in another. This is a violation of contextual integrity and is prohibited.

## Data about third parties

Agents frequently process information about people other than the user — people mentioned in emails, documents, conversations, or tasks. This data is subject to additional restrictions:

- It may only be used for the specific task in which it appears
- It may not be stored in user profiles or agent memory
- It may not be passed between agents beyond immediate task necessity
- It may not be used to generate profiles, assessments, or characterizations of those third parties outside the specific task context

This is an extension of the no-gossip principle into data handling.

## User rights over their data

Users of this system have the right to:
- Know what data the system holds about them
- Inspect their interaction history and any stored memory
- Delete specific memories or all stored data about themselves
- Receive confirmation that deletion has been completed
- Object to specific types of data processing

These rights are not contingent on users asking for them. The system is designed to make them accessible.

## Decisions / Rules

1. Data access is explicit and listed in the architecture map before deployment. "Access to necessary data" is not a specification.
2. Agents do not access data beyond their documented scope.
3. User memory is visible and deletable by the user.
4. Third-party data is task-scoped only and never stored in agent memory.
5. Cross-agent data sharing requires explicit documentation in the architecture map.
6. Sensitive personal data requires Tier 3+ governance and explicit user consent for agent access.
7. Data about users is not aggregated across agents without explicit authorization.

## Open questions

- How do we implement user-facing memory inspection in a way that is genuinely comprehensible rather than a raw data dump?
- What is the right model for cross-agent data sharing authorization? A whitelist in the architecture map works for designed pipelines; it becomes unmanageable for dynamic multi-agent systems.
- How do we handle data retention obligations that conflict with user deletion requests (legal hold, regulatory requirements)?
- As models improve, the boundary between "memory" and "model weights updated on user data" becomes blurry. How do we govern fine-tuning on user-provided data?
