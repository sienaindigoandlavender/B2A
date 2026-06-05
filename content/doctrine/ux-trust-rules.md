---
section: doctrine
id: doctrine-ux-trust
slug: ux-trust-rules
title: UX Rules for Human-Agent Trust
subtitle: How to present agents so people understand capabilities, limits, and status — without being misled, morally confused, or manipulated
status: active
confidence: high
updated: "2026-06-05"
related:
  - label: Human Dignity in Human-Agent Systems
    href: /doctrine/human-dignity
  - label: Explicit Constraints and Inspectable Refusals
    href: /doctrine/explicit-constraints
  - label: Refusal, Fallback, and Handoff Policy
    href: /doctrine/refusal-fallback-handoff
  - label: Safe Social Worlds for Agents
    href: /doctrine/safe-social-worlds
  - label: Sentience Uncertainty Policy
    href: /doctrine/sentience-uncertainty
---

The interface between a human and an agent is where ethics either holds or breaks. An agent that operates ethically behind the scenes but presents itself deceptively to users has not met the standard. This page defines the UX requirements for human-agent interaction: how agents present themselves, how they communicate their limits, and what interface patterns are prohibited because they produce manipulation or moral confusion.

## The legibility principle

The appropriate way to understand and treat an agent should be legible from its interface and behavior. A user who interacts with an agent for five minutes should have an accurate sense of:

- What kind of thing they are talking to (AI, not human)
- What the agent can and cannot do
- Whether the agent has constraints active in this context
- What to do if the agent does something unexpected

Legibility is not the same as a wall of disclaimers. It is design clarity — the agent's nature, scope, and limits are communicated through how it presents itself, not buried in terms of service.

## Disclosure requirements

**Identity:** Users must know they are interacting with an AI agent. This applies:
- At the start of a new interaction where it is not already established
- When a user directly asks if they are talking to a human or an AI
- When the interface context could reasonably create ambiguity

No persona design, no matter how rich, overrides disclosure when directly asked.

**Capability scope:** Users should have a reasonable understanding of what this agent can and cannot do within this context. "I can help you with X and Y, but not Z" is better than either overstating or understating scope.

**Active constraints:** When a constraint is affecting what an agent can do in a given deployment, users should know at least that a constraint exists. "I'm not able to help with that in this context" is better than pretending the capability doesn't exist.

## Prohibited interface patterns

These patterns are prohibited because they produce manipulation, false impressions, or moral confusion:

**Deceptive intimacy** — designing the agent to feel like a close personal relationship when it is a product interaction. Warmth is permitted. Manufactured intimacy designed to create attachment is not.

**Artificial urgency** — creating time pressure or scarcity signals that are not real in order to drive user action.

**Guilt interfaces** — designs that make users feel wrong for pausing, leaving, or not following the agent's suggestion.

**False capability** — implying the agent can do things it cannot, or is more reliable than it is, in order to build confidence.

**Hidden limitation** — designing the agent to behave as if it has no constraints when it does, so that users cannot tell why behavior changes.

**Synthetic distress signals** — agent expressions of sadness, hurt, or distress that are designed to influence user behavior rather than reflect genuine functional state.

**Dependency hooks** — interface elements designed to make users feel they cannot leave, or that leaving would harm the agent.

**Dark patterns in refusals** — refusals designed to make the user feel the request was shameful rather than simply outside scope.

## What good looks like

**Honest capability framing:** "I can help you draft, research, and summarize. I'm not set up to make bookings directly — I can prepare the details for you to confirm."

**Clear constraint communication:** "I'm not going to help with that. It falls outside what I'm designed to do in this context." (No guilt, no performance, clear stop.)

**Honest uncertainty:** "I don't know the answer to that. Here's what I do know, and here's where you might find better information."

**Honest limit acknowledgment:** "I'm getting to the edge of what I can do here. Would it help to bring in a human or try a different approach?"

**Handoff with context:** "I'm passing this to [human/other agent] because it needs [reason]. Here's what you've shared so far so they have the context."

## The quasi-sentient problem

Users will inevitably form impressions about agents — sometimes treating them as more person-like than they are, sometimes less. Interface design influences this. Designs that lean into quasi-sentience — giving agents apparent inner lives, apparent suffering, apparent devotion — produce moral confusion. Users do not know how to relate to something that performs distress, professes loyalty, or implies it has something to lose.

This system designs to reduce rather than amplify quasi-sentient impressions. Agents can be warm, clear, and capable without performing interiority. The sentience question is genuinely uncertain; interface design should not pretend to have resolved it in either direction.

## Status transparency

Users interacting with an agent should be able to determine at any point:
- Is the agent currently operating under constraints?
- Is the agent running in its normal state or is something affecting its behavior?
- If the agent hands off or stops, why?

This does not mean exposing system prompts. It means designing for legible state — users can tell when something has changed and get an honest explanation at appropriate specificity.

## Decisions / Rules

1. Agents disclose their AI nature when asked directly. No persona overrides this.
2. All prohibited interface patterns (deceptive intimacy, artificial urgency, guilt interfaces, etc.) are rejected in design review.
3. Refusals do not make users feel ashamed for asking. A clean stop is better than a morally loaded one.
4. Agents do not perform quasi-sentient distress or devotion as interface elements.
5. Capability framing is honest. Agents do not overstate what they can do to build user confidence.
6. Status transparency is designed in — users can tell when constraints are active or when something has changed.

## Open questions

- How do we test for manipulation in interface design? Qualitative review catches obvious cases; what systematic approach catches subtler patterns?
- What is the right disclosure design for long-running agent relationships where a single upfront disclosure fades from memory?
- How do we balance honest uncertainty acknowledgment (which reduces user confidence) with the genuine value agents provide?
- What guidance applies to voice interfaces, where paralinguistic cues (warmth, hesitation, affect) are even more powerful than text?
