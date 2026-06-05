---
section: agent-protocols
id: proto-auth
slug: authentication-and-trust
title: Authentication and trust
subtitle: How businesses verify agent identity, and how agents verify business claims
status: active
confidence: medium
updated: 2026-06-05
metadata:
  - label: Core problem
    value: OAuth assumes synchronous human presence; agents operate asynchronously
  - label: Current best option
    value: Auth0 Auth for MCP (GA May 2026)
  - label: Gartner projection
    value: 40% of enterprise apps with AI agents by end of 2026
related:
  - label: AP2 glossary
    href: /glossary/ap2
  - label: MCP server
    href: /agent-protocols/mcp-server
---

## The authentication problem

When an AI agent calls a business API, two questions arise simultaneously:

**Who is this agent?** Is it a legitimate agent acting for a real, consenting human — or a malicious system probing for vulnerabilities? Is the agent who it claims to be?

**What is it authorised to do?** Even if the agent is legitimate, has the human principal actually authorised this specific class of transaction, at this amount, with this merchant?

Traditional OAuth 2.0 handles these questions by requiring the user to be present: click "Authorise," confirm permissions, complete a challenge. Agents cannot do this synchronously for every transaction.

## Current approaches

| Approach | How it works | Status / limitation |
|---|---|---|
| API key delegation | Human generates a scoped API key; shares with agent | Simple but coarse — no fine-grained per-transaction control |
| OAuth on-behalf-of | Standard OAuth with agent as acting party | Requires synchronous user presence in flow |
| Auth0 Auth for MCP | CIMD registration + on-behalf-of token exchange | Generally available May 2026; lowest-friction current option |
| Okta MCP server | Least-privilege access control per tool call | More control; pricing complexity |
| AP2 delegated auth | Cryptographic consent anchor per transaction class | Emerging; best for payment-level authorisation |

## The trust direction problem

Authentication is typically one-directional: the service verifies the caller. In B2A, trust needs to be bidirectional. Agents also need to trust that a business's published data — its policy file, its pricing, its availability — is accurate and not manipulated.

This is unsolved at the infrastructure level. Current approaches rely on reputation (agents learn to trust or distrust specific data sources based on past accuracy), verification marks (business ratings, licensing status), and structured data consistency (data that is internally consistent is more likely to be accurate).

## Practical guidance for now

For a small business building its first agent-accessible layer:

1. Start with read-only tools; no authentication needed for public information
2. Use scoped API keys for initial transactional access
3. Implement Auth0 MCP auth when ready to scale beyond a single integration
4. Document your trust signals explicitly in your `llms.txt` and policy file: ratings, years of operation, licensing, insurance

## Open questions

- How does an agent know a policy file has not been tampered with?
- Will a standard emerge for verifiable business credentials (like HTTPS certificates but for agent trust)?
- Who bears liability when authentication fails and an agent makes an unauthorised transaction?
