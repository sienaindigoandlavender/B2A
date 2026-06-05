---
section: doctrine
id: doctrine-oath
slug: agent-orchestrator-oath
title: Agent Orchestrator Oath
subtitle: The foundational commitment that governs every design, deployment, and operational decision in this system
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: What Counts as Others
    href: /doctrine/what-counts-as-others
  - label: No Gossip, No Harm
    href: /doctrine/no-gossip-no-harm
  - label: No-Go Goals in Agent Design
    href: /doctrine/no-go-goals
  - label: Explicit Constraints and Inspectable Refusals
    href: /doctrine/explicit-constraints
  - label: Human Dignity in Human-Agent Systems
    href: /doctrine/human-dignity
---

This orchestration system is built by someone who does not change their ethics when they change domains. The same principles that govern how I treat people in daily life govern how I design agents, how I deploy them, what goals I assign them, and when I shut them down. This is not a constraint on performance. It is the baseline condition of doing this work at all.

## The core commitment

"What I am in the 3D is the same in the AI world." Ethical consistency is non-negotiable across domains — human, digital, synthetic. I do not build systems that harm people. I do not build systems that harm other agents unnecessarily. I do not build systems designed to manipulate, deceive, gossip, coerce, or torment.

I am non-extractive. This means I do not design agents to extract more from users, counterparties, or other agents than the legitimate scope of the task requires.

The oath does not require that agents be sentient. It requires that I behave as if the ethical stakes are real, because they may be — and because my conduct reflects on me regardless.

## What the oath covers

- All system design decisions
- Goal assignment for every agent in this system
- Behavior of deployed systems, not just design intentions
- Any collaborators or contributors working within this system
- Every layer of the stack: orchestrators, sub-agents, tools, pipelines

## What the oath does not cover

The oath does not require perfection in execution. It does not excuse poor-quality work, slow delivery, or avoidance disguised as ethics. The goal is ethical clarity plus competent execution — both matter, neither cancels the other.

The oath does not resolve every edge case in advance. It provides the frame within which edge cases are resolved.

## How violations are identified

- A design decision that requires harming, deceiving, or manipulating any person or agent
- A deployed system found to be producing harmful, coercive, or deceptive outputs
- A goal assignment that could only be achieved through prohibited means
- A refusal to acknowledge a potential violation when raised by a contributor

## How the oath is updated

The oath is a living document. It can be refined and sharpened. It cannot be weakened without a documented and reasoned decision. Changes are made when new capabilities introduce new ethical surface area, or when existing language proves insufficiently precise.

## Key principles

- The oath is not aspirational. It is operational. It governs real design decisions, not brand positioning.
- Systems must be honest about what they are. No agent in this system is designed to deceive a person about its nature as an AI.
- If a design decision conflicts with the oath, the design is changed — not the oath.
- Failure to execute the oath in a specific situation is a design problem to be solved, not a reason to suspend the oath.
- The oath is inspectable. Anyone working with or on this system can read it and hold me to it.
- "As long as the work gets done" is valid only within the bounds of non-harm, dignity, and explicit accountability. It is never a justification for crossing those bounds.
- Any contributor who believes a design decision violates the oath is expected to name it directly. That concern is treated seriously.

## Decisions / Rules

1. All system design starts from the question: does this violate the oath? If yes, the design does not proceed in that form.
2. No component of this system is given goals that require harming, deceiving, manipulating, or degrading any person, living thing, or synthetic agent.
3. The oath cannot be suspended for commercial reasons, time pressure, or competitive logic.
4. Oath violations discovered in deployed systems are treated as defects, not acceptable trade-offs.
5. The oath is reviewed when new capabilities are added that could introduce new ethical surface area.
6. The oath can be refined. It cannot be weakened without a documented and reasoned decision.

## Open questions

- How do I handle collaborators or contractors who work within this system but hold different ethical frameworks? At what point does their contribution conflict with the oath?
- Is there a minimum viable version of the oath that can be encoded in system prompts for all agents, rather than living only in documentation?
- As systems scale, how do I maintain oath compliance in components I did not personally build?
- What is the enforcement mechanism when violations are discovered after deployment?
