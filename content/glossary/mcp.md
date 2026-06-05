---
section: glossary
id: glossary-mcp
slug: mcp
title: MCP
full: Model Context Protocol
subtitle: Protocols
updated: 2026-06-05
---

An open standard developed by Anthropic (released November 2024) that defines how AI agents connect to external tools, APIs, and data sources. Often described as "USB-C for AI" — a universal connector that replaces custom one-off integrations with a single protocol.

Before MCP, connecting an AI agent to an external service required a bespoke integration. MCP standardises the interface: an MCP server exposes a set of named tools with defined schemas; any MCP-compatible agent can discover and call those tools using the same protocol.

MCP uses JSON-RPC 2.0. Communication is between an MCP client (the agent) and an MCP server (the service). OpenAI adopted MCP in March 2025. By late 2025, combined SDK downloads crossed 97 million monthly. Anthropic donated MCP to the Linux Foundation's Agentic AI Foundation (AAIF) in December 2025.

In B2A terms, publishing an MCP server is the most direct way to make your business callable by AI agents.
