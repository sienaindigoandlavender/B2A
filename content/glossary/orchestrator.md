---
section: glossary
id: glossary-orchestrator
slug: orchestrator
title: Orchestrator
subtitle: Implementation
updated: 2026-06-05
---

The component of an agentic system responsible for planning and coordinating multi-step tasks. The orchestrator receives a goal, breaks it into sub-tasks, assigns those tasks to appropriate tools or sub-agents, handles results, and decides what to do next.

In a B2A context, the orchestrator is what turns "book the best available hotel in Essaouira for December 22–25 for 2 guests under €200/night" into a sequence of tool calls: query the hotel API, filter results, check availability for specific dates, compare prices, evaluate cancellation policies, and initiate a booking.

Orchestrators can be single-agent (one LLM handles all steps) or multi-agent (the orchestrator delegates to specialist sub-agents via A2A). The distinction matters for B2A infrastructure design: multi-agent orchestrators require the A2A protocol layer for coordination, whereas single-agent orchestrators only need MCP for tool access.

Common orchestration frameworks include LangGraph, CrewAI, and AutoGen.
