---
section: agent-protocols
id: proto-mcp-server
slug: mcp-server
title: MCP server
subtitle: How to make your business callable by any MCP-compatible AI agent
status: active
confidence: medium
updated: 2026-06-05
metadata:
  - label: Protocol
    value: Model Context Protocol (MCP)
  - label: Reference implementation
    value: Stripe MCP (npx -y @stripe/mcp)
  - label: SDK downloads
    value: 97M/month (late 2025)
related:
  - label: MCP glossary
    href: /glossary/mcp
  - label: Selling to agents
    href: /business-models/selling-to-agents
  - label: Authentication and trust
    href: /agent-protocols/authentication-and-trust
---

## What an MCP server is

An MCP server is a program that exposes a set of named tools — functions with defined input/output schemas — that any MCP-compatible AI agent can discover and call. It is the most direct way to make a business's capabilities accessible to agents.

Stripe's MCP server is the canonical example. One command — `npx -y @stripe/mcp` — gives any MCP-compatible agent access to Stripe's full payments surface: create customers, issue invoices, manage subscriptions, process refunds. The agent calls these tools through natural language commands; the MCP protocol handles the translation to structured API calls.

## What a minimal B2A MCP server exposes

For a business like a tour operator, a minimal MCP server might expose:

```typescript
// Tools exposed by a travel operator's MCP server
tools: [
  {
    name: "check_availability",
    description: "Check if a journey is available for given dates and guest count",
    inputSchema: {
      journey_id: string,
      start_date: string,   // ISO 8601
      end_date: string,
      guests: number
    }
  },
  {
    name: "get_price",
    description: "Get the price for a specific journey configuration",
    inputSchema: {
      journey_id: string,
      guests: number,
      season: string
    }
  },
  {
    name: "get_policy",
    description: "Get the booking, cancellation, and payment policy",
    inputSchema: {
      journey_id?: string  // optional — returns general policy if omitted
    }
  },
  {
    name: "submit_inquiry",
    description: "Submit a booking inquiry for human review",
    inputSchema: {
      journey_id: string,
      guests: number,
      start_date: string,
      contact_email: string,
      notes?: string
    }
  }
]
```

## The read-only first principle

Start with read-only tools (check availability, get pricing, get policy). These create value for agents doing research without requiring payment infrastructure or authorisation frameworks. Add transactional tools (submit inquiry, initiate booking) once the read-only layer is tested and trusted.

## What I need to build for Slow Morocco

A minimal Slow Morocco MCP server would expose: `list_journeys`, `check_availability`, `get_price`, `get_policy`, `submit_inquiry`. The first four are read-only and can be built against the existing Supabase database with no new infrastructure. See EXP-003 in experiments.

## Authentication

For read-only tools: no authentication required (public information). For transactional tools: OAuth 2.0 with PKCE, or API keys with scoped permissions. Auth0's MCP-specific auth (generally available May 2026) is the lowest-friction path for a new implementation.
