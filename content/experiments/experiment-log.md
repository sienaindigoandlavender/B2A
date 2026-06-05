---
section: experiments
id: exp-log
slug: experiment-log
title: Experiment log
subtitle: Running log of all experiments, prototypes, and tests
status: active
confidence: high
updated: 2026-06-05
---

## How to use this log

Each experiment gets a brief entry here and a dedicated page if it becomes substantial. Entries are dated and status-tagged. The point is to track what was tried, what failed, and what was learned — not just what worked.

## Log

### EXP-001 — Policy file for Slow Morocco
**Date:** June 2026  
**Hypothesis:** A YAML policy file for Slow Morocco can be written in under 2 hours and will allow Claude to answer agent-style booking queries correctly.  
**Status:** Planned  
**Page:** /experiments/prototype-01

### EXP-002 — llms.txt for slowmorocco.com
**Date:** Planned  
**Hypothesis:** Adding a well-structured llms.txt to slowmorocco.com will improve the accuracy of AI assistant responses about Slow Morocco's offerings.  
**Status:** Planned  

### EXP-003 — MCP server prototype (read-only)
**Date:** Planned  
**Hypothesis:** A minimal read-only MCP server exposing Slow Morocco's journey catalog can be built in a single session using Claude Code.  
**Status:** Planned  

## Questions I am trying to answer through experiments

1. How much structured data does it actually take for an agent to reason correctly about a complex offering?
2. What are the failure modes — what kinds of queries does a policy-file-equipped agent still get wrong?
3. How much maintenance does a policy file require when business details change?
4. Can a non-technical operator maintain a YAML policy file, or does it require developer involvement?
