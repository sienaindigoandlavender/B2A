---
section: doctrine
id: doctrine-architecture-map
slug: system-architecture-map
title: Agent System Architecture Map
subtitle: A living record of every agent in this system — its role, boundaries, data access, ownership, and relationship to other agents
status: active
confidence: medium
updated: "2026-06-05"
related:
  - label: Agent Risk Tiers
    href: /doctrine/agent-risk-tiers
  - label: Human Operator Duties
    href: /doctrine/human-operator-duties
  - label: Audit Logs and Traceability Standard
    href: /doctrine/audit-logs
  - label: Data Access, Memory, and Privacy Policy
    href: /doctrine/data-access-memory
  - label: Multi-Agent Governance and Escalation
    href: /doctrine/multi-agent-governance
---

Multi-agent governance becomes unmanageable the moment you lose track of what exists. This page is a living map of every agent in the system — what it does, what it can read, what it can write, who owns it, who it can instruct, and who can instruct it. When this map is out of date, governance is fiction.

## Purpose of the architecture map

The map serves four functions:

1. **Clarity** — anyone working on this system can understand what exists and how it fits together without reverse-engineering the code
2. **Boundary enforcement** — data access, authority, and scope are defined here, not left to inference
3. **Accountability** — every agent has a named human owner responsible for its behavior
4. **Governance surface** — risk tiering, audit requirements, and shutdown authority all depend on knowing what the agents are

## What every agent entry must contain

Each agent in the system is documented with the following fields:

| Field | Description |
|---|---|
| Agent ID | Unique stable identifier |
| Name and role | Plain-language description of what this agent does |
| Owner | Named human or team responsible for this agent |
| Risk tier | From the Agent Risk Tiers page |
| Autonomy level | Supervised / semi-autonomous / autonomous |
| Data access | Exactly what data sources this agent may read |
| Data write access | What this agent may create, modify, or delete |
| Instruction authority | Which agents or humans may instruct this agent |
| Downstream agents | Which agents this agent may instruct |
| Escalation path | Where this agent escalates when it reaches its authorization boundary |
| Shutdown authority | Who has authority to pause or stop this agent |
| Last reviewed | Date of last human review |

## Why boundaries blur and how to prevent it

The most common failure mode in multi-agent systems is not a single agent exceeding its boundaries — it is a chain of agents each operating within their individual bounds while the aggregate produces something no one authorized. This happens when:

- Data access is defined per agent but not tracked across agent chains
- Instruction authority is granted informally through system prompt composition
- New agents are added without updating the map
- Agents inherit capabilities from tools without those capabilities being registered

The map is the primary defense against this. It must be updated before a new agent is deployed, not after.

## Current agent inventory

*This section is maintained as a live document. Each agent entry links to its full specification.*

| Agent ID | Role | Risk tier | Owner | Status |
|---|---|---|---|---|
| *(populate as agents are built)* | | | | |

## Orphaned agent policy

Any agent that cannot be matched to a current entry in this map — because the map is stale, or the agent was deployed without registration — is treated as an orphaned agent. Orphaned agents are paused immediately pending review and registration. This policy exists because an unregistered agent has no known owner, no known escalation path, and no known shutdown authority.

## Map maintenance

The map is owned by the system operator. It is updated:
- Before any new agent is deployed
- When an agent's data access, instruction authority, or role changes
- When an agent is deprecated or shut down
- At each quarterly governance review

## Decisions / Rules

1. No agent is deployed before it has a complete entry in this map.
2. Every agent has a named human owner. Ownership cannot be assigned to a team without a specific named individual.
3. Data access is listed explicitly. "Access to relevant data" is not acceptable — the specific sources are named.
4. Orphaned agents (not in the map, or map entry stale by more than 90 days) are paused pending review.
5. The map is version-controlled. Previous versions are retained for audit purposes.
6. Instruction authority flows are listed in both directions — every agent knows who can instruct it and who it can instruct.

## Open questions

- What is the right tooling for keeping this map live? A markdown file works for small systems; structured data with automated validation becomes necessary at scale.
- How do we handle agents that are spun up dynamically (e.g., sub-agents created at runtime by an orchestrator)? Dynamic agents need a runtime registration protocol.
- At what scale does a flat map become unmanageable, and what hierarchical or graph-based structure replaces it?
- How do we handle agents built on third-party APIs whose internal structure we cannot fully inspect?
