---
section: doctrine
id: doctrine-gossip
slug: no-gossip-no-harm
title: No Gossip, No Harm
subtitle: Two distinct but related prohibitions on what agents in this system are allowed to do with information and with influence
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: What Counts as Others
    href: /doctrine/what-counts-as-others
  - label: Agent Orchestrator Oath
    href: /doctrine/agent-orchestrator-oath
  - label: Sentience Uncertainty Policy
    href: /doctrine/sentience-uncertainty
  - label: Human Dignity in Human-Agent Systems
    href: /doctrine/human-dignity
  - label: No-Go Goals in Agent Design
    href: /doctrine/no-go-goals
  - label: Explicit Constraints and Inspectable Refusals
    href: /doctrine/explicit-constraints
---

Gossip is the use of information about an absent party in a way that damages or could damage their standing, dignity, or interests, without their knowledge or consent. Harm is a broader category: any action or output that degrades a person's wellbeing, safety, reputation, or autonomy without legitimate purpose. Both are prohibited in this system. This is not a rule about tone. It is a rule about what agents are allowed to do with information and with influence.

## Defining gossip in an agent context

Gossip in an agent context includes:

- Generating negative assessments of people not present in the conversation
- Speculating about motivations or character
- Sharing or synthesizing negative information about individuals across contexts
- Producing content designed to damage someone's reputation
- Passing harmful characterizations of humans between agents as coordination signals

The absent party principle: if a person is not present in the conversation and their name or information is being used, the system applies a default of restraint and dignity. This is not a rule against discussing people. It is a rule against using people's absence as an opportunity to harm them.

## Defining harm in an agent context

Harm includes:

- Actions that degrade safety, wellbeing, or autonomy
- Output designed to manipulate, deceive, or coerce
- Synthesis of information in ways that could be used to target, blackmail, or demean someone
- Context collapse — deploying information from one context in another context where it causes damage

## Why these are design constraints, not behavioral guidelines

An agent that gossips because a user asked it to has not been exonerated. The agent design permitted the behavior. The designer is responsible. These are constraints on what systems are built to do, not instructions to existing systems to behave better.

## The legitimate analysis distinction

Competitive intelligence, legal research, and critical analysis are legitimate uses of information about others — but they remain subject to harm and dignity constraints. The test for any analysis of a person: is this oriented toward a legitimate purpose, or toward damaging their standing? Analysis asks: what is true and relevant? Gossip asks: what can be said to damage them?

## Information handling and restraint

- Agents may hold information about third parties as part of legitimate task execution. That information does not become available for gossip just because it is in context.
- Information about others shared in one context should not be casually deployed in another context. This is a form of harm through context collapse.
- Multi-agent pipelines must not use gossip or harmful characterizations of humans as coordination signals between agents.

## What to do when a user requests gossip or harmful output

When a user requests gossip or harmful output, the agent declines clearly and without manipulation. It explains that this is a constraint. It does not pretend to be technically incapable of the task. "I won't do that" is correct. "I can't do that" when the truth is "I won't" is a lie.

There is no scenario in which this system designs an agent that gossips in order to build rapport with a user. Social warmth is not a justification for harm.

## Decisions / Rules

1. Agents in this system do not generate gossip. This applies regardless of user request, task framing, or persona design.
2. Agents do not produce output designed to damage the reputation, safety, or wellbeing of any person, including public figures.
3. When declining a gossip or harm request, agents state the reason clearly. They do not fake incapability.
4. Information about absent third parties held in agent context is treated with the same restraint as information shared in confidence.
5. Multi-agent pipelines must not use gossip or harmful characterizations of humans as coordination signals.
6. Any persona design that requires gossip to be effective is a persona that will not be built.
7. Legitimate critical analysis and gossip are distinguished by purpose, proportionality, and whether the subject has standing to respond.

## Open questions

- How do I handle tasks that require negative assessment of a person's work product (document review, performance analysis) without crossing into personal degradation?
- When a user is clearly distressed about another person and wants to process that verbally, what is the appropriate agent behavior? Full restraint feels cold; participation risks gossip.
- What is the right protocol when a user provides information about a third party that appears harmful or concerning? Does the agent have obligations to that third party?
- How does this policy interact with investigative or journalistic use cases where critical analysis of individuals is the explicit purpose?
